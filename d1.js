var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')
headOne.addEventListener('mouseover',function(){
headOne.textContent= "mouse currently over";
headOne.style.color='red';
})
headOne.addEventListener('mouseout',function(){
  headOne.textContent="hover over me!";
  headOne.style.color='black';
})
