import { postHistorial } from "../servicios/postHistorial";
import { getHistorial } from "../servicios/getHistorial";



load();
    async function load() { 

        
        const tableBody = document.querySelector('#consultaTable tbody');
        tableBody.innerHTML = ''; // Clear table
    
         let consultas = await getHistorial()
         console.log(consultas);
         
    
    
           consultas.forEach((consulta) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = consulta.nombre;
            row.insertCell().textContent = consulta.consulta;
            row.insertCell().textContent = consulta.hora;
           
        });
    }



   document.querySelector('#consultaTable').addEventListener('submit', function(e) {
    e.preventDefault();
    
   

    const nombre = document.querySelector('#nombre').value;
    const consulta = document.querySelector('#consulta').value;
    const hora = new Date().toLocaleString();
    
    postHistorial.push({ nombre, consulta, hora });
    
    
 
    document.querySelector('#consultaTable').reset();
    
});