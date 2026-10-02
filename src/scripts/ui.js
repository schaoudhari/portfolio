// All interactivity for the page — vanilla JS, no framework.
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// Theme toggle
const root = document.documentElement;
const themeBtn = $("#theme-toggle");
const syncThemeLabel = () => themeBtn?.setAttribute("aria-label", `Switch to ${root.dataset.theme === "dark" ? "light" : "dark"} theme`);
syncThemeLabel();
themeBtn?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  syncThemeLabel();
});

// Scroll-spy: highlight the nav link of the section in view
const navLinks = $$("[data-nav]");
const spy = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    navLinks.forEach((a) => {
      const on = a.getAttribute("href") === `#${e.target.id}`;
      a.classList.toggle("active", on);
      on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
    });
  }),
  { rootMargin: "-40% 0px -55% 0px" }
);
$$("main section[id]").forEach((s) => spy.observe(s));

// Fade-up on first view (CSS disables it for reduced-motion users)
const reveal = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
$$(".reveal").forEach((el) => reveal.observe(el));

// Chip groups: skills show one group, projects filter by category
function chipGroup(groupSel, itemSel, attr) {
  const group = $(groupSel);
  if (!group) return;
  const chips = $$(".chip", group);
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    const value = chip.dataset.value;
    $$(itemSel).forEach((item) => {
      item.hidden = !(value === "All" || item.dataset[attr] === value);
    });
  }));
}
chipGroup("#skill-chips", "[data-skill-group]", "skillGroup");
chipGroup("#project-chips", "[data-category]", "category");

// Experience accordion (one open at a time)
const jobs = $$(".job");
jobs.forEach((job) => {
  $(".job-head", job).addEventListener("click", () => {
    const willOpen = !job.classList.contains("open");
    jobs.forEach((j) => {
      j.classList.remove("open");
      $(".job-head", j).setAttribute("aria-expanded", "false");
    });
    if (willOpen) {
      job.classList.add("open");
      $(".job-head", job).setAttribute("aria-expanded", "true");
    }
  });
});

// Project case studies use native <dialog>: focus trap + Esc come for free
$$("[data-dialog]").forEach((btn) => {
  const dialog = document.getElementById(btn.dataset.dialog);
  btn.addEventListener("click", () => dialog.showModal());
});
$$("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  $("[data-close]", dialog)?.addEventListener("click", () => dialog.close());
});
