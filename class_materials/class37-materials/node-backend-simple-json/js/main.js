document.querySelector('#flipCoin').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#headsOrTails").value;
  const res = await fetch(`/api?coin=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#result").textContent = data.result
}