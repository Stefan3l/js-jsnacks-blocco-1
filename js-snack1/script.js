   

//    1 - Utente stampa 2 numeri con prompt
//    2- il softwere stampa il numero piu grande 

const firstNumber = Number(prompt(`Inserisci il primo numero`));
console.log(firstNumber)

const secondNumber = Number(prompt(`Inserisci il secondo numero`))

   if ( firstNumber > secondNumber ) {
    console.log(firstNumber)
    alert(`Il numero piu grande e ${firstNumber}`)
   }
     else if  ( firstNumber < secondNumber ) {
        console.log(secondNumber)
        alert(`Il numero piu grande e ${secondNumber}`)
    }
    else {
        alert(`i numeri sono pari`)
    }
