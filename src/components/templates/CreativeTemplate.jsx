import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function CreativeTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects } = resumeData;

  return (
    <div className="resume-template creative-template">
      {/* Profile Section */}
      <section className="creative-profile-section">
        {personalInfo.profileImage && (
          <div className="creative-profile-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
        <div className="creative-profile-text">
          <h1 className="creative-name">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="creative-tagline">{personalInfo.summary || 'Creative Professional'}</p>
          <div className="creative-contact-badges">
            {personalInfo.email && (
              <span className="creative-badge">{personalInfo.email}</span>
            )}
            {personalInfo.phone && (
              <span className="creative-badge">{personalInfo.phone}</span>
            )}
            {personalInfo.address && (
              <span className="creative-badge">{personalInfo.address}</span>
            )}
          </div>
        </div>
      </section>

      {/* Skills with Progress */}
      {skills.length > 0 && (
        <section className="creative-section">
          <h2 className="creative-section-title">Core Skills</h2>
          <div className="creative-skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.id} className="creative-skill-item">
                <div className="creative-skill-name">{skill.name}</div>
                <div className="creative-skill-bar">
                  <div 
                    className="creative-skill-fill" 
                    style={{ 
                      width: `${70 + (index % 30)}%`,
                      backgroundColor: `hsl(${(index * 360 / skills.length) % 360}, 70%, 50%)`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Showcase */}
      {projects && projects.length > 0 && (
        <section className="creative-section">
          <h2 className="creative-section-title">Featured Projects</h2>
          <div className="creative-projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="creative-project-card">
                <div className="creative-project-header">
                  <h3 className="creative-project-title">{proj.title || 'Project'}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="creative-project-link">
                      Visit →
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div className="creative-project-tech">
                    {proj.technologies.split(',').map((tech, idx) => (
                      <span key={idx} className="creative-tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {proj.description && (
                  <p className="creative-project-desc">{renderDescription(proj.description)}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="creative-two-column">
        {/* Experience */}
        {experience.length > 0 && (
          <section className="creative-section">
            <h2 className="creative-section-title">Experience</h2>
            <div className="creative-timeline">
              {experience.map((exp) => (
                <div key={exp.id} className="creative-timeline-item">
                  <div className="creative-timeline-dot"></div>
                  <div className="creative-timeline-content">
                    <h3 className="creative-timeline-title">{exp.position || 'Position'}</h3>
                    <p className="creative-timeline-company">{exp.company || 'Company'}</p>
                    <p className="creative-timeline-date">
                      {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                    </p>
                    {exp.description && <p className="creative-timeline-desc">{renderDescription(exp.description)}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="creative-section">
            <h2 className="creative-section-title">Education</h2>
            <div className="creative-timeline">
              {education.map((edu) => (
                <div key={edu.id} className="creative-timeline-item">
                  <div className="creative-timeline-dot"></div>
                  <div className="creative-timeline-content">
                    <h3 className="creative-timeline-title">{edu.degree || 'Degree'}</h3>
                    <p className="creative-timeline-company">{edu.school || 'School'}</p>
                    <p className="creative-timeline-date">
                      {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                    </p>
                    {edu.description && <p className="creative-timeline-desc">{renderDescription(edu.description)}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
