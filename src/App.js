import "./App.css";
import { Layout, Menu } from "antd";
import {
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import RestaurantList from "./components/RestaurantList";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            key="add"
            icon={<PlusCircleOutlined style={{ fontSize: "1.8em" }} />}
          />
          <Menu.Item
            key="add"
            icon={<QuestionCircleOutlined style={{ fontSize: "1.8em" }} />}
          />
          <Menu.Item
            key="add"
            icon={<UserOutlined style={{ fontSize: "1.8em" }} />}
          />
        </Menu>
      </Header>
      <Content>
        <RestaurantList />
      </Content>
    </Layout>
  );
}

export default App;
