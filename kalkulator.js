function dodaj(znak){

    document.getElementById("ekran").value += znak;

}

function wylicz(){
    
    let wynik = eval (
        document.getElementById('ekran').value
    );

    document.getElementById("ekran").value = wynik;
}

function wyczysc(){
    document.getElementById("ekran").value = "";    
}
