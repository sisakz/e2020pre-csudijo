const legnepszerubb = function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const legnepszerubbEtel = JSON.parse(this.responseText);
            const legnepszerubb = document.getElementById("legnepszerubb");
            legnepszerubb.innerHTML = legnepszerubbEtel.etelNev;
        }
    };
    xmlhttp.open('GET', '/api/legnepszerubb');
    xmlhttp.send();
}

const vendegkonyv = function() {
    var xmlhttp = new XMLHttpRequest();
    const bejegyzes = document.getElementById("bejegyzes");
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            bejegyzes.value = ""
        }
    };
    xmlhttp.open('POST', '/api/vendegkonyv');
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({ "bejegyzes": bejegyzes.value }));
}

window.onload = function() {
    legnepszerubb();
};