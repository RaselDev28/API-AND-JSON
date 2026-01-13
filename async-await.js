async function orderFood() {
    const food = await cookfood();

    console.log("Food is ready")
    console.log(food);
}

function cookfood(){
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Delicious Food")
    },2000)
  })
}

orderFood()