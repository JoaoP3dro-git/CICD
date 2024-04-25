function CheckCpf(cpf) {
    if (cpf.length !== 11) {
        return false;
    }

    let sum = 0;
    let k = 10;
    for (let j = 0; j < cpf.length - 2; j++, k--) {
        sum += parseInt(cpf[j]) * k;
    }

    let module = sum % 11;
    let firstVerifier = (module < 2) ? 0 : 11 - module;

    sum = 0;
    k = 11;
    for (let j = 0; j < cpf.length - 1; j++, k--) {
        sum += parseInt(cpf[j]) * k;
    }

    module = sum % 11;
    let secondVerifier = (module < 2) ? 0 : 11 - module;

    if (parseInt(cpf[10]) !== secondVerifier || parseInt(cpf[9]) !== firstVerifier) {
        return false;
    }

    return true;
}

module.exports = { CheckCpf };
