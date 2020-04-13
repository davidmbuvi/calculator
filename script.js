function getHistory(){
   return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;

}
function getOutput(){
   return document.getElementById("output-value").innerText

}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
        }
        else{
            document.getElementById("output-value").innerText=getFormatedNumber(num);
            }
}
function getFormatedNumber(num){
    if(num == "-"){
        return "";
    }
    var n = Number(num);
    var value= n.toLocaleString("en");
    return value;
}
//printOutput("00004");
// // converting numbers into a formart
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
 //alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){ 
         if(this.id == "clear"){
      printHistory("");
      printOutput("");
 }
 else if(this.id == "backspace"){
     var output=reverseNumberFormat(getOutput()).toString();
     if(output){ //if output is a value
        output = output.substr(0,output.length-1);
        printOutput(output);

        }
     }
     else{
         var output=getOutput();
         var history=getHistory();
         if(output  == "" && history!=""){
             if(isNaN(history[history.length-1])){
                 history = history.substr(0,history.length-1);
             }

         }
         if(output!="" || history!=""){
             //ifconditionis true the fisrt value is assigned else the second value is assigned 
             //condition?true:false
            output= output=="" ? output:reverseNumberFormat(output);
            //output=reverseNumberFormat(output);
            history=history+output;
             if(this.id=="="){
                  var result = eval(history);
                  printOutput(result);
                  printHistory("");
             }
             else{
                 history=history+this.id;
                 printHistory(history);
                 printOutput("");
             }
         }
     }
   });
}
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
    number[i].addEventListener('click',function(){
var output=reverseNumberFormat(getOutput());
if(output!=NaN){ // if output is the number
output=output + this.id;
printOutput(output);
}

    });
}