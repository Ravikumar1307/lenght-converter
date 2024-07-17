function convert(){
var cmval=Number(document.getElementById("input").value)
var inchval=cmval/2.54
var result=document.getElementById("result")
result.innerHTML=inchval.toFixed(2)+"  inches"
}

