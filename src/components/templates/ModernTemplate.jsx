import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ModernTemplate() {
  const { resumeData } = useResume();
  const {
    personalInfo = {},
    experience = [],
    internships = [],
    education = [],
    projects = [],
    skills = [],
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
    'skills',
    'technicalSkills',
    'softSkills',
    'languages',
    'skillProgress',
    'education',
    'experience',
    'internships',
    'projects',
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
        <section key="experience" className="modern-section">
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
                {exp.responsibilities && (
                  <div className="modern-item-desc">
                    <strong>Responsibilities:</strong> {renderDescription(exp.responsibilities)}
                  </div>
                )}
                {exp.achievements && (
                  <div className="modern-item-desc">
                    <strong>Achievements:</strong> {renderDescription(exp.achievements)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="modern-section">
          <h2 className="modern-section-title">Internships</h2>
          <div className="modern-items">
            {internships.map((item) => (
              <div key={item.id} className="modern-item">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{item.role || 'Internship Role'}</h3>
                  <span className="modern-item-date">{item.duration}</span>
                </div>
                <div className="modern-item-subtitle">{item.company}</div>
                <div className="modern-item-desc">{renderDescription(item.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="modern-section">
          <h2 className="modern-section-title">Education</h2>
          <div className="modern-items">
            {education.map((edu) => (
              <div key={edu.id} className="modern-item">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{edu.degree || 'Degree'}</h3>
                </div>
                <div className="modern-item-subtitle">
                  {edu.school || 'School Name'}
                  {edu.specialization && ` • ${edu.specialization}`}
                </div>
                <div className="modern-item-date" style={{ marginBottom: '0.25rem' }}>
                  {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''} {edu.passingYear ? `• ${edu.passingYear}` : ''}
                </div>
                {edu.cgpa && (
                  <div className="modern-item-desc">
                    <strong>CGPA / Percentage:</strong> {edu.cgpa}
                  </div>
                )}
                <div className="modern-item-desc">{renderDescription(edu.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="modern-section">
          <h2 className="modern-section-title">Projects</h2>
          <div className="modern-items">
            {projects.map((proj) => (
              <div key={proj.id} className="modern-item">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{proj.title || 'Project Name'}</h3>
                  <span className="modern-item-date">
                    {proj.link && (
                      <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                        GitHub
                      </a>
                    )}
                    {proj.liveDemo && (
                      <span style={{ marginLeft: proj.link ? '0.75rem' : 0 }}>
                        <a href={proj.liveDemo} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                          Live Demo
                        </a>
                      </span>
                    )}
                  </span>
                </div>
                <div className="modern-item-subtitle">{proj.technologies || 'Technologies'}</div>
                <div className="modern-item-desc">{renderDescription(proj.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="modern-section">
          <h2 className="modern-section-title">Skills</h2>
          <div className="modern-skills-grid">
            {skills.map((skill) => (
              <span key={skill.id} className="modern-skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="modern-section">
          <h2 className="modern-section-title">Technical Skills</h2>
          <div className="modern-skills-grid">
            {technicalSkills.map((skill) => (
              <span key={skill.id} className="modern-skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="modern-section">
          <h2 className="modern-section-title">Soft Skills</h2>
          <div className="modern-skills-grid">
            {softSkills.map((skill) => (
              <span key={skill.id} className="modern-skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="modern-section">
          <h2 className="modern-section-title">Skill Progress</h2>
          <div className="modern-skill-progress-list">
            {skillProgress.map((item) => (
              <div key={item.id} className="modern-skill-progress-row">
                <span>{item.name || 'Skill'}</span>
                <span>{item.level || 0}%</span>
                <div className="modern-progress-bar">
                  <div className="modern-progress-fill" style={{ width: `${item.level || 0}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="modern-section">
          <h2 className="modern-section-title">Languages</h2>
          <div className="modern-items">
            {languages.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.language}</strong> – {item.proficiency}
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="modern-section">
          <h2 className="modern-section-title">Certifications</h2>
          <div className="modern-items">
            {certifications.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <div className="modern-item-header">
                  <h3 className="modern-item-title">{item.certificateName}</h3>
                  <span className="modern-item-date">{item.completionDate}</span>
                </div>
                <div className="modern-item-subtitle">{item.organization}</div>
                {item.credentialUrl && (
                  <div>
                    <a href={item.credentialUrl} target="_blank" rel="noreferrer">
                      Credential Link
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="modern-section">
          <h2 className="modern-section-title">Achievements</h2>
          <div className="modern-items">
            {achievements.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.title}</strong>
                <div className="modern-item-date">{item.date}</div>
                <div className="modern-item-desc">{renderDescription(item.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="modern-section">
          <h2 className="modern-section-title">Awards</h2>
          <div className="modern-items">
            {awards.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.title}</strong>
                <div className="modern-item-subtitle">{item.organization}</div>
                <div className="modern-item-date">{item.date}</div>
                <div className="modern-item-desc">{renderDescription(item.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="modern-section">
          <h2 className="modern-section-title">Hackathons</h2>
          <div className="modern-items">
            {hackathons.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.title}</strong>
                <div>{item.organizer}</div>
                <div className="modern-item-date">{item.date}</div>
                <div>{item.result}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="modern-section">
          <h2 className="modern-section-title">Competitions</h2>
          <div className="modern-items">
            {competitions.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.title}</strong>
                <div>{item.organizer}</div>
                <div className="modern-item-date">{item.date}</div>
                <div>{item.result}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="modern-section">
          <h2 className="modern-section-title">Scholarships</h2>
          <div className="modern-items">
            {scholarships.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.title}</strong>
                <div>{item.organization}</div>
                <div className="modern-item-date">{item.completionDate}</div>
                <div className="modern-item-desc">{renderDescription(item.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="modern-section">
          <h2 className="modern-section-title">Publications</h2>
          <div className="modern-items">
            {publications.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.researchTitle}</strong>
                <div>{item.journalName}</div>
                {item.doiLink && (
                  <div>
                    <a href={item.doiLink} target="_blank" rel="noreferrer">
                      Publication Link
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="modern-section">
          <h2 className="modern-section-title">Interests</h2>
          <div className="modern-skills-grid">
            {interests.map((item) => (
              <span key={item.id} className="modern-skill-tag">
                {item.interest}
              </span>
            ))}
          </div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="modern-section">
          <h2 className="modern-section-title">References</h2>
          <div className="modern-items">
            {references.map((item) => (
              <div key={item.id} className="modern-item modern-item-small">
                <strong>{item.name}</strong>
                <div>{item.designation}</div>
                <div>{item.contact}</div>
              </div>
            ))}
          </div>
        </section>
      ),
  };

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
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && <span>{personalInfo.github}</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
          </div>
        </div>
      </header>

      {personalInfo.introduction && (
        <section className="modern-section">
          <h2 className="modern-section-title">Introduction</h2>
          <p className="modern-summary-text">{personalInfo.introduction}</p>
        </section>
      )}

      {personalInfo.careerObjective && (
        <section className="modern-section">
          <h2 className="modern-section-title">Career Objective</h2>
          <p className="modern-summary-text">{personalInfo.careerObjective}</p>
        </section>
      )}

      {personalInfo.experienceSummary && (
        <section className="modern-section">
          <h2 className="modern-section-title">Experience Summary</h2>
          <p className="modern-summary-text">{personalInfo.experienceSummary}</p>
        </section>
      )}

      {personalInfo.summary && (
        <section className="modern-section">
          <h2 className="modern-section-title">Professional Summary</h2>
          <p className="modern-summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
