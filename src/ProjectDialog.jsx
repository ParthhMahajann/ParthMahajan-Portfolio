import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!project) return;
    const focused = document.activeElement;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      focused?.focus();
    };
  }, [project]);

  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <div className="dialog-inner">
      <button autoFocus className="close-dialog" aria-label="Close project" onClick={onClose}><X size={22} /></button>
      <p className="project-context">{project.status}</p>
      <h2 id="project-title">{project.name}</h2>
      <p className="dialog-summary">{project.summary}</p>
      {project.video && <video key={project.video} className={`project-video ${project.id}`} controls playsInline preload="metadata" poster={project.image} aria-label={`${project.name} concept film`}><source src={project.video} type="video/mp4" />Your browser does not support video. <a href={project.video}>Download the film.</a></video>}
      <div className="dialog-story"><h3>The idea</h3><p>{project.story}</p></div>
      <div className="dialog-story"><h3>Inside the project</h3><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>
      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <p className="project-note">{project.note}</p>
      {project.href && <a className="button primary" href={project.href} target="_blank" rel="noreferrer"><Github size={18}/>{project.linkLabel}<ArrowUpRight size={18}/></a>}
    </div>}
  </dialog>;
}
