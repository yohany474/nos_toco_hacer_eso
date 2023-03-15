// Obtener la ventana modal
const modal = document.getElementById("modal");

// Obtener el botón que abre la ventana modal
const btnSolicitar = document.querySelector(".btn-solicitar");

// Obtener el botón de cerrar
const closeBtn = document.getElementsByClassName("close")[0];

// Función para abrir la ventana modal
function openModal() {
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
function closeModal() {
  modal.style.display = "none";
}

// Cerrar la ventana modal al hacer clic en el botón de cerrar
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// Cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function (event) {
  if (event.target);
}