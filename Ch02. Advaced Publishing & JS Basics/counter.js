const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);
console.log(increase);
console.log(decrease);

let count = 0;

increase.addEventListener('click', () => {
    console.log('increase가 클릭됨');
    count++;
    number.textContent = count; 
    // <h2> 요소의 텍스트를 현재 카운터 값으로 업데이트
})
decrease.addEventListener('click', () => {
    console.log('decrease가 클릭됨');
    count--;
    number.textContent = count;
})