//SAW SOMETHING SIMILAR, THOUGHT IT LOOKED COOL AND TRIED TO BUILD IT MYSELF
//ENDED UP BECOMING AN EXPERIMENT WITH RESPONSIVNESS, REM AND ROOT FONT-SIZE - PROBABLY A BAD IDEA BUT THERE IT IS

const docRoot = document.querySelector(':root');
const docCard = document.querySelector('.card');
const docCardTextBox = document.querySelector('.card-text-box');
const docYear = document.querySelector('#year');
const docWeekDay = document.querySelector('#weekday');
const docDate = document.querySelector('#date');
const docMonth = document.querySelector('#month');
const docTime = document.querySelector('#time');
const docQuote = document.querySelector('#quote');
const docAuthor = document.querySelector('#author');

//START FUNCTION
function initSite() {
  setSize();
  startTime();
  setQuote();
  //test();
}

//RESIZE CARD WHEN RESIZE WINDOW
onresize = () => {setSize()};

//LET GETQUOTE COMPLETE BEFORE SHOWING CARD
window.onload = () => {    
  setTimeout(() => {
    document.body.style.opacity = "100";
  }, 500);
};

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

//SET QUOTE FROM API
async function setQuote() {
  let jsonQuote = await getQuote();
  docQuote.innerHTML = `"${jsonQuote[0].text}"` 
  docAuthor.innerHTML = `- ${jsonQuote[0].author}`;
}

//GET QUOTE FROM API
async function getQuote() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7efda4e701msh2ae1e22621e9274p1f82f5jsn5c96fe065d0c',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
    }
  };
  
  return fetch('https://famous-quotes4.p.rapidapi.com/random?category=wisdom&count=1', options)
    .then(response => response.json())
    .then(resData => {
      return resData;
    })
    .catch(err => console.error(err));
}

//SET CARD SIZE BASED ON WINDOWS WIDTH AND HEIGHT
function setSize() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let newSize;

  if ((windowWidth * 1.618) > windowHeight) {
    newSize = ((windowHeight * 0.6) / 22.81).toFixed();
    docRoot.style.fontSize = `${newSize.toString()}px`;
      
  }
  else {
    newSize = (((windowWidth * 0.6) / 13.75).toFixed());
    docRoot.style.fontSize = `${newSize.toString()}px`;
  }
  console.log(docRoot.style.fontSize);
}


  //ADD TO COUCHVEGGIE

  //THIS JUST GETS THE CATEGORIES
  function test() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7efda4e701msh2ae1e22621e9274p1f82f5jsn5c96fe065d0c',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
      }
    };
    
    fetch('https://famous-quotes4.p.rapidapi.com/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }