import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function FresherTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects } = resumeData;

  return (
    <div className="resume-template fresher-template">
      <header className="fresher-header">
        <h1 className="fresher-name">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="fresher-objective">{personalInfo.summary || 'Career Objective'}</p>
        <div className="fresher-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span> | {personalInfo.phone}</span>}
          {personalInfo.address && <span> | {personalInfo.address}</span>}
        </div>
      </header>

      {/* Education First (highlighted for freshers) */}
      {education.length > 0 && (
        <section className="fresher-section">
          <h2 className="fresher-section-title">Education</h2>
          <div className="fresher-items">
            {education.map((edu) => (
              <div key={edu.id} className="fresher-item">
                <div className="fresher-item-header">
                  <h3 className="fresher-item-title">{edu.degree || 'Degree'}</h3>
                  <span className="fresher-item-date">
                    {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                  </span>
                </div>
                <p className="fresher-item-subtitle">{edu.school || 'School Name'}</p>
                {edu.description && <p className="fresher-item-desc">{renderDescription(edu.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills as Tags/Chips */}
      {skills.length > 0 && (
        <section className="fresher-section">
          <h2 className="fresher-section-title">Technical Skills</h2>
          <div className="fresher-skills-chips">
            {skills.map((skill) => (
              <span key={skill.id} className="fresher-skill-chip">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects Highlighted */}
      {projects && projects.length > 0 && (
        <section className="fresher-section">
          <h2 className="fresher-section-title">Projects</h2>
          <div className="fresher-items">
            {projects.map((proj) => (
              <div key={proj.id} className="fresher-item fresher-project-item">
                <div className="fresher-item-header">
                  <h3 className="fresher-item-title">{proj.title || 'Project'}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="fresher-project-link">
                      View
                    </a>
                  )}
                </div>
                {proj.technologies && <p className="fresher-item-subtitle">Tech: {proj.technologies}</p>}
                {proj.description && <p className="fresher-item-desc">{renderDescription(proj.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience (if any internships) */}
      {experience.length > 0 && (
        <section className="fresher-section">
          <h2 className="fresher-section-title">Experience & Internships</h2>
          <div className="fresher-items">
            {experience.map((exp) => (
              <div key={exp.id} className="fresher-item">
                <div className="fresher-item-header">
                  <h3 className="fresher-item-title">{exp.position || 'Position'}</h3>
                  <span className="fresher-item-date">
                    {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                  </span>
                </div>
                <p className="fresher-item-subtitle">{exp.company || 'Company'}</p>
                {exp.description && <p className="fresher-item-desc">{renderDescription(exp.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
