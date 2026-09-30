import { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Download, Mail, MapPin, Code2, Sparkles, MoveUpRight, Play, Pause, Copy, Check, BriefcaseBusiness, UserRound, Layers, Terminal, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { email, profile, projects, experience } from './content';
import ProjectDialog from './ProjectDialog';
import SceneBoundary from './SceneBoundary';

const HeroScene = lazy(() => import('./HeroScene'));
const navItems = [{ id: 'home', label: 'Home', icon: Layers }, { id: 'work', label: 'Work', icon: BriefcaseBusiness }, { id: 'about', label: 'About', icon: UserRound }, { id: 'contact', label: 'Contact', icon: Mail }];

function NextStepArtwork() {
  return <div className="nextstep-art" aria-hidden="true">
    <div className="nextstep-grid" />
    <div className="nextstep-brand"><span className="nextstep-symbol">n<span>↗</span></span><span>nextstep<span className="ai-label">AI</span></span></div>
    <p>Your potential.<br/>A new direction.</p>
    <div className="job-mini job-back"><span className="job-icon"><Code2 size={19}/></span><div>AI Engineer<small>Find your next opportunity</small></div><ArrowUpRight size={18}/></div>
    <div className="job-mini job-front"><span className="match-symbol"><Sparkles size={20}/></span><div>More than keywords.<small>Match skills. Discover possibilities.</small></div><span className="match-line"/></div>
    <span className="art-foot">Discover. Prepare. Take the next step.</span>
  </div>;
}

function SentinelArtwork() {
  return <div className="sentinel-art" aria-hidden="true">
    <div className="sentinel-top"><span><span className="sentinel-mark">s</span>SentinelD</span><span className="system-label"><i/>Human in the loop</span></div>
    <div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-cross"/><div className="radar-core"><ShieldCheck size={42} strokeWidth={1.1}/></div><i className="radar-dot d1"/><i className="radar-dot d2"/></div>
    <div className="system-step detect"><Activity size={16}/><span>Detect<small>Telemetry & anomalies</small></span></div>
    <div className="system-step review"><UserRound size={16}/><span>Review<small>Operator approval</small></span></div>
    <div className="system-step recover"><Terminal size={16}/><span>Recover<small>Constrained actions</small></span></div>
    <span className="sentinel-footer">Observe. Understand. Act with confidence.</span>
  </div>;
}

function ProjectCard({ project, onOpen, index }) {
  return <article className={`project-card project-${project.id}`}>
    <button className="project-art" onClick={() => onOpen(project)} aria-label={`View ${project.name} project`}>
      {project.id === 'nextstep' ? <NextStepArtwork/> : project.id === 'sentineld' ? <SentinelArtwork/> : <img src={project.image} alt={project.id === 'looppop' ? 'LOOPPOP Lime, Guava and Jamun sparkling-drink can concepts' : 'Ruby ORVEN headphones surrounded by red poppies in warm light'} loading="lazy" width={project.id === 'orven' ? 720 : 1920} height={project.id === 'orven' ? 1280 : 1080}/>}
      <span className="project-action">{project.video ? <Play size={19} fill="currentColor"/> : <ArrowUpRight size={22}/>}</span>
      {project.video && <span className="film-label">Watch the concept film <span>0:24</span></span>}
    </button>
    <div className="project-meta"><div><span className="project-type">{project.type}</span><h3><button onClick={() => onOpen(project)}>{project.name}<ArrowUpRight size={20}/></button></h3><p>{project.line}</p></div><span className="project-index">/{String(index + 1).padStart(2, '0')}</span></div>
    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </article>;
}

export default function App() {
  const [project, setProject] = useState(null);
  const [active, setActive] = useState('home');
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [copyState, setCopyState] = useState('idle');
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setMotion(!preference.matches);
    preference.addEventListener('change', change);
    return () => preference.removeEventListener('change', change);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
  }, [motion]);
  useEffect(() => {
    const update = () => {
      const sections = navItems.map(({ id }) => document.getElementById(id));
      const current = sections.filter(section => section.getBoundingClientRect().top < window.innerHeight * .48).at(-1);
      if (current) setActive(current.id);
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
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Parth Mahajan, home">pm<span>●</span></a><a className="header-location" href="#about"><span className="status-dot"/>Based in Bhopal, India</a><a className="resume-link" href={profile.resume} download>Download resume<Download size={16}/></a></header>
    <main>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-topline"><span><span className="mini-cross">✳</span> Code, curiosity & a creative eye.</span><span className="hero-edition">Portfolio / 2026</span></div>
        <div className="hero-main">
          <h1 id="hero-title"><span>parth</span><span>mahajan<span className="name-dot">.</span></span></h1>
          <div className="hero-sculpture"><div className="sculpture-glow"/><div className="sculpture-fallback"><i/><i/><i/></div><SceneBoundary><Suspense fallback={null}><HeroScene motion={motion}/></Suspense></SceneBoundary></div>
          <div className="hero-side-note"><span className="line"/><span>Engineer in the making.<br/>Creator at heart.</span></div>
        </div>
        <div className="hero-bottom"><div className="hero-intro"><p>I build with AI.<br/>I think in possibilities.</p><span>Computer science undergraduate exploring<br className="desktop-br"/> AI applications, automation, and visual storytelling.</span></div><a className="circle-cta" href="#work" aria-label="Explore selected work"><span>Explore my work</span><ArrowDown size={25}/></a></div>
        <div className="hero-baseline"><span>AI applications <i/> Creative technology <i/> Motion design</span><button className="motion-toggle" onClick={() => setMotion(value => !value)} aria-pressed={motion} aria-label={motion ? 'Pause decorative motion' : 'Enable decorative motion'}>{motion ? <Pause size={12}/> : <Play size={12}/>}Motion {motion ? 'on' : 'off'}</button></div>
      </section>

      <section id="work" className="work-section section-pad" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="section-label"><span className="tiny-square"/>Selected work</p><h2 id="work-title">Ideas, made tangible<span>.</span></h2></div><p>A few things I’ve been building.<br/>Each one, a different kind of curiosity.</p></div>
        <div className="project-grid engineering">{projects.slice(0, 2).map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setProject}/>)}</div>
        <div className="creative-heading"><div><Sparkles size={19}/><h3>And on the creative side.</h3></div><p>Independent concepts with Elara Visuals</p></div>
        <div className="project-grid creative">{projects.slice(2).map((p, i) => <ProjectCard key={p.id} project={p} index={i + 2} onOpen={setProject}/>)}</div>
        <a className="text-link github-more" href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/>More experiments on GitHub<ArrowUpRight size={18}/></a>
      </section>

      <section id="about" className="about-section section-pad" aria-labelledby="about-title">
        <div className="about-top"><p className="section-label"><span className="tiny-square"/>A little about me</p><span className="about-coordinate"><MapPin size={14}/>Bhopal, India</span></div>
        <div className="about-grid"><div><h2 id="about-title">Equal parts<br/>logic and<br/><span className="creative-word">imagination<span className="asterisk">✳</span></span></h2><div className="education-note"><span className="education-icon"><Code2 size={25}/></span><div><strong>B.Tech, Computer Science</strong><span>Jagran Lakecity University</span><small>2023 — 2027 · Expected May 2027</small></div></div></div><div className="about-copy"><p className="about-lead">I’m Parth, a computer science student who likes turning “what if” into something you can actually use.</p><p>My work moves between AI applications, automation, and visual storytelling. I’m interested in systems that solve useful problems—and the craft that makes them clear, thoughtful, and engaging.</p><p>Teaching robotics taught me to break complex ideas into small, practical steps. That same approach shapes how I build: understand the problem, make a prototype, test it, and keep learning.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">A little more on LinkedIn<ArrowUpRight size={18}/></a></div></div>
        <div className="capability-list"><div><Cpu size={21}/><h3>AI & applications</h3><p>Python · Machine learning · LLM APIs<br/>Semantic embeddings · AI automation</p></div><div><Code2 size={21}/><h3>Systems & software</h3><p>Django · FastAPI · React · SQL<br/>PostgreSQL · Git · Docker</p></div><div><Sparkles size={21}/><h3>Creative & human</h3><p>Motion design · Visual storytelling<br/>STEM mentoring · Technical documentation</p></div></div>
      </section>

      <section id="experience" className="experience-section section-pad" aria-labelledby="experience-title"><div className="section-heading"><div><p className="section-label"><span className="tiny-square"/>Along the way</p><h2 id="experience-title">Learning by doing<span>.</span></h2></div><p>Building things. Sharing knowledge.<br/>Growing through both.</p></div><div className="experience-list">{experience.map((item, i) => <article key={item.role} className="experience-row"><div className="experience-date">{item.date}</div><div className="experience-main"><h3>{item.role}</h3><span>{item.company}</span></div><div className="experience-description"><span>{item.location}</span><p>{item.body}</p></div><span className="experience-symbol" aria-hidden="true">{i === 0 ? '↗' : i === 1 ? '⌘' : '✳'}</span></article>)}</div></section>

      <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title"><div className="contact-top"><p className="section-label"><span className="status-dot"/>Let’s make something good</p><span>Ideas. Opportunities. Conversations.</span></div><h2 id="contact-title">Have something<br/>in mind<span>?</span><a href={`mailto:${email}`} aria-label="Start a conversation by email"><MoveUpRight strokeWidth={1.2}/></a></h2><div className="contact-bottom"><div><p>From a useful idea to an interesting opportunity,<br/>I’d love to hear what you’re thinking.</p><div className="email-line"><a href={`mailto:${email}`}>{email}</a><button onClick={copyEmail} aria-label="Copy email address">{copyState === 'copied' ? <Check size={18}/> : <Copy size={18}/>}</button></div><span className="copy-feedback" role="status">{copyState === 'copied' ? 'Email copied.' : copyState === 'failed' ? 'Please select the email address to copy it.' : ''}</span></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn<ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={16}/></a><a href={profile.resume} download><Download size={17}/>Resume<ArrowDown size={16}/></a></div></div></section>
    </main>
    <footer><a className="wordmark" href="#home" aria-label="Return to top">pm<span>●</span></a><span>© {new Date().getFullYear()} Parth Mahajan</span><a href="#home">Back to the top<ArrowRight size={16} className="back-arrow"/></a></footer>
    <nav className="floating-nav" aria-label="Main navigation">{navItems.map(({ id, label, icon: Icon }) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined}><Icon size={15}/><span>{label}</span>{id === 'contact' && <ArrowUpRight size={13} className="nav-arrow"/>}</a>)}</nav>
    <ProjectDialog project={project} onClose={() => setProject(null)}/>
  </>;
}
