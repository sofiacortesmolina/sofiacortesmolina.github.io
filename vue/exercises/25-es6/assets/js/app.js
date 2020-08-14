class Vehiculo {

  constructor(tipo = 0, rendimiento = 0) {
    this.tipo         = tipo;
    this.rendimiento  = rendimiento;
    // console.log("Vehiculo Parent Instancia");
  }
  consumo(kms) {
    return (parseInt(kms)/parseFloat(this.rendimiento)).toFixed(2);
  }

}


class Automovil extends Vehiculo {
  constructor() {
    super(1, 12);
    // console.log("Automovil Instancia");
  }
}

class Moto extends Vehiculo {
  constructor() {
    super(2, 17.5);
    // console.log("Moto Instancia");
  }
}

class Camioneta extends Vehiculo {
  constructor() {
    super(3, 10);
    // console.log("Camioneta Instancia");
  }
}

class Camion extends Vehiculo {
  constructor() {
    super(4, 5);
    // console.log("Camion Instancia");
  }
}