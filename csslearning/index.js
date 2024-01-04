var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    console.log(this);
    if(this.readyState == 4){
        document.getElementById("demo-ajax").innerHTML = this.response;
    }
}

xhr.open("GET", "texte.txt", true);
xhr.responseType = "text";
xhr.send();