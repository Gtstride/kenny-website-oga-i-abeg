import React from 'react'
import { render } from 'react-dom'

export default function App () {
  return(
    React.createElement("div", {}, "This is the app")
  )
}

render(React.createElement(App), document.getElementById("root"))