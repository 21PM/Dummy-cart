var addBtn = document.getElementsByClassName('Add');
var subtractBtn = document.getElementsByClassName('subtract');
var pcount  = document.getElementsByClassName('pCount');
var cartContainer = document.getElementById('cart');

// console.log(addBtn);
// console.log(subtractBtn);
// console.log(pcount);
 



//******** Increment Code ********* //

for(var i = 0 ; i < addBtn.length ; i ++){
    var button = addBtn[i];
    button.addEventListener('click',function(event){


        var buttonClicked = event.target;
        // console.log(buttonClicked);

        var input = buttonClicked.parentElement.children[1];
        // console.log(input);
        var inputElement = buttonClicked.parentElement.parentElement.parentElement.innerHTML;
        console.log(inputElement);

        var inputValue = input.value;
        // console.log(inputValue);
        cartContainer.innerHTML =  inputElement;   


        var newValue = parseInt(inputValue) + 1;
        // console.log(newValue);

        input.value = newValue;

    })
}


//********* Decrement Code  **********//


for(var i = 0 ; i < subtractBtn.length ; i ++){
    var button = subtractBtn[i];
    button.addEventListener('click',function(event){


        var buttonClicked = event.target;
        // console.log(buttonClicked);

        var input = buttonClicked.parentElement.children[1];
        // console.log(input);

        var inputValue = input.value;
        // console.log(inputValue);


        var newValue = parseInt(inputValue) - 1;
        // console.log(newValue);

        if(newValue >=0){
            input.value = newValue;
        }
    })
}

function getTotal (){
    var arr  =  document.querySelectorAll('.input-field');
    var total = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(parseInt(arr[i].value)){
            total += parseInt(arr[i].value);
        }
    }
}


// var index  = 0;
// addBtn.forEach(function(e,index){
//    addEventListener('click',function(){
//     pcount.innerText = index;
//     console.log(pcount);
//    })
    
// })

// var i = 0 ;
// function addition (){
//     index ++;
//     pcount.innerText = index;
// }

// index = 0;
// for(let i = 0 ; i < addBtn)


//     addBtn.addEventListener('click',function(){
//         index ++;
//         pcount.innerText = index;
//         cartContainer.innerHTML =   `<div id="product_items">
//          <span>Product-1</span>
//         <span>100 * </span><p class="pCount">0</p>`
//     });
    
// }



// subtractBtn.addEventListener('click',function(){
//     if(index > 0)
//     index --;
//     pcount.innerText = index;
//     // console.log(pcount.innerHTML);
//     console.log(pcount);


// });





