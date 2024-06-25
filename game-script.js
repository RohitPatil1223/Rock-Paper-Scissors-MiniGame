
function playAudio(typeOfSound) {

    const resetAudio = new Audio() ;
    resetAudio.src = "/game_audio/system-notification-199277.mp3" ;
    
    const loseAudio = new Audio() ;
    loseAudio.src = "/game_audio/wronganswer-37702.mp3" ;
    
    const winAudio = new Audio() ;
    winAudio.src = "/game_audio/collect-points-190037.mp3" ;
    
    
    const tieAudio = new Audio() ;
    tieAudio.src = "/game_audio/game-tie.mp3" ;
    
    
    
    switch (typeOfSound) {
        case "win": winAudio.play() ;
            break;
    
        case "lose": loseAudio.play() ;
            break;    
    
        case "resetMe" : resetAudio.play() ;
            break;
    
        case "tie"  : tieAudio.play() ;   
    }
    
    }
           
       
    
    
    
            let scors = JSON.parse(localStorage.getItem('scors')) || {
                    wins: 0 ,
                    defeats: 0 ,
                    ties: 0
                };
    
                document.querySelector('.p-scors').innerHTML = `Wins: ${scors.wins}  Defeats: ${scors.defeats} Ties: ${scors.ties}` ;
    
            // if(!scors)
            // {
            //    let scors = {
            //         wins: 0 ,
            //         defeats: 0 ,
            //         ties: 0
            //     };
            // }
            
            function pickupNum()
            {   let num = 10 ;
                num = Math.random() ;
                return num ;
            }
             
            function reset()
            {    
                playAudio("resetMe"); 
               scors.wins = 0 ;
               scors.defeats = 0 ;
               scors.ties = 0 ;
               document.querySelector('.p-scors').innerHTML = `Wins: ${scors.wins}  Defeats: ${scors.defeats} Ties: ${scors.ties}` ;
               localStorage.setItem('scors' , JSON.stringify(scors)) ;
               document.querySelector('.p-action').innerHTML = '' ;
               document.querySelector('.p-status').innerHTML = '' ;
            //    alert(`Score has been reset ..! Wins: ${scors.wins}  Defeats: ${scors.defeats} Ties: ${scors.ties}`) ;
            } 
    
            function play(element)
            {
                num =  pickupNum () ;
                let result = '' ;
    
                if(element === 'Rock')
                {
                    if( num >= 0 && num < 1/3 ){ 
                        playAudio("tie")   ;  
                    scors.ties++;
                    result = 'Tie' ;
                    }
            
                    else if( num >= 1/3 && num < 2/3 ){
                        playAudio("lose"); 
                    scors.defeats++;
                    result = 'Loss' ;
                    }
    
                    else{
                    playAudio("win");     
                    scors.wins++ ;
                    result = 'Win' ;
                     }
                }
                else if(element === 'Paper'){
                    if( num >= 0 && num < 1/3 ){
                    playAudio("win"); 
                    scors.wins++ ;
                    result = 'Win' ;
                    }
                    
                    else if( num >= 1/3 && num < 2/3 ){
                        playAudio("tie")   ; 
                    scors.ties++;
                    result = 'Tie' ;
                    }
    
                    else{
                        playAudio("lose"); 
                    scors.defeats++;
                    result = 'Loss' ;
                    }
                }
    
                else{
                if( num >= 0 && num < 1/3 ){
                    playAudio("lose"); 
                    scors.defeats++;
                    result = 'Loss' ;
                    }
                
                else if( num >= 1/3 && num < 2/3 ){
                    playAudio("win"); 
                    scors.wins++ ;
                    result = 'Win' ;
                    }
    
                else{playAudio("tie")   ; 
                    scors.ties++;
                    result = 'Tie' ;
                    }
                }
    
    
            
                localStorage.setItem('scors' , JSON.stringify(scors)) ;
    
                let computer = '' ;
    
                if(num >= 0 && num < 1/3)
                computer = 'Rock' ;
    
                else if(num >= 1/3 && num < 2/3)
                computer = 'Paper' ;
    
                else
                computer = 'Scissor' ;
    
                status(element, computer) ;
                action(result) ;
                showScors() ;
    
            }
    
            function status(you , computer) {
                let currentStatus = document.querySelector('.p-status') ;
                currentStatus.innerHTML = `You ${you} - ${computer} Computer` ;
            }
    
            function action(result) {
                let str = '' ;
                let currentStatus = document.querySelector('.p-action') ;
    
                if(result === 'Win'){
                 str = 'Congrats you Win..!' 
                 currentStatus.classList.add('green-text');
                 currentStatus.classList.remove('orange-text');
                 currentStatus.classList.remove('red-text');
                }
                else if(result === 'Loss'){
                  str = 'Opps You loss, better luck next time..!'
                  currentStatus.classList.add('red-text');
                  currentStatus.classList.remove('green-text');
                  currentStatus.classList.remove('orange-text');
                }
                else{
                str = 'We have a Tie here..!' ;
                currentStatus.classList.add('orange-text');
                currentStatus.classList.remove('green-text');
                currentStatus.classList.remove('red-text');
                }
                currentStatus.innerHTML = str ;
    
                
            }
    
            function showScors(){
                document.querySelector('.p-scors').innerHTML = `Wins: ${scors.wins}  Defeats: ${scors.defeats} Ties: ${scors.ties}` ;
            }
    
    