module.exports=(data,VideoAtributtes)=>{
    const AtributeinNewData=Object.entries(data)
    for (let i = 0; i < VideoAtributtes.length; i++) {
      if(!VideoAtributtes.includes(AtributeinNewData[i][0])){
        return false
      }
    }
    return true
    
}