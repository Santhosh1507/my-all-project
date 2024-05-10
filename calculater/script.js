function calculater(val){
   document.getElementById("display").value = document.getElementById("display").value + val
}

function clearcalculater(){
   document.getElementById("display").value = "";
}

function displayallvalue(val){
   var inputelement = document.getElementById("display").value
   var result = eval(inputelement);

   document.getElementById("display").value = result;
}
