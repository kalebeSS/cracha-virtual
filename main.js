const LinksSocialMidia = {
    facebook: 'kalebe.santana.75',
    instagram: 'lordk.exe',
    github: 'kalebep1234',
    youtube: "",
    twitter: ""

}

function ChangeSocialMidia() {
    for(let i of socialLinksDad.children){
       const social = i.getAttribute('class')
        i.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
    }
}

ChangeSocialMidia()

function getGithubinfos(){
    const url = `https://api.github.com/users/${LinksSocialMidia.github}`

    fetch(url).then(response => response.json()).then(data => {
        userName.textContent = data.name
        description.textContent = data.bio
        mainPhoto.src = data.avatar_url
        userLink.href = data.html_url
        userLogin.textContent = data.login})


    
}
getGithubinfos()