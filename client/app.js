import React from "react";
import ReactDOM from "react-dom";

// This is to let react dev tools appear
const Test = () => {
  return (
    <h1>Test</h1>
  )
}

const App = () => {
  // fetch the component from the server and render within this component
  const [component, setComponent] = React.useState(undefined);
  React.useEffect(() => {
    fetch("http://localhost:3000/ssr").then(data => data.text()).then(data => setComponent(data));
  }, [])
  return (
    <div>
      <Test />
      <h1>This is my app</h1>
      <div dangerouslySetInnerHTML={{ __html: component }} />
    </div>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"));