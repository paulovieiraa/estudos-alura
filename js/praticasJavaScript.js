console.log("Praticas JS");

//const -> final 
const idade = 18;
//let -> variavel .. pode ser int/string/xpto ..
let nome = "Paulo";
console.log(idade);

console.log("String = 2");
console.log(parseInt("2"));

console.log("Quando é outro caracter aritmetico, nao sendo + ele realiza. \nExemplo.:")
console.log("10" / "2")

// Interpolação
console.log(`Idade é: ${idade}`);

// LISTA 
const listaDeDestinos = new Array(`Rio de Janeiro`, `Salvador`, `Manaus`, `Brasilia`, `Palmas`);
listaDeDestinos.push(`São Paulo`);
console.log("Lista:");
console.log(listaDeDestinos);
//remover elemento da lista
// removendo Salvador [elemento, qtd de elementos a serem removidos] com if/else
if (idade >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);
}else{
    console.log('XPTO ..')
    console.log(listaDeDestinos);
}

// LOOPS
let i = 0;
let contador =  listaDeDestinos.length;
console.log("=================")
console.log(`Utilizando while`)
while(i<contador){
    console.log(listaDeDestinos[i]);
    if(i == contador){
        console.log(`fim do while`);
        break;
    }
    i +=1;
}

console.log("=================")
console.log(`Utilizando for`)
for( let j = 0 ; j<contador; j++){
    console.log(listaDeDestinos[j]);
}
