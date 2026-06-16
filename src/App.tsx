import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}
