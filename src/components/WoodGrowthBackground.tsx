export default function WoodGrowthBackground() {
  return (
    <div className="wood-growth-bg" aria-hidden="true">
      <div className="wood-growth-base" />

      <svg className="wood-growth-svg wood-growth-svg--left" viewBox="0 0 320 800" fill="none" preserveAspectRatio="xMinYMax meet">
        <path
          className="wood-vine"
          d="M40 800 C 20 680, 80 560, 55 440 S 30 220, 70 80"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path className="wood-leaf wood-leaf--sway-a" d="M55 520 C 30 500, 25 470, 45 455 C 70 448, 88 468, 82 492 C 76 512, 62 522, 55 520 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-b" d="M38 360 C 12 348, 8 318, 28 302 C 54 292, 72 312, 66 336 C 60 354, 46 362, 38 360 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-c" d="M72 180 C 48 168, 42 140, 62 124 C 88 114, 106 134, 100 158 C 94 176, 80 184, 72 180 Z" fill="currentColor" />
        <ellipse className="wood-grass" cx="24" cy="788" rx="18" ry="6" />
        <ellipse className="wood-grass" cx="58" cy="794" rx="22" ry="7" />
        <ellipse className="wood-grass" cx="96" cy="790" rx="16" ry="5" />
      </svg>

      <svg className="wood-growth-svg wood-growth-svg--right" viewBox="0 0 320 800" fill="none" preserveAspectRatio="xMaxYMax meet">
        <path
          className="wood-vine"
          d="M280 800 C 300 660, 240 520, 265 380 S 290 200, 250 60"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path className="wood-leaf wood-leaf--sway-b" d="M265 540 C 290 522, 298 492, 278 476 C 252 466, 234 486, 240 510 C 246 528, 258 538, 265 540 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-a" d="M282 320 C 308 306, 314 276, 294 260 C 268 250, 250 270, 256 294 C 262 312, 274 320, 282 320 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-c" d="M248 140 C 272 128, 278 100, 258 84 C 232 74, 214 94, 220 118 C 226 136, 240 144, 248 140 Z" fill="currentColor" />
        <ellipse className="wood-grass wood-grass--brown" cx="224" cy="788" rx="20" ry="6" />
        <ellipse className="wood-grass" cx="262" cy="794" rx="18" ry="6" />
        <ellipse className="wood-grass wood-grass--brown" cx="296" cy="790" rx="14" ry="5" />
      </svg>

      <svg className="wood-growth-svg wood-growth-svg--center" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMax meet">
        <path
          className="wood-trunk"
          d="M300 400 C 298 340, 302 280, 300 220 C 298 170, 300 120, 300 80"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path className="wood-branch" d="M300 260 C 250 240, 210 210, 180 170" stroke="currentColor" strokeWidth="1.2" />
        <path className="wood-branch" d="M300 220 C 350 200, 390 170, 420 130" stroke="currentColor" strokeWidth="1.2" />
        <path className="wood-leaf wood-leaf--sway-a" d="M178 168 C 158 152, 154 128, 172 116 C 194 108, 212 124, 208 146 C 204 162, 186 170, 178 168 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-c" d="M422 128 C 442 112, 448 88, 430 76 C 408 68, 390 84, 394 106 C 398 122, 414 130, 422 128 Z" fill="currentColor" />
        <path className="wood-leaf wood-leaf--sway-b" d="M300 76 C 282 58, 280 34, 298 22 C 318 14, 336 30, 332 52 C 328 68, 312 76, 300 76 Z" fill="currentColor" />
        <circle className="wood-spore" cx="120" cy="90" r="2" />
        <circle className="wood-spore" cx="480" cy="110" r="1.5" />
        <circle className="wood-spore" cx="200" cy="60" r="1.2" />
        <circle className="wood-spore" cx="400" cy="70" r="1.8" />
        <circle className="wood-spore" cx="300" cy="40" r="1.4" />
      </svg>

      <div className="wood-growth-glow wood-growth-glow--top" />
      <div className="wood-growth-glow wood-growth-glow--bottom" />
    </div>
  )
}
