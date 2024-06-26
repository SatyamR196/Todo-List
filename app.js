let input = document.querySelector("input");
let list = document.querySelector("ol");
let addBtn = document.querySelector("#Add");
let resetbtn = document.querySelector("#reset");

let listele = document.querySelectorAll("li");

addBtn.addEventListener("click",function(){
    item = document.createElement("li");
    btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.innerText=" x ";
    item.innerText=input.value+" ";
    
    list.appendChild(item);
    item.appendChild(btn);
    input.value="";
    listele = document.querySelectorAll("li");
    console.log(listele);  
});

input.addEventListener("keydown",function(event){

    if(event.code=="Enter"){
        item = document.createElement("li");
        btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-danger");
        btn.innerText=" x ";
        item.innerText=input.value+" ";
        
        list.appendChild(item);
        item.appendChild(btn);
        input.value="";
        listele = document.querySelectorAll("li");
        console.log(listele);  
    }
});

list.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
});


resetbtn.addEventListener("click",function(){
    for(ele of listele){
        ele.remove();
    }
    input.value="";
});



