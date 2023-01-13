// question 1: JSON object Comparision

// let obj1 = {name:"person1", age:5};
// let obj2 = {age:5, name:"person1"};

// let res = JSON.stringify(obj1)===JSON.stringify(obj2)        
// console.log(res)
// OutPut: False
// return (res);

// <------------------------------End of Question 1----------------------------------->


// Question 2: 

// let request = new XMLHttpRequest()
// let method = "GET"
// let api = "https://restcountries.com/v3.1/all"
// request.open(method,api)
// request.send()

// request.onload = function(){
//     var data = JSON.parse(request.response)
//     console.log(data);
//     // console.log(data);
//     // console.log(JSON.stringify(data));

   
//         for(let i of data){
//                 // let val1 = Object.keys(i.name.nativeName)[0]
//                 //    let val = Object.keys(i.name.nativeName)[0]
//                     if(i["flags"]){
//                         let val = Object.values(i.flags)
//                         console.log(i["flags"])
//                     }else{
//                         console.log("data not present")
//                     }
//                 }
//         }

            // output : i["flags"]

// <------------------------------End of Question 2----------------------------------->



// Question 3: 

// let request = new XMLHttpRequest()
// let method = "GET"
// let api = "https://restcountries.com/v3.1/all"
// request.open(method,api)
// request.send()

// request.onload = function(){
//     var data = JSON.parse(request.response)
//     // console.log(data);
//     // console.log(data);
//     // console.log(JSON.stringify(data));

   
//         for(let i of data){
//                 // let val1 = Object.keys(i.name.nativeName)[0]
//                 //    let val = Object.keys(i.name.nativeName)[0]
//                     if(i["region"]){
//                         let val = Object.values(i.region)
//                         console.log(i["region"])
//                     }else{
//                         console.log("data not present")
//                     }
//                 }
//         }

        // output: i["region"]

// <------------------------------End of Question 3----------------------------------->