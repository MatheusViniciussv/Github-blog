import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/theme/defaultTheme"
import { Router } from "./routes"

function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Router />
    </ThemeProvider>
  )
}

export default App
