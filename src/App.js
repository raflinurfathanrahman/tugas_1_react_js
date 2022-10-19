import React from "react";
import MenuUtama from "./page/MenuUtama";
import MenuProduct from "./page/MenuProduct";
import MenuKontak from "./page/MenuKontak";
import MenuTentangKami from "./page/MenuTentangKami";

function App() {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
}

export default App;
