import { GetUsers } from "../servicios/getUsers"; 
import { postUsers } from "../servicios/postUsers";

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña")
const id = document.getElementById("id")
const botonn = document.getElementById("botonn")


console.log(GetUsers);


botonn.addEventListener("click", function () {

    Promesaresuelta()

    async function Promesaresuelta() {
        
        let infoUsers = await getUsers()
    
        console.log(infoUsers);
        
        
    }

 const nombreV = nombre.value;
 const correoV = correo.value;
 const passV = contraseña.value;
 const IDV = id.value
 

 postUsers(nombreV, correoV, passV, IDV)


})



