import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import { antdThemeConfig } from '@core/providers/ThemeConfig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={antdThemeConfig}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
