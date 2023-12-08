module.exports = (fechaNacimiento) => {
  const fechaNac = new Date(fechaNacimiento);
  const currentDate = new Date();

  let diferenceinyear = currentDate.getFullYear() - fechaNac.getFullYear();
  let diferenceinmonths = currentDate.getMonth() - fechaNac.getMonth();

  if (currentDate.getDate() < fechaNac.getDate()) {
    diferenceinmonths--;
  }

  const edadEnMeses = diferenceinyear * 12 + diferenceinmonths;

  return edadEnMeses;
};
