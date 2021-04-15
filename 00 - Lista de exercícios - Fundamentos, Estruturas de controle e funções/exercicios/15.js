const comprarCarro = (carro) => {
  switch (carro) {
    case 'hatch':
      return 'Compra efetuada com sucesso';
    case 'sedan':
    case 'motocicleta':
    case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?';
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui';
  }
};

console.log(comprarCarro('hatch'))
console.log(comprarCarro('sedan'))
console.log(comprarCarro('motocicleta'))
console.log(comprarCarro('caminhonete'))
console.log(comprarCarro('suv'))
