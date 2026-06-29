export default function Hero() {
  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 24px 60px',
        maxWidth: 1200,
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 600,
          color: 'var(--site-text)',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: 16,
        }}
      >
        作品仓库
      </h1>
      <p
        style={{
          fontSize: 16,
          color: 'var(--site-text-muted)',
          lineHeight: 1.7,
          maxWidth: 520,
        }}
      >
        个人创作的多维度归档。文章、小说、视频、网站、商业分析、股票投资、商业项目——所有产出都存放在这里。
      </p>
    </section>
  )
}
