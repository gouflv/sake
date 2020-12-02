import React from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle} from 'styled-components'
import normalize from 'styled-normalize'
import App from './App'
import reportWebVitals from './reportWebVitals'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    padding: 1rem;
  }
  div {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
