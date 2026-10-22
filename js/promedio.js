function clprom(){
    let nota1= parseFloat(document.getElementById("nt1").value);
    let nota2= parseFloat(document.getElementById("nt2").value);
    let nota3= parseFloat(document.getElementById("nt3").value);
 
    let prom = (nota1+nota2+nota3)/3;

    document.getElementById("promd").value = `${prom.toFixed(2)}`;
};