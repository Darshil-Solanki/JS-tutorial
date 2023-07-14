function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const eRadius = 6367.4447;
  return arr.map(item=>{
    return {name:item.name,
    orbitalPeriod:Math.round(2*Math.PI*Math.sqrt(Math.pow(eRadius+item.avgAlt,3)/GM))}
      });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);