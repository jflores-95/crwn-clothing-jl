import Home from "./components/Routes/home/home.component";
import Navigation from "./components/Routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Routes/sign-in/sign-in.component";

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
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
