//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.shape = 'round'
stopwatch.color = 'orange'
stopwatch.currentTime = '45 seconds'
stopwatch.brand = 'StopTimeINC'

stopwatch.start = function(){
    console.log('ready set go');
}

stopwatch.stop = function(){
    console.log('end time');
}

stopwatch.beep = function(){
    console.log('Beep Beep Imma Sheep');
}