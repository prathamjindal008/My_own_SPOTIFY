console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('bar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');


let songs= [
    {songName: "MOCKINGBIRD" , filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "KABIRA" , filePath: "2.mp3", coverPath: "2.jpeg"},
    {songName: "BADTAMEEZ DIL" , filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "RAATAN LAMBIYAN" , filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "DESPACITO" , filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "RAANJHANAA" , filePath: "6.mp3", coverPath: "6.jpg"},
]


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
}) 

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{    
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${index +1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(index == 5){
        index = 0
    }
    else{
        index += 1
    }
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity= 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index == 0){
        index = 5
    }
    else{
        index -= 1
    }
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity= 1;
})