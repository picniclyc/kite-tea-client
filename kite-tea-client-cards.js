const cardImages = Array.from(document.querySelectorAll(".card-shell img"));
const viewer = document.querySelector(".viewer");
const viewerImage = viewer?.querySelector("img");
const closeButton = viewer?.querySelector(".viewer-close");
const prevButton = viewer?.querySelector(".viewer-prev");
const nextButton = viewer?.querySelector(".viewer-next");
const exportButton = document.querySelector("#export-pdf");
const quickOpenButtons = Array.from(document.querySelectorAll("[data-open-card]"));
let activeIndex = 0;

function showCard(index) {
  if (!viewer || !viewerImage || cardImages.length === 0) return;
  activeIndex = (index + cardImages.length) % cardImages.length;
  const image = cardImages[activeIndex];
  viewerImage.src = image.src;
  viewerImage.alt = image.alt;
  viewer.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  if (!viewer) return;
  viewer.hidden = true;
  document.body.style.overflow = "";
}

cardImages.forEach((image, index) => {
  image.addEventListener("click", () => showCard(index));
});

closeButton?.addEventListener("click", closeViewer);
prevButton?.addEventListener("click", () => showCard(activeIndex - 1));
nextButton?.addEventListener("click", () => showCard(activeIndex + 1));
exportButton?.addEventListener("click", () => window.print());
quickOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = Number(button.getAttribute("data-open-card"));
    if (!Number.isNaN(target)) showCard(target);
  });
});

viewer?.addEventListener("click", (event) => {
  if (event.target === viewer) closeViewer();
});

window.addEventListener("keydown", (event) => {
  if (!viewer || viewer.hidden) return;
  if (event.key === "Escape") closeViewer();
  if (event.key === "ArrowLeft") showCard(activeIndex - 1);
  if (event.key === "ArrowRight") showCard(activeIndex + 1);
});
