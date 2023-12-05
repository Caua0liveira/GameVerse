function chama_personagem(posicao){
    document.getElementById("conteudo").style.visibility = "visible"
    fetch("http://localhost:3000/jogadores")
.then(response => {
    return response.json()
}).then(jogador1Json => {

    console.log(jogador1Json)

    document.getElementById("conteudo").innerHTML= ""


        document.getElementById("conteudo").innerHTML+=

        
        "<b>Nome: </b>" + jogador1Json[posicao].nome +
        "<p> <b>Aparência: </b> "+ jogador1Json[posicao].time+"</p>" + 
        "<p> <b>Habilidades: </b> "+ jogador1Json[posicao].posicao+"</p>" +  
        "<img src=' "+ jogador1Json[posicao].imagem+" ' alt=''>"  
        

});

}
  