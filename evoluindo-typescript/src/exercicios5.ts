type RepostaServidor = string | boolean;

function processarReposta(reposta: RepostaServidor): void{
    if(typeof reposta === "string"){
        console.log(`Resposta do servidor: ${reposta}`); 
    } else {
        console.log(`Operação bem-sucedida? ${reposta}`);
    }
}

processarReposta("Sucesso!");
processarReposta(false);