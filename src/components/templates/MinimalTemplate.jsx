import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function MinimalTemplate() {
  const { resumeData } = useResume();
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    internships = [],
    technicalSkills = [],
    softSkills = [],
    skillProgress = [],
    languages = [],
    certifications = [],
    achievements = [],
    awards = [],
    hackathons = [],
    competitions = [],
    scholarships = [],
    publications = [],
    interests = [],
    references = [],
    sectionOrder = [],
  } = resumeData || {};

  const defaultOrder = [
    'experience',
    'internships',
    'education',
    'projects',
    'skills',
    'technicalSkills',
    'softSkills',
    'skillProgress',
    'languages',
    'certifications',
    'achievements',
    'awards',
    'hackathons',
    'competitions',
    'scholarships',
    'publications',
    'interests',
    'references',
  ];
  const orderedSections = Array.from(new Set([...(sectionOrder || []), ...defaultOrder]));

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
    internships:
      internships.length > 0 && (
        <section key="internships" className="minimal-section">
          <h2 className="minimal-section-title">Internships</h2>
          {internships.map((item) => (
            <div key={item.id} className="minimal-item">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{item.role || 'Internship Role'}</strong>
                <span style={{ opacity: 0.8 }}>{item.duration}</span>
              </div>
              <div style={{ fontStyle: 'italic', marginBottom: 6 }}>{item.company}</div>
              <div className="minimal-item-desc">{renderDescription(item.description)}</div>
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
              {ed.description && <div className="minimal-item-desc">{renderDescription(ed.description)}</div>}
            </div>
          ))}
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="minimal-section">
          <h2 className="minimal-section-title">Projects</h2>
          <div>
            {projects.map((p) => (
              <div key={p.id} className="minimal-item">
                <strong>{p.title}</strong>
                {p.technologies && <div style={{ opacity: 0.85 }}>{p.technologies}</div>}
                <div className="minimal-item-desc">{renderDescription(p.description)}</div>
              </div>
            ))}
          </div>
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
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="minimal-section">
          <h2 className="minimal-section-title">Technical Skills</h2>
          <div className="minimal-item-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="minimal-section">
          <h2 className="minimal-section-title">Soft Skills</h2>
          <div className="minimal-item-desc">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="minimal-section">
          <h2 className="minimal-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <div key={item.id} className="minimal-item">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{item.name || 'Skill'}</strong>
                <span>{item.level || 0}%</span>
              </div>
            </div>
          ))}
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="minimal-section">
          <h2 className="minimal-section-title">Languages</h2>
          <div className="minimal-item-desc">{languages.map((item) => `${item.language} (${item.proficiency})`).join(', ')}</div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="minimal-section">
          <h2 className="minimal-section-title">Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="minimal-item">
              <strong>{cert.certificateName}</strong>
              <div style={{ opacity: 0.85 }}>{cert.organization} {cert.completionDate ? `• ${cert.completionDate}` : ''}</div>
              {cert.credentialUrl && <div className="minimal-item-desc">{cert.credentialUrl}</div>}
            </div>
          ))}
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="minimal-section">
          <h2 className="minimal-section-title">Achievements</h2>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="minimal-item">
              <strong>{achievement.title}</strong>
              {achievement.date && <div style={{ opacity: 0.85 }}>{achievement.date}</div>}
              {achievement.description && <div className="minimal-item-desc">{renderDescription(achievement.description)}</div>}
            </div>
          ))}
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="minimal-section">
          <h2 className="minimal-section-title">Awards</h2>
          {awards.map((award) => (
            <div key={award.id} className="minimal-item">
              <strong>{award.title}</strong>
              {award.organization && <div style={{ opacity: 0.85 }}>{award.organization}</div>}
              {award.date && <div>{award.date}</div>}
              {award.description && <div className="minimal-item-desc">{renderDescription(award.description)}</div>}
            </div>
          ))}
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="minimal-section">
          <h2 className="minimal-section-title">Hackathons</h2>
          {hackathons.map((item) => (
            <div key={item.id} className="minimal-item">
              <strong>{item.title}</strong>
              {item.organizer && <div style={{ opacity: 0.85 }}>{item.organizer}</div>}
              {item.date && <div>{item.date}</div>}
              {item.result && <div>{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="minimal-section">
          <h2 className="minimal-section-title">Competitions</h2>
          {competitions.map((item) => (
            <div key={item.id} className="minimal-item">
              <strong>{item.title}</strong>
              {item.organizer && <div style={{ opacity: 0.85 }}>{item.organizer}</div>}
              {item.date && <div>{item.date}</div>}
              {item.result && <div>{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="minimal-section">
          <h2 className="minimal-section-title">Scholarships</h2>
          {scholarships.map((item) => (
            <div key={item.id} className="minimal-item">
              <strong>{item.title}</strong>
              {item.organization && <div style={{ opacity: 0.85 }}>{item.organization}</div>}
              {item.completionDate && <div>{item.completionDate}</div>}
              {item.description && <div className="minimal-item-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="minimal-section">
          <h2 className="minimal-section-title">Publications</h2>
          {publications.map((item) => (
            <div key={item.id} className="minimal-item">
              <strong>{item.researchTitle}</strong>
              {item.journalName && <div style={{ opacity: 0.85 }}>{item.journalName}</div>}
              {item.doiLink && <div>{item.doiLink}</div>}
            </div>
          ))}
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="minimal-section">
          <h2 className="minimal-section-title">Interests</h2>
          <div className="minimal-item-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="minimal-section">
          <h2 className="minimal-section-title">References</h2>
          {references.map((item) => (
            <div key={item.id} className="minimal-item">
              <strong>{item.name}</strong>
              {item.designation && <div style={{ opacity: 0.85 }}>{item.designation}</div>}
              {item.contact && <div>{item.contact}</div>}
            </div>
          ))}
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
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>
      </div>

      {personalInfo.summary && (
        <section className="minimal-section">
          <h2 className="minimal-section-title">PROFESSIONAL SUMMARY</h2>
          <p className="minimal-summary">{personalInfo.summary}</p>
        </section>
      )}
      {personalInfo.introduction && (
        <section className="minimal-section">
          <h2 className="minimal-section-title">SHORT INTRODUCTION</h2>
          <p className="minimal-summary">{personalInfo.introduction}</p>
        </section>
      )}
      {personalInfo.careerObjective && (
        <section className="minimal-section">
          <h2 className="minimal-section-title">CAREER OBJECTIVE</h2>
          <p className="minimal-summary">{personalInfo.careerObjective}</p>
        </section>
      )}
      {personalInfo.experienceSummary && (
        <section className="minimal-section">
          <h2 className="minimal-section-title">EXPERIENCE SUMMARY</h2>
          <p className="minimal-summary">{personalInfo.experienceSummary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
