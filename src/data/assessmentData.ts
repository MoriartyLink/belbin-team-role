export interface Statement {
  id: string;
  text: string;
  burmeseText: string;
  roleCode: RoleCode;
}

export interface Section {
  id: number;
  title: string;
  burmeseTitle: string;
  statements: Statement[];
}

export type RoleCode = 'SH' | 'IMP' | 'CF' | 'CO' | 'TW' | 'RI' | 'PL' | 'ME';

export interface RoleDetail {
  code: RoleCode;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  examples: {
    historical: string;
    modern: string;
  };
}

export const ROLES: Record<RoleCode, RoleDetail> = {
  SH: {
    code: 'SH',
    name: 'Shaper',
    description: 'Dynamic, challenging, and thrives on pressure. They have the drive and courage to overcome obstacles.',
    strengths: ['Challenging', 'Dynamic', 'Thrives on pressure', 'Has the drive and courage to overcome obstacles'],
    weaknesses: ['Prone to provocation', 'Offends people\'s feelings'],
    examples: {
      historical: 'Winston Churchill',
      modern: 'Steve Jobs'
    }
  },
  IMP: {
    code: 'IMP',
    name: 'Implementer',
    description: 'Practical, reliable, and efficient. They turn ideas into actions and organize work that needs to be done.',
    strengths: ['Practical', 'Reliable', 'Efficient', 'Turns ideas into actions'],
    weaknesses: ['Somewhat inflexible', 'Slow to respond to new possibilities'],
    examples: {
      historical: 'Henry Ford',
      modern: 'Margaret Thatcher'
    }
  },
  CF: {
    code: 'CF',
    name: 'Completer Finisher',
    description: 'Painstaking, conscientious, and anxious. They search out errors and omissions, ensuring everything is polished and perfected.',
    strengths: ['Painstaking', 'Conscientious', 'Anxious', 'Searches out errors and omissions', 'Delivers on time'],
    weaknesses: ['Inclined to worry unduly', 'Reluctant to delegate'],
    examples: {
      historical: 'Martha Stewart',
      modern: 'J.K. Rowling'
    }
  },
  CO: {
    code: 'CO',
    name: 'Co-ordinator',
    description: 'Mature, confident, and identifies talent. They clarify goals and delegate effectively.',
    strengths: ['Mature', 'Confident', 'Identifies talent', 'Clarifies goals', 'Delegates effectively'],
    weaknesses: ['Can be seen as manipulative', 'Offloads personal work'],
    examples: {
      historical: 'Abraham Lincoln',
      modern: 'Ronald Reagan'
    }
  },
  TW: {
    code: 'TW',
    name: 'Teamworker',
    description: 'Co-operative, perceptive, and diplomatic. They listen and avert friction within the team.',
    strengths: ['Co-operative', 'Perceptive', 'Diplomatic', 'Listens', 'Averts friction'],
    weaknesses: ['Indecisive in crunch situations', 'Avoids confrontation'],
    examples: {
      historical: 'Mother Teresa',
      modern: 'Princess Diana'
    }
  },
  RI: {
    code: 'RI',
    name: 'Resource Investigator',
    description: 'Outgoing, enthusiastic, and communicative. They explore opportunities and develop contacts.',
    strengths: ['Outgoing', 'Enthusiastic', 'Communicative', 'Explores opportunities', 'Develops contacts'],
    weaknesses: ['Over-optimistic', 'Loses interest once initial enthusiasm has passed'],
    examples: {
      historical: 'Benjamin Franklin',
      modern: 'Richard Branson'
    }
  },
  PL: {
    code: 'PL',
    name: 'Plant',
    description: 'Creative, imaginative, and free-thinking. They generate ideas and solve difficult problems.',
    strengths: ['Creative', 'Imaginative', 'Free-thinking', 'Generates ideas', 'Solves difficult problems'],
    weaknesses: ['Ignores incidentals', 'Too preoccupied to communicate effectively'],
    examples: {
      historical: 'Leonardo da Vinci',
      modern: 'Albert Einstein'
    }
  },
  ME: {
    code: 'ME',
    name: 'Monitor Evaluator',
    description: 'Sober, strategic, and discerning. They see all options and judge accurately.',
    strengths: ['Sober', 'Strategic', 'Discerning', 'Sees all options', 'Judges accurately'],
    weaknesses: ['Lacks drive and ability to inspire others', 'Can be overly critical'],
    examples: {
      historical: 'Robert McNamara',
      modern: 'Warren Buffett'
    }
  }
};

export const ASSESSMENT_DATA: Section[] = [
  {
    id: 1,
    title: 'What I believe I can contribute to a team',
    burmeseTitle: 'အသင်းတစ်ခုအတွက် ကျွန်ုပ် ပံ့ပိုးပေးနိုင်သည်ဟု ယုံကြည်သောအရာများ',
    statements: [
      { id: '1a', text: 'I think I can quickly see and take advantage of new opportunities.', burmeseText: 'အခွင့်အလမ်းသစ်များကို လျင်မြန်စွာ မြင်နိုင်ပြီး အသုံးချနိုင်သည်ဟု ထင်ပါသည်။', roleCode: 'RI' },
      { id: '1b', text: 'I can work well with a very wide range of people.', burmeseText: 'လူအမျိုးမျိုးနှင့် အဆင်ပြေအောင် လုပ်ဆောင်နိုင်ပါသည်။', roleCode: 'TW' },
      { id: '1c', text: 'Producing ideas is one of my natural assets.', burmeseText: 'အကြံဉာဏ်သစ်များ ထုတ်ဖော်ခြင်းမှာ ကျွန်ုပ်၏ သဘာဝအရည်အချင်းတစ်ခု ဖြစ်ပါသည်။', roleCode: 'PL' },
      { id: '1d', text: 'My ability rests in being able to draw people out whenever I detect they have something of value to contribute to group objectives.', burmeseText: 'အဖွဲ့၏ ရည်မှန်းချက်များအတွက် အကျိုးရှိမည့် အရာများရှိသည်ဟု သိမြင်ပါက အခြားသူများ ပါဝင်လာအောင် ဆွဲဆောင်နိုင်စွမ်း ရှိပါသည်။', roleCode: 'CO' },
      { id: '1e', text: 'My capacity to follow through has much to do with my personal effectiveness.', burmeseText: 'အလုပ်တစ်ခုကို အဆုံးထိ ပြီးမြောက်အောင် လုပ်ဆောင်နိုင်စွမ်းမှာ ကျွန်ုပ်၏ စွမ်းဆောင်ရည်နှင့် များစွာ သက်ဆိုင်ပါသည်။', roleCode: 'IMP' },
      { id: '1f', text: 'I am ready to face temporary unpopularity if it leads to worthwhile results in the end.', burmeseText: 'ရလဒ်ကောင်းများ ထွက်ပေါ်လာမည်ဆိုပါက ခဏတာ လူကြိုက်မများမှုကို ရင်ဆိုင်ရန် အသင့်ရှိပါသည်။', roleCode: 'SH' },
      { id: '1g', text: 'I am quick to sense what is likely to work in a situation with which I am familiar.', burmeseText: 'ကျွန်ုပ် ရင်းနှီးသော အခြေအနေမျိုးတွင် မည်သည့်အရာက အလုပ်ဖြစ်မည်ကို လျင်မြန်စွာ သိရှိနိုင်ပါသည်။', roleCode: 'ME' },
      { id: '1h', text: 'I can offer a reasoned case for alternative courses of action without introducing bias or prejudice.', burmeseText: 'ဘက်လိုက်မှုမရှိဘဲ အခြား ရွေးချယ်စရာ နည်းလမ်းများအတွက် ခိုင်လုံသော အကြောင်းပြချက်များ ပေးနိုင်ပါသည်။', roleCode: 'CF' }
    ]
  },
  {
    id: 2,
    title: 'If I have a shortcoming in team work, it could be that',
    burmeseTitle: 'အဖွဲ့လိုက် လုပ်ဆောင်ရာတွင် ကျွန်ုပ်၌ အားနည်းချက်ရှိပါက ၎င်းမှာ...',
    statements: [
      { id: '2a', text: 'I am not at ease unless meetings are well structured and controlled and generally well conducted.', burmeseText: 'အစည်းအဝေးများမှာ စနစ်တကျ မရှိဘဲ ထိန်းချုပ်ထားခြင်း မရှိပါက ကျွန်ုပ် စိတ်မအေးဖြစ်တတ်ပါသည်။', roleCode: 'CO' },
      { id: '2b', text: 'I am inclined to be too generous towards others who have a valid viewpoint that has not been properly aired.', burmeseText: 'ထုတ်ဖော်ပြောဆိုခွင့် မရသေးသော မှန်ကန်သည့် အမြင်ရှိသူများအပေါ် အလွန်အမင်း ရက်ရောတတ်ပါသည်။', roleCode: 'TW' },
      { id: '2c', text: 'I have a tendency to talk a lot once the group gets on to new ideas.', burmeseText: 'အဖွဲ့က အကြံဉာဏ်သစ်များ စတင်ဆွေးနွေးလျှင် စကားများတတ်သော အလေ့အထ ရှိပါသည်။', roleCode: 'RI' },
      { id: '2d', text: 'My objective outlook makes it difficult for me to share in the enthusiasm of colleagues.', burmeseText: 'ကျွန်ုပ်၏ ဓမ္မဓိဋ္ဌာန်ကျသော အမြင်ကြောင့် လုပ်ဖော်ကိုင်ဖက်များ၏ စိတ်အားထက်သန်မှုကို မျှဝေခံစားရန် ခက်ခဲတတ်ပါသည်။', roleCode: 'ME' },
      { id: '2e', text: 'I am sometimes seen as forceful and authoritarian if there is a need to get something done.', burmeseText: 'အလုပ်တစ်ခု ပြီးမြောက်ရန် လိုအပ်ပါက တစ်ခါတစ်ရံ အာဏာသုံးသူ သို့မဟုတ် တွန်းအားပေးသူအဖြစ် မြင်ကြပါသည်။', roleCode: 'SH' },
      { id: '2f', text: 'I find it difficult to lead from the front, perhaps because I am over-responsive to group atmosphere.', burmeseText: 'အဖွဲ့၏ အခြေအနေကို အလွန်အမင်း အလေးထားသောကြောင့် ရှေ့မှ ဦးဆောင်ရန် ခက်ခဲတတ်ပါသည်။', roleCode: 'TW' },
      { id: '2g', text: 'I am apt to get too caught up in ideas that occur to me and so lose track of what is happening.', burmeseText: 'ကိုယ်တိုင် စဉ်းစားမိသော အကြံဉာဏ်များထဲတွင် နစ်မျောသွားတတ်ပြီး ဖြစ်ပျက်နေသည်များကို သတိမမူမိဘဲ ရှိတတ်ပါသည်။', roleCode: 'PL' },
      { id: '2h', text: 'My colleagues tend to see me as worrying unnecessarily over detail and the possibility that things may go wrong.', burmeseText: 'အသေးစိတ်အချက်အလက်များနှင့် မှားယွင်းနိုင်ခြေများအပေါ် မလိုအပ်ဘဲ စိုးရိမ်နေတတ်သည်ဟု လုပ်ဖော်ကိုင်ဖက်များက မြင်ကြပါသည်။', roleCode: 'CF' }
    ]
  },
  {
    id: 3,
    title: 'When involved in a project with other people',
    burmeseTitle: 'အခြားသူများနှင့် ပရောဂျက်တစ်ခုတွင် ပါဝင်ဆောင်ရွက်သောအခါ',
    statements: [
      { id: '3a', text: 'I have an aptitude for influencing people without pressurizing them.', burmeseText: 'လူများကို ဖိအားမပေးဘဲ လွှမ်းမိုးနိုင်စွမ်း ရှိပါသည်။', roleCode: 'CO' },
      { id: '3b', text: 'My general vigilance prevents careless mistakes and omissions being made.', burmeseText: 'ကျွန်ုပ်၏ အမြဲတစေ သတိရှိမှုကြောင့် မတော်တဆ အမှားများနှင့် ကျန်ရစ်မှုများကို ကာကွယ်ပေးနိုင်ပါသည်။', roleCode: 'CF' },
      { id: '3c', text: 'I am ready to press for action to make sure that the meeting does not waste time or lose sight of the main objective.', burmeseText: 'အချိန်မဖြုန်းဘဲ အဓိက ရည်မှန်းချက်ကို မပျောက်ပျက်စေရန် လုပ်ဆောင်ရန် တွန်းအားပေးရန် အသင့်ရှိပါသည်။', roleCode: 'SH' },
      { id: '3d', text: 'I can be relied upon to contribute something original.', burmeseText: 'ဆန်းသစ်သော အရာတစ်ခုခု ပံ့ပိုးပေးနိုင်မည်ဟု ယုံကြည်စိတ်ချနိုင်ပါသည်။', roleCode: 'PL' },
      { id: '3e', text: 'I am always ready to back a good suggestion in the common interest.', burmeseText: 'ဘုံအကျိုးစီးပွားအတွက် ကောင်းမွန်သော အကြံပြုချက်ကို အမြဲတမ်း ထောက်ခံရန် အသင့်ရှိပါသည်။', roleCode: 'TW' },
      { id: '3f', text: 'I am keen to look for the latest in new ideas and developments.', burmeseText: 'အကြံဉာဏ်သစ်များနှင့် တိုးတက်မှုအသစ်များကို အမြဲ ရှာဖွေလိုစိတ် ရှိပါသည်။', roleCode: 'RI' },
      { id: '3g', text: 'I believe my capacity for cool judgement is appreciated by others.', burmeseText: 'ကျွန်ုပ်၏ တည်ငြိမ်သော ဆုံးဖြတ်နိုင်စွမ်းကို အခြားသူများက တန်ဖိုးထားသည်ဟု ယုံကြည်ပါသည်။', roleCode: 'ME' },
      { id: '3h', text: 'I can be relied upon to see that all essential work is organized.', burmeseText: 'မရှိမဖြစ်လိုအပ်သော အလုပ်အားလုံး စနစ်တကျ ရှိစေရန် လုပ်ဆောင်မည်ဟု ယုံကြည်စိတ်ချနိုင်ပါသည်။', roleCode: 'IMP' }
    ]
  },
  {
    id: 4,
    title: 'My characteristic approach to group work is that',
    burmeseTitle: 'အဖွဲ့လိုက် လုပ်ဆောင်ရာတွင် ကျွန်ုပ်၏ ထူးခြားသော ချဉ်းကပ်ပုံမှာ...',
    statements: [
      { id: '4a', text: 'I have a quiet interest in getting to know colleagues better.', burmeseText: 'လုပ်ဖော်ကိုင်ဖက်များအကြောင်း ပိုမိုသိရှိရန် ငြိမ်သက်စွာ စိတ်ဝင်စားမှု ရှိပါသည်။', roleCode: 'TW' },
      { id: '4b', text: 'I am not reluctant to challenge the views of others or to hold a minority view myself.', burmeseText: 'အခြားသူများ၏ အမြင်များကို စိန်ခေါ်ရန် သို့မဟုတ် လူနည်းစုအမြင်ကို ဆုပ်ကိုင်ရန် ဝန်မလေးပါ။', roleCode: 'SH' },
      { id: '4c', text: 'I can usually find a line of argument to refute unsound propositions.', burmeseText: 'မခိုင်လုံသော အဆိုပြုချက်များကို ချေပရန် အကြောင်းပြချက်များကို ရှာဖွေနိုင်လေ့ရှိပါသည်။', roleCode: 'ME' },
      { id: '4d', text: 'I think I have a talent for making things work once a plan has to be put into operation.', burmeseText: 'အစီအစဉ်တစ်ခုကို စတင်အကောင်အထည်ဖော်သောအခါ အောင်မြင်အောင် လုပ်ဆောင်နိုင်သော အရည်အချင်းရှိသည်ဟု ထင်ပါသည်။', roleCode: 'IMP' },
      { id: '4e', text: 'I have a tendency to avoid the obvious and to come out with the unexpected.', burmeseText: 'သိသာထင်ရှားသော အရာများကို ရှောင်ကြဉ်ပြီး မမျှော်လင့်ထားသော အရာများကို ထုတ်ဖော်ပြသတတ်သော အလေ့အထ ရှိပါသည်။', roleCode: 'PL' },
      { id: '4f', text: 'I bring a touch of perfectionism to any team job I undertake.', burmeseText: 'မည်သည့် အဖွဲ့လိုက်အလုပ်တွင်မဆို အကောင်းဆုံးဖြစ်အောင် လုပ်ဆောင်တတ်သော အလေ့အထ ရှိပါသည်။', roleCode: 'CF' },
      { id: '4g', text: 'I am ready to make use of contacts outside the group itself.', burmeseText: 'အဖွဲ့အပြင်ပမှ အဆက်အသွယ်များကို အသုံးချရန် အသင့်ရှိပါသည်။', roleCode: 'RI' },
      { id: '4h', text: 'While I am interested in all views I have no hesitation in making up my mind once a decision has to be made.', burmeseText: 'အမြင်အားလုံးကို စိတ်ဝင်စားသော်လည်း ဆုံးဖြတ်ချက်ချရန် လိုအပ်ပါက ချက်ချင်း ဆုံးဖြတ်ရန် ဝန်မလေးပါ။', roleCode: 'CO' }
    ]
  },
  {
    id: 5,
    title: 'I gain satisfaction in a job because',
    burmeseTitle: 'အလုပ်တစ်ခုတွင် ကျွန်ုပ် ကျေနပ်မှုရရှိခြင်းမှာ...',
    statements: [
      { id: '5a', text: 'I enjoy analysing situations and weighing up all the possible choices.', burmeseText: 'အခြေအနေများကို ခွဲခြမ်းစိတ်ဖြာပြီး ဖြစ်နိုင်ခြေရှိသော ရွေးချယ်စရာအားလုံးကို ချိန်ဆရခြင်းကို နှစ်သက်ပါသည်။', roleCode: 'ME' },
      { id: '5b', text: 'I am interested in finding practical solutions to problems.', burmeseText: 'ပြဿနာများအတွက် လက်တွေ့ကျသော ဖြေရှင်းနည်းများ ရှာဖွေရန် စိတ်ဝင်စားပါသည်။', roleCode: 'IMP' },
      { id: '5c', text: 'I like to feel I am fostering good working relationships.', burmeseText: 'ကောင်းမွန်သော လုပ်ငန်းခွင် ဆက်ဆံရေးများကို တည်ဆောက်နေရသည်ဟု ခံစားရခြင်းကို နှစ်သက်ပါသည်။', roleCode: 'TW' },
      { id: '5d', text: 'I can have a strong influence on decisions.', burmeseText: 'ဆုံးဖြတ်ချက်များအပေါ် ပြင်းထန်သော လွှမ်းမိုးမှု ရှိနိုင်ပါသည်။', roleCode: 'SH' },
      { id: '5e', text: 'I can meet people who may have something new to offer.', burmeseText: 'အသစ်အဆန်းများ ပေးစွမ်းနိုင်သော သူများနှင့် တွေ့ဆုံနိုင်ပါသည်။', roleCode: 'RI' },
      { id: '5f', text: 'I can get people to agree on a necessary course of action.', burmeseText: 'လိုအပ်သော လုပ်ဆောင်ချက်တစ်ခုအပေါ် လူများ သဘောတူလာအောင် လုပ်ဆောင်နိုင်ပါသည်။', roleCode: 'CO' },
      { id: '5g', text: 'I feel in my element where I can give a task my full attention.', burmeseText: 'အလုပ်တစ်ခုအပေါ် အပြည့်အဝ အာရုံစိုက်နိုင်သော နေရာတွင် ရှိနေရသည်ဟု ခံစားရပါသည်။', roleCode: 'CF' },
      { id: '5h', text: 'I like to find a field that stretches my imagination.', burmeseText: 'ကျွန်ုပ်၏ စိတ်ကူးစိတ်သန်းကို ချဲ့ထွင်ပေးနိုင်သော နယ်ပယ်တစ်ခုကို ရှာဖွေရသည်မှာ နှစ်သက်ပါသည်။', roleCode: 'PL' }
    ]
  }
];
