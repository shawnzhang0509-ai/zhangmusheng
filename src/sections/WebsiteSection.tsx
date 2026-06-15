interface Website {
  title: string
  desc: string
  stack: string[]
  status: string
}

const WEBSITES: Website[] = [
  {
    title: '个人作品仓库',
    desc: '你正在浏览的页面。一个功能性的多维度作品归档站，用 React + Tailwind 构建。',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    status: '持续迭代',
  },
  {
    title: '量化选股仪表盘',
    desc: '连接 Tushare 数据接口，实时展示量化策略的回测结果和持仓状态。',
    stack: ['Next.js', 'PostgreSQL', 'Python', 'D3.js'],
    status: '已上线',
  },
  {
    title: '无间之城 - 互动叙事',
    desc: '小说的互动式网页版本，读者可以选择不同的叙事分支探索城市。',
    stack: ['React', 'Three.js', 'Framer Motion'],
    status: '开发中',
  },
  {
    title: 'MBTI 性格评估工具',
    desc: '一个精简的在线性格测试工具，基于认知功能理论，提供详细的类型报告。',
    stack: ['Vue.js', 'Node.js', 'MongoDB'],
    status: '已上线',
  },
  {
    title: '财务模型模板库',
    desc: '在线浏览和下载 DCF、LBO、M&A 等财务模型的平台，附带教学视频。',
    stack: ['React', 'Firebase', 'Stripe'],
    status: '开发中',
  },
]

export default function WebsiteSection() {
  return (
    <section id="websites" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="WEBSITES" title="网站" desc="前端开发与交互设计" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
        }}
      >
        {WEBSITES.map((site) => (
          <div key={site.title} className="content-card" style={{ cursor: 'pointer' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#e8e8e8',
                  lineHeight: 1.4,
                  flex: 1,
                }}
              >
                {site.title}
              </h3>
              <span
                style={{
                  fontSize: 11,
                  color:
                    site.status === '已上线'
                      ? '#5a9e6f'
                      : site.status === '开发中'
                        ? '#c4a35a'
                        : '#6b6b76',
                  padding: '2px 8px',
                  borderRadius: 4,
                  backgroundColor:
                    site.status === '已上线'
                      ? 'rgba(90, 158, 111, 0.1)'
                      : site.status === '开发中'
                        ? 'rgba(196, 163, 90, 0.1)'
                        : 'rgba(107, 107, 118, 0.1)',
                  whiteSpace: 'nowrap',
                  marginLeft: 8,
                }}
              >
                {site.status}
              </span>
            </div>

            <p
              style={{
                fontSize: 14,
                color: '#6b6b76',
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              {site.desc}
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {site.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { SectionHeader } from './ArticleSection'
