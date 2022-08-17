let filler = document.getElementById('bar')
// lqt i = 0;
function create(){
    let input = document.getElementById("userInput").value;
    conditions(input)
}
function conditions(input){
        if(input<20){
            bar.style.width = input+'%';
            bar.style.backgroundColor = 'red'
        }
        else if(input>20 && input<75){
            bar.style.width = input+'%';
            bar.style.backgroundColor = 'yellow'
        }
        else if(input<0 || input>100){
            alert('Please enter a valid number between 1-100')
        }
        else{
            bar.style.width = input+'%';
            bar.style.backgroundColor = 'green'
        }
}