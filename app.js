
//1. como podemos agregar un event listener  ? 
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");
const btnMultiplicar = document.getElementById("multiplicar");
const btnDividir = document.getElementById("dividir");
const div_resultado = document.getElementById("resultado")
//suma 
btnSumar.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:3001/api/sumar',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            }
        );
        const data =await  respuesta.json();
        div_resultado.innerHTML=data;
});
//resta
btnRestar.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:3001/api/restar',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            });
            const data =await  respuesta.json();
            div_resultado.innerHTML=data;
});
//multiplicacion
btnMultiplicar.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:3001/api/multiplicar',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            });
            const data =await  respuesta.json();
            div_resultado.innerHTML=data;
        });
//division
btnDividir.addEventListener("click",
    async (event)=>{
        event.preventDefault(); 
        const numero_1 = parseFloat( document.getElementById("num1").value);
        const numero_2= parseFloat(document.getElementById("num2").value);
        console.log(JSON.stringify({numero_1,numero_2}));
        const respuesta = await  fetch(
            'http://127.0.0.1:3001/api/dividir',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2}),
            });
            const data =await  respuesta.json();
            div_resultado.innerHTML=data;
        });