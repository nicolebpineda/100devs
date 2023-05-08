// Type out all examples
// visit https://example.org/ to test examples by pasting into console

// Using the fetch() API
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log(`Recieved response: ${response.status}`);
});

console.log('Started request...');

// Chaining promises
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[2].name);
    });
});

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data[1].name)
    });

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then((response) => {
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[10].name)
    });

// Catching errors
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data[4].name);
    })
    .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });

// Combining multiple promises
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn/github.io/learning-area/javascript/oojs/json/surperheros.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
    });

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
        console.log(`${reponse.url}: ${response.status}`);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
    });

// async and await
async function myFunction() {
    // This is an async function
}

async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the 'fetch()' call will either return a Response or throw an erroe
        const response = await fetch('https://mdn/github.io/learing-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        // after this line, our function will wait for the 'response.json()' call to be settled
        // the 'response.json()' call will either return the parsed JSON object or throw an error
        const data = await response.json();
        console.log(data[8].name);
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();

async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
console.log(promise[0].name);

async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(`Could not get products ${error}`);
    }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[9].name));

try {
    // uisng await outside an async function is only allowed in a module
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[7].name);
}
catch(error) {
    console.error(`Could not get products: ${error}`);
}
