import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import RestaurantList from "./components/RestaurantList";
import Menubar from "./components/Menubar";

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
    <Layout className="layout">
      <Header>
     <Menubar />
      </Header>
      <Content>
        <Routes>
        <Route path='/restaurants/:restaurantId' element={<h1>A restaurant</h1>} />
        <Route path='/random' element={ <h1>Random</h1>}/>
        <Route path='/add' element={ <h1>Add restaurant</h1>}/>
        <Route path='/login' element={ <h1>Login</h1>}/>
        <Route path='/' element={ <RestaurantList />}/>
        </Routes>
      </Content>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
