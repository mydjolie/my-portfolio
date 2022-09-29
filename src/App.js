import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/home";
import WhyMe from "./components/why-me";
import EducationWorks from "./components/education-works";

function App() {
  return (
    <ChakraProvider>
      <Home />
      <WhyMe />
      <EducationWorks />
    </ChakraProvider>
  );
}

export default App;
