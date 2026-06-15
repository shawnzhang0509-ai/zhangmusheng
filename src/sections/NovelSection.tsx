export default function NovelSection() {
  const chapters = [
    '第一章：觉醒',
    '第二章：城市边界',
    '第三章：数据洪流',
    '第四章：编码意识',
    '第五章：底层协议',
    '第六章：系统崩溃',
  ]

  return (
    <section id="novels" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="NOVELS" title="小说" desc="虚构世界的构建" />

      {/* Featured novel */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: 32,
          marginBottom: 48,
        }}
        className="novel-feature"
      >
        <div
          style={{
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid #1f1f22',
            aspectRatio: '2/3',
          }}
        >
          <img
            src="/images/novel.jpg"
            alt="无间之城"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div>
          <h3
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: '#e8e8e8',
              marginBottom: 12,
              lineHeight: 1.3,
            }}
          >
            《无间之城》
          </h3>
          <p
            style={{
              fontSize: 15,
              color: '#6b6b76',
              lineHeight: 1.8,
              marginBottom: 20,
              maxWidth: 560,
            }}
          >
            一座漂浮在数据深渊之上的城市，每一个居民都是一串被编码的意识。当系统的边界开始崩解，人性的本质在技术洪流中逐渐显露——这不是一个简单的科幻故事，而是一次关于存在、自由与选择的哲学追问。
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
            <span className="tag">赛博朋克</span>
            <span className="tag">哲学思辨</span>
            <span className="tag">长篇连载</span>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: 4,
                border: '1px solid rgba(196, 163, 90, 0.3)',
                color: '#c4a35a',
                fontSize: 12,
              }}
            >
              预计 30 万字
            </span>
          </div>

          <p style={{ fontSize: 13, color: '#4a4a52', marginBottom: 12 }}>章节列表</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {chapters.map((ch, i) => (
              <div
                key={ch}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '8px 0',
                  borderBottom: '1px solid #1f1f22',
                }}
              >
                <span style={{ fontSize: 12, color: '#4a4a52', minWidth: 28 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 14, color: i < 3 ? '#e8e8e8' : '#4a4a52' }}>
                  {ch}
                </span>
                {i < 3 && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 11,
                      color: '#c4a35a',
                      padding: '2px 8px',
                      borderRadius: 4,
                      background: 'rgba(196, 163, 90, 0.08)',
                    }}
                  >
                    已发布
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Short stories */}
      <div>
        <h4
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: '#6b6b76',
            marginBottom: 16,
            letterSpacing: '0.05em',
          }}
        >
          短篇
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { title: '最后一次备份', date: '2023-12', desc: '一个人决定在数字永生和真实死亡之间做出选择。' },
            { title: '404 号房间', date: '2023-08', desc: '酒店里有一间不存在的房间，只有特定的人能找到入口。' },
            { title: '递归梦境', date: '2023-04', desc: '她在梦中发现了另一个自己，而那个自己也在做梦。' },
          ].map((story) => (
            <div
              key={story.title}
              className="content-card"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 16,
                cursor: 'pointer',
              }}
            >
              <div>
                <h5 style={{ fontSize: 15, fontWeight: 500, color: '#e8e8e8', marginBottom: 4 }}>
                  {story.title}
                </h5>
                <p style={{ fontSize: 13, color: '#6b6b76' }}>{story.desc}</p>
              </div>
              <span style={{ fontSize: 12, color: '#4a4a52', whiteSpace: 'nowrap' }}>
                {story.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .novel-feature {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

import { SectionHeader } from './ArticleSection'
