
let interval;

window.addEventListener('load',()=>{
    clearInterval(interval);
})
const pauseBtn=document.querySelector('.pause');
pauseBtn.addEventListener('click',()=>{
    clearInterval(interval);
})

const resetBtn=document.querySelector('.reset');
resetBtn.addEventListener('click',()=>{
    document.querySelector('.min').innerHTML="00";
    document.querySelector('.sec').innerHTML="00";
    clearInterval(interval);
})


const startBtn=document.querySelector('.start');
startBtn.addEventListener('click',()=>{
    interval=setInterval(()=>{
        const time=document.querySelector('.sec');
        let currSec=Number(time.innerHTML);
        if(currSec>=59){
            const minutes=document.querySelector('.min');
            let currMin=Number(minutes.innerHTML);
            if(currMin<9){
                currMin+=1;
                let t="0"+currMin;
                minutes.innerHTML=t;
            }
            else if(currMin>=9){
                minutes.innerHTML=currMin+1;
            }
            time.innerHTML="00";
        }
        else if(currSec>=9){
            time.innerHTML=currSec+1;
        }
        else if(currSec<9){
            currSec+=1;
            let t="0"+currSec;
            time.innerHTML=t;
        }
    },1000);
})