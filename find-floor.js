/* Given a sorted array and a value x, the floor of x is the largest element in the array smaller than or equal to your target.*/

function findFloor(arr, highestValue) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    let floor = -1;
    while(left <= right){
        mid = left + (right - left) / 2;

        if(arr[mid] === highestValue){
            return arr[mid];
        }
        else if(arr[mid] < highestValue){
            floor = arr[mid];
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return floor;
}

module.exports = findFloor