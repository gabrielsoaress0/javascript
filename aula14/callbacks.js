function fazerPizza(sabor, callback) {
    console.log(`Fazendo uma pizza de ${sabor}...`);
    setTimeout(() => {
        callback();
    }, 1500);
}

function pizzarPronta() {
    console.log('Pizza pronta! Bom apetite!');
}

fazerPizza('calabresa', pizzarPronta);