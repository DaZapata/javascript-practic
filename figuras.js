// cuadrado

console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado);

console.groupEnd();

// triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo);

console.groupEnd();

// circulo
console.group("Circulo");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo);

//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo);

//pi
const PI = Math.PI;
console.log("El pi del circulo es: " + PI);

//circunferencia
const perimetroCiculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCiculo);

// area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo);

console.groupEnd()

