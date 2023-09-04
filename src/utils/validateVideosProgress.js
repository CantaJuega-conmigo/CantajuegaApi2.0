module.exports=(data,VideoAtributtes)=>{
    const AtributeinNewData=Object.entries(data)//convertimos el objeto (que es la info a cambiar); en array , [[key,value],[key,value]]
    for (let i = 0; i < VideoAtributtes.length; i++) {
      if(!VideoAtributtes.includes(AtributeinNewData[i][0])){//si algun atributo  no coincide o no existe nativamente, tiramos false para generar un error luego.
        return false
      }
    }
    return true//si todo va bien tiramos true
    
}