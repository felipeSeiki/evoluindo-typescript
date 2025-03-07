interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro ={
    marca: "Mercedes",
    modelo: "Carro",
    ano: 2020,
    motor: "Tem",
}

console.log(`${meuCarro.marca}, ${meuCarro.modelo}, ${meuCarro.ano}, ${meuCarro.motor}`);