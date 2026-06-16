import { Link } from 'react-router'
import { ARTICLES } from '../data/articles'

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
        {ARTICLES.map((article) => {
          const card = (
            <>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
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
            </>
          )

          if (article.slug) {
            return (
              <Link
                key={article.title}
                to={`/articles/${article.slug}`}
                className="content-card article-card-link"
              >
                {card}
              </Link>
            )
          }

          return (
            <div key={article.title} className="content-card">
              {card}
            </div>
          )
        })}
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
