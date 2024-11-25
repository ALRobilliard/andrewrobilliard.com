// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import ReactDOM from 'react-dom';

import "prismjs/themes/prism.css"
import "./src/styles/global.css"

const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

export { replaceHydrateFunction }