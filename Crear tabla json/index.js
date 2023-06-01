import users from "./users.json" assert {type: "json"};
document.getElementById("cargarTabla").addEventListener("click", traerDatos=>{

 let table= document.getElementById("datos");
 table.innerHTML="";

    users.forEach(dato =>{
        const usr=`<tr>
        <td class="nombre">${dato.name.first}</td>
        <td class="apellido">  ${dato.name.last} </td>
        <td class="direccion"> ${dato.location.street.name} "" ${dato.location.street.number} </td>
        <td class="img"> <img src=${dato.picture.large} alt=${dato.name.first + dato.name.last}>  </td>
    

    </tr>`       
      
        table.innerHTML+= usr;

    });
    
})






