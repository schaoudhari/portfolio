import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, Database,
  Download, ExternalLink, Github, Layers3, Linkedin, Mail, MapPin,
  Menu, Moon, Server, ShieldCheck, Sparkles, Sun, X
} from "lucide-react";
import { portfolio } from "./data/portfolio";
import "./styles.css";

const SectionTitle = ({ eyebrow, title, text }) => (
  <div className="section-heading reveal">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

const SkillGroup = ({ name, items, index }) => (
  <article className="skill-card reveal" style={{ "--delay": `${index * 60}ms` }}>
    <div className="skill-card-top">
      <span className="skill-index">0{index + 1}</span>
      <h3>{name}</h3>
    </div>
    <div className="skill-list">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  </article>
);

const ProjectCard = ({ project, index, onOpen }) => (
  <article className="project-card reveal" style={{ "--delay": `${index * 80}ms` }}>
    <div className="project-top">
      <span className="project-number">0{index + 1}</span>
      <ArrowUpRight size={19} />
    </div>
    <span className="project-label">{project.label}</span>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tag-row">
      {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
    </div>
    <button className="text-button" onClick={() => onOpen(project)}>
      View case study <ArrowUpRight size={16} />
    </button>
  </article>
);

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.title = `${portfolio.shortName} | ${portfolio.title}`;
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">SC</span>
          <span>{portfolio.shortName.split(" ").slice(0, 2).join(" ")}</span>
        </a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "experience", "engineering", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{id[0].toUpperCase() + id.slice(1)}</a>
          ))}
          <a className="nav-resume" href="/resume.pdf" download>
            <Download size={15} /> Resume
          </a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="pulse" /> Full Stack Software Developer</div>
              <h1>Building <span>production-grade</span> software from frontend to backend.</h1>
              <p className="hero-lead">{portfolio.summary}</p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
                <a className="button secondary" href="/resume.pdf" download>Download resume <Download size={16} /></a>
              </div>
              <div className="social-row">
                <a href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
                <a href={`mailto:${portfolio.email}`}><Mail size={17} /> Email</a>
              </div>
            </div>

            <div className="hero-terminal">
              <div className="terminal-window">
                <div className="terminal-bar"><span></span><span></span><span></span><small>developer.js</small></div>
                <div className="terminal-code">
                  <div><i>const</i> developer = &#123;</div>
                  <div className="indent"><b>role:</b> <em>"Full Stack Developer"</em>,</div>
                  <div className="indent"><b>experience:</b> <em>"2+ years"</em>,</div>
                  <div className="indent"><b>frontend:</b> [<em>"React"</em>, <em>"Redux"</em>],</div>
                  <div className="indent"><b>backend:</b> [<em>"Node"</em>, <em>"NestJS"</em>],</div>
                  <div className="indent"><b>database:</b> [<em>"MongoDB"</em>, <em>"MySQL"</em>],</div>
                  <div className="indent"><b>focus:</b> <em>"Scalable systems"</em></div>
                  <div>&#125;;</div>
                  <div className="terminal-cursor">_</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> {portfolio.location}</span>
            <span><BriefcaseBusiness size={15} /> Financial modeling &amp; FinTech systems</span>
            <span><Code2 size={15} /> Full SDLC</span>
          </div>
        </section>

        <section id="about" className="section narrow">
          <SectionTitle eyebrow="01 — About" title="Engineering with a full-stack perspective." text={portfolio.extendedSummary} />
          <div className="about-grid">
            <div className="about-statement reveal">
              <Sparkles size={24} />
              <h3>From requirements to production.</h3>
              <p>I build financial models, backend APIs, dashboards, and accounting integrations, from the data model to the screen finance teams use every day.</p>
            </div>
            <div className="fact-grid">
              <div className="fact reveal"><strong>2+</strong><span>Years experience</span></div>
              <div className="fact reveal"><strong>MERN</strong><span>Full-stack foundation</span></div>
              <div className="fact reveal"><strong>Finance</strong><span>Financial models &amp; reporting</span></div>
              <div className="fact reveal"><strong>SDLC</strong><span>End-to-end delivery</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="narrow">
            <SectionTitle eyebrow="02 — Technical Skills" title="Technical skills." text="Frontend, backend, data, security, and financial modeling." />
            <div className="skills-grid">
              {Object.entries(portfolio.skills).map(([name, items], i) => <SkillGroup key={name} name={name} items={items} index={i} />)}
            </div>
          </div>
        </section>

        <section id="projects" className="section narrow">
          <SectionTitle eyebrow="03 — Featured Projects" title="Selected work." />
          <div className="projects-grid">
            {portfolio.projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} onOpen={setActiveProject} />)}
          </div>
        </section>

        <section id="experience" className="section alt">
          <div className="narrow">
            <SectionTitle eyebrow="04 — Experience" title="Professional experience." />
            <div className="timeline">
              {portfolio.experience.map((job, i) => (
                <article className="timeline-item reveal" key={job.company}>
                  <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                  <div className="timeline-content">
                    <div className="timeline-head">
                      <div><h3>{job.role}</h3><p>{job.company}</p></div>
                      <span>{job.period}</span>
                    </div>
                    <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="engineering" className="section narrow">
          <SectionTitle eyebrow="05 — Engineering" title="Engineering focus." />
          <div className="engineering-grid">
            {[
              { icon: <Layers3 />, title: "Financial Modeling", text: "Budget-vs-actual models, cash-flow projections from payment schedules, loan amortization, variance and gap analysis, and financial-year reporting." },
              { icon: <Database />, title: "Data Engineering", text: "MongoDB data modeling, complex aggregation pipelines, query optimization, grouped reporting, and MySQL schema/query optimization." },
              { icon: <ShieldCheck />, title: "Security", text: "JWT authentication, OAuth, data encryption, secure storage, and granular role-based access control." },
              { icon: <Server />, title: "APIs & Integrations", text: "RESTful API design, modular enterprise apps, Tally accounting integration, AWS S3, ExcelJS reporting, Git, CI/CD, Agile/Scrum, and JIRA." }
            ].map((item, i) => (
              <article className="engineering-card reveal" key={item.title} style={{ "--delay": `${i * 80}ms` }}>
                <div className="engineering-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section education alt">
          <div className="narrow education-row">
            <div><span className="eyebrow">06 — Education</span><h2>{portfolio.education.degree}</h2><p>{portfolio.education.college} · {portfolio.education.year}</p></div>
            <div className="education-score">{portfolio.education.score}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card narrow reveal">
            <div>
              <span className="eyebrow">07 — Contact</span>
              <h2>Let's build something useful.</h2>
              <p>Open to Full Stack Developer and FinTech software roles. Reach out by email or LinkedIn.</p>
            </div>
            <div className="contact-links">
              <a className="button primary" href={`mailto:${portfolio.email}`}><Mail size={17} /> Email me</a>
              <a className="button secondary" href={portfolio.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a className="button secondary" href={portfolio.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><span className="brand-mark">SC</span> {portfolio.shortName}</div>
        <span>Full Stack Software Developer · {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close"><X /></button>
            <span className="project-label">{activeProject.label}</span>
            <h2>{activeProject.title}</h2>
            <p className="modal-description">{activeProject.description}</p>
            <div className="tag-row">{activeProject.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <h3>What was built</h3>
            <ul className="modal-list">{activeProject.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            <h3>Architecture</h3>
            <div className="architecture">{activeProject.architecture.map((a, i) => <React.Fragment key={a}><span>{a}</span>{i < activeProject.architecture.length - 1 && <b>→</b>}</React.Fragment>)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);