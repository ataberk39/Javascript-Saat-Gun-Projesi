function askName() {
  let name = prompt("Adınız nedir?");
  document.getElementById("myName").innerText = name;
}


function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let weekdayNumber = date.getDay();

    let arrayOfWeekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
    let weekdayName = arrayOfWeekdays[weekdayNumber]

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + ":" + s  + " "+ weekdayName;
    document.querySelector("#myClock").innerText = time;
    document.querySelector("#myClock").textContent = time;

    setTimeout(showTime ,1000);

}

askName();
showTime();