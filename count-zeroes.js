module.exports = countZeroes

function countZeroes(arr) {
    let firstZero = recursiveSearch(arr);
    if (firstZero === -1){
        return arr.length - firstZero;
    }
}

function recursiveSearch(arr, high = arr.length, low = 0){
    if (high>=low){
        let mid = low + Math.floor((high - low)/2);
        if((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0){
            return mid;
        }
        else if (arr[mid] === 1){
            return recursiveSearch(arr, mid + 1, high);
        }
        return recursiveSearch(arr, low, mid - 1);
    }
    return -1;
}
