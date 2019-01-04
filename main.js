let outEl = document.querySelector("#output");
outEl.innerHTML = "<h1>Car Sales</h1>"
/*=========================================================================================
BUILDING ALL COMPONENTS AFTER BEING RETRIEVED
===============================================================================*/
salesByWeek.forEach(salesAgent =>{
  outEl.innerHTML += `
  <h2>${salesAgent.sales_agent.first_name} ${salesAgent.sales_agent.last_name}</h2>`
  for (const entry of Object.entries(salesAgent.vehicle)) {
    outEl.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
  }
  outEl.innerHTML += `<h3>Profit: $ ${salesAgent.gross_profit}</h3>`
})