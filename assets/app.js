// Selección de elementos
const imagenPrincipal = document.querySelector("#imagen-principal");
const thumbnails = document.querySelectorAll(".thumbnail");
const contenedor = document.querySelector("#imagen-principal-container");

// Agregar eventos a cada thumbnail
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {

    // Obtener datos del thumbnail
    const nuevaImagen = thumbnail.src;
    const descripcion = thumbnail.alt;

    // Cambiar imagen principal
    imagenPrincipal.src = nuevaImagen;

    // Eliminar pie de foto anterior si existe
    const pieExistente = document.querySelector("#pie-de-foto");
    if (pieExistente) {
      pieExistente.remove();
    }

    // Crear nuevo pie de foto
    const pieDeFoto = document.createElement("p");
    pieDeFoto.id = "pie-de-foto";
    pieDeFoto.textContent = descripcion;

    // Agregar al DOM
    contenedor.appendChild(pieDeFoto);

  });
});
