function sortedFrequency(arr, num) {
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    let found = false;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === num) {
            count++;
            found = true;

            let left = middle - 1;
            while (left >= start && arr[left] === num) {
                count++;
                left--;
            }

            let right = middle + 1;
            while (right <= end && arr[right] === num) {
                count++;
                right++;
            }

            break; 
        } else if (arr[middle] < num) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return found ? count : -1;
}

// Example usage
const arr = [1, 1, 2, 2, 2, 2, 3];
const num = 4;
console.log(sortedFrequency(arr, num)); // Output: 3


module.exports = sortedFrequency