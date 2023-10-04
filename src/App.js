import { ChakraProvider } from "@chakra-ui/react";
import RoutingPage from "component/routes/RoutingPage";
import WalletContextProvider from "component/wallet/WalletContextProvider";

function App() {
  return (
    <ChakraProvider>
      <WalletContextProvider>
        <RoutingPage />
      </WalletContextProvider>
    </ChakraProvider>
  );
}

export default App;
