const InpLen = document.querySelector('#validation-input')
InpLen.addEventListener('blur',() => {
if (InpLen.value.length == InpLen.dataset.length) {
   return InpLen.classList.add('valid') , InpLen.classList.remove('invalid')
}
return InpLen.classList.add('invalid') , InpLen.classList.remove('valid')

}
 )

