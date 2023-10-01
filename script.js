
// cree una funcion asincrona

async function getJson() {
  const respuesta = await fetch("productos.json");
  const datos = await respuesta.json();
  return datos;
}

document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  // Llamada a la función para obtener los productos
  getJson().then((datosProductos) => {
    // Si hay productos para mostrar, almacena la información en localStorage y muestra los mismos
    if (datosProductos) {
      localStorage.setItem("productos", JSON.stringify(datosProductos));
      datosProductos.productos.forEach((producto) => {
        // 1- crear un div para cada producto
        const gridItem = document.createElement("div");
        // 2 agregar la clase nombre al div que contiene el nombre
        gridItem.classList.add("grid-item");
        // 3- agregar etiqueta h4 con el texto del titulo
        gridItem.innerHTML = `
          
    
          <img src=${producto.imagen} id="imagen" alt="${producto.alt}" />
          <h4>${producto.nombre}</h4>
          <h6>${producto.alt}</h6>
          `;

        // gridItem.addEventListener("click", () =>
        //   mostrarDetallesProductos(producto)
        // );

        gridProductos.appendChild(gridItem);
        let ver = document.createElement("a");
        ver.innerText = "Ver Producto";
        gridItem.append(ver);
        ver.className = "ver";
        ver.addEventListener("click", () => mostrarDetallesProductos(producto));
      });
    }
  });
});



function mostrarDetallesProductos(producto) {
  //redireccionar a otra pagina para mostrar los detalles
  window.location.href = `producto.html?id=${producto.id}`;
}