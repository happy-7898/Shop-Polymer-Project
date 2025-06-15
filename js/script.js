const sidebar=document.getElementById("mobile-sidebar")
const overlay=document.getElementById("overlay")
const toggleBtn=document.getElementById("btn-toggle") 

toggleBtn.addEventListener('click',()=>{
    sidebar.classList.add('active')
    overlay.classList.add('active')
})

overlay.addEventListener('click',()=>{
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})


//checkout

const checkbox=document.getElementById("billing-address-checkbox");
const container=document.querySelector(".billing-address-container");

checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
        container.style.display="block"
    }else{
        container.style.display="none"
    }
})