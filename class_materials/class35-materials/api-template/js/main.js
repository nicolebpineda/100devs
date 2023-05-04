//Make an api request using async await

document.querySelector('button').addEventListener('click', getACuteDogPhoto)

async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breed/schnauzer/giant/images/random')
        if (!res.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = await res.json()
        document.querySelector('img').src = data.message
        console.log(data.message)
    }
    catch (error){
        console.error(`Could not get products: ${error}`)
    }
}