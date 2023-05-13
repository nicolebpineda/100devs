document.querySelector('#flipCoin').addEventListener('click', makeReq)

// add set time out: letting the coin flip gif complete then show result

async function makeReq(){

  const userName = document.querySelector("#headsOrTails").value.toLowerCase();
  const res = await fetch(`/api?coin=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#result").textContent = data.result;

  document.querySelector('img').src = data.img;


}




