var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//kapat butonuna basarak listeyi silmek

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//üstü çizili işareti koyma

var list = document.querySelector("ul");
list.addEventListener("click",function(x){
    if (x.target.tagName === "LI"){
        x.target.classList.toggle("checked");
    }
}
);

//yeni bir liste oluşturma
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ""){
        alert("Lütfen alanı boş bırakmayınız!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//hazır 10 adet görevi jsonplaceholder ile çek
var delete_items_var = {
    delte_function: function(){
        for (i = 0; i < close.length; i++){
            close[i].onclick = function (){
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
}

let data = fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(veri=> {
    var list = document.querySelector("#myUL");
    veri.forEach(element => {
        if (element.id <= 10 && element.completed === false) {
            list.innerHTML += `<li id="li">${element.title} / ${element.completed}<span class="close">x</span></li>`;
            delete_items_var.delte_function();
        }
        else if(element.id <= 10){
            list.innerHTML += `<li class="checked" id="li">${element.title} / ${element.completed}<span class="close">x</span></li>`;
            delete_items_var.delte_function();
        }
    });
});