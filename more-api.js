const loadUsers =()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        display(data);
    })
}

const display = (user) =>{
    console.log("His name is: ", user[1].name);
}