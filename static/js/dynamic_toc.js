document.addEventListener("DOMContentLoaded", function () {
    const tocLinks = document.querySelectorAll("#sidebar a");
    const sections = [...tocLinks].map(link => {
        const id = new URL(link.href).hash;
        return id ? document.querySelector(id) : null;
    }).filter(el => el);

    const observerOptions = { rootMargin: "-50% 0px -50% 0px", threshold: 0 };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`#sidebar a[href*="${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
