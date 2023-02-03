const popup = document.getElementById('popup');
const gotchaButton = document.getElementById('gotcha-button');
const nextButton = document.getElementById("next-button");
const wrongText = document.getElementById("wrong-text");
const images = document.getElementsByClassName('image-choice');
const questionLine1 = document.getElementById('question');
const questionLine2 = document.getElementById('object');



let isPopupOpen = false;
const questionData = { "questions" : [
    {
        "question": "Select all images with",
        "object": "a bus",
        "images": [
            "/images/bus/g-1.png",
            "/images/bus/g-2.png",
            "/images/bus/g-3.png",
            "/images/bus/g-4.png",
            "/images/bus/g-5.png",
            "/images/bus/g-6.png",
            "/images/bus/g-7.png",
            "/images/bus/g-8.png",
            "/images/bus/g-9.png"
        ]
    },
    {
        "question": "Select all images with",
        "object": "Destinguished workers",
        "images": [
            "/images/animals/g-1.png",
            "/images/animals/g-2.png",
            "/images/animals/g-3.png",
            "/images/animals/g-4.png",
            "/images/animals/g-5.png",
            "/images/animals/g-6.png",
            "/images/animals/g-7.png",
            "/images/animals/g-8.png",
            "/images/animals/g-9.png"
        ]
    }
]

}



gotchaButton.onclick = () => {
    popup.style.visibility = 'visible';
    gotchaButton.disabled = true;

    if (!isPopupOpen) {
        populateQuestionFields();
        for (var i = 0; i < 9; i++) {
            (function(index) {
                 images[index].addEventListener("click", function() {
                    onImageClick(index);
                  })
            })(i);
         }
    }
    isPopupOpen = true;
}

nextButton.onclick = () => {
    popup.style.borderColor = "lightcoral";
    wrongText.style.visibility = 'visible';
    for (var i = 0; i < 9; i++) {
        (function(index) {
            images[index].style.outlineWidth = "0";
        })(i);
     }
    populateQuestionFields();
    setTimeout(() => {
       popup.style.borderColor = "gray"; 
    }, 1000);
}

function populateQuestionFields() {
    let questionID = Math.floor(Math.random() * questionData.questions.length);
    let question = questionData.questions[questionID];
    questionLine1.innerText = question.question;
    questionLine2.innerText = question.object;

    for (var i = 0; i<9; i++) {
        images[i].src = question.images[i];
    }
}

function onImageClick(imageIndex) {
    if (images[imageIndex].style.outlineWidth === "7px") {
        images[imageIndex].style.outlineWidth = "0";
    } else {
        images[imageIndex].style.outlineWidth = "7px";
    }
}