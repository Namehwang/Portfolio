music_name = "./images/music/Alan Walker  Ruben - Heading Home.mp3" //플레이 될 음악
let play_btn = document.querySelector("#play"); //play_btn은 html에 id가 play인 요소를 찾음
let range = document.querySelector("#range"); //range는 html에 id가 play인 요소를 찾음
let play_img = document.querySelector("#play_img") //play_img는 html에 id가 play_ㅑㅡㅎ인 요소를 찾음
let total_time = 0; //total시간은 0
let currentTime = 0; //currentTime은 0
let isPlaying = false; //음악이 플레이 되지 않았을 경우
let song = new Audio(); //새로운 음악을 받기 위한 공간
window.onload = playSong; //실행을 위해 모든 요소가 준비 될경우 시작되도록 하기위함
function playSong(){ //음악이 시작될 때
    song.src = music_name; //음악의 주소는 music_name
    console.log(song) //콘솔창에 입력 확인
    
    
    play_btn.addEventListener('click',function(){ //play_btn에 클릭 이벤트 부여
        if(!isPlaying){ //음악이 플레이 중이지 않을때
            song.play(); //음악이 플레이된다
            isPlaying = true;//음악 플레이는 참
            total_time = song.duration; //총 시간은 음악의 진행시간
            range.max = total_time; // 최대 범위는 총 플레이 시간
            play_img.src = "./images/pause.png"; //일시정지 이미지의 주소 등장
        }else{ //아니라
            song.pause(); //음악이 일시정지 중일때
            isPlaying = false; //음악 플레이는 거짓
            play_img.src = "./images/play.png"; //플레이 이미지 등장
        }
       song.addEventListener('ended',function(){ //음악 끝나면
            song.currentTime = 0 //음악의 최근 시간은 0
            song.pause(); //음악이 일시정지
            isPlaying = false;//음악 플레이는 거짓
            range.value = 0; //음악 바의 값은 0
            play_img.src = "./images/play.png"; // 플레이 이미지 등장
        })
        song.addEventListener('timeupdate',function(){ //음악 플레이 시간 업데이트 이벤트 부여
            range.value = song.currentTime; //음악바의 값은 노래의 최근 시간
        })
        range.addEventListener('change',function(){ //음악바에 변경 이벤트 부여
            song.currentTime = range.value; //음악의 최근 시간은 음악바의 값
        })
       
    })
}