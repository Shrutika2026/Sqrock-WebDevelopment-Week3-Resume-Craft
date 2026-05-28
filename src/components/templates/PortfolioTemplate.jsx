import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function PortfolioTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, projects, skills, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="portfolio-section">
          <h2 className="portfolio-section-title">Selected Projects</h2>
          <div className="portfolio-projects-grid">
            {projects.map((p) => (
              <article key={p.id} className="portfolio-project-card">
                <div className="portfolio-project-header">
                  <h3 className="portfolio-project-title">{p.title || 'Project'}</h3>
                  {p.link && (
                    <a className="portfolio-project-link" href={p.link} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  )}
                </div>
                <div className="portfolio-project-tech">{p.technologies}</div>
                <p className="portfolio-project-desc">{renderDescription(p.description)}</p>
              </article>
            ))}
          </div>
        </section>
      ),
    skills:
      skills && skills.length > 0 && (
        <section key="skills" className="portfolio-section">
          <h2 className="portfolio-section-title">Skills</h2>
          <div className="portfolio-skills-grid">
            {skills.map((s) => (
              <span key={s.id} className="portfolio-skill-tag">{s.name}</span>
            ))}
          </div>
        </section>
      ),
    experience: null,
    education: null,
  };

  return (
    <div className="resume-template portfolio-template">
      <header className="portfolio-header">
        <div className="portfolio-intro">
          <h1 className="portfolio-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.summary && <p className="portfolio-summary">{personalInfo.summary}</p>}
        </div>
        {personalInfo.profileImage && (
          <div className="portfolio-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
      </header>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
