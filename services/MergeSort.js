function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].name < right[0].name) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

export default function mergeSort(arr) {
  const half = arr.length / 2;

  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}
