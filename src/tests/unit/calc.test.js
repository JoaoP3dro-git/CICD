const { Soma, Sub, Mult, Div, CheckPrimeNum} = require("../../commom/calc")

const { CheckCpf } = require("../../commom/cpf")

describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(1,2);
        expect(res).toBe(3);
    });

    it('deve retornar o resultado da subtração de 2-1', () => {
        const res = Sub(2,1);
        expect(res).toBe(1);
    });

    it('deve retornar o resultado da multiplicação de 2 * 2', () => {
        const res = Mult(2,2);
        expect(res).toBe(4);
    });

    it('deve retornar o resultado da divisão de 4 / 2', () => {
        const res = Div(4, 2);
        expect(res).toBe(2);
    });

    it('deve retornar que não existe divisão por 0', () => {
        const res = Div(4, 0);
        expect(res).toBeNull();
    });

    it('Deve retornar que 13 é um número primo', () => {
        const res = CheckPrimeNum(13);
        expect(res).toBe(true);
    });

    it('Deve retornar que 20 não é um número primo', () => {
        const res = CheckPrimeNum(20);
        expect(res).toBe(false);
    });

    it('Deve retornar que 24 não é um número primo', () => {
        const res = CheckPrimeNum(24);
        expect(res).toBe(false);
    });

    it('Deve retornar que 23 é um número primo', () => {
        const res = CheckPrimeNum(23);
        expect(res).toBe(true);
    });
})

describe('CheckCpf', () => {
    it('Deve retornar true para CPF válido "12345678909"', () => {
        const result = CheckCpf("12345678909");
        expect(result).toBe(true);
    });

    it('Deve retornar false para CPF inválido "12345678900"', () => {
        const result = CheckCpf("12345678900");
        expect(result).toBe(false);
    });

    it('Deve retornar false para CPF inválido "123456789012"', () => {
        const result = CheckCpf("123456789012");
        expect(result).toBe(false);
    });

    it('Deve retornar false para CPF com formato inválido "123.456.789-09"', () => {
        const result = CheckCpf("123.456.789-09");
        expect(result).toBe(false);
    });

    it('Deve retornar false para CPF com caracteres não numéricos "1234567890a"', () => {
        const result = CheckCpf("1234567890a");
        expect(result).toBe(false);
    });

    it('Deve retornar false para CPF com menos de 11 dígitos "1234567890"', () => {
        const result = CheckCpf("1234567890");
        expect(result).toBe(false);
    });

    it('Deve retornar false para CPF com mais de 11 dígitos "123456789098"', () => {
        const result = CheckCpf("123456789098");
        expect(result).toBe(false);
    });

});
