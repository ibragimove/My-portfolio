/**
 * =========================================================================
 * ELBEK IBRAGIMOV — ACHIEVEMENTS & ACADEMIC PROFILE
 * =========================================================================
 * Verified details:
 * - IT Park Best Website Competition: 3rd place among 52 participants (2026)
 * - Muhammad Al-Xorazmiy Successors Competition: 3rd place (2024)
 * - Academic: SAT 1520 (Math 800, EBRW 720), IELTS 7.0
 * =========================================================================
 */

export const achievementsData = {
  competitions: [
    {
      id: 'it-park-website-2026',
      title: 'IT Park Best Website Competition',
      award: '3rd Place',
      year: '2026',
      rankHighlight: '3rd of 52 Participants (2026)',
      organization: 'IT Park Uzbekistan',
      description:
        'Awarded 3rd place in the national Best Website Competition organized by IT Park Uzbekistan in 2026, recognized for responsive engineering, performance, and clean design among 52 competing participants.',
      tags: ['Web Engineering', 'Competitive Coding', 'Top 3 Finalist', '2026'],
    },
    {
      id: 'al-xorazmiy-successors-2024',
      title: 'Muhammad Al-Xorazmiy Successors Competition',
      award: '3rd Place',
      year: '2024',
      rankHighlight: 'National Honors (2024)',
      organization: 'Al-Xorazmiy Successors Initiative',
      description:
        'Secured 3rd place in the prestigious 2024 Muhammad Al-Xorazmiy successors competition, celebrating analytical problem solving and algorithmic reasoning named in honor of the historical mathematician.',
      tags: ['Algorithmic Thinking', 'STEM', 'Successors Initiative', '2024'],
    },
  ],
  academics: [
    {
      id: 'sat',
      testName: 'SAT (Scholastic Assessment Test)',
      compositeScore: '1520',
      scale: 'Out of 1600',
      description:
        'Standardized examination assessing mathematical problem solving, evidence-based reading, and analytical writing.',
      breakdown: [
        { subject: 'Mathematics', score: '800', max: '800', note: 'Perfect Score (800/800)' },
        { subject: 'EBRW (Reading & Writing)', score: '720', max: '800', note: 'Advanced Analytical' },
      ],
      tags: ['Mathematics 800/800', 'Analytical Reasoning', 'Top 1% Global'],
    },
    {
      id: 'ielts',
      testName: 'IELTS Academic',
      compositeScore: '7.0',
      scale: 'Overall Band Score',
      description:
        'International English Language Testing System certifying advanced academic communication and analytical reading fluency.',
      breakdown: [
        { subject: 'Overall Band', score: '7.0', max: '9.0', note: 'C1 Proficient User' },
      ],
      tags: ['Academic English', 'Global Collaboration', 'C1 Level'],
    },
  ],
};

export default achievementsData;
