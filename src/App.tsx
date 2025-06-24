import SiteRoutes from "./bits/Routes";
import "./App.css";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />;
  return <SiteRoutes />;
}

export default App;
