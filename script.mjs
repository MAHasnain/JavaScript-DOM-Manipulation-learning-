///  DOM  -> document object module   ///

///   4 pillars of DOM 
// 
//   1. selection of an element 
//   2. Changing HTML 
//   3. Changing css   
//   4. Event listener
// 
// 


// let myName = document.querySelector('.heading')

// let a = document.querySelector('.box')
// a.innerHTML = "as"


// myName.innerHTML = "atta"
// myName.innerHTML = "asdf"

// myName.style.backgroundColor = "blue"






//   Event listener

//  kisi bhi movement ko sun kr react krne wala

// let heading = document.querySelector('.heading')
// heading.addEventListener('click', function() {
//     heading.innerHTML = "mah"
//     heading.style.backgroundColor = "white"

// })



let bulb = document.querySelector('.bulb');
let btn = document.querySelector('.btn');

let clr = 0;

btn.addEventListener("click", function (){
    if (clr == 0) {
        bulb.style.backgroundColor = "yellow"
        clr = 1    
    }else{
        bulb.style.backgroundColor = "transparent"
        clr = 0
    }

})
