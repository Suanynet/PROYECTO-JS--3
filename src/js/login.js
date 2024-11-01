//importamos el get para obtener los datos y después llamamos los id
import { getUsers } from "../servicios/getUsers"

const gmail = document.getElementById("gmail")
const pass = document.getElementById("pass")
const boton = document.getElementById("boton")
const ID = document.getElementById("ID")
const text = document.getElementById("text")



//Hacemos la funcionalidad para el boton 
boton.addEventListener("click",async function () {
  
        //creamos la promesa y la resolvemos
        let infoUsers = await getUsers()
    
        console.log(infoUsers);

        //Hacemos variables para guardar el valor de cada dato y le añadimos .trim para eliminar los espacios en blanco del string
        let cajita = gmail.value 
        let cajita2 = pass.value
        let cajita3 = ID.value

        let result = cajita.trim()
        let result2 = cajita2.trim()
        let result3 = cajita3.trim()


     
        
        //recorremos la lista y hacemos una validación
        for (let index = 0; index < infoUsers.length; index++) {
        
          
            //Esta indica que si los datos insertados son iguales a los datos que se registraron la persona puede ingresar a la pagina principal
            // Y si hay un dato diferente no puede ingresar y se recargar la pagina
                if (infoUsers[index].correo === gmail.value && infoUsers[index].contraseña  === pass.value && infoUsers[index].id  === ID.value) {
                    
                 
    
                    text.innerHTML = "Datos correctos, usted esta ingresando a la pagina"

                    
                    
                        window.location.href="principal.html"
                   
                    
    
                }else{
    
                    
                     text.innerText= "Datos incorrectos"
                    

                    
                         
                    
                }
    
        }

      
    
})

