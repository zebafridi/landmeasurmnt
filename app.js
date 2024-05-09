
var sMeter=25.29;
var marla=272.25;
function measur(){
    let inputvalue= document.getElementById("feet").value;

    if(inputvalue===""){
        alert("Put Valid Data")
    }
    else{

    var displayMarla = inputvalue/marla;

    var pMarla=document.getElementById("marla").textContent=displayMarla;

    var displaySmeter = pMarla*sMeter;

    document.getElementById("meter").textContent=displaySmeter;
   
}



    
}