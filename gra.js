let wylosowana = Math.floor(Math.random() * 10) +1;
let proby = 0;
let rekord = 999;

function sprawdz(){
    

    let liczba = Number(
        document.getElementById("liczba").value
    );
    
    proby++;

    if(liczba === wylosowana){

        if(proby < rekord){
            rekord = proby;
        }
        document.getElementById("liczba").disabled = true;

        document.getElementById("wynik").innerText = 
        "Brawo!! Zgadłes po " + proby + 
        " próbach! Rekord: " + 
        rekord + "prób";    

    }
    
    else if (liczba < wylosowana){
        document.getElementById("wynik").innerText = 
        "Za mało!";
    }

    else{
        document.getElementById("wynik").innerText = 
        "Za dużo";
    }
}

function nowaGra(){
    wylosowana = Math.floor(Math.random() * 10) +1;
    
    proby = 0;
    
    document.getElementById("wynik").innerText =
    "Nowa gra rozpoczęta!";

    document.getElementById("liczba").value = "";

    document.getElementById("liczba").disabled = false;
}

