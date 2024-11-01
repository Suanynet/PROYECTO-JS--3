//aqui creamos el post de consulta que nos va permitir enviar los datos que va obtener el getConsultas
async function postConsultas(nombre, consulta, hora) {
    try {

      //creacion del objeto
      const datos = {
        nombre,
        consulta,
        hora
      }
        
        const response = await fetch('http://localhost:3001/consultas', {
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
  
  export{ postConsultas};