let sekundy = 0;
let timer;
let uruchomiony = false;

function start(){

    if(uruchomiony){
        
        return;
    }

    uruchomiony = true;

    timer = setInterval(function(){

        sekundy++;

        document.getElementById("czas").innerText = 
        sekundy;
    }, 1000);
}

function stop(){
    
    clearInterval(timer);

    uruchomiony = false;
}

function reset(){
    
    clearInterval(timer);

    uruchomiony = false;

    sekundy = 0;

    document.getElementById("czas").innerText = 0;

}