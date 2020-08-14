export default {
  data: {

    titulo: "Ninja Gold",
    gold: 0,
    locations: [
      {
        name:   'Farm',
        text:   'earns 10-20 golds',
        start:  10,
        end:    20
      },
      {
        name:   'Cave',
        text:   'earns 5-10 golds',
        start:  5,
        end:    10
      },
      {
        name:   'House',
        text:   'earns 2-5 golds',
        start:  2,
        end:    5
      },
      {
        name:   'Casino',
        text:   'earns/takes 0-50 golds',
        start:  -50,
        end:    50
      },
    ],
    activity: []

  },    
  findGold(start, end, location){
    
    // Calcular Random
    let amount  = this.random(start, end);
    // Aplicar Random a gold
    this.data.gold  = this.data.gold + amount;
    // Guardar Actividad
    this.log(amount, location);

  },
  random(min, max) {

    return Math.floor(min + Math.random()*(max + 1 - min))
    
  },
  log(val, location){

    let fecha  = this.myDate();

    if(val > 0){
      this.data.activity.unshift(`- Earned <b>${val} gold</b> from the <b>${location}</b> 💰 (${fecha})`);
    }else if(val < 0){
      this.data.activity.unshift(`- Lost <b>${val} gold</b> from the <b>${location}</b> 💸 (${fecha})`);
    } else {
      this.data.activity.unshift(`- Got <b>${val} gold</b> from the <b>${location}</b> 😞 (${fecha})`);
    }

  },
  myDate: function(){
    
    const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dia = [null, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const date  = new Date();
    const day   = date.getDay();
    const mon   = date.getMonth();
    const year  = date.getFullYear();
    const num   = ('0' + date.getDate()).slice(-2);
    const hour  = date.getHours();
    const min   = date.getMinutes();
    const fecha = `${dia[day]} ${num} de ${mes[mon]} ${year} a las ${hour}:${min}hrs`;  

    return fecha;

  }
  

}