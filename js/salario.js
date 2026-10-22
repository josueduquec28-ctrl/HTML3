function sld(){
    let valorhor= parseFloat(document.getElementById("vh").value);
    let horast= parseInt(document.getElementById("ht").value);

    let totalt= horast*valorhor;

    document.getElementById("sp").value=`$${totalt.toLocaleString('es-CO')}`;
};