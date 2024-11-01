//importamos los gets y los post
import { postConsultas } from "../servicios/postConsultas";
import { getConsultas } from "../servicios/getConsultas";
import { postHistorial } from "../servicios/postHistorial";
import { deleteConsulta } from "../servicios/deleteConsultas";

const gatito = document.getElementById("gatito")

console.log(deleteConsulta);

console.log(postConsultas);

console.log(getConsultas);

//creacion de un evento general
document.addEventListener('DOMContentLoaded', load);

//creacion de una funcion asincronica que le dara funcion a la tabla creada desde el HTML
async function load() {
    
    
    const tableBody = document.querySelector('#consultaTable tbody');
    tableBody.innerHTML = ''; //creacion de la tabla

    let consultas = await getConsultas()
    
    consultas.forEach((consulta) => {
        const row = tableBody.insertRow();
        //creacion de las columnas de la tabla
        row.insertCell().textContent = consulta.nombre;
        row.insertCell().textContent = consulta.consulta;
        row.insertCell().textContent = consulta.hora;

        //Creacion del boton de aceptar
        const buttonAceptar = document.createElement("button");
        buttonAceptar.textContent = "Aceptar";

        
        //creamos un evento del boton de aceptar para añadirle la funcionalidades respectivas
        buttonAceptar.addEventListener('click', function(e) {
            console.log(consulta.nombre);
            
            //aqui una pequeña funcion que nos permite remover todo lo que se encuentra en la fila
            e.target.parentNode.parentNode.remove();

            //aqui añadimos el postHistorial para enviar las consultas pendientes que fueron aceptadas que aparezcan en el historial
            postHistorial(consulta.nombre, consulta.consulta, consulta.hora)

            //aqui añadimos el delete para que nos permita borrar la informacion de manera visual en la pagina de consultas
            deleteConsulta(consulta.id)

            //mensaje para estado aceptado
            gatito.textContent = "Consulta Aceptada"
            
        
        });

        //aqui aplicamos un appenChild para que el boton aparezca en pantalla
        row.insertCell().appendChild(buttonAceptar);

        //Creacion del boton de aceptar
        const buttonEliminar = document.createElement("button")
            buttonEliminar.textContent = "Eliminar"
              
            //creamos un evento del boton de eliminar para añadirle la funcionalidades respectivas
            buttonEliminar.addEventListener("click", function (event) {

               //aqui una pequeña funcion que nos permite remover todo lo que se encuentra en la fila
               event.target.parentNode.parentNode.remove();

               //aqui añadimos el postHistorial para enviar las consultas pendientes que fueron aceptadas que aparezcan en el historial
               postHistorial(consulta.nombre, consulta.consulta, consulta.hora)

                //aqui añadimos el delete para que nos permita borrar la informacion de manera visual en la pagina de consultas
               deleteConsulta(consulta.id)

               //estado para estado Pendiente
               gatito.innerText = "Consulta Pendiente"


            });
            //aqui aplicamos un appenChild para que el boton aparezca en pantalla
            row.insertCell().appendChild(buttonEliminar)
        
        
        
    });
}

//aqui creamos un evento del documento de manera general, tambien añadimos la funcion del preventDefault para que 
//nos obligue a llenar los espacios vacios 
document.querySelector('#consultaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    //aqui creamos unas variables con un querySelector de manera "value", para que se impriman los datos en pantalla
    const nombre = document.querySelector('#nombre').value;
    const consulta = document.querySelector('#consulta').value;
    const hora = new Date().toLocaleString();

    //aqui añadimos el postConsultas para que le envie al getConsulta la informacion que queremos qque aparezca 
    //en pantalla de manera visual
    postConsultas(nombre, consulta, hora)

    // limpiamos la tabla
    document.querySelector('#consultaForm').reset();
    location.reload()
});
