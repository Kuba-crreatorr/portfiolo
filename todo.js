function dodajZadanie(){

    let tekst = 
    document.getElementById("zadanie").value;
    

      if(tekst === ""){
        
        return;
    }


    let li = 
    document.createElement("li");

    let przycisk =
    document.createElement("button");

    li.innerText = tekst + " " ;
    
    przycisk.innerText =  " Usuń ";

    li.onclick = function(){
        
        li.classList.toggle("zrobione");
        
    }

    przycisk.onclick = function(){

        li.remove();

    }

    li.appendChild(przycisk);

    document.getElementById("lista")
    .appendChild(li);

    document.getElementById("zadanie").value = "";
}