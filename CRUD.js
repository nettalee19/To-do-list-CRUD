

let tasks = [
  {
    name:"get milk",
    id:1,
    isComplete:false,
  } , 
  {
    name:"get coffee",
    id:2,
    isComplete:false,
  } , 
]




//1 add
const createTask = (taskName, id) => {
  

  let result = tasks.filter((el) =>{
     return el.name === taskName
  })
  if(result.length == 0){
    return tasks.push({name: taskName, id: id, isComplete: false})  
  }
  return false;
}

createTask("get coffee", 2)
createTask("dishes", 3)
console.log(tasks)






//2. delete
const deleteTask = (id) => {
  let index = tasks.map(i =>{
    return i.id
  }).indexOf(id)

  tasks.splice(index , 1)

}

deleteTask(1)
console.log(tasks)


//3. update status
const updateTask = (id) =>{
  let index = tasks.map((i) => i.id).indexOf(id)
  
  if(tasks[index].isComplete === false){
    tasks[index].isComplete = true;
  } 
  else{
    tasks[index].isComplete = false;
  }
}

updateTask(1)
console.log(tasks)


