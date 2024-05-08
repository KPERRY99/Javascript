/*
PRIMA ESERCITAZIONE JAVASCRIPT

Abbiamo 3 utenti
ogni persona ha:
- username
- password
- iban
- saldo iniziale

1. il codice deve permettere l'accesso e l'uscita da un solo menu
    Accedi (username + password)
    esci()

se accesso effettuato 
- messaggio di benvenuto custom ("ciao xx")
- altro menu
    deposita, (prompt -> aggiungo somma al saldo) 
    preleva, (se ho disponibilità preleva, altrimenti errore)
    bonifico (prompt -> iban -> se ho disponibilità, invio (scala saldo))
*/

/*
let utente = {
    username: "gabrielsandoval",
    password: "hannipham",
    iban: "IT15P0300203280987561521848",
    saldo: 1200,
};
*/

let utenti = [
    { username: "Manuele", password: "123", iban: "lgjdur5678", saldo: 100 },
    { username: "Simone", password: "312", iban: "lgjdur5678", saldo: 100 },
    { username: "Gabriel", password: "hannipham", iban: "IT15P0300203280987561521848", saldo: 0 }
];

function login(){
    let  user = prompt("Inserisci username", "");
    let pass = prompt("Inserisci la password", ""); 
   
    if(verifica(user,pass) == true){
        alert("Accesso consentito, Benvenuto " + user);
    }
    else{
        alert("Utente errato ");
        login();
    }
    //procedi();
    operazioni(user);
   
}

function procedi(){
    let res = prompt("Vuoi continuare? y/n", "");

    //Number(res)
    switch(res){
        case "y":
            operazioni();
            //alert("bene!");
            break;
        default:
            return alert("Arrivederci!");
    
    }
}

function exit(){
    let res = prompt("Sei sicuro di voler uscire? y/n", "");
    switch(res){
        case "n":
            operazioni();
        default:
            exit("Arrivederci!");
    
    }
}


function operazioni(user){

    for(let utente of utenti){
        if(utente.username === user){
            let op = prompt("Utente: " + utente.username + "\nTotale Saldo " + utente.saldo + 
                            "\n\nChe operazione vuoi fare? \n(1) Deposita\n"+  "(2) Preleva\n" + "(3) Manda bonifico \n(4) Esci")

            Number(op);

            switch(op){
                case "1":
                    deposito(user);
                    break;
                case "2":
                    prelievo(user);
                    break;
                case "3":
                    bonifico(user);
                    break;
                case "4":
                    exit();
                default:
                    alert("Operazione non valida");
                
            }   
        }
    }

    
    
}

function deposito(user){
    
    

    for(let utente of utenti){
        if(utente.username === user){
            let num = prompt("Utente: " + utente.username + "\nTotale Saldo " + utente.saldo + 
                            "\n\nInserisci importo da depositare: ", "");

            let n = parseInt(num);
            let soldi = parseInt(utente.saldo);

            utente.saldo = soldi + n;
            alert("Saldo totale: " + utente.saldo);
            procedi();
        }
    }

    alert("Operazione non eseguita.")
}

function prelievo(user){
    let num = prompt("Inserisci importo da prelevare: ", "");

    for(let utente of utenti){
        if(utente.username === user){
            let num = prompt("Utente: " + utente.username + "\nTotale Saldo " + utente.saldo + 
                            "\n\nInserisci importo da depositare: ", "");

            let n = parseInt(num);
            let soldi = parseInt(utente.saldo);

            if(n<=soldi){
                utente.saldo = soldi - n;
            }
            else{
                prompt("Non puoi prelevare");
                procedi();
                prelievo(user);
            }

            alert("Saldo totale: " + utente.saldo);
            procedi();
        }
        
    }

    return alert("Operazione non eseguita.")
}

function bonifico(utenteLoggato){
    let ibanDestinatario = prompt("Inserire iban destinatario");
    let utenteDestinatario = getUtenteIban(ibanDestinatario);
    let importo = prompt("Inserisci importo: ");
    if(importo>utenteLoggato.saldo){
        alert("Importo superiore al saldo");
    }else{
        importo = parseFloat(importo);
        utenteLoggato.saldo -= importo;
        utenteDestinatario.saldo += importo;
    }
    getSaldo(utenteLoggato);
    alert(utenteDestinatario.saldo);
}



function verifica(user, pass){
    for(let utente of utenti){
        if(utente.username === user && utente.password === pass){
            return true;
        }
    }
    return false;
    //prompt("Utente o password errati!");
}


let accedi = prompt("Che operazione vuoi fare? Accesso premi 0 - Esci altro", "");

Number (accedi);

switch(accedi){
    case "0":
    login();
    break;
    default:
    console.log("Arrivederci");
};
