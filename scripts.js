const $arrowBtn = document.getElementById("arrowBtn"),
  $tooltip = document.getElementById("tooltip");

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".arrowContainer") ||
    e.target.matches(".arrowContainer *")
  ) {
    $tooltip.classList.toggle("active");
  } else if (
    e.target.matches(".tooltipArrow") ||
    e.target.matches(".tooltipArrow *")
  ) {
    $tooltip.classList.remove("active");
  } else if (e.target.matches(".tooltip") || e.target.matches(".tooltip *")) {
  } else if ($tooltip.classList.contains("active")) {
    $tooltip.classList.remove("active");
  }
});
