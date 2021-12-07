let sidebar = document.querySelector(".sidebar-videos");
let sidebarBtn = document.querySelector(".home-content");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
const maxPermitted = 250;
// La varible de control
let validArea = true;

const area = document.querySelector(".formatextarea");
const submit = document.querySelector(".btnComment");
const error = document.querySelector("#area-error");
if (submit) {
  submit.setAttribute("disabled", "true");
  submit.addEventListener(`click`, () => {
    // Quizás sería más conveniente darle el
    // atributo 'disabled' true/false
    // en los métodos 'handleValid' y
    // 'handleInvalid'
    if (validArea) console.log(`valid`);
    else console.warn(`invalid`);
  });
}
// Nos suscribimos al evento 'input'
// del area, que se disparará cada
// vez que cambie el valor del textarea
if (area) {
  area.addEventListener(`input`, () => {
    const { value } = area;
    if (value == 0) {
      submit.setAttribute("disabled", "true");
    } else {
      submit.removeAttribute("disabled");
    }
    value.length >= maxPermitted ? handleInvalid() : handleValid();
  });
}

// Mostramos el texto de error
const handleInvalid = () => {
  validArea = false;
  error.style.display = `block`;
};

// Ocultamos el bloque de error
const handleValid = () => {
  validArea = true;
  error.style.display = `none`;
};
