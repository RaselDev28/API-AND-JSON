// const loadData = async()=>{
//     try{
//         const response =await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//         const data =await response.json();
//         console.log(data);
//     }
//     catch{
//         console.log("Code is Error")
//     }
// }

// loadData();

const loadPost = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        const data = await response.json()
        console.log(data)
    }
    catch{
        console.log("Error")
    }
}
loadPost()