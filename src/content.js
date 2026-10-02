export const email = 'parthmahajan740@gmail.com';
export const profile = {
  github: 'https://github.com/ParthhMahajann',
  linkedin: 'https://www.linkedin.com/in/parthhmahajann',
  resume: '/Parth-Mahajan-Resume.pdf',
};

export const projects = [
  {
    id: 'nextstep', name: 'NextStep AI', type: 'AI application',
    line: 'Job discovery, application tracking, and AI-assisted career preparation.',
    tags: ['Django', 'React', 'Semantic embeddings'],
    status: 'Development prototype',
    summary: 'Job discovery and career preparation, brought into one workflow.',
    story: 'I built a Django and React prototype to connect job discovery with the preparation that follows it. Its ranking module weighs skill overlap, semantic similarity, preferences, and recency. Saved jobs and an application tracker keep the next steps in the same place.',
    contributions: ['Django REST API and React application for discovery and application management.', 'Ranking that combines skill overlap with semantic similarity.', 'Groq-powered resume analysis, cover-letter drafting, and interview preparation.'],
    note: 'A development prototype. Live-feed reliability, deployment, and user outcomes have not been validated.',
    href: 'https://github.com/ParthhMahajann/Nextstep_AI', linkLabel: 'Explore the repository',
  },
  {
    id: 'sentineld', name: 'SentinelD', type: 'Systems & automation',
    line: 'Linux telemetry, incident detection, and recovery actions with approval controls.',
    tags: ['Python', 'FastAPI', 'Linux'],
    status: 'Research prototype',
    summary: 'A Linux incident-management prototype with constrained recovery workflows.',
    story: 'SentinelD collects Linux telemetry and turns rules and anomaly signals into incidents for review. I implemented typed action validation, approval controls, and audit records around recovery, with a separate SSH executor. The aim is to make an action inspectable before it runs.',
    contributions: ['Python and FastAPI services for Linux telemetry, rules, and anomaly detection.', 'A React dashboard for incident review and operator decisions.', 'Typed action validation, approval controls, audit records, and a separate SSH executor.'],
    note: 'A research prototype with local implementation evidence. Live Ubuntu qualification and full research acceptance remain in progress.',
    href: 'https://github.com/ParthhMahajann/sentineld', linkLabel: 'Explore the repository',
  },
  {
    id: 'looppop', name: 'LOOPPOP', type: '3D & motion design',
    line: 'Three sparkling-drink flavors, one 24-second Blender film.',
    tags: ['Blender', 'Motion design', '24-second film'],
    status: 'Independent concept · Elara Visuals',
    summary: 'A playful motion study for a fictional sparkling-drink brand.',
    story: 'LOOPPOP is an independent concept for a fictional sparkling-drink brand. Lime, Guava, and Jamun each have their own packaging color. The 24-second Blender sequence uses those three cans as its main characters, with separate landscape and vertical compositions.',
    contributions: ['Original 3D packaging and a three-flavor visual identity.', 'A product-led motion sequence built in Blender.', 'Landscape and vertical film deliverables with original audio.'],
    note: 'Independent fictional brand concept developed with Elara Visuals. This is creative exploration, not commissioned client work or a claim of campaign performance.',
    image: '/media/looppop-poster.png', video: '/media/looppop-film.mp4',
  },
  {
    id: 'orven', name: 'ORVEN — In Bloom', type: 'AI-assisted film',
    line: 'A botanical headphone concept, made with AI-assisted production.',
    tags: ['Art direction', 'AI-assisted production', '24-second film'],
    status: 'Independent concept · Elara Visuals',
    summary: 'Ruby headphones, red poppies, and warm amber light.',
    story: 'ORVEN is a fictional headphone brand. This 24-second concept places its ruby headphones among red poppies under warm amber light. AI-generated shots are assembled into a vertical product film with music and titles.',
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
