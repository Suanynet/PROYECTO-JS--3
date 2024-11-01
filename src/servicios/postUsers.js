//aqui creamos un post crea el objeto de los datos que va obtener el get usuarios
async function PostUsers(nombre,correo,contraseña) {
    try {
    //creacion del objeto
      const datos = {
        nombre,
        correo,
        contraseña
      }
        
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(datos) 
        });

       
        const data = await response.json();

        
        return data;
    } catch (error) {
        
        console.error(error);
    }
}

export { PostUsers };
