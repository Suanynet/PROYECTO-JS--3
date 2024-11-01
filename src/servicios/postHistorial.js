//Aqui creamos el post que va contener el historial de las consultas realizadas
async function postHistorial(nombre, consulta, hora) {
    try {

      //Creacion del objeto
      const datos = {
        nombre,
        consulta,
        hora
      }
        
        const response = await fetch('http://localhost:3001/historial ', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(datos) 
        });
  
       
       return await response.json();
  
        
         
    } catch (error) {
        
        console.error('Error posting user:', error);
        throw error;
    }
  }
  
  export{ postHistorial };