const SpanText = document.querySelector('#text')
const InputText = document.querySelector('#font-size-control')

InputText.addEventListener('input',(event)=> {
SpanText.style.fontSize = event.currentTarget.value + 'px'
}
)
