console.log("Hello");

let sFrom1 = document.querySelector('#sFrom1');
let sFrom2 = document.getElementById('sFrom2');
let cTo = document.getElementById('cTo');
let cAns = document.getElementById('cAns');
let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
  console.log(ans);
})

// On change event
sFrom1.addEventListener('change', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

sFrom2.addEventListener('change', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

cTo.addEventListener('change', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

// On keyup event
sFrom1.addEventListener('keyup', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

sFrom2.addEventListener('keyup', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

cTo.addEventListener('keyup', () => {
  let x1 = sFrom1.value, x2 = sFrom2.value, y1 = cTo.value;
  let ans = y1 * x2 / x1;
  cAns.value = ans;
})

let info1 = document.getElementById('info1');
let info2 = document.getElementById('info2');
let info3 = document.getElementById('info3');
let info4 = document.getElementById('info4');
let infoMsg = document.querySelector('.info-msg');

info1.onclick = () => {
  ShowInfo("Input the first standard value that the defines the conversion", 3, -5)
  var hideInfo = setTimeout(HideInfo, 3000);
}

info2.onclick = () => {
  ShowInfo("Input the second standard value that the defines the conversion", 3, 40)
  var hideInfo = setTimeout(HideInfo, 3000);
}

info3.onclick = () => {
  ShowInfo("Input the value you want to convert/interpolate here", 27, -5)
  var hideInfo = setTimeout(HideInfo, 3000);
}

info4.onclick = () => {
  ShowInfo("The result of the interpolation/conversion is shown here", 27, 40)
  var hideInfo = setTimeout(HideInfo, 3000);
}

function ShowInfo(msg, posTop, posLeft) {
  infoMsg.innerHTML = msg;
  infoMsg.style.top = posTop + "%";
  infoMsg.style.left = posLeft + "%";
  infoMsg.style.display = 'flex';
}

function HideInfo() {
  infoMsg.style.display = 'none';
}

let saveBtn = document.getElementById('save');
let openBtn = document.getElementById('open');

let storedItem = localStorage.getItem("storedItem");

saveBtn.onclick = () => {
  let item1 = sFrom1.value;
  localStorage.setItem("storedItem", item1);
  // alert('saved');
  console.log('item saved');
}

openBtn.onclick = () => {
  localStorage.getItem("storedItem");
  sFrom1.value = storedItem;
}