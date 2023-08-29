


const functions = document.querySelectorAll("#function");

const numbers = document.querySelectorAll("#number");
const screen = document.querySelector("#screen");
let firstNumber=0;
let sign = "";


function set(num){
    switch(num){
        case 1:
            if(firstNumber==0){firstNumber = "1";
            break;}
            firstNumber = firstNumber+"1";
            break;
        case 2:
            if(firstNumber==0){firstNumber = "2";
            break;}
            firstNumber =firstNumber+"2";
            break;
        case 3:
            if(firstNumber==0){firstNumber = "3";
            break;}
            firstNumber=firstNumber+"3";
            break;
        case 4:
            if(firstNumber==0){firstNumber = "4";
            break;}
            firstNumber=firstNumber+"4";
            break;
        case 5:
            if(firstNumber==0){firstNumber = "5";
            break;}
            firstNumber=firstNumber+"5";
            break;
        case 6:
            if(firstNumber==0){firstNumber = "6";
            break;}
            firstNumber=firstNumber+"6";
            break;
        case 7:
            if(firstNumber==0){firstNumber = "7";
            break;}
            firstNumber = firstNumber+"7"; 
            break;
        case 8:
            if(firstNumber==0){firstNumber = "8";
            break;}
            firstNumber =firstNumber+ "8";
            break;
        case 9:
            if(firstNumber==0){firstNumber = "9";
            break;}
            firstNumber = firstNumber+"9";
            break; 
        case 0: 
            if(firstNumber==0){firstNumber = "0";
            break;}
            firstNumber=firstNumber+"0";
            break;
    }
    console.log(sign);
} 

firstNumber=parseInt(firstNumber);

numbers.forEach(number=>number.addEventListener("click",()=>{
    screen.textContent=firstNumber;}));

   
