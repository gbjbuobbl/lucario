player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1score ;
document.getElementById("player1_score").innerHTML = player1score ;

document.getElementById("playerquestion").innerHTML = "quetion turn -" + player1_name;
document.getElementById("playeranswer").innerHTML = "answer turn -" + player2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    quetion_number = "<h4>"+ number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='bh' >";
    check_button = "<br><br><button class='btn btn-info' onclick='check'>check</button>";
    row = quetion_number + input_box + check_button ;
    document.getElementById("bholu").innerHTML = row ;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
