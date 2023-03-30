import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./Assets/Styles/globalStyle";
import { Header } from "./Components/Header";
import Ripple from "./Components/Ui/Ripple/Ripple";
import { routes } from "./Routes/routes";

function App() {
  return (
    <Fragment>
      <Ripple size={30} position="fixed" color={"rgb(63, 200, 134)"} duration={1000} />
      <GlobalStyle />
      <Header />
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </Fragment>
  );
}

export default App;
