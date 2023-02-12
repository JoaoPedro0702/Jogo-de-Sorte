const tambor = document.getElementById('tambor')
const atirar = document.getElementById('atirar')
const resultado = document.getElementById('roleta-resultado')
let result
let value
let randomNumber

function generateTamborValue() {
  randomNumber = Math.floor(Math.random() * 6) + 1
  
  tambor.innerHTML = randomNumber;
  console.log(randomNumber)
}

function atualizarSelect() {
  let rolo = document.querySelector('#rolo');
  value = +rolo.value
}

function resultadoFinal (){
  generateTamborValue()
  
  console.log(value + "-" + randomNumber)
  if (randomNumber == value){
    result = "morreu"
  } else {
    result = "sobreviveu"
  }
  resultado.innerHTML = result
  
}

atirar.addEventListener('click', resultadoFinal)
atualizarSelect()