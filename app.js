const topBtn = document.querySelector(".arrow-top-btn");

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
})