fen = document.querySelector('.fen').innerHTML;

fenArray = fen.split(',')


    fenDisplayer = document.querySelector('#fen-displayer');
function getRandomFen(){
    index = Math.round(Math.random()*713)
    fenDisplayer.innerHTML = fenArray[index]
}