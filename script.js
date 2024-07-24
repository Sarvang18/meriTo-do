const inputBox=document.querySelector('.inputLine>input')
const addTaskBTN=document.querySelector('.addBTN')
const taskHolder=document.querySelector('.taskHolder')

addTaskBTN.addEventListener('click',()=>{
    const task=document.createElement('li')
    const taskText=inputBox.value
    task.innerText=taskText
    task.classList.add('btmMargin')
    console.log(task)

    const deleteTask=document.createElement('button')
    deleteTask.innerText='x'
    deleteTask.classList.add('deleteTask')

    if(taskText){
        taskHolder.appendChild(task)
        task.appendChild(deleteTask)
        
    }
    //append nhi appendChild karte hain


    deleteTask.addEventListener('click',(evt)=>{
        task.style.display='none';
    })
    

    task.addEventListener('click',(evt)=>{
        task.style.textDecoration='line-through'
        task.style.backgroundColor='green'
        task.style.opacity='0.4'
        task.style.color='black'
        deleteTask.innerText='✔'
    })
})



