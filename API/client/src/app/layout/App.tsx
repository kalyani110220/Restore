import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import Catalog from "../../features/catalog/Ctalaog";
import { useState } from "react";



function App() {
  const [darkMode,setDarkmode] = useState(false);
  const paletteType = darkMode? 'dark' :'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light'?'#eaeaea':'#121212'
      }
    }
  })
  function handleThemeChange()
  {
    setDarkmode(!darkMode); 
  }
   

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={false} handleThemeChange={handleThemeChange } />
      <Container> <Catalog />
      </Container>
      
      
    </ThemeProvider>
  );
}

export default App
