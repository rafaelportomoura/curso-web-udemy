const classificaTriangulo = (a, b, c) => {
  if (a === b && b === c) {
    return 'Equilátero';
  } else if (a === b || a === c || b === c) {
    return 'Isósceles';
  }
  return 'Escaleno';
};

console.log(classificaTriangulo(3, 3, 3));
console.log(classificaTriangulo(10, 10, 12));
console.log(classificaTriangulo(5, 4, 3));
