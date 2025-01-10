// attribuizione valore alla costante button
const button = document.querySelector('.button');

// attribuizione valore alla costante lampContainer

const lampContainer= document.getElementById ('lampcontainer')

//  creazione evento al click sul buttone
 button.addEventListener ('click', switchOnFunction)


//  FUNZIONE

function switchOnFunction() {
    
 lampContainer.className = ("lampcontaineroff");
    
}