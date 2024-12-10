let ad = prompt("isminizi giriniz");
let tckn = prompt("TCKN ninizi giriniz");

kontrolet(ad, tckn);

function kontrolet(ad, tckn)
{
    if (ad !== "") {
        if (tckn.length == 11) {
            alert("isim ve tckn problemsiz girilmisdir");
        }
        else {
            alert("lutfen tckn nizi 11 karakter olarak giriniz");
        }
    }
    else {
        alert("lutfen isim alanini bos birakmayiniz!!!");
    }
}