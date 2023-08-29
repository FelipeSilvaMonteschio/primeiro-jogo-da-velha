window.onload = () =>{
    "use strinct";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}

const resetar = document.getElementById('btnr')
resetar.addEventListener('click', resetTela)

let playerx = 0
let player0 = 0

const playerxElement = document.getElementById('playerx')
const player0Element = document.getElementById('player0')

const telas = document.querySelectorAll('.aereajg')

let currentPlayer = 'X'

telas.forEach(tela => {
    tela.addEventListener('click',  handlerTelaClick);
});

function handlerTelaClick(event) {
    const tela = event.target;

    if(tela.textContent !== ''){
        return
    }
    tela.textContent = currentPlayer;

    if(checkGanhador()){
        alert(`jogador ${(currentPlayer)} Vencedor`);
        resetTela();
        return;
    }

    currentPlayer = (currentPlayer === 'X' )? 'O' : 'X';

}

function checkGanhador(){
    const textseila = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    for(const texseila2 of textseila){
        const[a,b,c] = texseila2;

        if(telas[a].textContent && telas[a].textContent === telas[b].textContent && telas[b].textContent === telas[c].textContent && telas[c].textContent){
            if(currentPlayer === 'X'){
                playerx++;
                playerxElement.textContent = playerx;
            }else if (currentPlayer === 'o'){
                player0++;
                player0Element.textContent = player0;
            }
            return true;
        }
    }
    return false;
}

function resetTela() {
    telas.forEach(tela => {
        tela.textContent = '';
    });

    currentPlayer = "X";
}