const displayUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>{
        dataDisplay(data);
    })
}

const dataDisplay = (users) => {
    const userList = document.getElementById("loadusers");
    for (const user of users){
        const li = document.createElement("li");
        li.innerText=user.name;
        userList.appendChild(li);        
    }
}