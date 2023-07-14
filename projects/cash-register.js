function checkCashRegister(price, cash, cid) {
  if(price>cash){
    return "Please provide remaining amount: "+(price-cash);
  }
  else if(price==cash){
    return "Account settled!"
  }else{
    let totalcash=cid.reduce((accum,item)=>accum+item[1],0);
    let chp=cash-price;
    let changeArr=[];
    if(totalcash<chp){
      return {status:"INSUFFICIENT_FUNDS", change:[]}
    }
    else if(totalcash==chp){
      return {status:"CLOSED", change:cid}
    }
    else{
      cid.reverse();
      cid.forEach(item=>{
        let temp = [item[0], 0];
      while (chp >= UNIT[item[0]] && item[1] > 0) {
        temp[1] += UNIT[item[0]];
        item[1] -= UNIT[item[0]];
        chp -= UNIT[item[0]];
        chp = chp.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArr.push(temp);
      }
      });
      if (chp > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
      return { status: "OPEN", change: changeArr};
    }
  }
}
const UNIT = {
  "PENNY": .01,
  "NICKEL": .05,
  "DIME": .10,
  "QUARTER": .25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);