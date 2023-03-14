// Translate border-left-width to borderLeftWidth
    // function camelize(str){
    //     return str
    //     //use split to make string into an array
    //     .split('-')

    //     // transform it => grab 2nd element (1st index), change first character into uppercase
    //     // [item1, item2, item3] Item
    //     // [  0,     1,     2  ] Index
    //     .map(function (text, index, array) {
    //         if (index === 0){
    //             return text
    //         } else {
    //             return text[0].toUpperCase() + text.slice(-(text.length - 1))
            
    //             // return text
    //         }
    //     })

    //     // join back
    //     .join('')
    // }

    // console.log(camelize("background-color"));
    // console.log(camelize("list-style-type"));
    // console.log(camelize("-webkit-transition"));


// Filter Range 
    // let arr = [5, 3, 8, 1];
    // let filtered = filterRange(arr, 1, 4);

    // function filterRange(arr, a, b) {
    //     return arr
    //     .filter(function (item){
    //         if (item >= a && item <= b){
    //             return item
    //         }
    //     })
    // }

    // console.log(filtered);


// Filter Range "in place"
    // let arr = [5, 3, 8, 1];

    // function filterRangeInPlace(arr, a, b ){
    //     let i = 0
    //     while (i < arr.length){
    //         if (a <= arr[i] && arr[i] >= b) {
    //             arr.splice(i, 1)
    //         }
    //         i++; 
    //     }
    //     return arr
    // }

    // console.log(filterRangeInPlace(arr, 1, 4));
    

// Sort in decreasing order
    // let arr = [5, 2, 1, -10, 8]; // [8, 5, 2, 1, -10]

    // function compare(a, b) {
    //     if (a < b) return 1;
    //     if (a == b) return 0;
    //     if (a > b ) return -1;
    // }

    // console.log(arr.sort(compare));


// Copy and sort array
    // let arr = ['HTML', 'JavaScript', 'CSS'];

    // let sorted = copySorted(arr);

    // function copySorted(arr){
    //     let newArr = arr.concat().sort();
        
    //    return newArr;
    // }

    // console.log(sorted)
    // console.log(arr)


// Create an extendable calculator
    // function calculator() {

    // }


// Map to Names
    // let john = {name: 'John', age: 25};
    // let pete = {name: 'Pete', age: 30};
    // let mary = {name: 'Mary', age: 28};

    // let users = [john, pete, mary];

    // let names = users.map(function (item, index, array) {
    //     return item.name
    // });

    // console.log(names);


// Map to objects
    // let john = {name: 'John', surname: 'Smith', id: 1 };
    // let pete = {name: 'Pete', surname: 'Hunt', id: 2};
    // let mary = {name: 'Mary', surname: 'Key', id: 3};

    // let users = [john, pete, mary];

    // let usersMapped = users.map((item) => {
    //                         const usersMapped = {
    //                             fullName: `${item.name} ${item.surname}`, 
    //                             id: item.id
    //                         }
    //                         return usersMapped
    //                 })


    // console.log(usersMapped[0].id)
    // console.log(usersMapped[0].fullName)

    // console.log(usersMapped)


// Sort users by age
    // let john = {name: 'John', age: 25};
    // let pete = {name: 'Pete', age: 30};
    // let mary = {name: 'Mary', age: 28};

    // let arr = [pete, john, mary];

    // sortByAge(arr);

    // function sortByAge(arr){
    //     function compare(a, b) {
    //         if (a.age > b.age) return 1;
    //         if (a.age == b.age) return 0;
    //         if (a.age < b.age) return -1;
    //     }

    //    arr.sort(compare);
    // }

    // console.log(arr[0].name); // John
    // console.log(arr[1].name); // Mary
    // console.log(arr[2].name); // Pete


// Shuffle an array
    // function shuffle(array){
    //     for (let i = array.length - 1; i > 0; i--){
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // // counts of appearances for all possible permutations
    // let count = {
    //     '123': 0, 
    //     '132': 0,
    //     '213': 0,
    //     '231': 0,
    //     '321': 0, 
    //     '312': 0
    // };

    // for (let i = 0; 1 < 1000000; i++){
    //     let array = [1, 2, 3];
    //     shuffle(array);
    //     count[array.join('')]++; 
    // }


    // // show counts of all possible permutations
    // for (let key in count){
    //     console.log(`${key}: ${count[key]}`);
    // } 


// Get Average Age
    // let john = {name: 'John', age: 25};
    // let pete = {name: 'Pete', age: 30};
    // let mary = {name: 'Mary', age: 29};
    // let tim = { name: 'Tim',  age: 12}

    // let arr = [john, pete, mary, tim];

    // function getAverageAge(){
    //     let k = arr.length
    //     let average = (arr[0].age + arr[1].age + arr[2].age) / k
        
    //     return average          // okay i did it but this needs to be a loop or else 
    // }                           // if the number of elements in the array changes, this will not work as intended

    // console.log(getAverageAge(arr));


    // function getAverageAge2(users){
    //     let k = users.length;
    //     let average = 0;
    //     for (let i = 0; i < users.length; i++){
    //         average += users[i].age
    //     }
    //     return average / k;
    // }

    // console.log(getAverageAge2(arr))
    // // it worked without having a parameter, but without a parameter
    // // I wouldn't be able to put in another array, it would not work as intended


// Filter Unique Array Members
    // let arr = [];
    
    // function unique(arr){
    //     let i = 0;
    //     let results = [];
    //     while (i < arr.length){
    //         // if element is not in the array, add
    //         // if element is already in the array, do nothing
    //         if (!results.includes(arr[i])){
    //             results.push(arr[i])
    //         }
    //         i++;
    //         /* 
    //             results = arr.map(function (item, index, array){
    //             if (!arr.includes(item)) {
    //                 results.push(item)
    //             } 
    //             //tried doing a map but map is already loop. I don't really need a loop in a loop. 
    //             }); 
    //         */
    //     }
    //     return results
    // }

    // let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O', 'tada'
    // ];

    // console.log(unique(strings)); // Hare, Krishna, :-O


//Create Keyed Object form Array
    let users = [
        {id: 'john', name: 'John Smith', age: 20},
        {id: 'ann', name: 'Ann Smith', age: 24},
        {id: 'pete', name: 'Pete Peterson', age: 31}
    ];

    function groupById(arr){
        arr.reduce()
    }



    let usersById = groupById(users);

