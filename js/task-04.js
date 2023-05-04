let counterValue = 0;

const decr = document.querySelector('button[data-action="decrement"]')

const incr = document.querySelector('button[data-action="increment"]')

const val = document.querySelector('#value')



decr.addEventListener('click', () => { counterValue -= 1;  val.textContent = counterValue;});

incr.addEventListener('click', () => { counterValue += 1; val.textContent = counterValue;});


