var finalScore, roundScore, activePlayer, gameIsPlaying
function initialization() {
    scores = [0, 0 ];
    activePlayer = 1;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('dice').style.display = 'none';
    
    document.getElementById('score1').textContent = "0";
    document.getElementById('score2').textContent = "0";
    
    document.getElementById('current1').textContent = "0";
    document.getElementById('current2').textContent = "0";
    
    document.getElementById('name1').textContent = "Player 1";
    document.getElementById('name2').textContent = "Player 2";
    
    
    document.querySelector('.player1').classList.remove('active');  
    document.querySelector('.player2').classList.remove('active');
    document.querySelector('.player1').classList.add('active');
}
initialization();

document.querySelector('.new-game').addEventListener('click', initialization);

document.querySelector('.roll').addEventListener('click', function () {
    if (gamePlaying==true) {
        var dice = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice').style.display = 'block';
        document.getElementById('dice').src = 'images/d-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current' + activePlayer).textContent = roundScore;
        } else {
            alert("Opps, number 1 punch in ur face. Next player please!!!");
            nextPlayer();
        }
    }
});

function nextPlayer() {
    if(activePlayer===1){
        activePlayer=2;
    }else{
        activePlayer = 1;
    }
    roundScore =0;
    
    document.getElementById('current1').textContent = '0';
    document.getElementById('current2').textContent = '0';
    
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
    
    document.getElementById('dice').style.display = 'none';
}

document.querySelector('.hold').addEventListener('click', function () {
   
    if(gamePlaying)
    {   
        if(roundScore!=0)
        {

            scores[activePlayer-1] += roundScore;
            document.querySelector('#score'+activePlayer).textContent = scores[activePlayer-1];
            var winningScore = 100;
            if(scores[activePlayer-1] >= winningScore)
            {
                
                document.getElementById('dice').style.display = 'none';
                
                document.querySelector('.player'+activePlayer).classList.remove('active');
                alert('player'+' '+activePlayer+' '+'win the game');
                gamePlaying = false;
            }
            else
            {
                nextPlayer();
            }        
        }
        else
        {
            alert("Are u sure???")
        }
    }
});
        
        
        
        
        
        
        
        
            
            
            
        
        
    
    
    
    
    
    














