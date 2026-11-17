const proyectos = [
    {
        titulo: "Escáner de Puertos Automatizado",
        descripcion: "Script desarrollado en Python para auditar la seguridad perimetral de servidores locales de manera rápida y eficiente.",
        categoria: "ciberseguridad",
        enlace: "https://github.com/Nicoguzok"
    },
    {
        titulo: "E-commerce con Filtros de Inyección",
        descripcion: "Sitio web diseñado para contener defensas activas contra ataques tipo SQLi y Cross-Site Scripting (XSS) en el cliente.",
        categoria: "desarrollo",
        enlace: "https://github.com/Nicoguzok"
    },
    {
        titulo: "Plataforma Web para Eventos",
        descripcion: "Interfaz interactiva completamente responsiva adaptada a las necesidades modernas de diseño y accesibilidad web.",
        categoria: "desarrollo",
        enlace: "https://github.com/Nicoguzok"
    }
];

// Sanitización estricta de caracteres para neutralizar XSS reflejado/inyectado
function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;'
    };
    return string.replace(/[&<>"'/]/ig, (match) => map[match]);
}

// Renderizado eficiente del DOM
function renderPortfolio() {
    const container = document.getElementById("portfolio-container");
    if (!container) return;

    let htmlBuffer = "";

    proyectos.forEach(p => {
        const safeTitle = sanitize(p.titulo);
        const safeDesc = sanitize(p.descripcion);
        const safeLink = sanitize(p.enlace);

        const tagClass = p.categoria === "ciberseguridad" ? "project-card__tag--cyber" : "project-card__tag--dev";
        const tagText = p.categoria === "ciberseguridad" ? "Ciberseguridad" : "Desarrollo Web";

        htmlBuffer += `
                    <article class="project-card">
                        <span class="project-card__tag ${tagClass}">${tagText}</span>
                        <h3 class="project-card__title">${safeTitle}</h3>
                        <p class="project-card__description">${safeDesc}</p>
                        <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="Ver repositorio de ${safeTitle}">
                            Explorar código <i class="ri-arrow-right-line" aria-hidden="true"></i>
                        </a>
                    </article>
                `;
    });

    container.innerHTML = htmlBuffer;
}

// Control asíncrono del efecto typewriter de la terminal
const terminalCommands = ["echo '¡Bienvenido!';", "ready_"];
let commandIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typingSpan = document.getElementById("typing");
    if (!typingSpan) return;

    const fullText = terminalCommands[commandIndex];

    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    typingSpan.innerHTML = currentText;

    let typeSpeed = 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pausa al terminar de escribir
        isDeleting = true;
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        commandIndex++;
        if (commandIndex >= terminalCommands.length) commandIndex = 0;
        typeSpeed = 500; // Pausa antes de la siguiente palabra
    }

    setTimeout(type, typeSpeed);
}

// Inicialización segura de eventos globales
document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio();
    setTimeout(type, 1000); // Retraso controlado para mejorar métricas de rendimiento inicial
});