var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const legnepszerubbEtel = JSON.parse(this.responseText);
    const legnepszerubb = document.getElementById("legnepszerubb");
    legnepszerubb.innerHTML = legnepszerubbEtel.etelNev;
  }
};
xmlhttp.open('GET', '/etlap/legnepszerubb');
xmlhttp.send();
