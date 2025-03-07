interface Estudante {
    nome: string;
    curso: string;
  }
  
  interface Trabalhador {
    empresa: string;
    cargo: string;
  }
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "TechCorp",
    cargo: "Desenvolvedor Júnior"
  };
  
  console.log(estudanteTrabalhador);
  