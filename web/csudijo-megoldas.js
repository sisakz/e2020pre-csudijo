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

const foglalas = function() {
  const foglalasForm = document.getElementById("foglalasForm");
  console.log(JSON.stringify(foglalasForm.serializeArray()))
}

window.onload = function() {
  legnepszerubb();
};



// const teljesForgalom = function() {...}