const countEl = document.querySelector('#count-el');
const saveEl = document.querySelector('#save-el');
const totalEl = document.querySelector('#total-el');
const incrementBtn = document.querySelector('#increment-btn');
const saveBtn = document.querySelector('#save-btn');
const resetBtn = document.querySelector('#reset-btn');

let count = 0;
let total = 0;
let saveArray = [];


incrementBtn.addEventListener('click', () => {
  count += 1;
  countEl.innerText = count;
});

saveBtn.addEventListener('click', () => {
  saveArray.push(count);
  saveEl.innerText = `Previous Entries: ${saveArray.join(", ")}`;
  total += count;
  totalEl.innerText = 'Total Passengers: ' + total;
  count = 0;
  countEl.innerText = count;
});

resetBtn.addEventListener('click', ()=>{
  count = 0;
  saveArray = [];
  total = 0;
  countEl.innerText = count;
  saveEl.innerText = "Previous Entries: -";
  totalEl.innerText = "Total Passengers: -";
});
