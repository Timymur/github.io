let operand1 = null;
let operation = null;


function cancel(){
    let operand1 = null;
    let operand2 = null;

    document.getElementsByClassName("display")[0].innerHTML = "0";
}


function inputOperation(argument, display){
    operation = argument;
    operand1 = Number(display);
    display = 0;
    document.getElementsByClassName("display")[0].innerHTML = display; 
    console.log(operation);
}

function calculate(display){
    if(operation == '+'){
        
        let otvet =  operand1 + Number(display)
        console.log(String(otvet));
        document.getElementsByClassName("display")[0].innerHTML = String(otvet) ; 
        return;
    }
    

    if(operation == '-'){
        document.getElementsByClassName("display")[0].innerHTML = operand1 - Number(display)  ;
        return;
    }
        

    if(operation == 'x'){
        document.getElementsByClassName("display")[0].innerHTML = operand1 * Number(display)  ;
        return;
    }
        

    if(operation == '/'){
        if(Number(display) == 0)
            return;
        document.getElementsByClassName("display")[0].innerHTML = operand1 / Number(display)  ;
        return;
    }
        

    if(operation == '^'){
        document.getElementsByClassName("display")[0].innerHTML =Math.pow(operand1, Number(display) )   ;
        return;
    }
        

    if(operation == '%'){
       
        document.getElementsByClassName("display")[0].innerHTML = operand1/100 * Number(display)  ;
        return;
    }
       

    
}

function input(argument){


    let display = document.getElementsByClassName("display")[0].innerHTML;

    if(argument == 'C'){
        cancel();
        return;
    }

    if(argument == "+" ||  argument == "-" || argument == "x" || argument == "^" || argument == "/" || argument == "%"){

        inputOperation(argument, display);
        return;
    }

    if(argument == '='){
        calculate(display);
        return;
    }




    if(display != 0){
        
        display+= argument;
       
        document.getElementsByClassName("display")[0].innerHTML = display;   
    }

    else{
        
        document.getElementsByClassName("display")[0].innerHTML = argument;
    }
    
}
