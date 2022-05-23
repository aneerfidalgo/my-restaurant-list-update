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
        <Route path='/home' element={ <RestaurantList />}/>
        <Route path='/random' element={ <RestaurantList />}/>
        <Route path='/add' element={ <RestaurantList />}/>
        <Route path='/login' element={ <RestaurantList />}/>
        <Route path='/' element={ <RestaurantList />}/>
        </Routes>
      </Content>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
