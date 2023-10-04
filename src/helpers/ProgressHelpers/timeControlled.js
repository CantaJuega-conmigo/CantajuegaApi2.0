module.exports = (time_started) => {
    const fechaActual = new Date();
    const timestarted= new Date(time_started)
    const diferenciaMilisegundos = fechaActual - timestarted;
    const milisegundosEnUnDia = 24 * 60 * 60 * 1000;
    if (diferenciaMilisegundos >= milisegundosEnUnDia) {
      return true; // Ha pasado un día o más
    } else {
      return false; // No ha pasado un día completo
    }
  }



