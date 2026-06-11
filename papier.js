let wygrane = 0;
let przegrane = 0;
let remisy = 0;

function gra(wyborGracza){

    let ruchy = ["papier", "kamien", "nozyce"];

    let komputer = 
    ruchy[Math.floor(Math.random() * 3)];

    if (wyborGracza === komputer){

        remisy++;

        aktulizacjaStatystyki();

        document.getElementById("wynik").innerText = 
        " Remis! Komputer wygrał!! " + komputer;
    }

    else if (
        (wyborGracza === "papier" && komputer === "kamien") ||
        (wyborGracza === "kamien" && komputer === "nozyce") ||
        (wyborGracza === "nozyce" && komputer === "papier")
    ){


        wygrane++;

        aktulizacjaStatystyki();


        document.getElementById("wynik").innerText = 
        "Wygrałes!! Komputer wybrał " +  komputer;

    }

    else {


        przegrane++

        aktulizacjaStatystyki();
        
        document.getElementById("wynik").innerText = 
        "Przegrałeś!! Komputer wybrał "  +  komputer;
    }
}

remisy++;

document.getElementById("statystyki").innerText =
"Wygrane: " + wygrane + 
" | Przegrane:" + przegrane + 
" | Remisy: " + remisy;

function aktulizacjaStatystyki(){

    document.getElementById("statystyki").innerText = 
    "Wygrane: " + wygrane +
    " | Przegrane: " + przegrane +
    " | Remisy: " + remisy;
}

aktulizacjaStatystyki();

function resetuj(){

    wygrane = 0;
    przegrane = 0;
    remisy = 0; 


    aktulizacjaStatystyki();
}
