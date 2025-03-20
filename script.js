let input = document.getElementById('input');
let add = document.getElementById('add');
let listcontainer = document.querySelector(".list");

add.addEventListener('click', function(){
    if(input.value === ""){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML = input.value;
        listcontainer.appendChild(li);

        let del = document.createElement('span');
        del.innerHTML = "❌";
        li.appendChild(del);
        

    }
    input.value = "";
    saveData();
})

listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})


function saveData(){
    localStorage.setItem('data', listcontainer.innerHTML);
}

function loadData(){
    listcontainer.innerHTML = localStorage.getItem('data');
}

loadData();