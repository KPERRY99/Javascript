let umano = {
    nome: "Ji Eun",
    cognome: "Lee",
    eta: 30,
};

// come ottengo i valori dell'oggetto?
console.log(umano.cognome);
console.log(umano.eta);

umano.cognome = "Sandoval";

// come aggiungee un valore in un oggetto
umano.passione = ["Cantante", "Attrice"];

console.log(umano);

// rimuovere valore usa delete
delete umano.passione;