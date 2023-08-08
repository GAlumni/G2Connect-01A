let tablinks = document.getElementsByClassName("links");
let tabcontents = document.getElementsByClassName("content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("tab");
}

let ttablink = document.getElementsByClassName("link");
let ttabcontents = document.getElementsByClassName("conten");
function opentab2(tabname1){
    for(tablink of ttablink){
        tablink.classList.remove("activate");
    }
    for(tabcontent of ttabcontents){
        tabcontent.classList.remove("tab1");
    }
    event.currentTarget.classList.add("activate");
    document.getElementById(tabname1).classList.add("tab1");
}


let submit = document.getElementById('submit');
submit.addEventListener('cick', function(){
    document.getElementById('part2').style.display='block';
});