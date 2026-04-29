// Json
const catalogo = [
{
id: 1,
titulo: "Interestelar",
tipo: "filme",
ano: 2014,
generos: ["ficção científica", "drama"],
nota: 9.4,
assistido: true
},

{
id: 2,
titulo: "Breaking Bad",
tipo: "serie",
ano: 2008,
generos: ["crime", "drama"],
nota: 9.8,
assistido: true
},

{
id: 3,
titulo: "Clube da Luta",
tipo: "filme",
ano: 1999,
generos: ["drama"],
nota: 8.9,
assistido: false
},

{
id: 4,
titulo: "Dark",
tipo: "serie",
ano: 2017,
generos: ["mistério", "ficção científica"],
nota: 9.1,
assistido: true
},

{
id: 5,
titulo: "Duna",
tipo: "filme",
ano: 2021,
generos: ["ação", "aventura"],
nota: 8.7,
assistido: false
},

{
id: 6,
titulo: "The Last of Us",
tipo: "serie",
ano: 2023,
generos: ["drama", "ação"],
nota: 9.0,
assistido: false
}
];


//Leitura e apresentação dos dados do Json

console.log("Catálogo completo: ");
console.log(catalogo);

console.log("Primeiro título: ", catalogo[0].titulo);

console.log("Último ano: ",catalogo[catalogo.length -1].ano);

if(catalogo[2].generos[1]){
    console.log("Segundo gênero do terceiro item: ",catalogo[2].generos[1]);
}
else{
console.log(
"O terceiro item possui apenas um gênero."
);
}


// Iterators


// forEach
console.log("\nLISTAGEM DE TÍTULOS:");

catalogo.forEach(item => {
console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// map
const titulosEmCaixaAlta =
catalogo.map(item => item.titulo.toUpperCase());

console.log("\nTítulos em caixa alta:");
console.log(titulosEmCaixaAlta);


// filter
const naoAssistidos =
catalogo.filter(item => item.assistido === false);

console.log(
`\nItens não assistidos: ${naoAssistidos.length}`
);


// find
const notaAlta =
catalogo.find(item => item.nota >= 9);

if(notaAlta){
console.log(
`\nPrimeiro item com nota >= 9: ${notaAlta.titulo} (${notaAlta.nota})`
);
}else{
console.log("Nenhum item com nota maior ou igual a 9.");
}


// reduce

const somaNotas =
catalogo.reduce((acc,item)=> acc + item.nota,0);

const mediaGeral =
somaNotas / catalogo.length;

const assistidos =
catalogo.filter(item=> item.assistido);

const somaAssistidos =
assistidos.reduce((acc,item)=> acc + item.nota,0);

const mediaAssistidos =
somaAssistidos / assistidos.length;

console.log(
`\nMédia geral: ${mediaGeral.toFixed(2)}`
);

console.log(
`Média dos assistidos: ${mediaAssistidos.toFixed(2)}`
);


// some e every

const temAntes2000 =
catalogo.some(item => item.ano < 2000);

const todosTemGenero =
catalogo.every(item => item.generos.length > 0);

console.log(
`\nExiste item antes de 2000? ${temAntes2000}`
);

console.log(
`Todos têm pelo menos 1 gênero? ${todosTemGenero}`
);


// Saída na tela DOM

const quantidadeFilmes =
catalogo.filter(item=> item.tipo==="filme").length;

const quantidadeSeries =
catalogo.filter(item=> item.tipo==="serie").length;


// ranking dos top 3
const top3 =
[...catalogo]
.sort((a,b)=> b.nota - a.nota)
.slice(0,3);

let rankingHTML = "";

top3.forEach(item=>{
rankingHTML += `
<li>${item.titulo} - ${item.nota}</li>
`;
});


document.getElementById("output").innerHTML = `
<h2>Resumo do Catálogo</h2>

<p>Total de itens: ${catalogo.length}</p>

<p>Filmes: ${quantidadeFilmes}</p>

<p>Séries: ${quantidadeSeries}</p>

<p>Não assistidos: ${naoAssistidos.length}</p>

<p>Média geral: ${mediaGeral.toFixed(2)}</p>

<h3>Top 3 Ranking</h3>

<ol>
${rankingHTML}
</ol>
`;