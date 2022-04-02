const date=document.querySelector('#date');
const h2=document.querySelector('h2');
const btn=document.querySelector('button');
  btn.addEventListener('click',function(){

    console.log('aditya');
    h2.innerText=date.value;
    alert('booked');
  })
//  h2.innerHTML=date;
