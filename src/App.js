import Home from "./components/Routes/home/home.component";
import { Routes, Route, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>I am the navigation bar</h1>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <div>This is the shop component</div>;
};

const App = () => {
  //   <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
