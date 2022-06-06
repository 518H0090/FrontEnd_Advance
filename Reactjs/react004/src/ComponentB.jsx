import { Fragment } from "react";
import useNumber from "./hooks/useNumber";

export default function ComponentB() {
  const isMobile = useNumber();
  console.log(isMobile);
  return <Fragment></Fragment>;
}
