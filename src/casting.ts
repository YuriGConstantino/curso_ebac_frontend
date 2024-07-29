// namespace cria uma "pasta" para que as variaveis de outros arquivos nao entram em conflito
namespace casting {
// alterando um tipo
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).push()


    let number: string = 35 as unknown as string
    number.length


}