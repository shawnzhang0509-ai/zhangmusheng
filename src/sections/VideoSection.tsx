import { Link } from 'react-router'
import { VIDEOS } from '../data/videos'
import { SectionHeader } from './ArticleSection'

export default function VideoSection() {
  return (
    <section id="videos" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="VIDEOS" title="视频" desc="视觉表达与记录" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}
      >
        {VIDEOS.map((video) => {
          const card = (
            <>
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  backgroundColor: 'var(--site-bg)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={video.cover ?? '/images/videos.jpg'}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: video.cover ? 0.85 : 0.6,
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="video-play-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--site-bg)">
                      <polygon points="8,5 20,12 8,19" />
                    </svg>
                  </div>
                </div>
                <span className="video-duration-badge">{video.duration}</span>
              </div>
              <div style={{ padding: 16 }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: 'var(--site-text)',
                    lineHeight: 1.5,
                    marginBottom: 6,
                  }}
                >
                  {video.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--site-text-muted)',
                    lineHeight: 1.6,
                    marginBottom: 8,
                  }}
                >
                  {video.desc}
                </p>
                <span style={{ fontSize: 12, color: 'var(--site-text-faint)' }}>{video.date}</span>
              </div>
            </>
          )

          if (video.slug) {
            return (
              <Link key={video.title} to={`/videos/${video.slug}`} className="content-card video-card-link">
                {card}
              </Link>
            )
          }

          return (
            <div key={video.title} className="content-card" style={{ padding: 0, overflow: 'hidden' }}>
              {card}
            </div>
          )
        })}
      </div>
    </section>
  )
}
