import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ATSTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    skills:
      skills.length > 0 && (
        <section key="skills" className="ats-section">
          <h2 className="ats-heading">SKILLS</h2>
          <p className="ats-skills-text">
            {skills.map((skill) => skill.name).join(', ')}
          </p>
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="ats-section">
          <h2 className="ats-heading">EDUCATION</h2>
          <div className="ats-items">
            {education.map((edu) => (
              <div key={edu.id} className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">{edu.degree || 'Degree'} - {edu.school || 'School'}</span>
                  <span className="ats-item-date">
                    {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                  </span>
                </div>
                {edu.description && <p className="ats-text">{renderDescription(edu.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
    experience:
      experience.length > 0 && (
        <section key="experience" className="ats-section">
          <h2 className="ats-heading">PROFESSIONAL EXPERIENCE</h2>
          <div className="ats-items">
            {experience.map((exp) => (
              <div key={exp.id} className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">{exp.position || 'Position'}</span>
                  <span className="ats-item-date">
                    {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                  </span>
                </div>
                <p className="ats-company">{exp.company || 'Company Name'}</p>
                {exp.description && <p className="ats-text">{renderDescription(exp.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="ats-section">
          <h2 className="ats-heading">PROJECTS</h2>
          <div className="ats-items">
            {projects.map((proj) => (
              <div key={proj.id} className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">{proj.title || 'Project'}</span>
                  {proj.link && <span className="ats-item-date">{proj.link}</span>}
                </div>
                {proj.technologies && <p className="ats-company">Technologies: {proj.technologies}</p>}
                {proj.description && <p className="ats-text">{renderDescription(proj.description)}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
  };

  return (
    <div className="resume-template ats-template">
      <header className="ats-header">
        <h1 className="ats-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="ats-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span> | {personalInfo.phone}</span>}
          {personalInfo.address && <span> | {personalInfo.address}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="ats-section">
          <h2 className="ats-heading">PROFESSIONAL SUMMARY</h2>
          <p className="ats-text">{personalInfo.summary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
