function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
    }



setInterval( function() {
    var time = getSecondsSinceStartOfDay(); // This will take the computer time and put it in seconds.
    // console.log(time);
    
    // The logic below is to calculate how many degrees the indicator should move to complete the 360 round.
    
    var seconds = document.querySelector("#seconds");
    let secondsmove = time*(360/60)-180; // it takes 60 seconds for it to complete the round
    seconds.style.transform = `rotate(${secondsmove}deg)` ;
    // console.log(seconds.style);     

    var minutes = document.querySelector("#minutes");
    let minutesmove = time*(360/3600)-180; // it takes 60 minutes to complete the round
    minutes.style.transform = `rotate(${minutesmove}deg)` ;

    var hours = document.querySelector("#hour");
    let hoursmove = ((time+216000)*(360/43200))-180; // it takes 121 hours to comoplete the round
    hours.style.transform = `rotate(${hoursmove}deg)`;
    
    // your code here
    }, 1000);