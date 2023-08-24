function corrigirProva(prova) {
    let acertos = 0;

    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }

    const nota = (acertos / prova.valor) * 10;

    return { acertos, nota };
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "a",
        },
        {
            resposta: "c",
            correta: "c",
        },
        {
            resposta: "e",
            correta: "b",
        },
        {
            resposta: "b",
            correta: "b",
        },
        {
            resposta: "c",
            correta: "c",
        },
    ],
};

const resultado = corrigirProva(prova);
console.log(`Aluno: ${prova.aluno}`);
console.log(`Matéria: ${prova.materia}`);
console.log(`Quantidade de acertos: ${resultado.acertos}`);
console.log(`Nota: ${resultado.nota.toFixed(2)}`);