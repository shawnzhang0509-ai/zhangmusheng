interface Video {
  title: string
  duration: string
  date: string
  desc: string
}

const VIDEOS: Video[] = [
  {
    title: '如何从零搭建一个量化选股系统',
    duration: '42:18',
    date: '2024-02',
    desc: '从数据获取到回测框架，完整演示用 Python 搭建量化系统的全过程。',
  },
  {
    title: 'React Three Fiber 入门实战',
    duration: '35:45',
    date: '2024-01',
    desc: '用 R3F 创建你的第一个 3D 网页效果，从场景搭建到交互实现。',
  },
  {
    title: 'MBTI 认知功能深度解析',
    duration: '28:30',
    date: '2023-10',
    desc: '逐个拆解八维认知功能，结合实际案例说明每种类型的思维路径。',
  },
  {
    title: 'DCF 估值实操教学',
    duration: '55:12',
    date: '2023-08',
    desc: '以一个真实上市公司为例，手把手完成完整的 DCF 估值模型。',
  },
  {
    title: '《无间之城》世界观设定分享',
    duration: '18:22',
    date: '2023-06',
    desc: '分享小说中的城市架构、技术体系和哲学内核的设定过程。',
  },
]

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
        {VIDEOS.map((video) => (
          <div key={video.title} className="content-card" style={{ cursor: 'pointer', padding: 0, overflow: 'hidden' }}>
            <div
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                backgroundColor: '#0a0a0b',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/videos.jpg"
                alt={video.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.6,
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
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(196, 163, 90, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0a0a0b">
                    <polygon points="8,5 20,12 8,19" />
                  </svg>
                </div>
              </div>
              <span
                style={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  fontSize: 11,
                  color: '#e8e8e8',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {video.duration}
              </span>
            </div>
            <div style={{ padding: 16 }}>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#e8e8e8',
                  lineHeight: 1.5,
                  marginBottom: 6,
                }}
              >
                {video.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: '#6b6b76',
                  lineHeight: 1.6,
                  marginBottom: 8,
                }}
              >
                {video.desc}
              </p>
              <span style={{ fontSize: 12, color: '#4a4a52' }}>{video.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { SectionHeader } from './ArticleSection'
