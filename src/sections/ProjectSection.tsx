interface Project {
  title: string
  role: string
  period: string
  outcome: string
  tags: string[]
}

const PROJECTS: Project[] = [
  {
    title: '某消费品牌数字化中台建设',
    role: '技术负责人',
    period: '2023.06 - 2024.01',
    outcome: '完成 ERP、CRM、电商后台三套系统的打通，实现全渠道库存统一管理和会员数据整合，订单处理效率提升 40%。',
    tags: ['全栈开发', '系统集成', '零售'],
  },
  {
    title: '中小企业 SaaS 财务工具开发',
    role: '独立开发',
    period: '2023.01 - 2023.08',
    outcome: '一个人完成了从需求分析、产品设计、前后端开发到上线的全过程，获得 200+ 种子用户。后来因精力分散而暂停。',
    tags: ['独立开发', 'SaaS', '财务'],
  },
  {
    title: '投资机构投研数据库搭建',
    role: '数据架构 + 分析',
    period: '2022.03 - 2022.12',
    outcome: '为一家私募基金搭建了覆盖 A 股 3000+ 上市公司的财务数据库，支持自定义筛选和预警，替代了原来每年 20 万的 Wind 终端费用。',
    tags: ['数据工程', 'Python', '投资研究'],
  },
  {
    title: 'MBTI 企业团辅项目',
    role: '讲师 / 咨询师',
    period: '2023.03 - 2023.12',
    outcome: '为 5 家科技公司的技术团队提供 MBTI 团辅服务，累计覆盖 200+ 人次。主要解决跨部门沟通冲突和团队配置优化问题。',
    tags: ['MBTI', '企业培训', '咨询'],
  },
  {
    title: '个人量化交易系统',
    role: '策略开发 + 工程',
    period: '2022.06 - 至今',
    outcome: '基于多因子模型的 A 股量化选股系统，对接券商 API 实现自动交易。实盘运行 18 个月，年化收益 23%，最大回撤 12%。',
    tags: ['量化交易', 'Python', '金融工程'],
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeader label="PROJECTS" title="商业项目" desc="从想法到落地的实践" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 16,
        }}
      >
        {PROJECTS.map((p) => (
          <div key={p.title} className="content-card" style={{ cursor: 'pointer' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 10,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#e8e8e8',
                  lineHeight: 1.5,
                  flex: 1,
                }}
              >
                {p.title}
              </h3>
              <span
                style={{
                  fontSize: 11,
                  color: '#c4a35a',
                  whiteSpace: 'nowrap',
                  padding: '2px 8px',
                  borderRadius: 4,
                  background: 'rgba(196, 163, 90, 0.08)',
                  fontWeight: 500,
                }}
              >
                {p.role}
              </span>
            </div>

            <p
              style={{
                fontSize: 12,
                color: '#4a4a52',
                marginBottom: 12,
              }}
            >
              {p.period}
            </p>

            <p
              style={{
                fontSize: 14,
                color: '#6b6b76',
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              {p.outcome}
            </p>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {p.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
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
