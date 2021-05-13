import MF from '../components/MF/MF';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/globalStyle';


const Layout = ({ children }) => (
  <div>
    <div className="layout">{children}</div>

  </div>
)

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <IconMoon /> */}
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
