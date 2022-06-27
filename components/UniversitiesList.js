import { Fragment } from "react";

const UniversitiesList = (props) => {
  return (
    <Fragment>
      <ul>
        {props.universities?.map((university, i) => (
          <li key={i}> {university.name} </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default UniversitiesList;
