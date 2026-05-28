import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function OneColumnTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    experience:
      experience && experience.length > 0 && (
        <section key="experience" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Experience</h2>
          {experience.map((e) => (
            <div key={e.id} className="onecolumn-item">
              <div className="onecolumn-item-head">
                <strong>{e.position}</strong>
                <span className="onecolumn-item-date">{e.startDate} {e.endDate ? `- ${e.endDate}` : ''}</span>
              </div>
              <div className="onecolumn-item-company">{e.company}</div>
              <div className="onecolumn-item-desc">{renderDescription(e.description)}</div>
            </div>
          ))}
        </section>
      ),
    education:
      education && education.length > 0 && (
        <section key="education" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Education</h2>
          {education.map((ed) => (
            <div key={ed.id} className="onecolumn-edu">
              <strong>{ed.degree}</strong>
              <div className="onecolumn-edu-school">{ed.school} • {ed.startDate} {ed.endDate ? `- ${ed.endDate}` : ''}</div>
            </div>
          ))}
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Selected Projects</h2>
          <div className="onecolumn-projects">
            {projects.map((p) => (
              <div key={p.id} className="onecolumn-project">
                <strong>{p.title}</strong>
                <div className="onecolumn-project-desc">{renderDescription(p.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills && skills.length > 0 && (
        <section key="skills" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Skills</h2>
          <div className="onecolumn-skills">
            {skills.map((s) => <span key={s.id} className="onecolumn-skill">{s.name}</span>)}
          </div>
        </section>
      ),
  };

  return (
    <div className="resume-template onecolumn-template">
      <header className="onecolumn-header">
        <h1 className="onecolumn-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="onecolumn-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
        </div>
      </header>

      {personalInfo.summary && <section className="onecolumn-section"><p className="onecolumn-summary">{personalInfo.summary}</p></section>}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
