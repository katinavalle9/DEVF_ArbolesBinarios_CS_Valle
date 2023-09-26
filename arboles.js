//Ejercicio1
class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree2 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function identidocosONo(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }

  if (tree1 === null || tree2 === null) {
    return false;
  }

  return (
    tree1.value === tree2.value &&
    identidocosONo(tree1.left, tree2.left) &&
    identidocosONo(tree1.right, tree2.right)
  );
}

//Arbol1
const tree1 = new Tree(25);
const node1 = new Tree(1);
const node2 = new Tree(2);
const node3 = new Tree(3);
const node4 = new Tree(4);

tree1.left = node1;
tree1.right = node2;
node2.left = node3;
node2.right = node4;

//Arbol2
const tree2 = new Tree2(25);
const node11 = new Tree2(1);
const node12 = new Tree2(2);
const node13 = new Tree2(3);
const node14 = new Tree2(4);

tree2.left = node11;
tree2.right = node12;
node12.left = node13;
node12.right = node14;

console.log(identidocosONo(tree1, tree2));

//Ejercicio2
function copiarArbol(tree3) {
  if (tree3 === null) return null;

  const nuevoNodo = new Tree(tree3.value);
  nuevoNodo.left = copiarArbol(tree3.left);
  nuevoNodo.right = copiarArbol(tree3.right);

  return nuevoNodo;
}

const arbolOriginal = new Tree(25);
arbolOriginal.left = new Tree(1);
arbolOriginal.right = new Tree(2);

const ArbolCopiado = copiarArbol(arbolOriginal);
console.log(identidocosONo(arbolOriginal, ArbolCopiado));

//Ejercicio3
function nivelNodo(tree1, level) {
  if (tree1 === null) return;

  if (level === 0) {
    console.log(tree1.value);
  } else {
    nivelNodo(tree1.left, level - 1);
    nivelNodo(tree1.right, level - 1);
  }
}

nivelNodo(tree1, 1);

//Ejercicio4
//retornara 0 porque mi arbol no tiene hojas, si tiene 1 es que si tiene
function NumeroHojas(tree1) {
  if (tree1 === null) return 0;

  if (tree1.left === null && tree1.right === null) return 1;

  const HojasIzq = NumeroHojas(tree1.left);
  const HojasDerec = NumeroHojas(tree1.right);

  return HojasDerec + HojasIzq;
}

const hojas = NumeroHojas(tree1);
console.log(`Numero de hojas : ${hojas}`);
