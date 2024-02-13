// find smallest values index and subtract from length of the array.

function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    const target = Math.min(...arr); // gets the smallest value in the arr

    // console.log(`Array: [ ${arr} ]`);
    // console.log(`Target: ${target}`);
    // console.log('| arr[left] | arr[mid] | arr[right] | left | mid | right | target |');

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return right - 1 - mid;
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
    
    // return -1; // gets the rotation count
}

const rotatedArray = [15, 18, 2, 3, 6, 12];
const rotationCount = findRotationCount(rotatedArray);

console.log(rotationCount);

module.exports = findRotationCount