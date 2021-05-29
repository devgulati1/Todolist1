var enter=document.querySelector(".enter");
var input=document.querySelector("input");
let ul=document.querySelector(".list-items");




// save items in local storage

let save=(todo)=>{
    
let todos;
if(localStorage.getItem('todos')===null){
    todos=[];
}else{
   todos= JSON.parse(localStorage.getItem('todos'))
}
todos.push(todo);
localStorage.setItem('todos',JSON.stringify(todos));

// save the old and new data to local storage



}
// get items from local storage
let get=(todo)=>{
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
       todos= JSON.parse(localStorage.getItem('todos'))
    }
   todos.forEach((todo)=>{
    let li=document.createElement("li");
    
    // todo because i need val from local storage now
     let liText=document.createTextNode(todo);
   

    li.appendChild(liText);
    li.style.listStyle="none";
    // ------create buttonTick here------    
    let buttonTick=document.createElement("button");
    let buttonText=document.createTextNode("✅")

    buttonTick.appendChild(buttonText);
    buttonTick.classList.add("margin-tick-button");

    // creating button
    let button=document.createElement("button");

    // // creating textNode in button
    //  let buttonText=document.createTextNode("delete");

    // // // appending it to button
    //  button.appendChild(buttonText);

    button.innerText="❌";

    // adding margin to button
    button.classList.add("adding-margin");

   
   // appending buttonTick to li
   li.appendChild(buttonTick);

   
    // appending it to li
    li.appendChild(button);

    

    ul.appendChild(li);
    // console.log(input.value)
    

   })
    

}
// REMOVE ITEMS FROM LOCAL STORAGE
let removeItems=(todo)=>{
    
  
    if(localStorage.getItem('todos')===null){
        todos=[];
    }else{
        
       todos= JSON.parse(localStorage.getItem('todos'))

    }
    
    const todoIndex=todo;
    console.log(" todos "+todos)
    console.log(typeof(todos));
    console.log(" todo "+todo)
    console.log("index is "+todos.indexOf(todo));
    // removing element by getiing index
    todos.splice(todos.indexOf(todoIndex),1);

     localStorage.setItem('todos',JSON.stringify(todos))
   
 

}


// CREATE LIST AND BUTTON
let createListAndButton=()=>{
    if(input.value.length>0){
      
    let li=document.createElement("li");
    
    let liText=document.createTextNode(input.value);
   

    li.appendChild(liText);
    li.style.listStyle="none";
    // ------create buttonTick here------    
    let buttonTick=document.createElement("button");
    let buttonText=document.createTextNode("✅")

    buttonTick.appendChild(buttonText);
    buttonTick.classList.add("margin-tick-button");

    // creating button
    let button=document.createElement("button");


    // creating textNode in button
    //  let buttonText=document.createTextNode("delete");

    // // // appending it to button
    //  button.appendChild(buttonText);


    button.innerText="❌";
    // adding margin to button
    button.classList.add("adding-margin")

    
// appending buttonTick to li
    li.appendChild(buttonTick);
    // appending button to li
    li.appendChild(button);
    

    

    ul.appendChild(li);
    console.log("creating item"+input.value);
    save(input.value);
    input.value="";
     console.log("li in craete is "+li.innerHTML);
     
    }
    
}
let afterEnter=(e)=>{
    if(e.which==13){
        createListAndButton();
    }

}

//MAKING LINE THROUGH BY PRESSING TICK
let makeTick=(e)=>{
    console.log(e)
} 


// REMOVE ITEM
let removeItem=(e)=>{
    console.log("e.target "+e)
    if(e.target.classList.contains("adding-margin")){
        
        
            let li=e.target.parentElement;
             let buttonTick=e.target.previousElementSibling;
             console.log("buttonTick "+buttonTick);
            console.log("li "+li);

            ul.removeChild(li);
            let buttonTickText=buttonTick.innerText;
            let item=li.innerText;
            let buttonText=e.target.innerText;
            let finalText=item.replace(buttonText,'');
            let finalTextTick=finalText.replace(buttonTickText,'');
            
            
            console.log("in button text tick is "+buttonTickText)

            console.log("in remove item  li text  is  "+item);
            console.log("button text is  "+buttonText);
            console.log("final text is "+finalTextTick);
             removeItems(finalTextTick);
           

        
    }else if(e.target.classList.contains("margin-tick-button")){
        let tickButton=e.target.parentElement;
        tickButton.classList.add("line");

    }
}

// event listener when content is loaded
window.addEventListener('DOMContentLoaded',get);
enter.addEventListener("click",createListAndButton)
input.addEventListener("keypress",afterEnter,)
ul.addEventListener("click",removeItem);



// let saved=localStorage.getItem("data");
// if(saved){
//     ul.innerHTML=saved;
    
// }

