let pytania = [
    {
        pytanie: "Co oznacza HTML",

        a:"Hyper Text Markup Language",
        b:"Homoe Tool Markup Language",
        c:"Hyper Transfer Machine Language",

        poprawna: "a"
    },


    {

        pytanie: "Do czego słuzy CSS",
        
        a: "Do pogramowania",
        b: "Do stylowania strony",
        c: "Do baz danych",
        
        poprawna: "b"

    },


    {

        pytanie: "Jak deklarujemy zmienną?",

        a: "let",
        b: "html",
        c: "style",

        poprawna: "a"

    }
];

let numerPytania = 0;
let punkty = 0;

pokazPytania();

function pokazPytania(){

    let p = pytania[numerPytania];

    document.getElementById("pytanie").innerText = 
    p.pytanie;

    
    document.getElementById("a").innerText = p.a;
    document.getElementById("b").innerText = p.b;
    document.getElementById("c").innerText = p.c;
}

function sprawdz(odpowiedz){

    let p = pytania[numerPytania];

    if(odpowiedz === p.poprawna){
        punkty++;
    }



    numerPytania++;

    if(numerPytania < pytania.length){
        
        pokazPytania();
    }else{

        document.querySelector(".quiz").innerHTML =
        "<h1> Koniec Quizu!! </h1>" + 
        "<h2> Twoj Wynik: " + 
        punkty + "/" + 
        pytania.length +
        "</h2>" + 
        "<button onclick='location.reload()'>Zagraj ponownie</button>";
    }
}