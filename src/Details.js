import React from "react";

const Details = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};
// Ways to debug props or state
{
  /* <pre>
    <code>{JSON.stringify(props, null, 4)}</code>
</pre> */
}

export default Details;
