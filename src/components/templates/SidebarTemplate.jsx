import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function SidebarTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, projects } = resumeData;

  const { sidebarBgColor } = resumeData;

  return (
    <div className="resume-template sidebar-template">
      <div className="sidebar-container">
        {/* Left Sidebar */}
        <aside className="sidebar-column" style={{ backgroundColor: sidebarBgColor || '#f8f9fa' }}>
          {personalInfo.profileImage && (
            <div className="sidebar-profile-image">
              <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
            </div>
          )}

          <div className="sidebar-header">
            <h1 className="sidebar-name">{personalInfo.fullName || 'Your Name'}</h1>
          </div>

          <div className="sidebar-contact">
            {personalInfo.email && <p><strong>Email:</strong> {personalInfo.email}</p>}
            {personalInfo.phone && <p><strong>Phone:</strong> {personalInfo.phone}</p>}
            {personalInfo.address && <p><strong>Location:</strong> {personalInfo.address}</p>}
          </div>

          {skills.length > 0 && (
            <section className="sidebar-section">
              <h3 className="sidebar-title">Skills</h3>
              <div className="sidebar-skills">
                {skills.map((skill) => (
                  <span key={skill.id} className="sidebar-skill-chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section className="sidebar-section">
              <h3 className="sidebar-title">Education</h3>
              <div className="sidebar-items">
                {education.map((edu) => (
                  <div key={edu.id} className="sidebar-item">
                    <h4 className="sidebar-item-title">{edu.degree || 'Degree'}</h4>
                    <p className="sidebar-item-subtitle">{edu.school || 'School'}</p>
                    <p className="sidebar-item-date">
                      {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Right Content */}
        <main className="sidebar-content">
          {personalInfo.summary && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">About</h2>
              <p>{personalInfo.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">Experience</h2>
              <div className="sidebar-content-items">
                {experience.map((exp) => (
                  <div key={exp.id} className="sidebar-content-card">
                    <div className="sidebar-content-card-header">
                      <h3 className="sidebar-content-card-title">{exp.position || 'Position'}</h3>
                      <span className="sidebar-content-card-date">
                        {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                      </span>
                    </div>
                    <p className="sidebar-content-card-subtitle">{exp.company || 'Company'}</p>
                    {exp.description && <p className="sidebar-content-text">{renderDescription(exp.description)}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects && projects.length > 0 && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">Projects</h2>
              <div className="sidebar-content-items">
                {projects.map((proj) => (
                  <div key={proj.id} className="sidebar-content-card">
                    <div className="sidebar-content-card-header">
                      <h3 className="sidebar-content-card-title">{proj.title || 'Project'}</h3>
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noreferrer" className="sidebar-content-card-link">
                          Link
                        </a>
                      )}
                    </div>
                    {proj.technologies && <p className="sidebar-content-card-subtitle">{proj.technologies}</p>}
                    {proj.description && <p className="sidebar-content-text">{renderDescription(proj.description)}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
