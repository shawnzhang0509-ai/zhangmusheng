export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'verse'; lines: string[] }
  | { type: 'quote'; text: string }

export interface Article {
  slug?: string
  title: string
  date: string
  summary: string
  tags: string[]
  sourceUrl?: string
  content?: ArticleBlock[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'bo-kai-aq-jing-ji-zhi-lu',
    title: '拨开被阿Q遮蔽的荆棘之路',
    date: '2026-01-25',
    summary:
      '当「阿Q」从警惕自欺的符号，变成禁止自救的标签——我们该如何区分转念与麻木，自救与停滞？',
    tags: ['心理学', '思考'],
    sourceUrl: 'https://mp.weixin.qq.com/s/jV4I1fzaOdWo53pXzUjX2w',
    content: [
      {
        type: 'paragraph',
        text: '如果问人们一个问题：什么是阿Q精神？人们可能会给出趋于一致的答案：自欺、麻木、失败者的心理安慰。这些答案看起来都很合理，但问题不在答案，而在这个问题本身。',
      },
      {
        type: 'paragraph',
        text: '在当下的语境里，阿Q从来不是一种性格，而是一个被用来终止思考的符号。鲁迅先生笔力太劲，以至于这个符号长期扎根、生长。而当这个符号被抛出来，讨论就结束了——不需要再区分，也不允许再细想。',
      },
      {
        type: 'paragraph',
        text: '今天，一旦一个人试图进行这样的自我调节，他很容易在脑中、在他人眼中，听见那句话：',
      },
      { type: 'quote', text: '「你这是阿Q精神胜利法吧？」' },
      {
        type: 'paragraph',
        text: '这一刻，事情就变得残忍了。因为这句话的潜台词是：',
      },
      {
        type: 'verse',
        lines: ['你不配原谅自己，', '你不配缓和情绪，', '你必须立刻痛苦、立刻愤怒、立刻对抗。'],
      },
      {
        type: 'paragraph',
        text: '仿佛只有持续燃烧、持续撕裂，才算得上清醒，才算得上高尚。而这对普通人来说，是一种苛刑。',
      },
      {
        type: 'verse',
        lines: ['你不痛，是阿Q。', '你缓一口气，是阿Q。', '你试图把情绪收回来，还是阿Q。'],
      },
      { type: 'paragraph', text: '于是，「转念」这个动作本身，被提前判了死刑。' },
      { type: 'paragraph', text: '可转念真的等于自欺吗？' },
      {
        type: 'paragraph',
        text: '如果一个人在尚未改变现实之前，选择不立刻被现实击倒，这叫自欺吗？如果一个人在伤口还没结痂时，拒绝继续往上撒盐，这算精神胜利吗？',
      },
      {
        type: 'paragraph',
        text: '问题问到这里，其实已经开始错位了。转念，并不是否认现实。转念，也不是假装自己不痛。',
      },
      {
        type: 'verse',
        lines: [
          '转念只是承认：',
          '在我还没有能力改变现状之前，我至少不能先被情绪摧毁。',
          '我需要先活着，站稳，再谈改变。',
        ],
      },
      {
        type: 'paragraph',
        text: '阿Q精神最初批判的，是停在原地的自欺。而今天，它却常常被用来羞辱尚未反击的人。',
      },
      { type: 'verse', lines: ['你还没站稳，就被要求英勇。', '你还在流血，就被要求清醒。'] },
      {
        type: 'paragraph',
        text: '当一个概念从「警惕自欺」，变成「禁止自救」，它就已经变质了，真正的改变反而更难发生。',
      },
      {
        type: 'paragraph',
        text: '真正该问的不是：你是不是在阿Q，而是：你是否因此停止了行动。',
      },
      {
        type: 'paragraph',
        text: '阿Q的问题，从来不在于他怎么想，而在于他从此不再动。',
      },
      {
        type: 'paragraph',
        text: '但后来的人，把「是否行动」这个判断拿掉了，只保留了「是否痛苦」这一项。',
      },
      { type: 'paragraph', text: '不痛，即有罪。' },
      {
        type: 'verse',
        lines: [
          '世界只剩下一种被允许的姿态：',
          '持续地感到不适，',
          '持续地暴露伤口，',
          '持续地证明自己没有麻木。',
        ],
      },
      {
        type: 'paragraph',
        text: '仿佛一旦转念，人就会立刻停在原地，再也无法改变。这种因果关系，本身就是被虚构的。',
      },
      {
        type: 'paragraph',
        text: '我们当然需要警惕阿Q，但更需要警惕的是——用阿Q来堵死自己或他人心理出路的冲动。',
      },
    ],
  },
  {
    title: '从财务报表到代码：一个分析师的转型之路',
    date: '2024-03-15',
    summary: '记录了从纯财务背景转向技术领域的思考过程。不是"转行了"，而是发现两条路在更高处交汇。',
    tags: ['职业转型', '全栈开发'],
  },
  {
    title: 'React Server Components 在实际项目中的取舍',
    date: '2024-01-22',
    summary: '在三个项目中尝试了 RSC，总结了一套判断是否适合使用的决策框架。不是每个项目都需要最新技术。',
    tags: ['React', '前端架构'],
  },
  {
    title: 'DCF 估值模型中的常见陷阱',
    date: '2023-11-08',
    summary: '做了上百个 DCF 模型后总结出的五个最常出错的地方。WACC 和永续增长率的敏感度分析是关键。',
    tags: ['财务建模', '估值'],
  },
  {
    title: 'MBTI 认知功能：比四个字母更精确的工具',
    date: '2023-09-14',
    summary: '为什么我不推荐只看四个字母，认知功能栈才是理解人格差异的核心框架。',
    tags: ['MBTI', '心理学'],
  },
  {
    title: '构建量化选股模型的第一步：数据清洗',
    date: '2023-07-30',
    summary: '很多人觉得量化模型的核心在算法，实际上 80% 的时间花在数据清洗和特征工程上。',
    tags: ['量化分析', 'Python'],
  },
  {
    title: '写小说与写代码的相似之处',
    date: '2023-05-18',
    summary: '架构设计对应世界观构建，调试对应改稿，两者本质上都是在处理复杂度。',
    tags: ['写作', '编程'],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}
