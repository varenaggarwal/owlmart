import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./contexts/dataContext";
import setupMockServer from "./api/mock-server";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
  rootElement
);
