import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body {
  font-size: 14px;
  margin: 0;
  padding: 0;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  overflow-y: hidden;
  background-color: red;
}

body:hover {
  overflow-y: auto;
}

body::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

button {
  border: none;
  outline: none;
}

button:hover {
  cursor: pointer;
}


`

