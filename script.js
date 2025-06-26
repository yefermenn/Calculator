var number=0;
var input="0";
var output=document.getElementById("output");
var operacion=0;

function presionar(entrada,valor){
    if(entrada<12){
        if(input=="0"){
            input=valor
            output.value=valor;
        }else{
            input=input += `${valor}`;
            output.value=input;
        }
    }else if(12<entrada && entrada<17){
        switch(entrada){
            case 13:
                number=number+parseFloat(input);
                output.value=number
                input="0";
                operacion=1;
                break;
            case 14:
                number=number-parseFloat(input);
                output.value=number
                input="0";
                operacion=2;
                break;
            case 15:
                number=number*parseFloat(input);
                output.value=number
                input="0";
                operacion=3;
                break;
            case 16:
                number=number/parseFloat(input);
                output.value=number
                input="0";
                operacion=4;
                break; 
        }
    }else if(entrada===12){
        switch(operacion){
            case 1:
                number=number+parseFloat(input);
                output.value=number
                input="0";
                operacion=1;
                break;
            case 2:
                number=number-parseFloat(input);
                output.value=number
                input="0";
                operacion=2;
                break;
            case 3:
                number=number*parseFloat(input);
                output.value=number
                input="0";
                operacion=3;
                break;
            case 4:
                number=number/parseFloat(input);
                output.value=number
                input="0";
                operacion=4;
                break;
        }
    }else if(entrada>16){
        number=0;
        output.value=number
        input="0";
    }
}