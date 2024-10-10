let listContainer = document.querySelector('#list-container')
let input = document.querySelector('#input-box')
let button = document.querySelector('#button')


showTask()

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}



button.addEventListener("click" , () =>{

    if(input.value == ''){
        alert('Please Enter the Text')
    }
    else{
        const lists = document.createElement('li')
        lists.textContent = input.value;
        listContainer.appendChild(lists)
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        lists.appendChild(span)
        span.style.right = '0px';
    }
    input.value = '';
    storeData()

})

function storeData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        storeData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        storeData()
    }
})



