
let guessedNumber;
let number=Math.floor((Math.random()*20)+1);
let highScore=0;
let score=20;

document.querySelector('.check').addEventListener('click',function (){ guessedNumber = Number(document.querySelector('.guess').value);


if( !guessedNumber ) {
    document.querySelector('.message').textContent = 'No Number!';
} 
else if( guessedNumber === number) {
    if(highScore < score) {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
    document.querySelector('.number').textContent=number;
    document.querySelector('.message').textContent = 'right guess';
}
else if(guessedNumber != number){
    score--;
            document.querySelector('.score').textContent=score;
    if( score > 0 ){
        if(guessedNumber < number){
            document.querySelector('.message').textContent = 'too low';
        }
        else {
            document.querySelector('.message').textContent = 'too high'; 
        }
    }
    else{
        
        document.querySelector('.message').textContent = 'you lost the game';
    }
}
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number=Math.floor((Math.random()*20)+1);
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';

})