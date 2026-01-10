const loadImage = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response=>response.json())
    .then(data => {
        console.log(data)
        displayimage(data)
    })
}

const displayimage = (users) =>{
    const divContainer=document.getElementById("containr");
 for(const user of users){
    const div =document.createElement("div")
    div.innerHTML=`
    <h1>Image</h1>
    <img src="${user}" alt="${user}" height="150">
    `
    divContainer.appendChild(div);
 }   
}

loadImage()