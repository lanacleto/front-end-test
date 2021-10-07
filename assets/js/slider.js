function removeItemFocus() {
  document
    .querySelectorAll("#testimonials div.slider-buttons > a")
    .forEach((e) => {
      e.classList.remove("selected-item");
    });
}

function isElementInvalid(clickedElement, hrefClickedItem, oldSlider) {
  return (
    !clickedElement.className.includes("slider-item") ||
    hrefClickedItem.slice(1, hrefClickedItem.length) === oldSlider.id
  );
}

function classNameControl(clickedElement, oldSlider, newSlider) {
  oldSlider.classList.remove("selected-slider");
  newSlider.classList.add("selected-slider");
  removeItemFocus();
  clickedElement.classList.add("selected-item");
}

function loadClickedSlider(e) {
  const clickedElement = e.target;
  const oldSlider = document.querySelector(".selected-slider");
  const hrefClickedItem = clickedElement.getAttribute("href");
  if (isElementInvalid(clickedElement, hrefClickedItem, oldSlider)) {
    return;
  }
  e.preventDefault();
  const newSlider = document.querySelector(hrefClickedItem);
  classNameControl(clickedElement, oldSlider, newSlider);
}
document.addEventListener("click", loadClickedSlider);
