//importamos el post para crear los datos y llamamos los id que se crearon desde el HTML
import { getUsers } from '../servicios/getUsers'
import {postUsers} from '../servicios/postUsers'

const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const id = document.getElementById("id")
const botonn = document.getElementById("botonn")
const textito = document.getAnimations("textito")




//Aqui creamos el evento del boton para después darle sus respectivas funcionalidades
botonn.addEventListener("click", async function () {
  

    let listaV = []

    const Users = await getUsers ();
    listaV = Users.filter(Users => Users.correo === correo )


    if (listaV.length > 0) {
        textito.innerText = "El correo ya existe"
        
    }else{
        recibir = await postUsers(nombre,correo,contraseña)
    }
    

   //Creamos una validación con un OR para validar los espacios vacios
    if (correo.value === " " || contraseña.value === " " || id.value === " " ) {
        
        textito.innerHTML = "Ingrese sus datos"

    }else{

    //Realizamos una condicional para devuelva el valor de cada dato y después le agregamos el post colocandole el
    //await para que espere a que se cumplan todos los requisitos y después esos datos los envie al servidor
        
        if (nombre.value.length> 0 && correo.value.length > 0 && contraseña.value.length > 0 && id.value.length > 0) {
            
            let cajitaname = nombre.value
            let cajitacorreo = correo.value
            let cajitapass = contraseña.value
            let cajitaID = id.value

            console.log(cajitaname,cajitacorreo,cajitapass,cajitaID);
            
            
            await postUsers(cajitaname, cajitacorreo, cajitapass, cajitaID)
            

            textito.innerText = "Su resgistro fue exitoso"


    // Y finalmente le colocamos un seTimeout para que cargue unos segundos y después se ingrese a la siguiente pagina

            setTimeout(() => {
                window.location.href="login.html"
            }, 2000);


         

            
    
        

        }
      
    }  
    
})

