import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: '文章', href: '#articles' },
  { label: '小说', href: '#novels' },
  { label: '视频', href: '#videos' },
  { label: '网站', href: '#websites' },
  { label: '分析', href: '#analysis' },
  { label: '股票', href: '#stocks' },
  { label: '项目', href: '#projects' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '0 24px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 10, 11, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #1f1f22' : '1px solid transparent',
      }}
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: '#e8e8e8',
          letterSpacing: '0.02em',
          textDecoration: 'none',
        }}
      >
        张木生
      </a>

      <div className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            style={{
              color: '#6b6b76',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#c4a35a' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#6b6b76' }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        aria-label="菜单"
      >
        <div style={{ width: 20, height: 1.5, backgroundColor: '#e8e8e8', marginBottom: 5 }} />
        <div style={{ width: 20, height: 1.5, backgroundColor: '#e8e8e8', marginBottom: 5 }} />
        <div style={{ width: 14, height: 1.5, backgroundColor: '#e8e8e8' }} />
      </button>

      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: 56,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(10, 10, 11, 0.98)',
            backdropFilter: 'blur(12px)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            borderBottom: '1px solid #1f1f22',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              style={{ color: '#6b6b76', fontSize: 14, textDecoration: 'none' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
