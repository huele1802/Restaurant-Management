import { Layout } from "antd"
import "./App.css"
import GlobalHeader from "./shared/layout/GlobalHeader"
import AppRouter from "@core/router/AppRouter"

const { Header, Content } = Layout
function App() {
    return (
        <Layout>
            <Header className="app-header">
                <GlobalHeader />
            </Header>

            <Content className="app-main-content">
                <AppRouter />
            </Content>
        </Layout>
    )
}

export default App
