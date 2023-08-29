


const functions = document.querySelectorAll("#function");
const equal = document.querySelector("#equal");
const numbers = document.querySelectorAll("#number");
const screen = document.querySelector("#screen");
let firstNumber=0;
let sign = "";


    functions.forEach(func =>func.addEventListener("click",()=>{sign= func.textContent}));
    
if(sign!=""){
    screen.textContent="";
}
function set(num){
    switch(num){
        case 1:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "1";
            break;}
            secondNumber = secondNumber+"1";
            break;
            }
            if(firstNumber==0){firstNumber = "1";
            break;}
            firstNumber = firstNumber+"1";
            break;
        case 2:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "2";
            break;}
            secondNumber = secondNumber+"2";
            break;
            }
            if(firstNumber==0){firstNumber = "2";
            break;}
            firstNumber =firstNumber+"2";
            break;
        case 3:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "3";
            break;}
            secondNumber = secondNumber+"3";
            break;
            }
            if(firstNumber==0){firstNumber = "3";
            break;}
            firstNumber=firstNumber+"3";
            break;
        case 4:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "4";
            break;}
            secondNumber = secondNumber+"4";
            break;
            }
            if(firstNumber==0){firstNumber = "4";
            break;}
            firstNumber=firstNumber+"4";
            break;
        case 5:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "5";
            break;}
            secondNumber = secondNumber+"5";
            break;
            }
            if(firstNumber==0){firstNumber = "5";
            break;}
            firstNumber=firstNumber+"5";
            break;
        case 6:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "6";
            break;}
            secondNumber = secondNumber+"6";
            break;
            }
            if(firstNumber==0){firstNumber = "6";
            break;}
            firstNumber=firstNumber+"6";
            break;
        case 7:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "7";
            break;}
            secondNumber = secondNumber+"7";
            break;
            }
            if(firstNumber==0){firstNumber = "7";
            break;}
            firstNumber = firstNumber+"7"; 
            break;
        case 8:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "8";
            break;}
            secondNumber = secondNumber+"8";
            break;
            }
            if(firstNumber==0){firstNumber = "8";
            break;}
            firstNumber =firstNumber+ "8";
            break;
        case 9:
            if(sign!=""){
                if(secondNumber==0){secondNumber = "9";
            break;}
            secondNumber = secondNumber+"9";
            break;
            }
            if(firstNumber==0){firstNumber = "9";
            break;}
            firstNumber = firstNumber+"9";
            break; 
        case 0: 
        if(sign!=""){
            if(secondNumber==0){secondNumber = "0";
        break;}
        secondNumber = secondNumber+"0";
        break;
        }
            if(firstNumber==0){firstNumber = "0";
            break;}
            firstNumber=firstNumber+"0";
            break;
    }
} 

firstNumber=parseInt(firstNumber);

numbers.forEach(number=>number.addEventListener("click",()=>{
    if(sign!=""){
        screen.textContent=secondNumber;
    }
    screen.textContent=firstNumber;}));
   
    let secondNumber = 0;
    secondNumber=parseInt(secondNumber);
function subtract(first,second){
        screen.textContent=first-second;
    }

function addition(first,second){
   screen.textContent=first+second;
}
function multiply(first,second){
    screen.textContent = first*second;
}
function divide(first, second){
    screen.textContent = first/second;
}
equal.addEventListener("click",()=>{
    if(sign == "+"){
        addition(firstNumber,secondNumber);
    }else if(sign == "-"){
        subtract(firstNumber,secondNumber);
    }else if(sign == "*"){
        multiply(firstNumber,secondNumber);
    }else if(sign =="/"){
        divide(firstNumber,secondNumber);
    }
})

