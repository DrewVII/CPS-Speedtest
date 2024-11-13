let count = 0;
let second = 0;
let cps = 0;
let is_timer_ticking = 0;

function ClickCount() {
    count++;
    document.getElementById('clickCount').innerHTML = "Score : " + count;
    is_timer_ticking = 1;

}

setInterval(secondUpgrade => {
  
  if (second <= 10 && is_timer_ticking == 1){
    second++;
    document.getElementById('timeCount').innerHTML = second + " s";
  }

  if (second > 10){
    clearInterval(secondUpgrade);
    is_timer_ticking = 0;
    cps = cpsCalculator();

    alert(cps + " cps !");
    
    second = 0;
    count = 0;
    
    document.getElementById('timeCount').innerHTML = second + " s";
    document.getElementById('clickCount').innerHTML = "Score : " + count;
    document.getElementById('resultCount').innerHTML = cps + " clicks per second";
    
  }   
  
}, 1000);

function cpsCalculator(){
  return Math.round((count / second)*10)/10;
}