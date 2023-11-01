function display(value){
    document.getElementById('result').value+=value
}
function cls()
{
    document.getElementById('result').value =""
}
function sum(){
    let a=document.getElementById('result').value;
    document.getElementById('result').value=a+"="+eval(a);
}