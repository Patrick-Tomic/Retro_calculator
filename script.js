


const clear = document.querySelector("#clear");
const functions = document.querySelectorAll("#function");
const equal = document.querySelector("#equal");
const numbers = document.querySelectorAll("#number");
const screen = document.querySelector("#screen");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
let firstNumber=0;
let result;
let thirdNumber = 0;
let sign = "";
let hold = "";
let secondNumber = 0;
let int = true;
let float = false;

   
function Delete(str){
    let array = str.split("");
    array.splice(array.length-1,array.length);
    return array.join("");
}

    backspace.addEventListener("click",()=>{
        if(sign!=""){
           secondNumber=Delete(secondNumber);
           
            
        }
        else{
            firstNumber=Delete(firstNumber);
           
        }
    })
    backspace.addEventListener("click",()=>{
        if(sign!=""){
          
            screen.textContent=secondNumber;
            
        }
        else{
            
            screen.textContent=firstNumber;
        }
    })
    decimal.addEventListener("click",()=>{
        int = false;
        float = true;
    })
    functions.forEach(func =>func.addEventListener("click",()=>{
        
        sign= func.textContent;
        
    }));
    

function set(num){
    if(sign!=""){
    }
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
        case 10:
            if(sign !=""){
                if(secondNumber.indexOf(".")!=-1){
                    break;
                }
                if(secondNumber ==0){secondNumber=".";
                break;};
                secondNumber = secondNumber+".";
                break;
            }
            if(firstNumber.indexOf(".")!=-1){
                break;
            }
            if(firstNumber ==0){firstNumber = ".";
            break;}
            firstNumber = firstNumber+".";
            break;
        
            
    }
} 
numbers.forEach(number=>number.addEventListener("click",()=>{
    if(sign!=""){
        screen.textContent=secondNumber;
    }   
    else{screen.textContent=firstNumber;}
    
    
    
}));
    
    
    
function subtract(first,second){
    if(float ==true){
        result=parseFloat(first)-parseFloat(second);
        screen.textContent = result
        return;
    }
        result=parseInt(first)-parseInt(second);
        screen.textContent=result
    }

function addition(first,second){
    if(float ==true){
        result=parseFloat(first)+parseFloat(second);
        screen.textContent = result
        return;
    }
    result=parseInt(first)+parseInt(second);
   screen.textContent=result
}
function multiply(first,second){
    if(float ==true){
        result=parseFloat(first)*parseFloat(second);
        screen.textContent = result
        return;
    }
    screen.textContent = parseInt(first)*parseInt(second);
}
function divide(first, second){
    if(float ==true){
        result = parseFloat(first)/parseFloat(second);
        screen.textContent = result
        return;
    }
    result=parseInt(first)/parseInt(second);
    screen.textContent = result;
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
    secondNumber = 0;
    firstNumber=result;
})

