import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function DesignerTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, projects, skills, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    skills:
      skills && skills.length > 0 && (
        <section key="skills" className="designer-section">
          <h2 className="designer-section-title">Skills & Tools</h2>
          <div className="designer-skills-grid">
            {skills.map((s) => (
              <div key={s.id} className="designer-skill-chip">{s.name}</div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="designer-section">
          <h2 className="designer-section-title">Portfolio</h2>
          <div className="designer-projects-grid">
            {projects.map((p) => (
              <article key={p.id} className="designer-project-card">
                {p.image && <div className="designer-project-media"><img src={p.image} alt={p.title} /></div>}
                <div className="designer-project-body">
                  <h3 className="designer-project-title">{p.title}</h3>
                  <div className="designer-project-tech">{p.technologies}</div>
                  <p className="designer-project-desc">{renderDescription(p.description)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ),
    experience: null,
    education: null,
  };

  return (
    <div className="resume-template designer-template">
      <div className="designer-hero">
        <div className="designer-hero-left">
          <h1 className="designer-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.tagline && <div className="designer-tagline">{personalInfo.tagline}</div>}
          <div className="designer-contact">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
          </div>
        </div>
        {personalInfo.profileImage && (
          <div className="designer-hero-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
      </div>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
