import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ClassicTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    experience:
      experience.length > 0 && (
        <section key="experience" className="classic-section">
          <h2 className="classic-section-title">Professional Experience</h2>
          <div className="classic-items">
            {experience.map((exp) => (
              <div key={exp.id} className="classic-item">
                <div className="classic-item-header">
                  <div>
                    <h3 className="classic-item-title">{exp.company || 'Company Name'}</h3>
                    <div className="classic-item-subtitle">{exp.position || 'Position'}</div>
                  </div>
                  <span className="classic-item-date">
                    {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                  </span>
                </div>
                <div className="classic-item-desc">{renderDescription(exp.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="classic-section">
          <h2 className="classic-section-title">Projects</h2>
          <div className="classic-items">
            {projects.map((proj) => (
              <div key={proj.id} className="classic-item">
                <div className="classic-item-header">
                  <div>
                    <h3 className="classic-item-title">{proj.title || 'Project Name'}</h3>
                    <div className="classic-item-subtitle">{proj.technologies || 'Technologies'}</div>
                  </div>
                  <span className="classic-item-date">
                    {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>{proj.link}</a>}
                  </span>
                </div>
                <div className="classic-item-desc">{renderDescription(proj.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="classic-section">
          <h2 className="classic-section-title">Education</h2>
          <div className="classic-items">
            {education.map((edu) => (
              <div key={edu.id} className="classic-item">
                <div className="classic-item-header">
                  <div>
                    <h3 className="classic-item-title">{edu.school || 'School Name'}</h3>
                    <div className="classic-item-subtitle">{edu.degree || 'Degree'}</div>
                  </div>
                  <span className="classic-item-date">
                    {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                  </span>
                </div>
                <div className="classic-item-desc">{renderDescription(edu.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="classic-section">
          <h2 className="classic-section-title">Skills & Abilities</h2>
          <div className="classic-skills-list">
            {skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}
                {index < skills.length - 1 && ', '}
              </span>
            ))}
          </div>
        </section>
      ),
  };

  return (
    <div className="resume-template classic-template">
      <header className="classic-header">
        <h1 className="classic-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="classic-contact-info">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.email && personalInfo.phone && <span className="separator">|</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {(personalInfo.email || personalInfo.phone) && personalInfo.address && <span className="separator">|</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="classic-section">
          <h2 className="classic-section-title">Summary</h2>
          <p className="classic-summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
