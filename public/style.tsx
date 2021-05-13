import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@font-face {
  font-family: 'icomoon';
  src:  url('/fonts/icomoon.eot?mjp3ax');
  src:  url('/fonts/icomoon.eot?mjp3ax#iefix') format('embedded-opentype'),
    url('/fonts/icomoon.ttf?mjp3ax') format('truetype'),
    url('/fonts/icomoon.woff?mjp3ax') format('woff'),
    url('/fonts/icomoon.svg?mjp3ax#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
  content: "\e900";
}
.icon-home2:before {
  content: "\e901";
}
.icon-home3:before {
  content: "\e902";
}
`