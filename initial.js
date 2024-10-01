function init() {
    PedraPaper()
}


function comparaNumeros(a, b) {
    if (a > b) {
        alert(a)
    } 
    else alert(b)
}

function suma1a100() {
    let resultat = 0
    for (let i = 0; i <= 100; i++) {
        resultat += i
    }
    alert(resultat)
}

function PedraPaper() {
    for (let i = 0; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + " --> Tisores")
        }
        else if (i % 3 == 0) {
            console.log(i + " --> Pedra")
        } 
        else if (i % 5 == 0) {
            console.log(i + " --> Paper")
        }
        else console.log(i) 
    }
}

function esParell(num) {
    let resultat 
    if (num % 2) {
        resultat = false
    }
    else resultat = true
    alert(resultat)
}

function revertirCadena(cadena) {
    const revertit = cadena.split('').reverse().join('')
    alert(revertit)
}

function factorial(n) {
    let resultat = 1
    for (let i = 1; i <= n; i++) {
        resultat *= i
    }
    alert(resultat)
}

function filtrarPositius(array) {
    let result = []
   for (i of array) {
    if (i >= 0) {
        result.push(i)
    }
   } 
   alert(result)
}