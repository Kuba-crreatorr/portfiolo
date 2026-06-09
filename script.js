alert("Witaj Kuba!");
console.log("JavaScript działa");


function przywitaj(){
    document.querySelector("h1").innerText = "Frontend Developer";
}

let licznik = 0;

    function przywitaj(){
        licznik++;
        document.querySelector("h1").innerText = 
             "Kuba kliknal:" + licznik;
    }

function pokazImie(){
    let imie = document.getElementById("imie").value;

        if(imie === "kuba"){
            document.getElementById("wynik").innerText = 
                    "Witaj Kuba!!";  
        } else {
                document.getElementById("wynik").innerText = 
                    " Cześć " + imie ;
        }
}
