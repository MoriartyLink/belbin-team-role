export interface Statement {
  id: string;
  text: string;
  roleCode: RoleCode;
}

export interface Section {
  id: number;
  title: string;
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
    statements: [
      { id: '1a', text: 'I think I can quickly see and take advantage of new opportunities.', roleCode: 'RI' },
      { id: '1b', text: 'I can work well with a very wide range of people.', roleCode: 'TW' },
      { id: '1c', text: 'Producing ideas is one of my natural assets.', roleCode: 'PL' },
      { id: '1d', text: 'My ability rests in being able to draw people out whenever I detect they have something of value to contribute to group objectives.', roleCode: 'CO' },
      { id: '1e', text: 'My capacity to follow through has much to do with my personal effectiveness.', roleCode: 'IMP' },
      { id: '1f', text: 'I am ready to face temporary unpopularity if it leads to worthwhile results in the end.', roleCode: 'SH' },
      { id: '1g', text: 'I am quick to sense what is likely to work in a situation with which I am familiar.', roleCode: 'ME' },
      { id: '1h', text: 'I can offer a reasoned case for alternative courses of action without introducing bias or prejudice.', roleCode: 'CF' }
    ]
  },
  {
    id: 2,
    title: 'If I have a shortcoming in team work, it could be that',
    statements: [
      { id: '2a', text: 'I am not at ease unless meetings are well structured and controlled and generally well conducted.', roleCode: 'CO' },
      { id: '2b', text: 'I am inclined to be too generous towards others who have a valid viewpoint that has not been properly aired.', roleCode: 'TW' },
      { id: '2c', text: 'I have a tendency to talk a lot once the group gets on to new ideas.', roleCode: 'RI' },
      { id: '2d', text: 'My objective outlook makes it difficult for me to share in the enthusiasm of colleagues.', roleCode: 'ME' },
      { id: '2e', text: 'I am sometimes seen as forceful and authoritarian if there is a need to get something done.', roleCode: 'SH' },
      { id: '2f', text: 'I find it difficult to lead from the front, perhaps because I am over-responsive to group atmosphere.', roleCode: 'TW' },
      { id: '2g', text: 'I am apt to get too caught up in ideas that occur to me and so lose track of what is happening.', roleCode: 'PL' },
      { id: '2h', text: 'My colleagues tend to see me as worrying unnecessarily over detail and the possibility that things may go wrong.', roleCode: 'CF' }
    ]
  },
  {
    id: 3,
    title: 'When involved in a project with other people',
    statements: [
      { id: '3a', text: 'I have an aptitude for influencing people without pressurizing them.', roleCode: 'CO' },
      { id: '3b', text: 'My general vigilance prevents careless mistakes and omissions being made.', roleCode: 'CF' },
      { id: '3c', text: 'I am ready to press for action to make sure that the meeting does not waste time or lose sight of the main objective.', roleCode: 'SH' },
      { id: '3d', text: 'I can be relied upon to contribute something original.', roleCode: 'PL' },
      { id: '3e', text: 'I am always ready to back a good suggestion in the common interest.', roleCode: 'TW' },
      { id: '3f', text: 'I am keen to look for the latest in new ideas and developments.', roleCode: 'RI' },
      { id: '3g', text: 'I believe my capacity for cool judgement is appreciated by others.', roleCode: 'ME' },
      { id: '3h', text: 'I can be relied upon to see that all essential work is organized.', roleCode: 'IMP' }
    ]
  },
  {
    id: 4,
    title: 'My characteristic approach to group work is that',
    statements: [
      { id: '4a', text: 'I have a quiet interest in getting to know colleagues better.', roleCode: 'TW' },
      { id: '4b', text: 'I am not reluctant to challenge the views of others or to hold a minority view myself.', roleCode: 'SH' },
      { id: '4c', text: 'I can usually find a line of argument to refute unsound propositions.', roleCode: 'ME' },
      { id: '4d', text: 'I think I have a talent for making things work once a plan has to be put into operation.', roleCode: 'IMP' },
      { id: '4e', text: 'I have a tendency to avoid the obvious and to come out with the unexpected.', roleCode: 'PL' },
      { id: '4f', text: 'I bring a touch of perfectionism to any team job I undertake.', roleCode: 'CF' },
      { id: '4g', text: 'I am ready to make use of contacts outside the group itself.', roleCode: 'RI' },
      { id: '4h', text: 'While I am interested in all views I have no hesitation in making up my mind once a decision has to be made.', roleCode: 'CO' }
    ]
  },
  {
    id: 5,
    title: 'I gain satisfaction in a job because',
    statements: [
      { id: '5a', text: 'I enjoy analysing situations and weighing up all the possible choices.', roleCode: 'ME' },
      { id: '5b', text: 'I am interested in finding practical solutions to problems.', roleCode: 'IMP' },
      { id: '5c', text: 'I like to feel I am fostering good working relationships.', roleCode: 'TW' },
      { id: '5d', text: 'I can have a strong influence on decisions.', roleCode: 'SH' },
      { id: '5e', text: 'I can meet people who may have something new to offer.', roleCode: 'RI' },
      { id: '5f', text: 'I can get people to agree on a necessary course of action.', roleCode: 'CO' },
      { id: '5g', text: 'I feel in my element where I can give a task my full attention.', roleCode: 'CF' },
      { id: '5h', text: 'I like to find a field that stretches my imagination.', roleCode: 'PL' }
    ]
  }
];
