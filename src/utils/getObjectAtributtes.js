module.exports=(object)=>{///obtiene el nombre de las propiedades de un objeto
 const array=Object.entries(object);
 let objectAtributtes=[];
 array.forEach(i=>objectAtributtes.push(i[0]))
 return objectAtributtes
}