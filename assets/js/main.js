document.getElementById("horoskop").style.display="none"; //soll erstmals nicht zu sehen sein 
function horo(){
    let img = document.getElementById("horoImg");
    let name= document.getElementById("horo");
    let text=document.getElementById("context");
    console.log("test");
    switch (document.getElementById("textfield").value) {
        
        case 'jan':
        case 'Jan':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.src='https://www.horoscopedates.com/img/icon_aquarius.png';
            name.innerHTML="AQUARIUS:";
            text.innerHTML="Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…"
            break;
        case'feb':
        case'Feb':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_pisces.png");
            name.innerHTML="PISCES:";
            text.innerHTML="Communication is very important today—written, spoken, and even nonverbal body language will all…";
            break;
        case'mar':
        case'Mar':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_aries.png");
            name.innerHTML="Aries:";
            text.innerHTML="Today your patience might be tested when one or more of your projects gets put on hold by someone… ";
            break;
        case'apr':
        case'Apr':
        document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_taurus.png");
            name.innerHTML="TAURUS:";
            text.innerHTML="Your intense energy makes you a great candidate for a leadership position right now, so if you are…";       
            break;
        case'may':
        case'May':
        document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_gemini.png");
            name.innerHTML="GEMINI: ";
            text.innerHTML="If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";       
            break;
        
        case 'jun':
        case 'Jun':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_cancer.png");
            name.innerHTML="CANCER: ";
            text.innerHTML="Too many different elements in your life are overlapping with each other right now—and it's your…";       
            break;
        case 'jul':
        case 'Jul':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_leo.png");
            name.innerHTML="LEO: ";
            text.innerHTML="The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";        
            break;
        case 'aug':
        case 'Aug':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_virgo.png");
            name.innerHTML="VIRGO: ";
            text.innerHTML="You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";       
            break;
        case 'sep':
        case 'Sep':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_libra.png");
            name.innerHTML="LIBRA: ";
            text.innerHTML="Pick a cultural event that's coming up and get some tickets for it today.";       
            break;
        case 'oct':
        case 'Oct':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_scorpio.png");
            name.innerHTML="SCORPIO:";
            text.innerHTML="Someone will challenge a belief that you've held for a very long time today—and they will say an…";        
            break;
        case 'nov':
        case 'Nov':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_sagittarius.png");
            name.innerHTML="SAGITTARIUS: ";
            text.innerHTML="Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";       
            break;
        case 'dec':
        case' Dec':
            document.getElementById("alert").style.display="none";
            document.getElementById("horoskop").style.display="block";
            img.setAttribute("src", "https://www.horoscopedates.com/img/icon_capricorn.png");
            name.innerHTML="CAPRICORN: ";
            text.innerHTML="Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ";       
            break;        
        default:
            document.getElementById("horoskop").style.display="none";
            document.getElementById("alert").style.display="block";
            document.getElementById("alert").innerHTML="Please give a month";

            break;
    }
}