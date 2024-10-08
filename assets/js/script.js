let textAnswer = "this text is just a placeholder"


function updateVariable(radioButton) {
    


    console.log(radioButton.id);

    if(radioButton.id==="cool"){
        textAnswer = "You are cool!"
    }
    else if(radioButton.id==="radical"){
        textAnswer = "You are radical!"
    }
    else if(radioButton.id==="awesome"){
        textAnswer = "You are awesome!"
    };


    document.getElementById("demo").innerHTML = textAnswer;
    // Display the selected value
}



