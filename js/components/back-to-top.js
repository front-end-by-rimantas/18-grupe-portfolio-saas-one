function renderBackToTop() {

    const backToTop = document.querySelector('.btn');

    window.onscroll = () => {
        if (document.documentElement.scrollTop > 400) {
            backToTop.style.display = "inline-block";
        } else {
            backToTop.style.display = "none";
        }
    }
}

export { renderBackToTop }