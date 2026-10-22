function calcu(){
    let nombre= document.getElementById("produc").value;
    let cantid = parseInt(document.getElementById("cant").value);
    let preciu= parseFloat(document.getElementById("preci").value);
    let total = cantid*preciu;

    document.getElementById("subt").value = `${total.toLocaleString()}`;
    
    let iva=total*0.19;
    document.getElementById("iv").value = `${iva.toLocaleString()}`;

    let descuen=total*0.10;
    document.getElementById("desc").value = `${descuen.toLocaleString()}`

    let totalt=total+iva-descuen;
    document.getElementById("to").value = `${totalt.toLocaleString()}`
};