import React from 'react'

function Functions() {
    var x=10;

    const normal = () => {
        return "Hello";
    }

    const parameter = (text) => {
        return text;
    }

    const element = (ele) => {
        return <h2>{ele}</h2>
    }

  return (
    <div>
        <h1>{x+5}</h1>
        <h1>{normal()}</h1>
        <h1>{parameter("The fun")}</h1>
        {element("This is the fun")}
    </div>
  )
}

export default Functions;
