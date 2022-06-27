import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import UniversitiesList from "../components/UniversitiesList";
import SortSelect from "../components/SortSelect";
import { useEffect, useState } from "react";
import quickSort from "../services/Quicksort";
import bubbleSort from "../services/BubbleSort";

export default function Home(props) {
  const [universities, setUniversities] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setUniversities(props.universities);
  }, [props.universities]);

  const sortSelected = (event) => {
    const cloned = universities.slice();
    let startTime = performance.now();
    switch (event.target.value) {
      case "quicksort":
        quickSort(cloned, 0, cloned.length - 1);
        break;
      case "bubblesort":
        bubbleSort(cloned);
        break;
      default:
        cloned.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    let endTime = performance.now();
    setTime(endTime - startTime);
    setUniversities(cloned);
  };

  const shuffle = () => {
    const cloned = universities.slice();
    for (let i = cloned.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    setUniversities(cloned);
    setTime(0);
  };

  return (
    <div className={styles.container}>
      <h1>Universities List</h1>
      <SortSelect onChange={sortSelected} onShuffle={shuffle} time={time} />
      <UniversitiesList universities={universities} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(
    "http://universities.hipolabs.com/search?country=United+States"
  );

  const universities = await data.json();

  return {
    props: {
      universities: universities.map((u) => ({
        web_page: u.web_pages ? u.web_pages[0] : null,
        name: u.name,
        country: u.country,
        alpha_two_code: u.alpha_two_code,
      })),
    },
  };
}
