
function lanzar()
{
    var jugador1= Math.round(numRand(1,6));
    var jugador2= Math.round(numRand(1,6));
    var primero="img\primer-lugar.png"
    let texto = document.getElementById("texto");

    if(jugador1==jugador2){
        texto.innerHTML="🏅¡¡¡Hay un empate!!!🏅"
       
    }
    else if (jugador1>jugador2)
    {
        texto.innerHTML="🥇¡¡¡El jugador UNO es el ganador!!!🥇"
        
    }
        
    else{
        texto.innerHTML="🥈¡¡¡El jugador DOS es el ganador!!!🥈"
    }

    jugar1(jugador1);
    jugar2(jugador2);
    
}

function jugar1(jugador1)
{
    
    if(jugador1==1)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.add("ocultar-dado");
    }
    else if(jugador1==2)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.add("ocultar-dado");
    }
    else if(jugador1==3)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.add("ocultar-dado");
    }
    else if(jugador1==4)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.add("ocultar-dado");
    }
    else if(jugador1==5)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.add("ocultar-dado");
    }
    else if(jugador1==6)
    {
        document.getElementsByClassName("mostrar-dado1")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6")[0].classList.remove("ocultar-dado");
    }
}
function jugar2(jugador2)
{
    
    if(jugador2==1)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.add("ocultar-dado");
    }
    else if(jugador2==2)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.add("ocultar-dado");
    }
    else if(jugador2==3)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.add("ocultar-dado");
    }
    else if(jugador2==4)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.add("ocultar-dado");
    }
    else if(jugador2==5)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.remove("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.add("ocultar-dado");
    }
    else if(jugador2==6)
    {
        document.getElementsByClassName("mostrar-dado1-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado2-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado3-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado4-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado5-Jugador2")[0].classList.add("ocultar-dado");
        document.getElementsByClassName("mostrar-dado6-Jugador2")[0].classList.remove("ocultar-dado");
    }
}
function numRand(min, max) {
    return min + Math.random() * (max - min);
}