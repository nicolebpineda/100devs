// Store Data in Arrays

// Musketeers
    // const musketeers = ['Athos', 'Porthos', 'Aramis']; 
    // for (let i = 0; i < musketeers.length; i++){
    //     console.log(musketeers[i]);
    // }                                           // check

    // musketeers.push('D\'Artagnan');
    // musketeers.forEach(musketeer => {
    //     console.log(musketeer);
    // });                                         // check

    // musketeers.splice(2, 1);
    // for (const musketeer of musketeers) {
    //     console.log(musketeer);
    // }                                           // check. these weren't too bad. 

// Sum of values
    // const values = [3, 11, 7, 2, 9, 10];
    // let sum = 0;
    // for (let i = 0; i < values.length; i++){
    //     sum = sum + values[i] 
    // }
    // console.log(sum)

// Array maximum
    // const values = [3, 11, 7, 2, 9, 10];
    // let max;
    // for(let i = 0; i < values.length; i++){
    //     max = Math.max(...values);
    // }           
    // console.log(max)
    // // didn't know how to do this, tried googling Math.max to learn more 
    // //found ... this object by accident. No idea how it works but it does.

// List of Words

    // Progress Report
        // let listOfWords = [];
        // let add = prompt('Enter until stop');

        // if (add !== 'stop') {
        //     listOfWords.push(add);
        // } else {
        //     console.log(listOfWords);
        // }
        // console.log(listOfWords)
    
    //Final Result

        let listOfWords = [];
        let add;

        while (add !== 'stop'){
            add = prompt('Enter until stop');
            if (add !== 'stop') {
                listOfWords.push(add);
            } 
        }
        console.log(listOfWords);