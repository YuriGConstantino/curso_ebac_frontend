"use strict";

var redesSociais = ["face", "X", "Insta"];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("".concat(redesSociais[i]));
}
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (item) {
  return {
    nome: item,
    curso: 'Front-End'
  };
});
console.log(alunos2);
var achaNome = alunos2.find(function (item) {
  return item.nome == 'Paula'; //retorna true ou false
});
console.log(achaNome);
var achaIndex = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; //retorna true ou false
});
console.log(achaIndex);
alunos2.push({
  nome: 'Yuri',
  curso: 'Back-End'
});
var alunosFrontEnd = alunos2.every(function (item) {
  return item.curso === 'Front-End' && item.curso === 'Back-End';
});
var alunosBackEnd = alunos2.some(function (item) {
  return item.curso === 'Back-End';
});
console.log(alunosFrontEnd);
console.log(alunosBackEnd);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, item) {
  acumulador += item;
  return acumulador;
}, 0);
console.log(soma);