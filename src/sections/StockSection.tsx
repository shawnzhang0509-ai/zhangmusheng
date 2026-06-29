interface StockCase {
  ticker: string
  name: string
  strategy: string
  period: string
  returnPct: string
  summary: string
}

const CASES: StockCase[] = [
  {
    ticker: '00700.HK',
    name: '腾讯控股',
    strategy: '价值投资 + 事件驱动',
    period: '2022.10 - 2024.02',
    returnPct: '+68%',
    summary: '在游戏版号恢复和微信视频号商业化加速的双重催化下，在 280 港元附近建仓。核心逻辑：监管环境边际改善 + 业务基本盘稳固 + 估值处于历史低位。',
  },
  {
    ticker: '600519.SH',
    name: '贵州茅台',
    strategy: '核心资产长期持有',
    period: '2020.03 - 至今',
    returnPct: '+120%',
    summary: '疫情恐慌中的加仓机会。品牌护城河 + 定价权 + 现金流质量的完美标的。每次回调都是增持机会，不做波段。',
  },
  {
    ticker: 'NVDA',
    name: 'NVIDIA',
    strategy: '产业趋势投资',
    period: '2023.01 - 2024.01',
    returnPct: '+215%',
    summary: 'ChatGPT 发布后迅速意识到算力将成为瓶颈，在 150 美元附近建仓。跟随 AI 算力需求的爆发，持有至估值透支预期后逐步减仓。',
  },
  {
    ticker: '300750.SZ',
    name: '宁德时代',
    strategy: '周期底部反转',
    period: '2023.06 - 2023.12',
    returnPct: '-12%',
    summary: '一次失败的尝试。过早判断锂电池产能过剩周期结束，忽视了海外IRA法案对国内供应链的排斥效应。反思：宏观政策风险的权重应更高。',
  },
  {
    ticker: 'BTC',
    name: '比特币',
    strategy: '资产配置',
    period: '2022.11 - 至今',
    returnPct: '+340%',
    summary: '在 FTX 崩盘后的市场极度恐慌中建仓。作为对抗法币信用体系的对冲工具，配置了总资产 5% 的仓位。不参与合约，只持有现货。',
  },
]

export default function StockSection() {
  return (
    <section id="stocks" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="STOCKS" title="股票投资" desc="研究与交易记录" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {CASES.map((c) => (
          <div key={c.ticker} className="content-card" style={{ cursor: 'pointer' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 16,
                marginBottom: 12,
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: 'var(--site-text)',
                      lineHeight: 1.4,
                    }}
                  >
                    {c.name}
                  </h3>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'var(--site-text-faint)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {c.ticker}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className="tag">{c.strategy}</span>
                  <span style={{ fontSize: 12, color: 'var(--site-text-faint)' }}>{c.period}</span>
                </div>
              </div>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: c.returnPct.startsWith('+') ? '#5a9e6f' : '#c95a5a',
                  fontFamily: 'monospace',
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap',
                }}
              >
                {c.returnPct}
              </span>
            </div>

            <p
              style={{
                fontSize: 14,
                color: 'var(--site-text-muted)',
                lineHeight: 1.7,
              }}
            >
              {c.summary}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          fontSize: 12,
          color: 'var(--site-text-faint)',
          marginTop: 24,
          lineHeight: 1.6,
        }}
      >
        注：以上收益率基于模拟仓位计算，不构成投资建议。投资有风险，入市需谨慎。
      </p>
    </section>
  )
}

import { SectionHeader } from './ArticleSection'
