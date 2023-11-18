const daysElement = document.querySelector(".days")
const hoursElement = document.querySelector(".hours")
const minutesElement = document.querySelector(".minutes")
const secondsElement = document.querySelector(".seconds")
const heading = document.querySelector('h1')
const counterTimer = document.querySelector('.counterTimer');

///Converting second,minute,hour,day in Miliseconds
const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;


const timeFunction = () => {
    // Generating current date in mm/dd/yyyy format
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = new Date().getFullYear();
    now = `${mm}/${dd}/${yyyy}`

    //Asking for the Target Date from the user
    const enteredDate = prompt('Enter Date').padStart(2, '0');
    const enteredMonth = prompt('Enter Month').padStart(2, '0');
    let targetDate = `${enteredMonth}/${enteredDate}/${yyyy}`;

    //In case, the target Month has been passed away
    if (now > targetDate)
        targetDate = `${enteredMonth}/${enteredDate}/${yyyy + 1}`;

    const intervalId = setInterval(() => {
        //Coverting targetDate in Miliseconds
        const timer = new Date(targetDate).getTime();
        //Taking current date in Miliseconds
        const today = new Date().getTime();

        //Finding difference between the dates in miliseconds
        const difference = (timer - today);
        //Finding left days,hours,minutes,seconds
        const leftDay = (Math.floor(difference / day));
        const leftHour = (Math.floor((difference % day) / hour))
        const leftMinute = (Math.floor((difference % hour) / minute))
        const leftSecond = (Math.floor((difference % minute) / second))

        //Showing timer in DOM
        daysElement.innerText = leftDay;
        hoursElement.textContent = leftHour;
        minutesElement.textContent = leftMinute;
        secondsElement.textContent = leftSecond;

        // Stop set Interval after hitting the target Date
        if (difference < 0) {
            counterTimer.style.display = 'none';
            heading.innerText = "Time's up"
            clearInterval(intervalId);
        }
    }, 0)

}

timeFunction();
