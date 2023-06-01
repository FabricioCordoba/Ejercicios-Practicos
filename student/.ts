const fs = require ( 'fs' ); 
const readline = require ( 'readline/promises' ); 
const { stdin : entrada , stdout : salida } = require ( 'proceso' ); 
const rl = líneadelectura.createInterface ({ entrada , salida }); 

 
     

//funciónasíncrona

getUsername(){ 
    const nombredeusuario = esperarl.pregunta ( 'Ingrese nombre de usuario:' );
     if (! nombredeusuario ) {
        devuelvegetUsername(); 
     }  

  prueba { 
    fs.readFileSync ( ` $ { nombre de usuario } . txt ` ); 
    devolvernombredeusuario ; 
} catch ( e ) { 
    if ( e . code === 'ENOENT' ) { 
        console . log ( ` El nombre de usuario " ${username} " no existe , pruebe con un nombre de usuario diferente` ) ; 
        devuelve obtener nombre de usuario ();        
      
    } } } función asíncrona updateUserInfo () { 
        const nombredeusuario = espera getUsername (); 
    const datosSinprocesar = esperarrl.pregunta ( 'Ingrese la información del usuario (nombre|edad|curso):' ); 
    datos 
    let constantes = Búfer . from ( ` \n $ { datos sin procesar } \n ` ); 
  fs . writeFileSync ( ` $ { nombre de usuario } . txt ` , datos , {      
     bandera : 'a' }); 
  rl _ cerrar (); } 
actualizar información de usuario (); 