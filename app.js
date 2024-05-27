/* 1 = rock
   2 = paper
   3 = scissors
*/

/*
    What i have lernt from this project:
    1- how to use event listener / remove event listener
*/

const rock = 1;
const paper = 2;
const scissors = 3;

let user_value = 0;
let opponent_value = 0;

let user_win_count = 0;
let opponent_win_count =0;

let rock_btn = document.getElementById('rock_btn');
let paper_btn = document.getElementById('paper_btn');
let scissors_btn = document.getElementById('scissors_btn');


/*************************** rock ***********/

function rock_function() {

    // opponent side
    opponent_value =  Math.floor((Math.random() * 3)+1);
    opponent_play  = document.getElementById('opponent');
    switch(opponent_value){
        case rock:
            opponent_play.src = "opponent/op_rock.png";
            break;
        case paper:
            opponent_play.src = "opponent/op_paper.png";
            break;
        case scissors:
            opponent_play.src = "opponent/op_scissors.png";
            break;
    }

    // user side
    user_value = rock;
    user_play = document.getElementById('user');
    user_play.src = "user/user_rock.png";

    
    // increment score 
    if (user_value == opponent_value){
        
    }
    else if (user_value == rock && opponent_value == paper){
        opponent_win_count++;
    }
    else if (user_value == rock && opponent_value == scissors){
        user_win_count++;
    }

    // display score
    document.getElementById('user_score').textContent = user_win_count;
    document.getElementById('opponent_score').textContent = opponent_win_count;

    if(user_win_count === 3){
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "User Won press any button to reset";

        
        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);
            


    }
    else if(opponent_win_count === 3){
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "Nsoo7y Won press any button to reset";

       
        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);
       
    }

}


/*************************** paper ***********/
function paper_function() {
    

    // opponent side
    let opponent_value =  Math.floor((Math.random() * 3)+1);
    opponent_play  = document.getElementById('opponent');
    switch(opponent_value){
        case rock:
            opponent_play.src = "opponent/op_rock.png";
            break;
        case paper:
            opponent_play.src = "opponent/op_paper.png";
            break;
        case scissors:
            opponent_play.src = "opponent/op_scissors.png";
            break;
    }

    // user side
    user_value = paper;
    user_play = document.getElementById('user');
    user_play.src = "user/user_paper.png";


    if (user_value == opponent_value){
        
    }
    else if (user_value ==  paper&& opponent_value == rock){
        user_win_count++;
    }
    else if (user_value == paper && opponent_value == scissors){
        opponent_win_count++;
    }



    document.getElementById('user_score').textContent = user_win_count;
    document.getElementById('opponent_score').textContent = opponent_win_count;

    if(user_win_count === 3){  
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "User Won press any button to reset";

        
        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);
    
    }
    else if(opponent_win_count === 3){
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "Nsoo7y Won press any button to reset";

       
        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);
    }




}


/*************************** scissors ***********/
function scissors_function() {
    
    // opponent side
    let opponent_value =  Math.floor((Math.random() * 3)+1);
    opponent_play  = document.getElementById('opponent');
    switch(opponent_value){
        case rock:
            opponent_play.src = "opponent/op_rock.png";
            break;
        case paper:
            opponent_play.src = "opponent/op_paper.png";
            break;
        case scissors:
            opponent_play.src = "opponent/op_scissors.png";
            break;
    }


    // user side
    user_value = scissors;
    user_play = document.getElementById('user');
    user_play.src = "user/user_scissors.png";


    if (user_value == opponent_value){
        
    }
    else if (user_value == scissors && opponent_value == rock){
        opponent_win_count++;
    }
    else if (user_value == scissors && opponent_value == paper){
        user_win_count++;
    }
    

    document.getElementById('user_score').textContent = user_win_count;
    document.getElementById('opponent_score').textContent = opponent_win_count;

    if(user_win_count === 3){
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "User Won press any button to reset";


        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);

    
    }
    else if(opponent_win_count === 3){
        document.getElementById('user_score').textContent = user_win_count;
        document.getElementById('opponent_score').textContent = opponent_win_count;
        document.getElementById('result').textContent = "Nsoo7y Won press any button to reset";


        rock_btn.addEventListener('click',reset);
        paper_btn.addEventListener('click',reset);
        scissors_btn.addEventListener('click',reset);

    }


}


/************************* helper functions *********************/



function reset(){
    user_win_count = 0;
    opponent_win_count = 0;
    document.getElementById('result').textContent = " ";
    document.getElementById('user_score').textContent = user_win_count;
    document.getElementById('opponent_score').textContent = opponent_win_count;

    rock_btn.removeEventListener('click',reset);
    paper_btn.removeEventListener('click',reset);
    scissors_btn.removeEventListener('click',reset);
}






