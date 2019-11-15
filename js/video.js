
window.addEventListener("load", ()=>{
    let contenedorVideos = document.getElementsByClassName('cancion-video');
    for (const contenedor of contenedorVideos) {
        contenedor.addEventListener("mouseenter",function(){
            let video= this.getElementsByClassName('video-auto')[0];
            video.play();
        })
        contenedor.addEventListener("mouseleave",function(){
            let video= this.getElementsByClassName('video-auto')[0];
            video.pause();
            video.currentTime = 0;
            video.load();

        })
    }

});
