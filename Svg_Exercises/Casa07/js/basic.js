let musica = document.getElementById("musica");
let video = document.getElementById("video");
let botao = document.getElementById("botao-play-pause");

function play(){
    musica.play();
}

function pause(){
    musica.pause();
}

function volume(valor){
    musica.volume += valor;
}

function playPause(){
    if(video.paused){
        video.play();
        botao.src = "img/pause_black_24dp.svg";
    }else{
        video.pause();
        botao.src = "img/play_arrow_black_24dp.svg";
    }
}

function volumeVideo(valor){
    video.volume += valor;
}