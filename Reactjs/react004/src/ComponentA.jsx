import { Fragment } from "react";
import useNumber from "./hooks/useNumber";

export default function ComponentA() {
  const isMobile = useNumber();
  return <Fragment></Fragment>;
}
