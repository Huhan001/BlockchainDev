//var input = document.querySelector("input");
//var button = document.querySelector("button");
//var ul = document.querySelector("ul");
//
//
//
//function inputlength(){
//    return input.value.length;
//}
//
//function event(){
//    var li = document.createElement("li");
//    li.appendChild(document.createTextNode(input.value))
//    ul.appendChild(li)
//    input.value = ""
//}
//
//function checkfor() {
//    if(inputlength() > 1) {
//        event()
//    }
//}
//
//button.addEventListener("click",checkfor)

//=======================================================================
var bonyeza = document.querySelector("button");
var newbutton = document.querySelector("body");
var ul = document.querySelector("ul");
var input = document.querySelector("input");



var child = document.querySelector("li");
var parent = child.parentElement;
//=======================================================================
function bonya(){
//   var newdiv = document.createElement("div");
//  newdiv.appendChild(newr)
    var newr = document.createElement("button");
    newr.appendChild(document.createTextNode("Delete"));
    newr.className = "newbutton";
    newr.addEventListener("click",remove);
    newbutton.appendChild(newr);
}

function addinglist() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function parentlist() {
    if (parent.children.length > 5) {
        bonya();
    }
}
function remove() {
    parent.removeChild(parent.lastElementChild);
}

function inputing() {
   return input.value.length;
}
function action() {
    if (inputing() > 1) {
        addinglist();
    }
    parentlist();
}

//=======================================================================

bonyeza.addEventListener("click", action);
//newbutton.addEventListener("click", remove);















//===========================================================================
//document.getElementsByTagName("h1")
//document.getElementsByClassName("fist")
//document.querySelector("h1")
//document.querySelector("button")
//
//var button = document.querySelector("button");
//var input = document.querySelector("input");
//var div = document.getElementsByClassName("paragrapghs")[0]
//
////it takes two parameter, the even we want ot listen plus the function it will implement
//button.addEventListener("click", function (){
//    var p = document.createElement("p");
//    var br = document.createElement("br");
//    p.appendChild(document.createTextNode(input.value));
//    div.appendChild(p);
//})
//function checkfor() {
//    if(input.value.length > 0 &&
//        event.code === "Enter") {
//        //only document can create another element.
//        var li = document.createElement("li");
//        li.appendChild(document.createTextNode(input.value))
//        ul.appendChild(li)
//        input.value = ""
//    }
//}

