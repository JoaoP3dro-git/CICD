function Soma(a, b){
    return a + b;
}

function Sub(a, b){
    return a - b;
}

function Div(a, b){
    if(b != 0){
        return a / b;
    } else {
        return null;
    }
}

function Mult(a, b){
    return a * b;
}

function CheckPrimeNum(a){
    if(a <= 1) return false;
    if(a % 2 == 0 && a > 2) return false;
    if((a % 1 === 0) && (a % a === 0)){
        return true;
    } else {
        return false;
    }
}

module.exports = { Soma, Sub, Mult, Div, CheckPrimeNum}