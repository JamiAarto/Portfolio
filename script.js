// Etsitään nappi
const themeToggle = document.getElementById('theme-toggle');

// Tarkistetaan käyttäjän aiempi valinta
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌞 Vaihda tummaan';
}

// Klikkaamalla vaihdetaan teema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Tallennetaan valinta localStorageen
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌞 Vaihda tummaan';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙 Vaihda vaaleaan';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Tarkista aiempi teema localStoragesta
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Vaalea teema";
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Tallennetaan käyttäjän valinta localStorageen
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️ Vaalea teema";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙 Tumma teema";
        }
    });
});
