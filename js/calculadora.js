function suma(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = num1+num2;
    document.getElementById("resultado11").value=`${sum}`;
};
function resta(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let rest = num1-num2;
    document.getElementById("resultado11").value=`${rest}`;
};
function multi(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let mult = num1*num2;
    document.getElementById("resultado11").value=`${mult}`;
};
function divid(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let div = num1/num2;
    document.getElementById("resultado11").value=`${div}`;
};