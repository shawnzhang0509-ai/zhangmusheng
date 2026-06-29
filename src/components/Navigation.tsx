import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const NAV_ITEMS = [
  { label: '文章', href: '/#articles' },
  { label: '小说', href: '/#novels' },
  { label: '视频', href: '/#videos' },
  { label: '网站', href: '/#websites' },
  { label: '分析', href: '/#analysis' },
  { label: '股票', href: '/#stocks' },
  { label: '项目', href: '/#projects' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    const hash = location.hash || window.location.hash
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location.pathname, location.hash])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false)
    if (!href.includes('#')) return

    const hash = href.slice(href.indexOf('#'))
    if (location.pathname === '/') {
      e.preventDefault()
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
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
        backgroundColor: scrolled ? 'var(--site-bg-nav)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--site-border)' : '1px solid transparent',
      }}
    >
      <Link
        to="/"
        onClick={(e) => {
          if (location.pathname === '/') {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }}
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: 'var(--site-accent-brown)',
          letterSpacing: '0.02em',
          textDecoration: 'none',
        }}
      >
        张木生
      </Link>

      <div className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={(e) => handleClick(e, item.href)}
            style={{
              color: 'var(--site-text-muted)',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--site-accent)' }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--site-text-muted)' }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
        aria-label="菜单"
      >
        <div style={{ width: 20, height: 1.5, backgroundColor: 'var(--site-text)', marginBottom: 5 }} />
        <div style={{ width: 20, height: 1.5, backgroundColor: 'var(--site-text)', marginBottom: 5 }} />
        <div style={{ width: 14, height: 1.5, backgroundColor: 'var(--site-text)' }} />
      </button>

      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: 56,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(12, 17, 9, 0.98)',
            backdropFilter: 'blur(12px)',
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            borderBottom: '1px solid var(--site-border)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={(e) => handleClick(e, item.href)}
              style={{ color: 'var(--site-text-muted)', fontSize: 14, textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
