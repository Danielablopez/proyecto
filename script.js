//creo una funcion asincronicaen donde luego de esperar por el fetch devuelvo 

//la variable "datos"

async function getJson() {
  const respuesta = await fetch("productos.json");
  const datos = await respuesta.json();
  return datos;
}
//llamo a la funcion async y con el THEN me aseguro que ya termino de hacer lo que tenia que hacer
// dentro del THEN pongo todo loque quiero que haga luego con todos los productos!
document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  
  getJson().then((datosProductos) => {
    
    if (datosProductos) {
      localStorage.setItem("productos", JSON.stringify(datosProductos));
      datosProductos.productos.forEach((producto) => {
       
        const gridItem = document.createElement("div");
        
        gridItem.classList.add("grid-item");
       
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