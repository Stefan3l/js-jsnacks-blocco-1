

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa 

const gatsby = ["Francesco", "Antonio", "Vannessa", "Mirko", "Marco"]

let nameUtente = prompt(`Inserisci il tuo nome`)

let isNameList = false;

for ( i = 0; i < gatsby.length; i++) {
   
    if ( gatsby[i] === nameUtente ) {
        isNameList = true;
    }
   
}
if(isNameList) {
    alert(`puoi entrare`)
}
else {
    alert(`Non poi entrare`)
}