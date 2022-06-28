import { Fragment, useRef } from "react";

const SortSelect = (props) => {
  const selectRef = useRef("");

  const shuffle = () => {
    selectRef.current.value = "";
    props.onShuffle();
  };

  return (
    <Fragment>
      <select onChange={props.onChange} ref={selectRef} defaultValue="">
        <option disabled value="">
          -- Select --
        </option>
        <option value="default"> Default Sort </option>
        <option value="bubblesort"> Bubble Sort </option>
        <option value="selectionsort"> Selection Sort </option>
        <option value="mergesort"> Merge Sort </option>
        <option value="quicksort"> Quick Sort </option>
        <option value="insertionsort"> Insertion Sort </option>
      </select>
      <button onClick={shuffle}> Shuffle </button>
      Time: {props.time.toFixed(4)} milliseconds
    </Fragment>
  );
};

export default SortSelect;
