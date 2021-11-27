var fresh = true;

function addImage(){
    fresh = false;
    var card = document.getElementById("newcard");
    card.style.opacity = 1;

    var timeHrs = document.getElementById("wakeuptime");
    var text1 =timeHrs.options[timeHrs.selectedIndex].text;                     
    var val1 = timeHrs.options[timeHrs.selectedIndex].value;                      // show the value you select from dropdown - 12-1 Am etc type  
    var valued1 =  val1.slice(0,2);                                              // show the value you select from dropdown - 12 Am etc type            
    var AmPm1 = val1.slice(-2)                                                   // Slice the time and session(am/pm)
    AmPm1 = `'${AmPm1}'`;
    console.log(valued1, AmPm1);

    var timeMins = document.getElementById("lunchtime");
    var text2 = timeMins.options[timeMins.selectedIndex].text;
    var val2 = timeMins.options[timeMins.selectedIndex].value;
    var valued2 =  val2.slice(0,2);
    var AmPm2 = val2.slice(-2)
    AmPm2 = `'${AmPm2}'`;
    console.log(valued2, AmPm2);

    var timeSecs = document.getElementById("naptime");
    var text3 = timeSecs.options[timeSecs.selectedIndex].text;
    var val3 = timeSecs.options[timeSecs.selectedIndex].value;
    var valued3 =  val3.slice(0,2);
    var AmPm3 = val3.slice(-2)
    AmPm3 = `'${AmPm3}'`;
    console.log(valued3, AmPm3);

    console.log(text3);
    var idExist = document.getElementById("wakeUpTimeText");
    if(idExist){
        idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}`;
    }
    else{
        var element = document.createElement("div");
        element.setAttribute("id", "wakeUpTimeText");
        element.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}`;
        card.appendChild(element);
    }

    var Clock = new Date();
    var hours = Clock.getHours();
    var mins = Clock.getMinutes();
    var secs = Clock.getSeconds();
    document.getElementById("clock-hours").innerHTML = hours ;
    document.getElementById("clock-mins").innerHTML = mins ;
    document.getElementById("clock-secs").innerHTML = secs ;
    var t = setTimeout(addImage,1000); 

    
    var amPm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours-12 : hours;
    var amPms = amPm;
    amPms = `'${amPms}'`;
    
    console.log(hours, mins, secs, amPms, AmPm1, AmPm2, AmPm3);
    if((valued1 == hours) && (AmPm1 == amPms)){
        document.getElementById("message").innerHTML = "GOOD MORNING!!! HAVE A NICE DAY.. ";
        document.getElementById("changeimage").innerHTML = 
        `<img src="./breakfast1.jpg" alt="" srcset="" id="changeimage">`;
        document.getElementById("quotes").innerHTML = "Have some Healthy BreakFast!!!"
    }
    else if ((valued2 == hours) && (AmPm2 == amPms)){
        document.getElementById("message").style.fontSize = "22px";
        document.getElementById("message").innerHTML = "GOOD AFTERNOON!!! TAKE SOME REST..";
        document.getElementById("quotes").innerHTML = "Have Some Food!!!"
        document.getElementById("changeimage").innerHTML = 
        `<img src="./lunch_image.svg" alt="" srcset="" id="changeimage">`;
    }
    else if((valued3 == hours) && (AmPm3 == amPms)){
        document.getElementById("message").innerHTML = "GOOD NIGHT!!! SLEEP WELL...";
        document.getElementById("changeimage").innerHTML = 
        `<img src="./dinner.webp" alt="" srcset="" id="changeimage">`;
        document.getElementById("quotes").innerHTML = "Dinner Time, Eat Well & Sleep Well!!";   
    }
    else{
        console.log("No match");
    }
}
 
function currentTime(){
    if(fresh == true){
        var Clock = new Date();
        var hours = Clock.getHours();
        var mins = Clock.getMinutes();
        var secs = Clock.getSeconds();
      
        var amPm = (hours < 12) ? "AM" : "PM";
        hours = (hours > 12) ? hours-12 : hours;

        hours = ("0" + hours).slice(-2);
        mins = ("0" + mins).slice(-2);
        secs = ("0" + secs).slice(-2);
        console.log(hours, amPm);
        document.getElementById("clock-hours").innerHTML = hours ;
        document.getElementById("clock-mins").innerHTML = mins ;
        document.getElementById("clock-secs").innerHTML = secs ;
        document.getElementById("setAmPm").innerHTML = amPm ;
        var t = setTimeout(currentTime,1000);

        if((hours >= 4) && (hours <= 12) && (amPm == "AM") ){
            document.getElementById("message").innerHTML = "GOOD MORNING!!! HAVE A NICE DAY.. ";
            document.getElementById("message").style.fontSize = "22px"
            document.getElementById("changeimage").innerHTML = 
            `<img src="./BREAKFAST.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("quotes").innerHTML = "Have some Healthy BreakFast!!!"

        }
        else if((hours >= 12) && (amPm == "PM") || (hours < 5) ){
            document.getElementById("message").innerHTML = "GOOD AFTERNOON!!! TAKE SOME REST...";
            document.getElementById("message").style.fontSize = "22px"
            document.getElementById("quotes").innerHTML = "Go Get Some Food!!!"
            document.getElementById("changeimage").innerHTML = 
            `<img src="./lunch_image.svg" alt="" srcset="" id="changeimage">`;
        }
        else if((hours >= 5) && (hours <= 8) && (amPm == "PM")){
            document.getElementById("message").innerHTML = "GOOD EVENING!!! ";
            document.getElementById("changeimage").innerHTML = 
            `<img src="./Evening.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("quotes").innerHTML = "Get some tea..Its Just Evening!"
            document.getElementById("quotes").style.fontSize = "24px"
        }
        else{
            document.getElementById("message").innerHTML = "GOOD NIGHT!!! SLEEP WELL...";
            document.getElementById("changeimage").innerHTML = 
            `<img src="./Dinner.jpg" alt="" srcset="" id="changeimage">`;
            document.getElementById("quotes").innerHTML = "Dinner Time, Eat Well & Sleep Well!!";
        }
    }
}
