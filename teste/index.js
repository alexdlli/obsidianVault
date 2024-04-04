function validarIdade(idade, nome) {
  if (!idade || !nome) return console.log("falta parametro")

  if (idade >= 18) {
    console.log(`${nome}, é maior`)
  } else {
    console.log(`${nome}, é menor`)
  }
}

var arrayDeDados = [
  {
    nome: "alex",
    idade: 24
  },
  {
    nome: "yummi",
    idade: 2
  }
]

arrayDeDados.map(dado => validarIdade(dado.idade, dado.nome))

