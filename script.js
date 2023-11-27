function myfunct() {
    let a1,a2,a3,a4,a5,a6,a7,a8,a9;
    a1=document.getElementById('a1').value;
    a2=document.getElementById('a2').value;
    a3=document.getElementById('a3').value;
    a4=document.getElementById('a4').value;
    a5=document.getElementById('a5').value;
    a6=document.getElementById('a6').value;
    a7=document.getElementById('a7').value;
    a8=document.getElementById('a8').value;
    a9=document.getElementById('a9').value;

    let a1btn, a2btn, a3btn, a4btn, a5btn, a6btn, a7btn, a8btn, a9btn;
    a1btn = document.getElementById('a1');
    a2btn = document.getElementById('a2');
    a3btn = document.getElementById('a3');
    a4btn = document.getElementById('a4');
    a5btn = document.getElementById('a5');
    a6btn = document.getElementById('a6');
    a7btn = document.getElementById('a7');
    a8btn = document.getElementById('a8');
    a9btn = document.getElementById('a9');




//if player 1 wins//

    if ((a1=='x' || a1=='X') && (a2=='x' || a2=='X') && ( a3=='x' || a3=='X')){
        document.getElementById('print')
        .innerHTML = "Player 1 Wins";
        endGame(1);
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = 'green';
        a2btn.style.color = 'green';
        a3btn.style.color = 'green';
        return;
    }
    

    else if ((a1 == 'x' || a1 == 'X') && (a4 == 'x' || a4 == 'X') && (a7 == 'x' || a7 == 'X')) {
        document.getElementById('print')
        .innerHTML = "Player 1 Wins";
        endGame(1);
        a2btn.disabled = true;
        a3btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = 'green';
        a4btn.style.color = 'green';
        a7btn.style.color = 'green';
        return;
    }
    else if ((a7 == 'x' || a7=='X') && (a8=='x' || a8=='X') && (a9=='x' || a9=='X')) {
        document.getElementById('print')
        .innerHTML = "Player 1 Wins";
        endGame(1);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;

        a7btn.style.color = 'green';
        a8btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a3=='x' || a3=='X') && (a6=='x' || a6=='X') && (a9=='x' || a9=='X')) {
        document.getElementById('print')
        .innerHTML="Player 1 Wins";
        endGame(1);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a3btn.style.color = 'green';
        a6btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a1=='x' || a1=='X') && (a5=='x' || a5=='X') && (a9=='x' || a9=='X')) {
        document.getElementById('print')
        .innerHTML="Player 1 Wins";
        endGame(1);
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a1btn.style.color = 'green';
        a5btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a3=='x' || a3=='X') && (a5=='x' || a5=='X') && (a7=='x' || a7=='X')) {
        document.getElementById('print')
        .innerHTML="Player 1 Wins";
        endGame(1);
        a2btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;
        a1btn.disabled = true;

        a3btn.style.color = 'green';
        a5btn.style.color = 'green';
        a7btn.style.color = 'green';
        return;
    }
    else if ((a2=='x' || a2=='X') && (a5=='x' || a5=='X') && (a8=='x' || a8=='X')) {
        document.getElementById('print')
        .innerHTML= "Player 1 Wins";
        endGame(1);

        a1btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a9btn.disabled = true;

        a2btn.style.color = 'green';
        a5btn.style.color = 'green';
        a8btn.style.color = 'green';
        return;
    }

    else if ((a4=='x' || a4=='X') && (a5=='x' || a5=='X') && (a6=='x' || a6=='X')) {
        document.getElementById('print')
        .innerHTML= "Player 1 Wins";
        endGame(1);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a4btn.style.color = 'green';
        a5btn.style.color = 'green';
        a6btn.style.color = 'green';
        return;
    }

//if Player 2 wins//
    if ((a1=='o' || a1=='O') && (a2=='o' || a2=='O') && ( a3=='o' || a3=='O')){
        document.getElementById('print')
        .innerHTML = "Player 2 Wins";
        endGame(2);
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = 'green';
        a2btn.style.color = 'green';
        a3btn.style.color = 'green';
        return;
    }
    else if ((a1 == 'o' || a1 == 'O') && (a4 == 'o' || a4 == 'O') && (a7 == 'o' || a7 == 'O')) {
        document.getElementById('print')
        .innerHTML = "Player 2 Wins";
        endGame(2);
        a2btn.disabled = true;
        a3btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a1btn.style.color = 'green';
        a4btn.style.color = 'green';
        a7btn.style.color = 'green';
        return;
    }
    else if ((a7 == 'o' || a7=='O') && (a8=='o' || a8=='O') && (a9=='o' || a9=='O')) {
        document.getElementById('print')
        .innerHTML = "Player 2 Wins";
        endGame(2);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a6btn.disabled = true;

        a7btn.style.color = 'green';
        a8btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a3=='o' || a3=='O') && (a6=='o' || a6=='O') && (a9=='o' || a9=='O')) {
        document.getElementById('print')
        .innerHTML="Player 2 Wins";
        endGame(2);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a4btn.disabled = true;
        a5btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a3btn.style.color = 'green';
        a6btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a1=='o' || a1=='O') && (a5=='o' || a5=='O') && (a9=='0' || a9=='O')) {
        document.getElementById('print')
        .innerHTML="Player 2 Wins";
        endGame(2);
        a2btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;

        a1btn.style.color = 'green';
        a5btn.style.color = 'green';
        a9btn.style.color = 'green';
        return;
    }
    else if ((a3=='o' || a3=='O') && (a5=='o' || a5=='O') && (a7=='o' || a7=='O')) {
        document.getElementById('print')
        .innerHTML="Player 2 Wins";
        endGame(2);
        a2btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;
        a1btn.disabled = true;

        a3btn.style.color = 'green';
        a5btn.style.color = 'green';
        a7btn.style.color = 'green';
        return;
    }
    else if ((a2=='o' || a2=='O') && (a5=='o' || a5=='O') && (a8=='o' || a8=='O')) {
        document.getElementById('print')
        .innerHTML= "Player 2 Wins";
        endGame(2);
        a1btn.disabled = true;
        a3btn.disabled = true;
        a4btn.disabled = true;
        a6btn.disabled = true;
        a7btn.disabled = true;
        a9btn.disabled = true;

        a2btn.style.color = 'green';
        a5btn.style.color = 'green';
        a8btn.style.color = 'green';
        return;
    }

    else if ((a4=='o' || a4=='O') && (a5=='o' || a5=='O') && (a6=='o' || a6=='O')) {
        document.getElementById('print')
        .innerHTML= "Player 2 Wins";
        endGame(2);
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        a7btn.disabled = true;
        a8btn.disabled = true;
        a9btn.disabled = true;

        a4btn.style.color = 'green';
        a5btn.style.color = 'green';
        a6btn.style.color = 'green';
        return;
    }

//Check for a tie//

    else if ((a1=='X' || a1== 'O') && (a2=='X' || a2== 'O') && (a3=='X' || a3=='O') && (a4=='X' || a4=='O') && (a5=='X' || a5=='O') && (a6=='X' || a6=='O') && (a7=='X' || a7=='O') && (a8=='X' || a8=='O') && (a9=='X' || a9=='O')) {
        document.getElementById('print')
        .innerHTML = "You Both Suck";
    }
    else{
        if (flag==1) {
            document.getElementById('print')
            .innerHTML = "Player 1 Turn";
        }
        else {
            document.getElementById('print')
            .innerHTML = "Player 2 turn";
        }
    }

}

//Define game variables//
let gameOver = false;


//input in square//

flag=1;
function myfunct_3() {
    if (flag==1) {
        document.getElementById('a1').value='X';
        document.getElementById('a1').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a1').value='O';
        document.getElementById('a1').disabled=true;
        flag=1;
    }
}

function myfunct_4() {
    if (flag==1) {
        document.getElementById('a2').value='X';
        document.getElementById('a2').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a2').value='O';
        document.getElementById('a2').disabled=true;
        flag=1;
    }
}
function myfunct_5() {
    if (flag==1) {
        document.getElementById('a3').value='X';
        document.getElementById('a3').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a3').value='O';
        document.getElementById('a3').disabled=true;
        flag=1;
    }
}
function myfunct_6() {
    if (flag==1) {
        document.getElementById('a4').value='X';
        document.getElementById('a4').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a4').value='O';
        document.getElementById('a4').disabled=true;
        flag=1;
    }
}
function myfunct_7() {
    if (flag==1) {
        document.getElementById('a5').value='X';
        document.getElementById('a5').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a5').value='O';
        document.getElementById('a5').disabled=true;
        flag=1;
    }
}
function myfunct_8() {
    if (flag==1) {
        document.getElementById('a6').value='X';
        document.getElementById('a6').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a6').value='O';
        document.getElementById('a6').disabled=true;
        flag=1;
    }
}
function myfunct_9() {
    if (flag==1) {
        document.getElementById('a7').value='X';
        document.getElementById('a7').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a7').value='O';
        document.getElementById('a7').disabled=true;
        flag=1;
    }
}
function myfunct_10() {
    if (flag==1) {
        document.getElementById('a8').value='X';
        document.getElementById('a8').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a8').value='O';
        document.getElementById('a8').diabled=true;
        flag=1;
    }
}
function myfunct_11() {
    if (flag==1) {
        document.getElementById('a9').value='X';
        document.getElementById('a9').disabled=true;
        flag=0;
    }
    else {
        document.getElementById('a9').value='O';
        document.getElementById('a9').disabled=true;
        flag=1;
    }
}

// reset game//
function endGame(winner) {
    gameOver = true; 

    if(winner == 0) {console.log("You Both Suck");
} else {
    console.log('Player ${winner} wins');
}
    
}
