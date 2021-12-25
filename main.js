const toggleBtn = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

toggleBtn.addEventListener("click", () => {
    //active클래스를 추가
    //있으면 빼고 없으면 추가
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});