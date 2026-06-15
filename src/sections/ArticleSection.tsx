interface Article {
  title: string
  date: string
  summary: string
  tags: string[]
}

const ARTICLES: Article[] = [
  {
    title: '从财务报表到代码：一个分析师的转型之路',
    date: '2024-03-15',
    summary: '记录了从纯财务背景转向技术领域的思考过程。不是"转行了"，而是发现两条路在更高处交汇。',
    tags: ['职业转型', '全栈开发'],
  },
  {
    title: 'React Server Components 在实际项目中的取舍',
    date: '2024-01-22',
    summary: '在三个项目中尝试了 RSC，总结了一套判断是否适合使用的决策框架。不是每个项目都需要最新技术。',
    tags: ['React', '前端架构'],
  },
  {
    title: 'DCF 估值模型中的常见陷阱',
    date: '2023-11-08',
    summary: '做了上百个 DCF 模型后总结出的五个最常出错的地方。WACC 和永续增长率的敏感度分析是关键。',
    tags: ['财务建模', '估值'],
  },
  {
    title: 'MBTI 认知功能：比四个字母更精确的工具',
    date: '2023-09-14',
    summary: '为什么我不推荐只看四个字母，认知功能栈才是理解人格差异的核心框架。',
    tags: ['MBTI', '心理学'],
  },
  {
    title: '构建量化选股模型的第一步：数据清洗',
    date: '2023-07-30',
    summary: '很多人觉得量化模型的核心在算法，实际上 80% 的时间花在数据清洗和特征工程上。',
    tags: ['量化分析', 'Python'],
  },
  {
    title: '写小说与写代码的相似之处',
    date: '2023-05-18',
    summary: '架构设计对应世界观构建，调试对应改稿，两者本质上都是在处理复杂度。',
    tags: ['写作', '编程'],
  },
]

export default function ArticleSection() {
  return (
    <section id="articles" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="ARTICLES" title="文章" desc="技术、思考与观察" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 16,
        }}
      >
        {ARTICLES.map((article) => (
          <div key={article.title} className="content-card" style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
              {article.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#e8e8e8',
                lineHeight: 1.5,
                marginBottom: 8,
              }}
            >
              {article.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: '#6b6b76',
                lineHeight: 1.7,
                marginBottom: 12,
              }}
            >
              {article.summary}
            </p>
            <span style={{ fontSize: 12, color: '#4a4a52' }}>{article.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  desc,
}: {
  label: string
  title: string
  desc: string
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <span
        style={{
          fontSize: 12,
          color: '#c4a35a',
          letterSpacing: '0.1em',
          fontWeight: 500,
          textTransform: 'uppercase' as const,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: '#e8e8e8',
          marginTop: 8,
          marginBottom: 8,
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: 14, color: '#6b6b76' }}>{desc}</p>
      <div style={{ width: 40, height: 1, backgroundColor: '#1f1f22', marginTop: 20 }} />
    </div>
  )
}
