


const functions = document.querySelectorAll("#function");

const numbers = document.querySelectorAll("#number");
const screen = document.querySelector("#screen");
let firstNumber=0;
let sign = "";


    functions.forEach(func =>func.addEventListener("click",()=>{sign= func.textContent}));
    

function set(num){
    switch(num){
        case 1:
            if(sign!=""){
                if(second==0){second = "1";
            break;}
            second = second+"1";
            break;
            }
            if(firstNumber==0){firstNumber = "1";
            break;}
            firstNumber = firstNumber+"1";
            break;
        case 2:
            if(sign!=""){
                if(second==0){second = "2";
            break;}
            second = second+"2";
            break;
            }
            if(firstNumber==0){firstNumber = "2";
            break;}
            firstNumber =firstNumber+"2";
            break;
        case 3:
            if(sign!=""){
                if(second==0){second = "3";
            break;}
            second = second+"3";
            break;
            }
            if(firstNumber==0){firstNumber = "3";
            break;}
            firstNumber=firstNumber+"3";
            break;
        case 4:
            if(sign!=""){
                if(second==0){second = "4";
            break;}
            second = second+"4";
            break;
            }
            if(firstNumber==0){firstNumber = "4";
            break;}
            firstNumber=firstNumber+"4";
            break;
        case 5:
            if(sign!=""){
                if(second==0){second = "5";
            break;}
            second = second+"5";
            break;
            }
            if(firstNumber==0){firstNumber = "5";
            break;}
            firstNumber=firstNumber+"5";
            break;
        case 6:
            if(sign!=""){
                if(second==0){second = "6";
            break;}
            second = second+"6";
            break;
            }
            if(firstNumber==0){firstNumber = "6";
            break;}
            firstNumber=firstNumber+"6";
            break;
        case 7:
            if(sign!=""){
                if(second==0){second = "7";
            break;}
            second = second+"7";
            break;
            }
            if(firstNumber==0){firstNumber = "7";
            break;}
            firstNumber = firstNumber+"7"; 
            break;
        case 8:
            if(sign!=""){
                if(second==0){second = "8";
            break;}
            second = second+"8";
            break;
            }
            if(firstNumber==0){firstNumber = "8";
            break;}
            firstNumber =firstNumber+ "8";
            break;
        case 9:
            if(sign!=""){
                if(second==0){second = "9";
            break;}
            second = second+"9";
            break;
            }
            if(firstNumber==0){firstNumber = "9";
            break;}
            firstNumber = firstNumber+"9";
            break; 
        case 0: 
        if(sign!=""){
            if(second==0){second = "0";
        break;}
        second = second+"0";
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
    screen.textContent=firstNumber;}));
    let second = 0;
function subtract(first){
    screen.textContent="";
  

}

