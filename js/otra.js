function calcupre(){
    let invits = parseInt(document.getElementById("invit").value);
    let costoc = parseInt(document.getElementById("costci").value);
    let costob= parseInt(document.getElementById("costbi").value);
    let costod= parseInt(document.getElementById("costd").value);
    let costomua= parseInt(document.getElementById("costma").value);
    let propi = parseInt(document.getElementById("prop").value);

    let comidat=invits*costoc;
    let bebidat =invits*costob;
    let decor=invits*costod;
    let music=invits*costomua;
    let subt=comidat+bebidat+decor+music;
    let propina=subt*10/100;
    let totalg=subt+propina;
    let costoinvi=totalg/invits;

    document.getElementById("ct").innerText = `${comidat.toLocaleString()}`;
    document.getElementById("bt").innerText = `${bebidat.toLocaleString()}`;
    document.getElementById("dc").innerText = `${decor.toLocaleString()}`;
    document.getElementById("mua").innerText = `${music.toLocaleString()}`;
    document.getElementById("sbt").innerText = `${subt.toLocaleString()}`;
    document.getElementById("prop").innerText = `${propina.toLocaleString()}`;
    document.getElementById("tg").innerText = `${totalg.toLocaleString()}`;
    document.getElementById("costin").innerText = `${costoinvi.toLocaleString()}`;
};