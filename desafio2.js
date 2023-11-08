//cria objeto com os dados do enunciado
const parceiros = {
    19660156627897: "Fernanda Santos", //PJ
    23998058019370: "Rafael Souza", //PJ
    92291338611: "Maria Silva", //PF
    55443795656: "Maria Souza", //PF
    77743761456: "Ana Costa", //PF
    47202302326: "Maria Ferreira", //PF
    58017232567: "Sofia Costa", //PF
    16733009491247: "Lucas Silva", //PJ
    63351859919: "Rafael Souza", //PF
    84297701780: "Carlos Oliveira", //PF
}


//objeto que vai ter a lista das PF e PJ
const parceirosPFePJ = {
    PF: [],
    PJ: [],
}

for (const parceirosId in parceiros) {
    if (parceirosId.length === 11) {
        parceirosPFePJ.PF.push({numeroId: parceirosId, nomeParceiro: parceiros[parceirosId]})
    } else if (parceirosId.length === 14) {
        parceirosPFePJ.PJ.push({numeroId: parceirosId, nomeParceiro: parceiros[parceirosId]})
    }
}

//usa o loop for...in para percorrer todas as chaves e valores do objeto original "parceiros". Usa o if para identificar a length de 11 que é cpf e cria novo array com o push. Os dois parâmetros do push são o numeroID e o nomeParceiro. 
//aplica a mesma lógica para pj, mas com length de 14. 

console.log(parceirosPFePJ)
