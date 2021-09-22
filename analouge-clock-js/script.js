setInterval(clock , 1000)
const sec = document.getElementById('s');
const min = document.getElementById('m');
const hours = document.getElementById('h');
const month = document.getElementById('a')
const date = document.getElementById('b')
const day = document.getElementById('c')
const day2 = document.getElementById('d')


let weeks = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
let days = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' ,'Augost' , 'September' , 'October' , 'November' , 'December']

function clock(){
    const currentDate = new Date();
    const second = currentDate.getSeconds() / 60;
    const minute = (second + currentDate.getMinutes()) / 60;
    const hour = (minute + currentDate.getHours()) / 12;
    setrotate(sec , second)
    setrotate(min , minute)
    setrotate(hours , hour)

    month.innerHTML = days[currentDate.getMonth()]
    date.innerHTML = currentDate.getDate()   
    day.innerHTML = weeks[currentDate.getDay()] 
}

function setrotate( element , ratio ){
   element.style.setProperty('--rotation' , ratio * 360)
}
clock()