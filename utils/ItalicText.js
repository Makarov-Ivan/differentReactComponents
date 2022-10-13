import React from "react";
import R from "ramda";

export default (props) => {
  let text;
  if (R.is(Object, props)) {
    ({ text } = props);
  } else {
    text = props;
  }
  return React.createElement("i", null, text);
};
