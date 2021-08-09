"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*==========================================================================*/

/* === OPERAÇÕES COM ARRAYS ==== */
var numbers = [1, 2, 3, 4, 5]; //Para cada item dentro do array, vai ser executada a função

numbers.forEach(function (number, index) {
  console.log(number, index);
}); //Map para criar um novo vetor, assim não modificamos o original

var newNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(newNumbers);
/* Soma todos os números do vetor, reduce reduz todo vetor em 
uma única variavel. Parâmetro total inicia com 0, next com o valor
da posição 0 que é 1, e vai somando até que chegue no fim do vetor */

var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total);
/* === OPERAÇÕES COM ARRAYS (DE OBJETOS)==== */

var toDos = [{
  text: 'lavar a louça',
  done: false
}, {
  text: 'apanhar o lixo',
  done: true
}, {
  text: 'dobrar as roupas',
  done: true
}]; //Filtra no vetor os casos que estão como true

var doneTodos = toDos.filter(function (todo) {
  return todo.done;
}); //Função anônima

var doneTodosReduzido = toDos.filter(function (todo) {
  return todo.done;
}); //Encontra no vetor o objeto que possui a string dobrar as roupas

var find = toDos.find(function (todo) {
  return todo.text == 'dobrar as roupas';
}); //Retorna o indice do objeto lavar a louça

var index = toDos.findIndex(function (todo) {
  return todo.text = 'lavar a louça';
});
console.log(doneTodos);
console.log(find);
console.log(index);
var cars = ['fusca', 'civic', 'hb20']; //Retorna True quando encontra um carro fusca

var hasFusca = cars.some(function (car) {
  return car == 'fusca';
});
console.log(hasFusca);
/* === ARROW FUNCTIONS === */
// function anything() {
//     console.log('hello world')
// }

var anything = function anything() {
  return console.log('hello world');
};

anything();
/*==========================================================================*/

/*==========================================================================*/

/* === PARÂMETRO PADRÃO === */
//Caso não passe um nome, o padrão é Fulano
// function sayHello(name = 'Fulano') {
//     console.log('Olá' + name)
// }
// sayHello()

var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Fulano';
  return console.log('Olá ' + name);
};

sayHello();
/* === TEMPLATE STRING === */

var showProduct = function showProduct(product, price) {
  //console.log('O valor de ' + product + ' é R$ ' + price + ', pode comprar!')
  console.log("O valor de ".concat(product.toUpperCase(), " \xE9 R$ ").concat(Math.round(price), " pode comprar!"));
};

showProduct('Camisa', 15.5);
/* === OBJET SHORT SYNTAX / SINTAXE CURTA DE OBJETO === */

var name = 'camisa';
var price = 20;
var product = {
  name: name,
  price: price,
  inStock: true
};
console.log(product);
/*==========================================================================*/

/*==========================================================================*/

/* === DESESTRUTURAÇÃO === */

var fruits = ['laranja', 'morango', 'maçã']; // const a = fruits[0]
// const b = fruits[1]
//console.log(a,b)

var a = fruits[0],
    b = fruits[1];
console.log(a, b);
var person = {
  firstName: 'Hugo',
  secondName: 'Silva',
  age: 21,
  adress: {
    city: 'Suzano',
    region: 'SP'
  }
}; // const firstname = person.firstName
// const secondName = person.secondName
// const city = person.adress.city

var firstName = person.firstName,
    secondName = person.secondName,
    city = person.adress.city;
console.log(person);

var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
      secondName = _ref.secondName;
  console.log("".concat(firstName, " ").concat(secondName));
};

showFullName(person);
/*==========================================================================*/

/*==========================================================================*/

/* === OPERADORES REST/SPREAD === */

var n = [1, 2, 3, 4, 5];
var personagem = {
  namee: 'Hugo',
  age: 21,
  height: 1.63,
  company: 'Recovery'
}; //Trás todo o resto do vetor 
//const [first, second, ...rest] = n

var namee = personagem.namee,
    rest = _objectWithoutProperties(personagem, ["namee"]);

console.log(rest); //Função utilizando REST

var somase = function somase() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(somase(5, 5, 10, 10)); //SPREAD, pega de um lugar e coloca em outro

var num1 = [1, 2, 3, 4, 5];
var num2 = [6, 7, 8, 9, 10];
var numbersTog = [].concat(num1, num2);
console.log(numbersTog);

var personagem1 = _objectSpread(_objectSpread({}, personagem), {}, {
  namee: 'João'
});

console.log(personagem1);
/*==========================================================================*/

/*==========================================================================*/

/* === CLASSES - Função Construtora === */
//this faz referência aos elementos da própria função

function Cars(brand, price) {
  this.brand = brand;
  this.price = price;
}

var Car = /*#__PURE__*/function () {
  function Car(brand, price) {
    _classCallCheck(this, Car);

    this.brand = brand;
    this.price = price;
  }

  _createClass(Car, [{
    key: "run",
    value: function run() {
      console.log('correr');
    }
  }]);

  return Car;
}();

var hb20 = new Car('hyundai', 120);
var fusca = new Car('wolks', 80);
console.log(fusca);
console.log(hb20);
fusca.run();
/*==========================================================================*/

/*==========================================================================*/

/* === CLASSES - GET & SET === */

var Persona = /*#__PURE__*/function () {
  function Persona(name, secondName) {
    _classCallCheck(this, Persona);

    this._name = name;
    this.secondName = secondName;
  }

  _createClass(Persona, [{
    key: "name",
    get: function get() {
      return this._name;
    },
    set: function set(name) {
      this._name = name;
    }
  }, {
    key: "fullName",
    get: function get() {
      //return `${this._name} ${this.secondName}`
      return Persona.joinNames(this._name, this.secondName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(name, secondName) {
      return "".concat(name, " ").concat(secondName);
    }
  }]);

  return Persona;
}();

var p = new Persona('Hugo Barbosa', 'da Silva');
p.name = 'João';
console.log(p.name);
console.log(p.fullName);
/*==========================================================================*/

/*==========================================================================*/

/* === CLASSES - Métodos Estáticos === */

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);
  }

  _createClass(Calculator, null, [{
    key: "somar",
    value: function somar(a, b) {
      return a + b;
    }
  }]);

  return Calculator;
}();

console.log(Calculator.somar(10, 5));
/*==========================================================================*/

/*==========================================================================*/

/* === CLASSES - HERANÇA === */

var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);

    this.rodas = rodas;
  }

  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log('Acelerou');
    }
  }]);

  return Veiculo;
}(); //A classe moto está herdando a classe veiculo


var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);

  var _super = _createSuper(Moto);

  function Moto(rodas, capacete) {
    var _this;

    _classCallCheck(this, Moto);

    _this = _super.call(this, rodas);
    _this.capacete = capacete;
    return _this;
  }

  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("Empinou com ".concat(this.rodas, " rodas"));
    } //Polimorfismo

  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);

      console.log('Acelerou Muito');
    }
  }, {
    key: "taUsandoCapacete",
    value: function taUsandoCapacete() {
      if (this.capacete == true) {
        console.log("Capacete est\xE1 sendo usando = ".concat(this.capacete));
      } else {
        console.log("Capacete n\xE3o est\xE1 sendo usado = ".concat(this.capacete));
      }
    }
  }]);

  return Moto;
}(Veiculo);

var bross = new Moto(2, true);
bross.acelerar();
bross.empinar();
bross.taUsandoCapacete();
