function sumar(texto){
    let numeros=  texto.split("+");
    let numero1 = Number(numeros[0]);
    let numero2 = Number(numeros[1])
    return numero1 + numero2;
}
function restar(texto){
    let numeros=  texto.split("-");
    let numero1 = Number(numeros[0]);
    let numero2 = Number(numeros[1])
    return numero1 - numero2;
}

function multiplicacion(texto){
    let numeros=  texto.split("x");
    let numero1 = Number(numeros[0]);
    let numero2 = Number(numeros[1])
    return numero1 * numero2;
}

function division(texto){
    let numeros=  texto.split("/");
    let numero1 = Number(numeros[0]);
    let numero2 = Number(numeros[1])
    return numero1 / numero2;
}

    let btnEnv= document.getElementById("igual");
    let btnBorrar= document.getElementById("borrar");
    let btnC= document.getElementById("c");
    let btnCe= document.getElementById("ce");
    let num= document.querySelectorAll(".buttonNum");
   let display= document.getElementById("display");

   suma= false;
   resta= false;
   multiplica= false;
   divide= false
  

    btnC.addEventListener("click",()=>{
        display.value = " ";});

   num.forEach(number => {

    number.addEventListener("click", () => {
        display.value += number.textContent;
        if (number.textContent === "+") suma= true;
        if (number.textContent === "-") resta= true;
        if (number.textContent === "x") multiplica= true;
        if (number.textContent === "/") divide= true;              
           
        })
    });
    btnEnv.addEventListener("click", () => {
       if (suma)  display.value=sumar(display.value);           
       if(resta) display.value=restar(display.value);
     if(multiplica)display.value=multiplicacion(display.value);
         if(divide)display.value=division(display.value);
         
    })


    

   











   
    




