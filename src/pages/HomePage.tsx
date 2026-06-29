import Navigation from '../components/Navigation'
import Hero from '../sections/Hero'
import ArticleSection from '../sections/ArticleSection'
import NovelSection from '../sections/NovelSection'
import VideoSection from '../sections/VideoSection'
import WebsiteSection from '../sections/WebsiteSection'
import AnalysisSection from '../sections/AnalysisSection'
import StockSection from '../sections/StockSection'
import ProjectSection from '../sections/ProjectSection'

function Footer() {
  return (
    <footer
      style={{
        padding: '48px 24px',
        borderTop: '1px solid var(--site-border)',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: 13, color: 'var(--site-text-faint)' }}>
        张木生 · 个人作品归档 · {new Date().getFullYear()}
      </p>
    </footer>
  )
}

function SectionDivider() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div style={{ height: 1, backgroundColor: 'var(--site-border)' }} />
    </div>
  )
}

export default function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <SectionDivider />
      <ArticleSection />
      <SectionDivider />
      <NovelSection />
      <SectionDivider />
      <VideoSection />
      <SectionDivider />
      <WebsiteSection />
      <SectionDivider />
      <AnalysisSection />
      <SectionDivider />
      <StockSection />
      <SectionDivider />
      <ProjectSection />
      <Footer />
    </div>
  )
}
