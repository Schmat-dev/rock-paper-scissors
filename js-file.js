        //play round function
        function playRound(playerSelection) {
        //get computer's choice
            let computerSelection;
            let outcome;
            let rndInt = Math.floor(Math.random() * (4 - 1)) + 1;
        if (rndInt == 1) {
            computerSelection = 'Rock';
        } 
        if (rndInt == 2) {
            computerSelection = 'Scissors';
        }
        if (rndInt == 3) {
            computerSelection = 'Paper';
        }
            if (playerSelection == 'Rock') {
                if (computerSelection == 'Rock') {
                outcome = "It's a tie!";
                }
                if (computerSelection == 'Scissors') {
                outcome = "You win!";
                }
                if (computerSelection == 'Paper') {
                outcome = "You lose!";
                }
            }
            if (playerSelection == 'Paper') {
                if (computerSelection == 'Paper') {
                    outcome =  "It's a tie!";
                }
                if (computerSelection == 'Rock') {
                    outcome =  "You win!";
                }
                if (computerSelection == 'Scissors') {
                    outcome =  "You lose!";
                }
            }
            if (playerSelection == 'Scissors') {
                if (computerSelection == 'Scissors') {
                    outcome =  "It's a tie!"
                }
                if (computerSelection == 'Paper') {
                    outcome =  "You win!"
                }
                if (computerSelection == 'Rock') {
                    outcome =  "You lose!"
                }
            }
        return ['You chose ' + playerSelection + '. The computer chose ' + computerSelection + ". " + outcome, outcome];
        }

let playerscore = 0
let computerscore = 0
let roundcounter = 0

        const paper = document.querySelector('#paperBtn');
        paper.addEventListener('click', () => {
            let outcome = playRound('Paper')
            document.querySelector('#announcer').textContent = outcome[0];
            if (outcome[1] === "You lose!") {
                computerscore ++;
                roundcounter ++;
            } else if (outcome[1] === "You win!") {
                playerscore ++;
                roundcounter ++;
            } else {
                roundcounter ++;
            }
            //update score after round
            document.querySelector('#player-score').textContent = playerscore
            document.querySelector('#computer-score').textContent = computerscore

            if (roundcounter === 5) {
                if (playerscore > computerscore) {
                    document.querySelector('#announcer').textContent = "You win best of 5!"
                    playerscore = 0
                    computerscore = 0
                    roundcounter = 0
                } else if (playerscore < computerscore) {
                    document.querySelector('#announcer').textContent = "You lose best of 5!"
                    playerscore = 0
                    computerscore = 0
                    roundcounter = 0
                } else {
                    document.querySelector('#announcer').textContent = "You tied best of 5!"
                    playerscore = 0
                    computerscore = 0
                    roundcounter = 0
                }
            }
        });

        const rock = document.querySelector('#rockBtn')
        rock.addEventListener('click', () => {
            let outcome = playRound('Rock')
            document.querySelector('#announcer').textContent = outcome[0];
            if (outcome[1] === "You lose!") {
                computerscore ++;
                roundcounter ++;
            } else if (outcome[1] === "You win!") {
                playerscore ++;
                roundcounter ++;
            } else {
                roundcounter ++;
            }
            //update score after round
            document.querySelector('#player-score').textContent = playerscore
            document.querySelector('#computer-score').textContent = computerscore

            if (roundcounter === 5) {
                if (playerscore > computerscore) {
                    document.querySelector('#announcer').textContent = "You win best of 5!"
                    playerscore = 0
                    computerscore = 0
                    roundcounter = 0
                } else {
                    document.querySelector('#announcer').textContent = "You lose best of 5!"
                    playerscore = 0
                    computerscore = 0
                    roundcounter = 0
                }
            }
        });
        
        const scissors = document.querySelector('#scissorsBtn')
        scissors.addEventListener('click', () => {let outcome = playRound('Scissors')
        document.querySelector('#announcer').textContent = outcome[0];
        if (outcome[1] === "You lose!") {
            computerscore ++;
            roundcounter ++;
        } else if (outcome[1] === "You win!") {
            playerscore ++;
            roundcounter ++;
        } else {
            roundcounter ++;
        }
        //update score after round
        document.querySelector('#player-score').textContent = playerscore
        document.querySelector('#computer-score').textContent = computerscore

        if (roundcounter === 5) {
            if (playerscore > computerscore) {
                document.querySelector('#announcer').textContent = "You win best of 5!"
                playerscore = 0
                computerscore = 0
                roundcounter = 0
            } else {
                document.querySelector('#announcer').textContent = "You lose best of 5!"
                playerscore = 0
                computerscore = 0
                roundcounter = 0
            }
        }
        });