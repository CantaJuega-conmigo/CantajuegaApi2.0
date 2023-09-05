module.exports=(object)=>{
 const array=Object.entries(object);
 let objectAtributtes=[];
 array.forEach(i=>objectAtributtes.push(i[0]))
 return objectAtributtes
}