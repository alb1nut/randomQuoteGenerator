let quotes =[
   
    " The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela .",
     "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"    If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
     "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
   " Life is what happens when you're busy making other plans. -John Lennon",
   

];

const quote = document.querySelector('#quote');

let length = quotes.length;

const h5 = document.querySelector('h5');

let stop = document.querySelector('#stop');
let stopping = stop.addEventListener('click' , function(){

    h5.innerText = "Good";
    // clearInterval(loop ,80000)
   console.log('click');

   h5.style.color='white';
   
})

h5 = loop();

function loop() {
    let time =1000;
    
        for (let i = 1; i < quotes.length; i++) {

            if (stopping) {
             break;
            }else{

                setInterval(() => {
                       h5.innerText = quotes[i];
                   
                   }, time);
       
                   time=time + 1000;
            }

             
           } 
           
          
    }
    // loop();
    


// console.log(length);
// quote.addEventListener('click' , function(){
//     let index= Math.floor(Math.random()* length);    
//     console.log(index);
//    const h5= document.querySelector('h5');
//    console.log(h5);

//    h5.innerText = loop();
//    //quotes[index];
// })




// for (let i = 0; i < index; i++) {
//     h5.innerText = quotes[i];
//     // setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * i);
//     setTimeout('document.getElementById("h5").innerHTML = \'' + string + '\';', 100 * i);
    
// }



// let stop = document.querySelector('#stop');



// stop.addEventListener('click' , function(){

//    console.log('click');
// })