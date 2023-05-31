let incrementBtn = document.querySelector (`.increment`);
let output = document.querySelector(`.output`)

//*    INCREMENT 

function incrementNum() {
    let newValue = Number(output.value);
    newValue = newValue + 1;
    output.value = newValue;

}


incrementBtn.addEventListener (`click`, incrementNum );


//* DECREMENT


let decrementBtn = document.querySelector (`.decrement`);

function decrementNum() {
    let newValue = Number (output.value);

    if (newValue == 1) {
        return false;
    }

    newValue = newValue - 1;
    output.value = newValue
}

decrementBtn.addEventListener (`click`, decrementNum);




//* RANGE SLIDER START

let slider = document.querySelector(`.slider`)
let result = document.querySelector(`.rangSlider .output h2 span`)


function updateRange () {
    let newValue = slider.value;
    result.innerHTML = newValue;
}

slider.addEventListener (`input`,updateRange);


