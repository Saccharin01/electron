import React, { memo } from "react";

const MyComponent = memo(() => {
  console.log("Rendering: MyComponent");
  return (
    <div>
      <h1>Hello Typescript, and React!</h1>
    </div>
  );
});

export default MyComponent;
