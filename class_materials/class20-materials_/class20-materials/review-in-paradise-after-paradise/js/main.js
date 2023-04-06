// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".



function test() {
    let nums = [56, 41, 27, 90, 83]
    
    if (nums[0] < nums[nums.length - 1]){
        alert('hi')
    } else if (nums[0] > nums[nums.length - 1]) {
        alert('bye')
    } else {
        alert('We close in an hour')
    } 
    
}
test()