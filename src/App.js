import "./App.css";
import ViewAudio from "./Component/ViewAudio/ViewAudio";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import SideBar from "./Component/SideBar/SideBar";
import AudioRank from "./Component/AudioRank/AudioRank";
import { Layout, Space } from "antd";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Space>
      <Layout style={{ width: "15vw" }}>
        <Layout.Sider>
          <SideBar />
        </Layout.Sider>
      </Layout>
      <Layout style={{ width: "85vw" }}>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <ViewAudio />
                </>
              }
            />
            <Route
              path='/audioRank'
              element={
                <>
                  <AudioRank />
                </>
              }
            />
          </Routes>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Space>
  );
}

export default App;
