export interface Video {
  slug?: string
  title: string
  duration: string
  date: string
  desc: string
  tags?: string[]
  bvid?: string
  cover?: string
  sourceUrl?: string
}

export const VIDEOS: Video[] = [
  {
    slug: 'mbti-8min-intro',
    title: '8分钟认识MBTI理论【盒子之外.心理学系列】',
    duration: '08:22',
    date: '2020-03-21',
    desc: '盒子之外心理学系列开篇：用八分钟建立对 MBTI 与十六型人格的基础认识。',
    tags: ['MBTI', '心理学'],
    bvid: 'BV1BE411c7ry',
    cover: 'https://i2.hdslb.com/bfs/archive/d75c707a808c879423bce48760aac668b1ffb754.jpg',
    sourceUrl: 'https://b23.tv/Vc5SXG1',
  },
  {
    title: '如何从零搭建一个量化选股系统',
    duration: '42:18',
    date: '2024-02',
    desc: '从数据获取到回测框架，完整演示用 Python 搭建量化系统的全过程。',
  },
  {
    title: 'React Three Fiber 入门实战',
    duration: '35:45',
    date: '2024-01',
    desc: '用 R3F 创建你的第一个 3D 网页效果，从场景搭建到交互实现。',
  },
  {
    title: 'MBTI 认知功能深度解析',
    duration: '28:30',
    date: '2023-10',
    desc: '逐个拆解八维认知功能，结合实际案例说明每种类型的思维路径。',
  },
  {
    title: 'DCF 估值实操教学',
    duration: '55:12',
    date: '2023-08',
    desc: '以一个真实上市公司为例，手把手完成完整的 DCF 估值模型。',
  },
  {
    title: '《无间之城》世界观设定分享',
    duration: '18:22',
    date: '2023-06',
    desc: '分享小说中的城市架构、技术体系和哲学内核的设定过程。',
  },
]

export function getVideoBySlug(slug: string): Video | undefined {
  return VIDEOS.find((video) => video.slug === slug)
}

export function formatBilibiliEmbedUrl(bvid: string): string {
  return `https://player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&high_quality=1&danmaku=0`
}
