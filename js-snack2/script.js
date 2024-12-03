

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa 

const gatsby = ["Francesco", "Antonio", "Vannessa", "Mirko", "Marco"]

let nameUtente = prompt(`Inserisci il tuo nome`)

let bool = false;

for ( i = 0; i <= gatsby.length - 1; i++) {
    
    if ( nameUtente != gatsby[i].toString()) {
        alert(`non poi entrare`)
    }
    else {
        alert(`poi entrare`)
    }
   
}