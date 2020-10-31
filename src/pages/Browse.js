import React from "react";
import { useContent } from "../hooks/index";
import selectionFilter from "../utils/selection-map";
import { BrowseContainer } from "../containers/Browse";
const Browse = () => {
  //we need the series and the files
  const { series } = useContent("series");
  //console.log(series);
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  // console.log(slides);
  //console.log(films);
  //we need slides
  //pass it to the browse container

  return <BrowseContainer slides={slides}></BrowseContainer>;
};
export default Browse;
