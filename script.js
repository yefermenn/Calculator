var number=0;
var input="0";
var output=document.getElementById("output");

function presionar(entrada,valor){
    if(entrada<12){
        if(input=="0"){
            input=valor
            output.value=valor;
        }else{
            input=input += `${valor}`;
            output.value=input;
        }
    }else if(12<entrada<17){
        switch(entrada){
            case 13:
                number=number+parseFloat(input);
                output.value=number
                input="0";
                break;
            case 14:
                number=number-parseFloat(input);
                output.value=number
                input="0";
                break;
            case 15:
                number=number*parseFloat(input);
                output.value=number
                input="0";
                break;
            case 16:
                number=number/parseFloat(input);
                output.value=number
                input="0";
                break; 
        }
    }else if(entrada==17){
        
    }
}