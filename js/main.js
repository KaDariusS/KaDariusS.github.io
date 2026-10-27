// Texto que se va escribiendo solo en la cabecera
const words = ["web apps", "with Java", "with PHP", "with JavaScript", "clean websites"];
const el = document.getElementById("typed");
let w = 0, c = words[0].length, deleting = true;
function tick() {
  const word = words[w];
  c += deleting ? -1 : 1;
  el.textContent = word.slice(0, c);
  let wait = deleting ? 45 : 90;
  if (!deleting && c === word.length) { deleting = true; wait = 1600; }
  else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; wait = 300; }
  setTimeout(tick, wait);
}
setTimeout(tick, 1600);

// Las secciones aparecen al hacer scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((s) => io.observe(s));

// Brillo que sigue al ratón en las tarjetas
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", (e.clientX - r.left) + "px");
    card.style.setProperty("--y", (e.clientY - r.top) + "px");
  });
});
