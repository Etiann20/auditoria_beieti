import Navbar from "./components/Navbar";
import Resumen from "./components/Resumen";
import InyeccionSQL from "./components/InyeccionSQL";
import XSS from "./components/XSS";
import Comandos from "./components/Comandos";
import Prompts from "./components/Prompts";

function App() {
  return (
    <>
      <Navbar />

      <Resumen />
      <InyeccionSQL />
      <XSS />
      <Comandos />
      <Prompts />
    </>
  );
}

export default App;