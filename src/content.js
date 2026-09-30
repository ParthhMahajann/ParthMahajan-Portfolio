export const email = 'parthmahajan740@gmail.com';
export const profile = {
  github: 'https://github.com/ParthhMahajann',
  linkedin: 'https://www.linkedin.com/in/parthhmahajann',
  resume: '/Parth-Mahajan-Resume.pdf',
};

export const projects = [
  {
    id: 'nextstep', name: 'NextStep AI', type: 'AI application',
    line: 'A little direction for the next big step.',
    tags: ['Django', 'React', 'Semantic embeddings'],
    status: 'Development prototype',
    summary: 'Job discovery and career preparation, brought into one workflow.',
    story: 'Finding a role means connecting your skills to the right opportunity, then keeping track of what comes next. NextStep AI explores that workflow through job discovery, saved jobs, application tracking, and AI-assisted preparation.',
    contributions: ['Django REST API and React application for discovery and application management.', 'Ranking that combines skill overlap with semantic similarity.', 'Groq-powered resume analysis, cover-letter drafting, and interview preparation.'],
    note: 'A development prototype. Live-feed reliability, deployment, and user outcomes have not been validated.',
    href: 'https://github.com/ParthhMahajann/Nextstep_AI', linkLabel: 'Explore the repository',
  },
  {
    id: 'sentineld', name: 'SentinelD', type: 'Systems & automation',
    line: 'Understand the incident. Keep control.',
    tags: ['Python', 'FastAPI', 'Linux'],
    status: 'Research prototype',
    summary: 'Linux incident management with human oversight at its core.',
    story: 'SentinelD explores the path from system telemetry to an understandable incident and a carefully constrained recovery action. The operator stays in the loop, with approval controls and an audit trail around recovery.',
    contributions: ['Python and FastAPI services for Linux telemetry, rules, and anomaly detection.', 'A React dashboard for incident review and operator decisions.', 'Typed action validation, approval controls, audit records, and a separate SSH executor.'],
    note: 'A research prototype with local implementation evidence. Live Ubuntu qualification and full research acceptance remain in progress.',
    href: 'https://github.com/ParthhMahajann/sentineld', linkLabel: 'Explore the repository',
  },
  {
    id: 'looppop', name: 'LOOPPOP', type: '3D & motion design',
    line: 'Pop a different rhythm.',
    tags: ['Blender', 'Motion design', '24-second film'],
    status: 'Independent concept · Elara Visuals',
    summary: 'A playful motion study for a fictional sparkling-drink brand.',
    story: 'Lime, Guava, and Jamun become a small world of color, packaging, and rhythm. This independent creative exploration brings product design and motion together in a 24-second film, with landscape and vertical versions.',
    contributions: ['Original 3D packaging and a three-flavor visual identity.', 'A product-led motion sequence built in Blender.', 'Landscape and vertical film deliverables with original audio.'],
    note: 'Independent fictional brand concept developed with Elara Visuals. This is creative exploration, not commissioned client work or a claim of campaign performance.',
    image: '/media/looppop-poster.png', video: '/media/looppop-film.mp4',
  },
  {
    id: 'orven', name: 'ORVEN — In Bloom', type: 'AI-assisted film',
    line: 'Technology, with a softer side.',
    tags: ['Art direction', 'AI-assisted production', '24-second film'],
    status: 'Independent concept · Elara Visuals',
    summary: 'Ruby headphones, red poppies, and warm amber light.',
    story: 'An exploration of how a technology product can live in an unexpected visual world. This botanical film concept places fictional ORVEN headphones among poppies, using lighting, composition, and sound to build a quiet product story.',
    contributions: ['A botanical creative direction for a fictional headphone brand.', 'AI-assisted product imagery and a 24-second vertical review film.', 'Music, titles, and an edited sequence for the concept presentation.'],
    note: 'Independent fictional concept developed with Elara Visuals. The film retains its Flow watermark; the review export uses upscaled 720p source footage.',
    image: '/media/orven-poster.png', video: '/media/orven-film.mp4',
  },
];

export const experience = [
  { role: 'Education Mentor', company: 'TeachMyRobot', date: 'Jan — Sep 2025', location: 'Freelance · Remote', body: 'Helped school students bring IoT, AI, and robotics ideas to life. Developed ESP32-CAM and TensorFlow learning kits and supported hands-on workshops.' },
  { role: 'Robotics Trainer', company: 'The Stem Innovation', date: 'Jan — Apr 2025', location: 'Ahmedabad, Gujarat', body: 'Taught robotics, electronics, and programming to students aged 10–17, guiding Arduino and Tinkercad projects from first ideas to working prototypes.' },
  { role: 'Research & Innovation Head', company: 'Industry & Entrepreneurship Club, JLU', date: 'Jun 2024 — Jun 2026', location: 'Student leadership · Bhopal', body: 'Led research and ideation for student startup concepts, mentored peers on prototypes and pitch decks, and supported workshops with faculty and industry input.' },
];
