/* Update the page year automatically in the footer */
const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

/* Smooth-scrolling for in-page anchor links */
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target =
      targetId && targetId !== "#" ? document.querySelector(targetId) : null;

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
