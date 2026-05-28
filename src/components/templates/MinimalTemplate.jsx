import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function MinimalTemplate() {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, sectionOrder } = resumeData;
  const orderedSections = sectionOrder || ['experience', 'education', 'projects', 'skills'];

  const sectionBlocks = {
    experience:
      experience.length > 0 && (
        <section key="experience" className="minimal-section">
          <h2 className="minimal-section-title">Experience</h2>
          {experience.map((e) => (
            <div key={e.id} className="minimal-item">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{e.position || 'Position'}</strong>
                <span style={{ opacity: 0.8 }}>{e.startDate} {e.endDate ? `- ${e.endDate}` : ''}</span>
              </div>
              <div style={{ fontStyle: 'italic', marginBottom: 6 }}>{e.company}</div>
              <div className="minimal-item-desc">{renderDescription(e.description)}</div>
            </div>
          ))}
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="minimal-section">
          <h2 className="minimal-section-title">Education</h2>
          {education.map((ed) => (
            <div key={ed.id} className="minimal-edu">
              <strong>{ed.degree}</strong>
              <div style={{ opacity: 0.85 }}>{ed.school} • {ed.startDate} {ed.endDate ? `- ${ed.endDate}` : ''}</div>
            </div>
          ))}
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="minimal-section">
          <h2 className="minimal-section-title">Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map((s) => <span key={s.id} className="minimal-skill">{s.name}</span>)}
          </div>
        </section>
      ),
  };

  return (
    <div className="resume-template minimal-template">
      <div className="minimal-header">
        <h1 className="minimal-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="minimal-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>

      {personalInfo.summary && (
        <section className="minimal-section">
          <p className="minimal-summary">{personalInfo.summary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
