export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // First element of the unsorted array
    let currentValue = arr[i];
    let j;
    // Find the right position in the sorted subarray
    for (j = i - 1; j >= 0 && arr[j].name > currentValue.name; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
}
