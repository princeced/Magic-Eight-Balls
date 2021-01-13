function show() {

    let userName = document.getElementById("username").value;
    if (userName == "") {
        document.getElementById("errormsg").innerHTML = "Hello Almighty, It will be easy for me if you will enter your name.";
    } else {
        let ball_eigh = document.getElementById("ball_eight");
        ball_eigh.classList.add("shake");


        setTimeout(function() {
            ball_eigh.classList.remove("shake");

        }, 2000);
        setTimeout(function() {
            localStorage.setItem("namePerson", userName);
            window.location = "output.html";
        }, 2000);

    }
}

let namePerson = localStorage.getItem("namePerson");
if (namePerson != "") {

    document.getElementById("second_heading").innerHTML = namePerson;
    document.getElementById('second_heading').innerHTML = `Hello, ${namePerson} enter your question`;
    document.getElementById('question').value = "";
    document.getElementById('second_element').style.display = 'block';
} else {
    document.getElementById('first_heading').innerHTML = `Hello!`;
}


function enterMe() {
    let questionValue = document.getElementById("question").value;
    if (questionValue == "") {
        document.getElementById('quest_para').style.display = 'block';
        document.getElementById('quest_para').innerHTML = "Please enter Question";
    } else {
        document.getElementById('questions').style.display = 'hide';
        let ball_eigh = document.getElementById("ball_eight");
        ball_eigh.classList.add("shake");


        setTimeout(function() {
            ball_eigh.classList.remove("shake");

        }, 2000);
        setTimeout(function() {
            playgame();
        }, 2000);

    }

}






function playgame() {
    let question_para = "";
    document.getElementById('questions').style.display = 'none';
    let c_randomNumber = Math.floor(Math.random() * 8);

    //document.getElementById("ball_eight").className += " shake";



    switch (c_randomNumber) {
        case 0:
            question_para = '\"It is certain\"';
            break;
        case 1:
            question_para = '\"It is decidedly so\"';
            break;
        case 2:
            question_para = '\"Reply hazy try again\"';
            break;
        case 3:
            question_para = '\"Cannot predict now\"';
            break;
        case 4:
            question_para = '\"Do not count on it\"';
            break;
        case 5:
            question_para = '\"My sources say no\"';
            break;
        case 6:
            question_para = '\"Outlook not so good\"'
            break;
        case 7:
            question_para = '\"Signs point to yes\"';
            break;
        default:
            question_para = '\"OOPS!';

    }
    document.getElementById('quest_para').style.display = 'block';
    document.getElementById('quest_para').innerHTML = question_para;


}


function exit() {
    document.getElementById('second_element').style.display = 'none';

    document.getElementById('username').value = "";

    document.getElementById('first_element').style.display = 'block';
    document.getElementById('quest_para').innerHTML = "";
}

function tryagain() {
    document.getElementById('question').value = "";
    document.getElementById('quest_para').innerHTML = "";
}