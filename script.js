(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector("#menu-toggle");
  const navigation = document.querySelector("#primary-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const setMenuOpen = (open) => {
    menuToggle?.setAttribute("aria-expanded", String(open));
    menuToggle?.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menuToggle?.classList.toggle("is-open", open);
    navigation?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };

  menuToggle?.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  navigation?.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  const desktopViewport = window.matchMedia("(min-width: 901px)");
  const closeDesktopMenu = () => {
    if (desktopViewport.matches) setMenuOpen(false);
  };
  desktopViewport.addEventListener?.("change", closeDesktopMenu);
  closeDesktopMenu();

  // Atualiza a seção atual em um único frame de rolagem.
  const sectionLinks = Array.from(
    navigation?.querySelectorAll('a[href^="#"]') || [],
  )
    .map((link) => ({
      link,
      section: document.getElementById(link.hash.slice(1)),
    }))
    .filter(({ section }) => section);

  let scrollFramePending = false;
  const updateScrollState = () => {
    const activationLine = (header?.offsetHeight || 80) + 140;
    let currentSection = null;

    sectionLinks.forEach(({ section }) => {
      if (section.getBoundingClientRect().top <= activationLine)
        currentSection = section;
    });

    sectionLinks.forEach(({ link, section }) => {
      const active = section === currentSection;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollFramePending = false;
  };

  const queueScrollUpdate = () => {
    if (scrollFramePending) return;
    scrollFramePending = true;
    window.requestAnimationFrame(updateScrollState);
  };
  window.addEventListener("scroll", queueScrollUpdate, { passive: true });
  window.addEventListener("resize", queueScrollUpdate);
  updateScrollState();

  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const solutions = Array.from(
    document.querySelectorAll(".solution-item[data-category]"),
  );
  const solutionCount = document.querySelector("#solution-count");

  const filterSolutions = (filter) => {
    let visibleCount = 0;
    solutions.forEach((solution) => {
      const categories = solution.dataset.category.trim().split(/\s+/);
      const visible = filter === "all" || categories.includes(filter);
      solution.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
    if (solutionCount) {
      solutionCount.textContent = `${visibleCount} ${visibleCount === 1 ? "solução" : "soluções"}`;
    }
    queueScrollUpdate();
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () =>
      filterSolutions(button.dataset.filter),
    );
  });
  if (filterButtons.length) filterSolutions("all");

  const contactForm = document.querySelector("#contact-form");
  const contactResult = document.querySelector("#contact-result");
  const emailDraft = document.querySelector("#email-draft");

  contactResult?.setAttribute("role", "status");
  contactResult?.setAttribute("aria-live", "polite");

  const resetContactResult = () => {
    if (contactResult) contactResult.hidden = true;
    emailDraft?.removeAttribute("href");
  };

  document.querySelectorAll("[data-contact-interest]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      resetContactResult();

      const interestField = contactForm?.elements.namedItem("interest");
      const requestedInterest = trigger.dataset.contactInterest;
      if (interestField && requestedInterest) {
        const validInterest = Array.from(interestField.options || []).some(
          (option) => option.value === requestedInterest,
        );
        if (validInterest) interestField.value = requestedInterest;
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (menuToggle?.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });

  contactForm?.addEventListener("input", (event) => {
    resetContactResult();
    if (["fullName", "message"].includes(event.target.name)) {
      event.target.setCustomValidity("");
    }
  });
  contactForm?.addEventListener("change", resetContactResult);
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    [
      ["fullName", "Preencha seu nome."],
      ["message", "Escreva uma mensagem."],
    ].forEach(([name, validationMessage]) => {
      const input = contactForm.elements.namedItem(name);
      input?.setCustomValidity(input.value.trim() ? "" : validationMessage);
    });
    if (!contactForm.reportValidity() || !emailDraft || !contactResult) return;

    const formData = new FormData(contactForm);
    const field = (name) => String(formData.get(name) || "").trim();
    const interest = field("interest") || "Soluções de segurança";
    const subject = `Contato pelo site — ${interest}`;
    const body = [
      "Olá, equipe Black Ice!",
      "",
      `Nome: ${field("fullName")}`,
      `E-mail: ${field("email")}`,
      `Empresa: ${field("company") || "Não informada"}`,
      `Interesse: ${interest}`,
      "",
      field("message"),
    ].join("\n");

    emailDraft.href = `mailto:comercial@blackice-security.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    contactResult.hidden = false;
    emailDraft.focus({ preventScroll: true });
    contactResult.scrollIntoView({
      behavior: reducedMotion.matches ? "instant" : "smooth",
      block: "nearest",
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
