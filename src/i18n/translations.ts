export const ui = {
  en: {
    nav: {
      characters: 'Characters',
      activities: 'Activities',
      colourIn: 'Colour In',
      healthyLiving: 'Healthy Living',
    },
    home: {
      activitiesHeading: 'Activities',
      activitiesSubtitle: 'Puzzles, colouring, quizzes and more — all free, all fun!',
      healthyRecipesHeading: 'Healthy Recipes',
      healthyRecipesSubtitle: 'Try these easy, nutritious recipes the whole family will love!',
      getRecipe: 'Get Recipe',
      parentsZoneHeading: 'Parents Zone',
      parentsZoneSubtitle:
        'Everything you need to know as a parent or guardian. All content on this site is family-safe, ad-free and South Sydney Rabbitohs approved.',
      parentsZoneSafe:
        '🔒 Family-safe guarantee: No advertising. No data collection from children. No external links without parent review. All activities are supervised and age-appropriate for 6–14 year olds.',
    },
    character: {
      meetButton: 'Meet',
      comingSoon: 'Coming Soon',
      comingSoonBadge: 'Coming Soon!',
      quickFacts: 'Quick Facts',
      getToKnow: 'Get to know',
      factSheetIntro1: 'Every great Mascot has a fact sheet. Here are',
      factSheetIntro2: "'s most important facts — straight from the clipboard!",
      bestMomentsHeadingSuffix: "'s Best Moments",
      bestMomentsSubtitle1: "'s most legendary moments — as told by",
      bestMomentsSubtitle2: '!',
      activitiesHeadingSuffix: "'s Activities",
      activitiesSubtitlePrefix: 'Things to do with',
      familyHeadingSuffix: "'s Family",
      familySubtitlePrefix: 'Meet the rest of',
      familySubtitleSuffix: "'s family.",
    },
    colourIn: {
      backToActivities: '← Back to Activities',
      heading: 'Colour In!',
      subtitle: 'Download and print your favourite characters — then grab your pencils and get colouring!',
      downloadPdf: 'Download PDF',
    },
    recipes: [
      {
        title: 'Anytime Muffins',
        description: 'High protein, packed with veg — perfect for breaky, lunchboxes or after-school snacks.',
      },
      {
        title: 'Choc Snack Balls',
        description: 'A guilt-free chocolatey treat made with dates, coconut and cacao. No baking needed!',
      },
      {
        title: 'No-Bake Oat Bars',
        description: 'Mix, press, drizzle and chill. These chewy oat bars with dark chocolate are a winner.',
      },
    ],
  },
  zh: {
    nav: {
      characters: '角色',
      activities: '活动',
      colourIn: '填色',
      healthyLiving: '健康生活',
    },
    home: {
      activitiesHeading: '活动',
      activitiesSubtitle: '谜题、填色、问答等——全部免费，趣味无穷！',
      healthyRecipesHeading: '健康食谱',
      healthyRecipesSubtitle: '试试这些简单营养的食谱，全家都会喜欢！',
      getRecipe: '查看食谱',
      parentsZoneHeading: '家长专区',
      parentsZoneSubtitle:
        '家长和监护人需要了解的一切。本网站所有内容均为家庭友好型、无广告，并经南悉尼拉比托斯认证。',
      parentsZoneSafe:
        '🔒 家庭安全保障：无广告。不收集儿童数据。所有外部链接须经家长审查。所有活动均由专人监督，适合6至14岁儿童。',
    },
    character: {
      meetButton: '认识',
      comingSoon: '即将推出',
      comingSoonBadge: '即将推出！',
      quickFacts: '快速档案',
      getToKnow: '了解',
      factSheetIntro1: '每位出色的吉祥物都有自己的档案。以下是',
      factSheetIntro2: '的重要信息——直接来自剪贴板！',
      bestMomentsHeadingSuffix: '的精彩时刻',
      bestMomentsSubtitle1: '最传奇的时刻——由',
      bestMomentsSubtitle2: '亲自讲述！',
      activitiesHeadingSuffix: '的活动',
      activitiesSubtitlePrefix: '和',
      familyHeadingSuffix: '的家人',
      familySubtitlePrefix: '认识',
      familySubtitleSuffix: '的其他家人。',
    },
    colourIn: {
      backToActivities: '← 返回活动',
      heading: '填色！',
      subtitle: '下载并打印你最喜欢的角色——然后拿起铅笔开始填色！',
      downloadPdf: '下载PDF',
    },
    recipes: [
      {
        title: '随时松饼',
        description: '高蛋白质，富含蔬菜——完美的早餐、午餐盒或课后零食。',
      },
      {
        title: '巧克力点心球',
        description: '用椰枣、椰子和可可制成的无罪恶感巧克力点心，无需烘焙！',
      },
      {
        title: '免烤燕麦棒',
        description: '混合、按压、淋酱、冷藏。这些带黑巧克力的耐嚼燕麦棒绝对是赢家。',
      },
    ],
  },
}

// Activity data — Chinese overrides keyed by activity ID
export const activityZh: Record<string, { title: string; description: string; ctaLabel: string }> = {
  'design-your-jersey': {
    title: '设计你自己的球衣',
    description: '画一件代表你风格的球衣，并涂上颜色！',
    ctaLabel: '下载PDF',
  },
  'colour-in-jack': {
    title: '给Jack填色',
    description: '拿起画笔，让Jack栩栩如生——帽子反戴，符合空气动力学，这是科学！',
    ctaLabel: '开始填色',
  },
  'which-one-sounds-like-you': {
    title: '哪个更像你？',
    description: 'Jack和Ruby做事方式不同。圈出听起来最像你的那个！',
    ctaLabel: '下载PDF',
  },
  'help-jack-maze': {
    title: '帮Jack到达橄榄球场！',
    description: 'Jack必须在开球前到达球场。你能帮他找到路吗？',
    ctaLabel: '下载PDF',
  },
  'colour-in-reggie': {
    title: '给Reggie填色',
    description: '拿起红色和绿色铅笔，让爷爷Reggie栩栩如生！',
    ctaLabel: '开始填色',
  },
  'reggies-game-day-plate': {
    title: 'Reggie的比赛日餐盘',
    description: '比赛前要补充体力！让我们一起来装满餐盘。',
    ctaLabel: '下载PDF',
  },
  'pack-your-bag': {
    title: '你的球袋里会装什么？',
    description: '比赛日到了！让我们一起来收拾球袋！',
    ctaLabel: '下载PDF',
  },
  'colour-in-ruby': {
    title: '给Ruby填色',
    description: '拿起粉色和绿色，让Ruby栩栩如生——连眼镜都要画！',
    ctaLabel: '开始填色',
  },
  'which-one-sounds-like-you-ruby': {
    title: '哪个更像你？',
    description: 'Jack和Ruby做事方式不同。圈出听起来最像你的那个！',
    ctaLabel: '下载PDF',
  },
  'rubys-team-of-the-day': {
    title: 'Ruby的今日之队',
    description: '和Ruby一起组建一支让你感觉良好的团队。谁在你的队中？',
    ctaLabel: '下载PDF',
  },
  'how-are-you-feeling': {
    title: '你今天感觉怎么样？',
    description: '每个人在不同时候都有不同的感受，这完全没关系。涂上符合你心情的颜色。',
    ctaLabel: '下载PDF',
  },
  'colour-in-scarlett': {
    title: '给Scarlett填色',
    description: '拿起最亮的颜色，让Scarlett栩栩如生——连时髦的鞋子都要画！',
    ctaLabel: '开始填色',
  },
  'scarletts-obstacle-course': {
    title: 'Scarlett的后院障碍赛',
    description: 'Scarlett是家族中跑得最快的。在任何地方挑战她的五步障碍赛吧！',
    ctaLabel: '下载PDF',
  },
  'colour-in-characters': {
    title: '给你最喜欢的角色填色！',
    description: '五个角色，五张填色图——还有额外场景！选择你最喜欢的，或者全部完成。',
    ctaLabel: '开始填色',
  },
  'colour-in-oliver': {
    title: '给Oliver填色',
    description: '拿起棕色和绿色，让Oliver栩栩如生——连渔夫帽都要画！',
    ctaLabel: '开始填色',
  },
  'olivers-bedtime-wind-down': {
    title: 'Oliver的睡前放松',
    description: 'Oliver知道休息和活动同样重要。今晚就试试Oliver的睡前放松例行程序！',
    ctaLabel: '下载PDF',
  },
}

// Character data — Chinese overrides keyed by character ID
// NOTE: These translations should be reviewed by a native Mandarin speaker
//       to ensure they capture each character's personality and brand voice.
export const characterZh: Record<
  string,
  {
    tagline: string
    catchphrase: string
    heroBannerTagline: string
    facts: { label: string; value: string }[]
    bestMoments: { title: string; description: string }[]
  }
> = {
  reggie: {
    tagline: '南悉尼传奇，自豪的爷爷，一切的起点。',
    catchphrase: '大家好，我是Reggie！',
    heroBannerTagline: '首席给力者、最佳抱抱手兼拉比托斯爷爷！',
    facts: [
      { label: '姓名', value: 'Reggie' },
      { label: '家庭状况', value: '爷爷' },
      { label: '外貌', value: '白色兔子，身高五英尺八，长耳朵，柔软的粉色爪子' },
      { label: '职业', value: '首席给力者与爷爷' },
      { label: '喜爱', value: '带领拉比托斯出场、球迷、红绿配色和胡萝卜汁' },
      { label: '梦想', value: '为孙子们赢得联赛冠军' },
      { label: '趣事', value: '1968年起就是拉比托斯球迷——那时候还没有彩色电视！' },
      { label: '相关角色', value: 'Jack、Ruby、Scarlett和Oliver' },
    ],
    bestMoments: [
      {
        title: '1968年起的拉比托斯球迷',
        description:
          'Reggie在彩色电视出现之前就已经是拉比托斯球迷了。经历每一次胜利和心碎，他对球队的热爱从未减退——一次都没有。',
      },
      {
        title: '终极自拍',
        description: '无论Reggie在球场哪里，每张与他的合影都是当天最美的一张。保证。',
      },
      {
        title: 'Reggie滚滚',
        description:
          '当球队需要激励时，Reggie就会使出他的传奇动作——Reggie滚滚。每次都能点燃全场。科学无法解释这个现象。',
      },
    ],
  },
  scarlett: {
    tagline: '家族中最快，看台上最响！',
    catchphrase: '嗨，我是Scarlett——叫我Scar就好。',
    heroBannerTagline: '家族中跑得最快，看台上叫得最响——不折不扣的Reggie的女儿！',
    facts: [
      { label: '姓名', value: 'Scarlett' },
      { label: '家庭状况', value: '妈妈' },
      { label: '外貌', value: '五英尺九，白棕相间的毛，时髦的鞋，蓬松的毛线帽' },
      { label: '职业', value: '橄榄球教练及Reggie的女儿' },
      { label: '特长', value: '家族中跑得最快' },
      { label: '偶像', value: 'Reggie（她的爸爸）' },
      { label: '梦想', value: '赢得属于自己的冠军戒指' },
      { label: '趣事', value: '小时候曾在Reggie首次带队出场时当过球童！' },
      { label: '相关角色', value: 'Oliver、Ruby、Jack和Reggie' },
    ],
    bestMoments: [
      {
        title: '球童小Scarlett',
        description: 'Scarlett小时候在Reggie第一次带队出场时当过球童。她一直是最响亮的粉丝。',
      },
      {
        title: '边线教练',
        description:
          '当Scarlett在边线指导Ruby的少年球队时，她比任何人都更专注。她在比赛中的投入是无可挑剔的。',
      },
      {
        title: '看台上的声音',
        description: '无论Scarlett在看台的哪个位置，你都能听到她的声音。她的加油声能让整个看台都震动起来。',
      },
    ],
  },
  jack: {
    tagline: '帽子反戴，全速前进——符合空气动力学，这是科学！',
    catchphrase: '嗨嗨！我是Jack！',
    heroBannerTagline: '速度最快的小兔——帽子反戴，符合空气动力学，这是科学！',
    facts: [
      { label: '姓名', value: 'Jack' },
      { label: '家庭状况', value: '儿子' },
      { label: '外貌', value: '深浅棕色毛，运动鞋，帽子反戴' },
      { label: '职业', value: '冒险专家（训练中）' },
      { label: '偶像', value: '爷爷Reggie' },
      { label: '梦想', value: '同时成为球员、教练和吉祥物——全都要！' },
      { label: '趣事', value: '能倒背"Glory Glory to South Sydney"！' },
      { label: '相关角色', value: 'Ruby、Scarlett、Reggie和Oliver' },
    ],
    bestMoments: [
      {
        title: '倒背歌词小达人',
        description: 'Jack是唯一能倒背"Glory Glory to South Sydney"的兔子。你可以考考他——真的很厉害。',
      },
      {
        title: '全速Jack',
        description: '没有人在Jack全速冲刺时追上过他。一次都没有。（妈妈不算。）',
      },
      {
        title: '击掌冠军',
        description: '高击掌、低击掌、你还没看清他就跑过去了的击掌。Jack有适合各种场合的击掌方式。',
      },
    ],
  },
  ruby: {
    tagline: '沉静自信，传球精准，满怀红绿热情。',
    catchphrase: '你好！我是Ruby。',
    heroBannerTagline: '拥有沉静自信、精准传球和满腔红绿热情的大姐姐！',
    facts: [
      { label: '姓名', value: 'Ruby' },
      { label: '家庭状况', value: '女儿' },
      { label: '外貌', value: '五英尺高，焦糖色毛，粉色眼镜' },
      { label: '职业', value: '橄榄球运动员兼大姐姐' },
      { label: '偶像', value: '爷爷Reggie' },
      { label: '梦想', value: '有朝一日真正穿上红绿战袍' },
      { label: '特长', value: '让身边的人更强大、更自信' },
      { label: '趣事', value: '曾在决胜时刻将球传给队友，让她赢得了荣耀！' },
      { label: '相关角色', value: 'Jack、Scarlett、Oliver和Reggie' },
    ],
    bestMoments: [
      {
        title: '无私的传球',
        description: 'Ruby本可以打入制胜的一球。但她把球传给了队友，让队友成为英雄。这就是Ruby的球风。',
      },
      {
        title: '沉静的自信',
        description: '爷爷Reggie说，Ruby不需要大喊大叫才能表现出勇气。她只需要走上球场，然后让事情发生。',
      },
      {
        title: '关键一扑',
        description: '当比赛到了关键时刻，Ruby挺身而出。势头改变了。比赛救了。对Ruby来说，不过是平常的一天。',
      },
    ],
  },
  oliver: {
    tagline: '加入拉比托斯不久，却全心全意投入！',
    catchphrase: '大家好，我是Oliver。',
    heroBannerTagline: '刚加入拉比托斯大家庭——却满腔热情全力投入！',
    facts: [
      { label: '姓名', value: 'Oliver' },
      { label: '家庭状况', value: '爸爸' },
      { label: '外貌', value: '六英尺高，棕色绒毛，戴着渔夫帽' },
      { label: '职业', value: '建筑工人、棋盘游戏冠军兼顾家好男人' },
      { label: '特长', value: '只要能建造的，Oliver就是你的不二之选！' },
      { label: '偶像', value: 'Scarlett和整个家族' },
      { label: '梦想', value: '一个完美的菜园和拉比托斯的联赛冠军' },
      { label: '趣事', value: '总能在合适的时机说出对的话——就算他不太懂这项运动！' },
      { label: '相关角色', value: 'Scarlett、Ruby、Jack和Reggie' },
    ],
    bestMoments: [
      {
        title: '若有所思的Oliver',
        description: 'Oliver不总是能看懂比赛，但他对球队的热情是真实的——总能在最恰当的时候说出最对的话。',
      },
      {
        title: '炖菜智慧',
        description:
          '"橄榄球就像慢炖的汤，" Oliver告诉全家，"如果味道搭配对了，就会产生奇迹。" 大家都停下来记录这句话。',
      },
      {
        title: '亲手建造',
        description:
          '双层床、蔬菜园、偶尔不稳的书架。只要需要建造的，Oliver就是你的人。他为家人做的每一件事都充满了爱。',
      },
    ],
  },
}

// Colour In page card translations
export const colourCardZh: Record<string, { title: string; description: string }> = {
  'colour-reggie': { title: '给Reggie填色', description: '拿起红色和绿色铅笔，让爷爷Reggie栩栩如生！' },
  'colour-scarlett': {
    title: '给Scarlett填色',
    description: 'Scarlett热爱色彩就像热爱橄榄球一样——展示你的才华！',
  },
  'colour-jack': {
    title: '给Jack填色',
    description: '球场上快，填色也快——让全速的Jack栩栩如生！',
  },
  'colour-ruby': {
    title: '给Ruby填色',
    description: '沉静、酷炫、充满心意——让Ruby在你最喜欢的颜色中闪耀！',
  },
  'colour-oliver': { title: '给Oliver填色', description: 'Oliver充满活力——给他填上颜色！' },
  'colour-family': {
    title: '吉祥物大家庭',
    description: '五位吉祥物齐聚！你能给整个大家庭都填上颜色吗？',
  },
  'colour-game-day': {
    title: '比赛日在球场',
    description: '今天是在SCG的比赛日！给场景填色，为拉比托斯加油！',
  },
  'colour-burrow': {
    title: '欢迎来到家园',
    description: '走进他们的家。加上你自己的颜色，让它有家的感觉！',
  },
  'colour-footy-heroes': {
    title: '橄榄球英雄',
    description: 'Reggie和Jack在球场上并肩作战。你能给他们的精彩时刻填色吗？',
  },
}
