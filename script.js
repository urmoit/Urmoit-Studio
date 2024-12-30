document.addEventListener("scroll", () => {
    const links = document.querySelectorAll(".animated-link");
    links.forEach(link => {
        const rect = link.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            link.classList.add("visible");
        }
    });
});
