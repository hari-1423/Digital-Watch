const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const period = document.querySelector('.period');

const changeTime = () => {
    const currDate = new Date();
    let currHours = currDate.getHours();
    let currMinutes = currDate.getMinutes();
    let currSeconds = currDate.getSeconds();
    if(currHours < 10){
        currHours = '0' + currHours;
    }
    if(currMinutes < 10){
        currMinutes = '0' + currMinutes;
    }
    if(currSeconds < 10){
        currSeconds = '0' + currSeconds;
    }
    if(currHours < 12){
        period.textContent = 'AM';
    }
    else{
        period.textContent = 'PM';
    }
    hours.textContent = currHours;
    minutes.textContent = currMinutes;
    seconds.textContent = currSeconds;
    setTimeout(changeTime,1000);
}
changeTime();
