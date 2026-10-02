import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Download, Play, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { email, profile, projects, experience } from './content';
import { NextStepPreview, SentinelPreview } from './TechnicalPreview';
import ProjectDialog from './ProjectDialog';

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function ProjectCard({ project, onOpen }) {
  return <article className={`project-card project-${project.id}`}>
    <button className="project-art" onClick={() => onOpen(project)} aria-label={`View ${project.name} project`}>
      {project.id === 'nextstep' ? <NextStepPreview /> : project.id === 'sentineld' ? <SentinelPreview /> :
        <img src={project.image} alt={project.id === 'looppop' ? 'Three LOOPPOP sparkling-drink can designs: Lime, Guava and Jamun' : 'Ruby ORVEN headphones among red poppies'} loading="lazy" width={project.id === 'orven' ? 720 : 1920} height={project.id === 'orven' ? 1280 : 1080} />}
      {project.video && <span className="film-label"><Play size={16} fill="currentColor" />Play film<span>24 sec</span></span>}
    </button>
    <div className="project-meta">
      <p className="project-type">{project.status}</p>
      <h3><button onClick={() => onOpen(project)}>{project.name}</button></h3>
      <p className="project-description">{project.line}</p>
    </div>
    <ul className="tag-list" aria-label="Project tools">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    <div className="project-links">
      <button onClick={() => onOpen(project)}>{project.video ? 'About the film' : 'Project details'}<ArrowUpRight size={17}/></button>
      {project.href && <a href={project.href} target="_blank" rel="noreferrer"><Github size={16}/>View source<span className="sr-only"> for {project.name}</span></a>}
    </div>
  </article>;
}

export default function App() {
  const [project, setProject] = useState(null);
  const [active, setActive] = useState('');
  const [copyState, setCopyState] = useState('idle');

  useEffect(() => {
    const update = () => {
      const current = navItems.map(({ id }) => document.getElementById(id))
        .filter(section => section.getBoundingClientRect().top < window.innerHeight * .45).at(-1);
      setActive(current?.id || '');
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (copyState === 'idle') return;
    const timer = setTimeout(() => setCopyState('idle'), 4000);
    return () => clearTimeout(timer);
  }, [copyState]);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopyState('copied'); }
    catch { setCopyState('failed'); }
  };

  return <>
    <a className="skip-link" href="#work">Skip to selected work</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Parth Mahajan, home">pm<span>.</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}
      </nav>
      <a className="resume-link" href={profile.resume} download>Resume<Download size={16}/></a>
    </header>
    <main>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-topline"><span>Computer science, with a creative practice.</span><span>Bhopal, India</span></div>
        <div className="hero-main">
          <h1 id="hero-title"><span>parth</span><span>mahajan</span></h1>
          <figure className="hero-feature">
            <button onClick={() => setProject(projects[3])} aria-label="Watch ORVEN — In Bloom">
              <img src="/media/orven-poster.png" alt="ORVEN headphones and poppies, from the In Bloom concept film" width="720" height="1280" fetchPriority="high"/>
              <span className="hero-play"><Play size={18} fill="currentColor"/>Play film</span>
            </button>
            <figcaption><span>ORVEN — In Bloom</span><span>Independent concept / 24 sec</span></figcaption>
          </figure>
          <div className="hero-identity">
            <p className="hero-role">AI applications.<br/>Independent product films.</p>
            <p className="hero-intro">I’m a computer science undergraduate building Python services and AI tools. I also develop product-film concepts with Elara Visuals.</p>
            <a className="hero-work-link" href="#work">See selected work<ArrowDown size={19}/></a>
          </div>
        </div>
      </section>

      <section id="work" className="section-pad work-section" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Software projects</h2><p>Two prototypes, with source code.<br/>Built around problems I wanted to understand.</p></div>
        <div className="project-grid engineering">{projects.slice(0, 2).map(p => <ProjectCard key={p.id} project={p} onOpen={setProject}/>)}</div>
        <div className="section-heading creative-heading"><h2>Films & motion</h2><p>Independent fictional brands.<br/>Developed with Elara Visuals.</p></div>
        <div className="project-grid creative">{projects.slice(2).map(p => <ProjectCard key={p.id} project={p} onOpen={setProject}/>)}</div>
      </section>

      <section id="about" className="section-pad about-section" aria-labelledby="about-title">
        <div className="about-grid">
          <div className="about-heading"><p className="section-label">About</p><h2 id="about-title">From robotics<br/>to software<br/>and film.</h2></div>
          <div className="about-copy">
            <p className="about-lead">I’m studying computer science at Jagran Lakecity University in Bhopal, graduating in 2027.</p>
            <p>In 2025, I taught robotics and programming to school students. The work included Arduino projects, ESP32-CAM learning kits, and helping students troubleshoot their prototypes.</p>
            <p>My software projects explore job matching and Linux incident management. Alongside that, I’m developing a creative practice in motion design and AI-assisted product films.</p>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn<ArrowUpRight size={17}/></a>
          </div>
        </div>
        <div className="toolbox"><h3>Tools I work with</h3><div>
          <p><strong>Software</strong>Python, SQL, JavaScript, Django, FastAPI, React</p>
          <p><strong>AI & infrastructure</strong>LLM APIs, semantic embeddings, PostgreSQL, Git, Docker</p>
          <p><strong>Creative practice</strong>Blender, motion design, AI-assisted film production</p>
        </div></div>
        <div className="education-note"><span>Education</span><p>B.Tech in Computer Science<br/><span>Jagran Lakecity University, 2023–2027</span></p><span>Expected May 2027</span></div>
      </section>

      <section id="experience" className="section-pad experience-section" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Teaching & leadership</h2></div>
        <div className="experience-list">{experience.map(item => <article key={item.role} className="experience-row">
          <p className="experience-date">{item.date}</p>
          <div className="experience-main"><h3>{item.role}</h3><p>{item.company}</p><span>{item.location}</span></div>
          <p className="experience-description">{item.body}</p>
        </article>)}</div>
      </section>

      <section id="contact" className="section-pad contact-section" aria-labelledby="contact-title">
        <p className="section-label">Contact</p>
        <div className="contact-heading"><h2 id="contact-title">Let’s talk.</h2><p>For an AI or software opportunity,<br/>a product-film brief, or a collaboration.</p></div>
        <div className="contact-bottom">
          <div className="contact-address">
            <div className="email-line"><a href={`mailto:${email}`}>{email}</a><button onClick={copyEmail} aria-label="Copy email address">{copyState === 'copied' ? <Check size={19}/> : <Copy size={19}/>}</button></div>
            <p className="copy-feedback" role="status">{copyState === 'copied' ? 'Email copied.' : copyState === 'failed' ? 'Select the email address to copy it.' : ''}</p>
          </div>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/>GitHub</a>
            <a href={profile.resume} download><Download size={18}/>Resume</a>
          </div>
        </div>
      </section>
    </main>
    <footer><span>© {new Date().getFullYear()} Parth Mahajan</span><span>Bhopal, India</span><a href="#home">Back to top<ArrowUp size={16}/></a></footer>
    <ProjectDialog project={project} onClose={() => setProject(null)}/>
  </>;
}
