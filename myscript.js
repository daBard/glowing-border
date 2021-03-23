const docYear = document.querySelector('#year');
const docWeekDay = document.querySelector('#weekday');
const docDate = document.querySelector('#date');
const docMonth = document.querySelector('#month');
const docTime = document.querySelector('#time')

function startTime() {
  
  
  let today = new Date();
    
    //Year
    let yyyy = today.getFullYear();
    docYear.innerHTML = yyyy;
    
    //Weekday
    let wdnum = today.getDay();
    let wd = new Array('Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag');
    
    docWeekDay.innerHTML = wd[wdnum];
    
    //Date
    let dd = today.getDate();
    docDate.innerHTML = dd;
     
    //Month
    let mmnum = today.getMonth();
    let mm = new Array('Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December')
    docMonth.innerHTML = mm[mmnum];
    
    
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    docTime.innerHTML =
    h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  //DYNAMIC QUOTE FROM EXTERNAL SOURCE
  //RESPONSIVE
  //ADD TO COUCHVEGGIE