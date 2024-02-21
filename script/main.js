$(document).ready(() => {

    $("#telefone").mask("(00) 00000-0000")
    $("#cpf").mask("000.000.000-AA")
    $("#cep").mask("00000-000")

    $("form").validate({
        rules: {
            nome: {
                required: true,
                minlength: 5,
                
            },
            email: {
                required: true,
                email: true

            },
            telefone: {
                required: true

            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 5
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nome: "Por favor informe o seu nome completo",
            email: "Por favor informe seu e-mail",
            telefone: "Por favor informe seu telefone",
            cpf: "Por favor informe seu CPF",
            endereco: "Por favor informe seu endereço",
            cep: "Por favor informe seu CEP",
        }


    })

})