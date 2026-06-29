import { Link, useParams } from 'react-router'
import Navigation from '../components/Navigation'
import { getArticleBySlug } from '../data/articles'
import type { ArticleBlock } from '../data/articles'

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-prose">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="article-paragraph">
              {block.text}
            </p>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote key={index}>
              <p>{block.text}</p>
            </blockquote>
          )
        }

        if (block.type === 'heading') {
          return (
            <h2 key={index} className="article-section-heading">
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="article-list">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <div key={index} className="article-verse">
            {block.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function ArticleFooter() {
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

export default function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article?.content) {
    return (
      <div>
        <Navigation />
        <main style={{ padding: '120px 24px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'var(--site-text-muted)', marginBottom: 24 }}>文章不存在或尚未发布正文。</p>
          <Link to="/" className="article-back-link">
            返回首页
          </Link>
        </main>
        <ArticleFooter />
      </div>
    )
  }

  return (
    <div>
      <Navigation />
      <main className="article-page">
        <div className="article-page-inner">
          <Link to="/#articles" className="article-back-link">
            ← 返回文章列表
          </Link>

          <header className="article-header">
            <div className="article-meta">
              {article.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1>{article.title}</h1>
            <p className="article-date">{article.date}</p>
          </header>

          <ArticleBody blocks={article.content} />

          {article.sourceUrl && (
            <p className="article-source">
              原文发布于
              <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                微信公众号
              </a>
            </p>
          )}
        </div>
      </main>
      <ArticleFooter />
    </div>
  )
}
