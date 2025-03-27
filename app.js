import React from "react";
import ReactDOM from "react-dom/client";

// Using JSX for both headings
const heading = <h1 id="title" key="h1">Heading 1  from React</h1>;
const heading2 = <h1 id="title" key="h2">Heading 2  from React</h1>;

const container = (
  <div id="container">
    {heading}
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
