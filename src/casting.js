"use strict";
// namespace cria uma "pasta" para que as variaveis de outros arquivos nao entram em conflito
var casting;
(function (casting) {
    // alterando um tipo
    let idade = 25;
    idade.toFixed();
    idade.length;
    idade.push();
    let number = 35;
    number.length;
})(casting || (casting = {}));
