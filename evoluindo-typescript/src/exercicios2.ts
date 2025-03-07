interface Multiplicacao {
    (numero1: number, numero2: number): number;
}

function Conta(a: number, b: number): Multiplicacao{
    return (x: number, y: number) => x * y;
}

const contaDeMulti = Conta(2, 3);
console.log(contaDeMulti);