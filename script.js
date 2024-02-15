$(document).ready(() => {
    $("#botao-nova-tarefa").click(() => {
        $("#form").slideDown();
    })

    $("#botao-cancelar").click(() => {
        $("#form").slideUp()
    })

    
    $("#form").on("submit", (e) => {
        e.preventDefault()
        const novaTarefa = $("#input-nova-tarefa").val()
        
        if (novaTarefa === "") {
            alert("O campo de adicionar a tarefa não pode estar vazio")
            
        } else {
            const novoItem = $("<li id='tarefa-lista'></li>")
            $(`<h3 id='tarefa'>${novaTarefa}</h3>`).appendTo(novoItem)
            $(novoItem).appendTo("ul")
            $("#input-nova-tarefa").val("")
            
        }
        
        
    })
    
    $("ul").on("click", "li", function() {
        $(this).toggleClass("tarefa-feita")
    })

})