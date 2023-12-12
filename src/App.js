import "./App.css";
import ViewAudio from "./Component/ViewAudio/ViewAudio";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import SideBar from "./Component/SideBar/SideBar";
import AudioRank from "./Component/AudioRank/AudioRank";
import { Layout, Space } from "antd";
import { Route, Routes } from "react-router-dom";


//connect db

function App() {
  return (
    <Space>
      <Layout>
        <Layout.Header style={{ width: "100vw", height: "72px" }}>
          <Header />
        </Layout.Header>
        <Layout>
          <Layout.Sider style={{ width: "15vw", height: "100vh" }}>
            <SideBar />
          </Layout.Sider>
          <Layout.Content style={{ width: "85vw", height: "100vh" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ViewAudio />
                  </>
                }
              />
              <Route
                path="/audioRank"
                element={
                  <>
                    <AudioRank />
                  </>
                }
              />
            </Routes>
          </Layout.Content>
        </Layout>
        <Layout.Footer style={{ width: "100vw", height: "72px" }}>
          <Footer />
        </Layout.Footer>
      </Layout>
    </Space>
  );
}
export default App;
