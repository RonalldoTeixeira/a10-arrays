// primeira parte
const pri = [5574, 247, 58, 6342, 26847]   //Namber
const seg = ["caderno", "caneta", "borracha", "lapis"]   //String
const ter =[95, "lua", false]   //Mista

const tx1 = ("Imprima a quantidade de itens de cada array")
console.log(tx1); 
console.log(pri);
console.log(pri.length);
console.log(seg);
console.log(seg.length);
console.log(ter);
console.log(ter.length);

//segunda parte
const tx2 = ("Imprima o primeiro item do primeiro array,o segundo item do segundo array, e o terceiro item do terceiro array")
console.log(tx2);
console.log(pri[0]);
console.log(seg[1]);
console.log(ter[2])


const tx3 = ("Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array.")
console.log(tx3);
console.log(pri.includes(5574));
console.log(ter.includes(true));

//terceira parte
const tx4 = (" Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia");
console.log(tx4)

let listDeAlunosOriginal = ["winshu", "tiru", "didi", "bozo"]
let listDeAlunosCopia = listDeAlunosOriginal.slice()
listDeAlunosOriginal.push("6287") // adiciona um ou mais elementos ao final de um array
console.log(listDeAlunosOriginal, "original")
console.log(listDeAlunosCopia, "copia");

const tx5 = ("Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;")
console.log(tx5)

let numeroDeAlunosOriginal = [1, 2, 3, 4]
let numeroDeAlunosCopia = numeroDeAlunosOriginal.slice()
numeroDeAlunosOriginal.pop()//remove o ultimo elemento da array

console.log(numeroDeAlunosCopia)
console.log(numeroDeAlunosOriginal)

const tx6 = ("Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;") 
console.log(tx6);
let materiaDosAlunosCopia = ["bio", "historia", "matemática"]
let materiaDosAlunosOriginal = materiaDosAlunosCopia.slice()
materiaDosAlunosCopia.splice(1,1); // O primeiro é o Índice, o segundo a quantidade de elementos

console.log(materiaDosAlunosOriginal, "Original") 
console.log(materiaDosAlunosCopia, "copia")


