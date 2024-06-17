document.addEventListener("DOMContentLoaded", () => {
    $("#searchBtn").click(function (){
        const username = $('#searchInput').val()
        const endpoint = `https://api.github.com/users/${username}`


        fetch(endpoint).then(function(answer) {
            return answer.json()

        })
        .then(function(json){
            console.log(json)
            const Perfilavatar = json.avatar_url
            const Perfilname = json.name
            const Perfilusename = json.login
            const Perfilrepositories = json.public_repos
            const Perfilfollowers = json.followers
            const Perfilfollowing= json.following

            $('#avatar').attr('src', Perfilavatar)
            $('#username').text(Perfilname)
            $('#name').text(Perfilusename)
            $('#repositoriesNumber').text(Perfilrepositories)
            $('#followersNumber').text(Perfilfollowers)
            $('#followingNumber').text(Perfilfollowing)
            $('#profileLink').attr('href', `https://github.com/${username}`)
        })
        
    })
})