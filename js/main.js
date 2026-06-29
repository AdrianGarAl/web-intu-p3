const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const preview = document.querySelector("#adaptivePreview");
const chip = document.querySelector("#previewChip");
const title = document.querySelector("#previewTitle");
const text = document.querySelector("#previewText");
const modeInputs = document.querySelectorAll("input[name='layoutMode']");
const lightMode = document.querySelector("#lightMode");
const demoButton = document.querySelector("#demoButton");

const modes = {
  mobile: {
    className: "is-mobile",
    chip: "Móvil",
    title: "Vista móvil: tareas rápidas",
    text: "La interfaz prioriza acciones esenciales, oculta contenido secundario y utiliza una sola columna para facilitar la lectura."
  },
  tablet: {
    className: "is-tablet",
    chip: "Tableta",
    title: "Vista tableta: lectura y consulta",
    text: "La interfaz mantiene contenido complementario, pero reduce la densidad visual y simplifica la distribución."
  },
  desktop: {
    className: "is-desktop",
    chip: "Escritorio",
    title: "Panel completo de análisis",
    text: "Se muestran métricas, tabla comparativa, filtros y explicaciones complementarias para aprovechar el espacio disponible."
  }
};

function setMode(mode) {
  if (!preview || !modes[mode]) return;

  preview.classList.remove("is-mobile", "is-tablet", "is-desktop");
  preview.classList.add(modes[mode].className);

  chip.textContent = modes[mode].chip;
  title.textContent = modes[mode].title;
  text.textContent = modes[mode].text;
}

modeInputs.forEach((input) => {
  input.addEventListener("change", () => setMode(input.value));
});

if (lightMode && preview) {
  lightMode.addEventListener("change", () => {
    preview.classList.toggle("is-light", lightMode.checked);
  });
}

if (demoButton) {
  demoButton.addEventListener("click", () => {
    demoButton.textContent = "Acción realizada";
    setTimeout(() => {
      demoButton.textContent = "Probar acción";
    }, 1400);
  });
}
