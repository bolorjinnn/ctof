var inputGradus=document.getElementsByTagName('input')[0];
console.log(inputGradus)
var result=document.getElementsByTagName('p')[0];
console.log(result)
// f=(c*1.8)+32
var f,gradus,a,b;
function convert(){
   if (inputGradus.value =="") {
    result.innerText="Celsius!"
   } else if(inputGradus.value>50 && inputGradus.value>0) {
    result.innerText="Too hot"
   } else if(inputGradus.value<-50){
    result.innerText="Too cold"
   }
    f=inputGradus.value*1.8+32;
    result.innerText="Farenheit :"+ f ;
    
}