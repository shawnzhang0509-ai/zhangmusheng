import { Link, useParams } from 'react-router'
import Navigation from '../components/Navigation'
import { VIDEO_COLLECTIONS, formatBilibiliEmbedUrl, getVideoBySlug } from '../data/videos'

function VideoFooter() {
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

export default function VideoPage() {
  const { slug } = useParams()
  const video = slug ? getVideoBySlug(slug) : undefined

  if (!video?.bvid) {
    return (
      <div>
        <Navigation />
        <main style={{ padding: '120px 24px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--site-text-muted)', marginBottom: 24 }}>视频不存在或尚未发布。</p>
          <Link to="/" className="article-back-link">
            返回首页
          </Link>
        </main>
        <VideoFooter />
      </div>
    )
  }

  const collection = video.collection
    ? VIDEO_COLLECTIONS.find((item) => item.id === video.collection)
    : undefined

  return (
    <div>
      <Navigation />
      <main className="video-page">
        <div className="video-page-inner">
          <Link to="/#videos" className="article-back-link">
            ← 返回视频列表
          </Link>

          <header className="video-header">
            {collection && (
              <p className="video-collection-label">{collection.title}</p>
            )}
            {video.tags && video.tags.length > 0 && (
              <div className="article-meta">
                {video.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h1>{video.title}</h1>
            <p className="article-date">
              {video.date} · {video.duration}
            </p>
          </header>

          <div className="video-player-wrap">
            <iframe
              src={formatBilibiliEmbedUrl(video.bvid)}
              title={video.title}
              className="video-player"
              allowFullScreen
              scrolling="no"
              frameBorder={0}
            />
          </div>

          <p className="video-desc">{video.desc}</p>

          {video.sourceUrl && (
            <p className="article-source">
              原视频发布于
              <a href={video.sourceUrl} target="_blank" rel="noopener noreferrer">
                哔哩哔哩
              </a>
            </p>
          )}
        </div>
      </main>
      <VideoFooter />
    </div>
  )
}
