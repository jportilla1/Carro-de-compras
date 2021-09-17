const boton= document.getElementById("agregar");
boton.addEventListener("click",ingresarDatos);

const botonClear=document.getElementById("limpiar");
botonClear.addEventListener("click",eliminarItem);

//boton.addEventListener("click",funcion)
function ingresarDatos (){
    const inputItem= document.getElementById("item");
    const inputPrecio = document.getElementById("precioitem");

    const item = inputItem.value;
    const precioitem = inputPrecio.value;

    if (item && precioitem) {
        add(item,precioitem);

    }else {
        console.error("diligencie info");
        alert("Diligencie info")
    }

}

function add(item,precioitem){
    const lista= document.getElementById("listaArticulos");
    const li= document.createElement("li");
    li.textContent= item + " $ " + precioitem;
    lista.appendChild(li);
}

function eliminarItem(){

    const lista=document.getElementById("listaArticulos");
    //lista.remove();
    const elementos= Array.from(lista.children);   
    
    for (let elemento of elementos) {
        elemento.remove();
    } 

}
