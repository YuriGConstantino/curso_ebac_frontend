document.addEventListener("DOMContentLoaded", () => {
    $("#searchBtn").click(function () {
        const username = $('#searchInput').val()
        const endpoint = `https://api.github.com/users/${username}`

        if (username.length == 0) {
            throw new Error(alert("Digite um nome"))
        } 


        fetch(endpoint).then(function (response) {
            if(response.status === 404) {
                throw new Error(alert("Nome de usuário incorreta ou não encontrada"))
            }
            return response.json()

        })

            .then(function (json) {
                const Perfilavatar = json.avatar_url
                const Perfilname = json.name
                const Perfilusename = json.login
                const Perfilrepositories = json.public_repos
                const Perfilfollowers = json.followers
                const Perfilfollowing = json.following

                $('#avatar').attr('src', Perfilavatar)
                $('#username').text(Perfilusename)
                $('#name').text(Perfilname)
                $('#repositoriesNumber').text(Perfilrepositories)
                $('#followersNumber').text(Perfilfollowers)
                $('#followingNumber').text(Perfilfollowing)
                $('#profileLink').attr('href', `https://github.com/${username}`)
            })
            .catch(function(error) {
                alert("Ocorreu um erro")
            })

    })
})