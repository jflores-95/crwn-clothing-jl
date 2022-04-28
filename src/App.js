import Home from "./components/Routes/home/home.component";
import Navigation from "./components/Routes/navigation/navigation.component";
import Shop from "./components/Routes/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./components/Routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
