import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import ArticleSection from './sections/ArticleSection'
import NovelSection from './sections/NovelSection'
import VideoSection from './sections/VideoSection'
import WebsiteSection from './sections/WebsiteSection'
import AnalysisSection from './sections/AnalysisSection'
import StockSection from './sections/StockSection'
import ProjectSection from './sections/ProjectSection'

function Footer() {
  return (
    <footer
      style={{
        padding: '48px 24px',
        borderTop: '1px solid #1f1f22',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: 13, color: '#4a4a52' }}>
        顾明远 · 个人作品归档 · {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Navigation />
      <Hero />

      {/* Divider */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <ArticleSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <NovelSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <VideoSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <WebsiteSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <AnalysisSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <StockSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 1, backgroundColor: '#1f1f22' }} />
      </div>

      <ProjectSection />

      <Footer />
    </div>
  )
}
