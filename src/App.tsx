import { BrowserRouter, Route, Routes } from 'react-router'
import WoodGrowthBackground from './components/WoodGrowthBackground'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import VideoPage from './pages/VideoPage'

export default function App() {
  return (
    <BrowserRouter>
      <WoodGrowthBackground />
      <div className="site-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/videos/:slug" element={<VideoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
