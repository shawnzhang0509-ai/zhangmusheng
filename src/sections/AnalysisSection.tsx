interface Analysis {
  title: string
  target: string
  type: string
  date: string
  summary: string
}

const ANALYSES: Analysis[] = [
  {
    title: '某新能源汽车企业的 DCF 估值',
    target: '蔚来汽车 (NIO)',
    type: 'DCF 估值',
    date: '2024-02',
    summary: '基于 2023 年报数据，考虑补贴政策退坡和海外扩张节奏，给出了保守、基准和乐观三种情景下的估值区间。WACC 取 11.2%，永续增长率 2.5%。',
  },
  {
    title: '白酒行业竞争格局分析',
    target: '白酒板块',
    type: '行业研究',
    date: '2023-11',
    summary: '从高端到光瓶酒的全价位段竞争格局梳理，重点分析了渠道变革对区域酒企的影响。',
  },
  {
    title: '某 SaaS 公司的 LTV/CAC 测算',
    target: '某港股 SaaS',
    type: 'Unit Economics',
    date: '2023-09',
    summary: '通过付费用户留存曲线和 ARPU 变化趋势，重新估算了 LTV 和 CAC，发现公司此前披露的比率过于乐观。',
  },
  {
    title: '半导体周期底部的投资时钟',
    target: '半导体板块',
    type: '周期分析',
    date: '2023-07',
    summary: '结合库存周期、产能利用率和终端需求数据，判断行业处于周期底部右侧，给出了细分领域的配置建议。',
  },
  {
    title: '某消费品牌的 M&A 可行性分析',
    target: '某新消费品牌',
    type: '并购分析',
    date: '2023-05',
    summary: '从协同效应、估值溢价和整合风险三个维度评估了潜在收购标的的可行性，给出了不建议收购的结论。',
  },
  {
    title: '银行净息差压力测试',
    target: '商业银行板块',
    type: '压力测试',
    date: '2023-03',
    summary: '在 LPR 持续下调和存款利率刚性并存的环境下，测试了不同息差收窄幅度对各行净利润的影响。',
  },
]

export default function AnalysisSection() {
  return (
    <section id="analysis" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="ANALYSIS" title="商业分析" desc="财务建模与商业洞察" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ANALYSES.map((item) => (
          <div key={item.title} className="content-card" style={{ cursor: 'pointer' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 16,
                marginBottom: 8,
                flexWrap: 'wrap',
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#e8e8e8',
                  lineHeight: 1.5,
                }}
              >
                {item.title}
              </h3>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span className="tag">{item.type}</span>
                <span style={{ fontSize: 12, color: '#4a4a52' }}>{item.date}</span>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                color: '#c4a35a',
                marginBottom: 8,
                fontWeight: 500,
              }}
            >
              {item.target}
            </p>

            <p
              style={{
                fontSize: 14,
                color: '#6b6b76',
                lineHeight: 1.7,
              }}
            >
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { SectionHeader } from './ArticleSection'
