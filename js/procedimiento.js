function calcularprecio()
{
    var cantidad=document.getElementById("cantidad").value;
    var seleccion=document.getElementById("categoria");
    var itemactivo=seleccion.options[seleccion.selectedIndex].value;
    var resultado=0;

    if (cantidad>0)
        {
            switch(itemactivo=parseInt(itemactivo))
            {
            case 1:
                subtotal=parseInt(cantidad)*200;
                resultado=subtotal*20/100;
                break;
            case 2:
                subtotal=parseInt(cantidad)*200;
                resultado=subtotal*50/100;
                break;
            case 3:
                subtotal=parseInt(cantidad)*200;
                resultado=subtotal*85/100;
                break;
            }
            document.getElementById("error").innerHTML="";
            document.getElementById("total").innerHTML=resultado;
        }
    else
        {
            document.getElementById("total").innerHTML="";
            document.getElementById("error").innerHTML="El valor ingresado es incorrecto";
        }
    
}

function borrar()
{
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("correo").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("total").innerHTML="";
    document.getElementById("error").innerHTML="";
}