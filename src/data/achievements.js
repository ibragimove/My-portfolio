/**
 * =========================================================================
 * ACHIEVEMENTS & ACADEMIC PROFILE DATA SOURCE
 * =========================================================================
 * Strictly implements verified details:
 * 1. IT Park Best Website Competition — 3rd place among 52 participants
 * 2. Muhammad Al-Xorazmiy successors competition — 3rd place
 * 3. SAT: 1520 (Math: 800, EBRW: 720)
 * 4. IELTS: 7.0
 * =========================================================================
 */

export const achievementsData = {
  competitions: [
    {
      id: 'it-park-website',
      title: 'IT Park Best Website Competition',
      award: '3rd Place',
      rankHighlight: 'Among 52 Participants',
      organization: 'IT Park Uzbekistan',
      description:
        'Awarded 3rd place in the national Best Website Competition organized by IT Park Uzbekistan, competing against 52 technical participants.',
      tags: ['Web Engineering', 'Competitive Coding', 'Top 3 Finalist'],
    },
    {
      id: 'al-xorazmiy-successors',
      title: 'Muhammad Al-Xorazmiy Successors Competition',
      award: '3rd Place',
      rankHighlight: 'National Honors',
      organization: 'Al-Xorazmiy Successors Initiative',
      description:
        'Secured 3rd place in the prestigious Muhammad Al-Xorazmiy successors competition, celebrating analytical problem solving and algorithmic potential.',
      tags: ['Algorithmic Thinking', 'STEM', 'Successors Initiative'],
    },
  ],
  academics: [
    {
      id: 'sat',
      testName: 'SAT (Scholastic Assessment Test)',
      compositeScore: '1520',
      scale: 'Out of 1600',
      description:
        'Standardized examination assessing mathematical reasoning, analytical reading, and writing proficiency.',
      breakdown: [
        { subject: 'Mathematics', score: '800', max: '800', note: 'Perfect Score' },
        { subject: 'EBRW (Reading & Writing)', score: '720', max: '800', note: 'Advanced' },
      ],
      tags: ['Mathematics 800/800', 'Analytical Reasoning'],
    },
    {
      id: 'ielts',
      testName: 'IELTS Academic',
      compositeScore: '7.0',
      scale: 'Overall Band Score',
      description:
        'International English Language Testing System certifying advanced operational fluency, academic reading, and communication.',
      breakdown: [
        { subject: 'Overall Band', score: '7.0', max: '9.0', note: 'C1 Proficient User' },
      ],
      tags: ['Academic English', 'Global Communication'],
    },
  ],
};

export default achievementsData;
