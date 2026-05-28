import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ExecutiveTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    experience:
      experience.length > 0 && (
        <section key="experience" className="executive-section">
          <h2 className="executive-section-title">Professional Experience</h2>
          <div className="executive-timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="executive-timeline-item">
                <div className="executive-timeline-marker"></div>
                <div className="executive-timeline-content">
                  <div className="executive-card">
                    <div className="executive-card-header">
                      <div>
                        <h3 className="executive-card-title">{exp.position || 'Position'}</h3>
                        <p className="executive-card-company">{exp.company || 'Company'}</p>
                      </div>
                      <span className="executive-card-date">
                        {exp.startDate} — {exp.endDate ? exp.endDate : 'Present'}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="executive-card-desc">{renderDescription(exp.description)}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="executive-section">
          <h2 className="executive-section-title">Featured Projects</h2>
          <div className="executive-items">
            {projects.map((proj) => (
              <div key={proj.id} className="executive-card">
                <div className="executive-card-header">
                  <h3 className="executive-card-title">{proj.title || 'Project'}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="executive-link">
                      Visit →
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <p className="executive-card-meta">{proj.technologies}</p>
                )}
                {proj.description && (
                  <p className="executive-card-desc">{renderDescription(proj.description)}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="executive-section">
          <h2 className="executive-section-title">Expertise</h2>
          <div className="executive-skills-grid">
            {skills.map((skill) => (
              <span key={skill.id} className="executive-skill-badge">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="executive-section">
          <h2 className="executive-section-title">Education</h2>
          <div className="executive-items">
            {education.map((edu) => (
              <div key={edu.id} className="executive-card">
                <h3 className="executive-card-title">{edu.degree || 'Degree'}</h3>
                <p className="executive-card-company">{edu.school || 'School'}</p>
                <p className="executive-card-date">
                  {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                </p>
                {edu.description && (
                  <p className="executive-card-desc">{renderDescription(edu.description)}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
  };

  return (
    <div className="resume-template executive-template">
      <header className="executive-header">
        <div className="executive-header-accent"></div>
        {personalInfo.profileImage && (
          <div className="executive-profile-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
        <h1 className="executive-name">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="executive-tagline">{personalInfo.summary || 'Senior Professional'}</p>
        <div className="executive-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>•</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
        </div>
      </header>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
