"use strict";
const steps = document.querySelector(".steps");
const controls = document.querySelector(".scroll-controls");
if (steps && controls) {
  controls.hidden = false;
  const prev = controls.querySelector('[data-direction="-1"]');
  const next = controls.querySelector('[data-direction="1"]');
  function update() {
    prev.disabled = steps.scrollLeft <= 2;
    next.disabled = steps.scrollLeft + steps.clientWidth >= steps.scrollWidth - 2;
  }
  controls.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const card = steps.querySelector("article");
    const gap = parseFloat(getComputedStyle(steps).gap) || 18;
    steps.scrollBy({left: Number(button.dataset.direction) * (card.getBoundingClientRect().width + gap), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"});
  });
  steps.addEventListener("scroll", update, {passive: true});
  window.addEventListener("resize", update);
  update();
}
