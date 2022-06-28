export default function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Find the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name < arr[min].name) {
        min = j;
      }
    }
    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
}
