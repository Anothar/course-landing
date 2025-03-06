import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="App">
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
      <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
      <Main />
    </div>
  );
}

export default App;
