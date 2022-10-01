import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";

import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/stats" element={<h1>Stats</h1>}></Route>
                <Route path="/projects" element={<h1>Projects</h1>}></Route>
                <Route path="/data" element={<h1>Data</h1>}></Route>
                <Route path="/diagrams" element={<h1>Diagrams</h1>}></Route>
              </Routes>
            </Layout>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
