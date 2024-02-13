function findRotatedIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    // console.log(`Array: [ ${arr} ]`);
    // console.log(`Target: ${target}`);
    // console.log('| arr[left] | arr[mid] | arr[right] | left | mid | right | target |');
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        
        if (arr[mid] === target) {
            return mid;
        }
        
        // If the left half is sorted
        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // If the right half is sorted
        else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // console.log(`|  ${arr[left]}        |  ${arr[mid]}       |  ${arr[right]}         | ${left}    | ${mid}   | ${right}     | ${target}      |`);
    }
    
    return -1;
}

module.exports = findRotatedIndex;
