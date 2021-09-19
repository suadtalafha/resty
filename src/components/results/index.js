import React from "react";

function Results(props) {
  return (
    <section>
      <pre>
        {props.data ? JSON.stringify(this.props.data, undefined, 2) : null}
      </pre>
    </section>
  );
}

export default Results;
