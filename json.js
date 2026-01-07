const university={
    name:"Southwest University",
    location:"china",
    established:2000
}

const university1=JSON.stringify(university);
// console.log(university1);

const university2=JSON.parse(university1);
console.log(university2);