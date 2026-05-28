import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ModernTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects } = resumeData;

  return (
    <div className="resume-template modern-template">
      <header className="modern-header">
        {personalInfo.profileImage && (
          <div className="modern-profile-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
        <div className="modern-header-text">
          <h1 className="modern-name">{personalInfo.fullName || 'Your Name'}</h1>
          <div className="modern-contact-info">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.address && <span>{personalInfo.address}</span>}
          </div>
        </div>
      </header>

      {personalInfo.summary && (
        <section className="modern-section">
          <h2 className="modern-section-title">Professional Summary</h2>
          <p className="modern-summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {experience.length > 0 && (
        <section className="modern-section">
          <h2 className="modern-section-title">Experience</h2>
          <div className="modern-items">
            {experience.map((exp) => (
              <div key={exp.id} className="modern-item">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{exp.position || 'Position'}</h3>
                  <span className="modern-item-date">
                    {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                  </span>
                </div>
                <div className="modern-item-subtitle">{exp.company || 'Company Name'}</div>
                <div className="modern-item-desc">{renderDescription(exp.description)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {projects && projects.length > 0 && (
        <section className="modern-section">
          <h2 className="modern-section-title">Projects</h2>
          <div className="modern-items">
            {projects.map((proj) => (
              <div key={proj.id} className="modern-item">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{proj.title || 'Project Name'}</h3>
                  <span className="modern-item-date">
                    {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" style={{color: 'inherit'}}>{proj.link}</a>}
                  </span>
                </div>
                <div className="modern-item-subtitle">{proj.technologies || 'Technologies'}</div>
                <div className="modern-item-desc">{renderDescription(proj.description)}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="modern-two-column">
        {education.length > 0 && (
          <section className="modern-section">
            <h2 className="modern-section-title">Education</h2>
            <div className="modern-items">
              {education.map((edu) => (
                <div key={edu.id} className="modern-item">
                  <div className="modern-item-header">
                    <h3 className="modern-item-title">{edu.degree || 'Degree'}</h3>
                  </div>
                  <div className="modern-item-subtitle">{edu.school || 'School Name'}</div>
                  <div className="modern-item-date" style={{ marginBottom: '0.25rem' }}>
                    {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                  </div>
                  <div className="modern-item-desc">{renderDescription(edu.description)}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section className="modern-section">
            <h2 className="modern-section-title">Skills</h2>
            <div className="modern-skills-grid">
              {skills.map((skill) => (
                <span key={skill.id} className="modern-skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
