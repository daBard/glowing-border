const docYear = document.querySelector('#year');
const docWeekDay = document.querySelector('#weekday');
const docDate = document.querySelector('#date');
const docMonth = document.querySelector('#month');
const docTime = document.querySelector('#time');
const docQuote = document.querySelector('#quote');

function initSite() {
  //setSize();
  startTime();
  setQuote();
}

//RUN DATE AND TIME
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
function setQuote() {
  //let quoteText = "This is the cool quote that everyone is reading!";
  //let jsonQuote = getQuote().then(response => response.json());
  let jsonQuote = getQuote();
  console.log(jsonQuote);
  docQuote.innerHTML = jsonQuote.text;
}

//CAN'T REALLY FIGURE OUT HOW TO USE DATA FROM RESULTING OF THE PROMISE






function getQuote() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7efda4e701msh2ae1e22621e9274p1f82f5jsn5c96fe065d0c',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };
  
  return fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', options)
    .then(response => response.json())
    .then(resData => {return resData})
    .catch(err => console.error(err));
}


  //RESPONSIVE
  //ADD TO COUCHVEGGIE