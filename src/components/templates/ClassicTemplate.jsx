import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ClassicTemplate() {
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
                {exp.description && <div className="classic-item-desc">{renderDescription(exp.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="classic-section">
          <h2 className="classic-section-title">Internships</h2>
          <div className="classic-items">
            {internships.map((item) => (
              <div key={item.id} className="classic-item">
                <div className="classic-item-header">
                  <div>
                    <h3 className="classic-item-title">{item.role || 'Internship Role'}</h3>
                    <div className="classic-item-subtitle">{item.company || 'Company'}</div>
                  </div>
                  <span className="classic-item-date">{item.duration}</span>
                </div>
                {item.description && <div className="classic-item-desc">{renderDescription(item.description)}</div>}
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
                {edu.description && <div className="classic-item-desc">{renderDescription(edu.description)}</div>}
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
                {proj.description && <div className="classic-item-desc">{renderDescription(proj.description)}</div>}
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
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="classic-section">
          <h2 className="classic-section-title">Technical Skills</h2>
          <p className="classic-item-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</p>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="classic-section">
          <h2 className="classic-section-title">Soft Skills</h2>
          <p className="classic-item-desc">{softSkills.map((skill) => skill.name).join(', ')}</p>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="classic-section">
          <h2 className="classic-section-title">Skill Progress</h2>
          <div className="classic-items">
            {skillProgress.map((item) => (
              <div key={item.id} className="classic-item">
                <div className="classic-item-header">
                  <span className="classic-item-title">{item.name || 'Skill'}</span>
                  <span className="classic-item-date">{item.level || 0}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="classic-section">
          <h2 className="classic-section-title">Languages</h2>
          <div className="classic-items">
            {languages.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.language}</span>
                <span className="classic-item-date">{item.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="classic-section">
          <h2 className="classic-section-title">Certifications</h2>
          <div className="classic-items">
            {certifications.map((cert) => (
              <div key={cert.id} className="classic-item">
                <div className="classic-item-header">
                  <span className="classic-item-title">{cert.certificateName || 'Certification'}</span>
                  <span className="classic-item-date">{cert.completionDate}</span>
                </div>
                {cert.organization && <div className="classic-item-subtitle">{cert.organization}</div>}
                {cert.credentialUrl && <div className="classic-item-desc">{cert.credentialUrl}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="classic-section">
          <h2 className="classic-section-title">Achievements</h2>
          <div className="classic-items">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="classic-item">
                <span className="classic-item-title">{achievement.title}</span>
                {achievement.date && <span className="classic-item-date">{achievement.date}</span>}
                {achievement.description && <div className="classic-item-desc">{renderDescription(achievement.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="classic-section">
          <h2 className="classic-section-title">Awards</h2>
          <div className="classic-items">
            {awards.map((award) => (
              <div key={award.id} className="classic-item">
                <span className="classic-item-title">{award.title}</span>
                {award.organization && <div className="classic-item-subtitle">{award.organization}</div>}
                {award.date && <span className="classic-item-date">{award.date}</span>}
                {award.description && <div className="classic-item-desc">{renderDescription(award.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="classic-section">
          <h2 className="classic-section-title">Hackathons</h2>
          <div className="classic-items">
            {hackathons.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.title}</span>
                {item.organizer && <div className="classic-item-subtitle">{item.organizer}</div>}
                {item.date && <span className="classic-item-date">{item.date}</span>}
                {item.result && <div className="classic-item-desc">Result: {item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="classic-section">
          <h2 className="classic-section-title">Competitions</h2>
          <div className="classic-items">
            {competitions.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.title}</span>
                {item.organizer && <div className="classic-item-subtitle">{item.organizer}</div>}
                {item.date && <span className="classic-item-date">{item.date}</span>}
                {item.result && <div className="classic-item-desc">Result: {item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="classic-section">
          <h2 className="classic-section-title">Scholarships</h2>
          <div className="classic-items">
            {scholarships.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.title}</span>
                {item.organization && <div className="classic-item-subtitle">{item.organization}</div>}
                {item.completionDate && <span className="classic-item-date">{item.completionDate}</span>}
                {item.description && <div className="classic-item-desc">{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="classic-section">
          <h2 className="classic-section-title">Publications</h2>
          <div className="classic-items">
            {publications.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.researchTitle}</span>
                {item.journalName && <div className="classic-item-subtitle">{item.journalName}</div>}
                {item.doiLink && <div className="classic-item-desc">{item.doiLink}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="classic-section">
          <h2 className="classic-section-title">Interests</h2>
          <div className="classic-item-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="classic-section">
          <h2 className="classic-section-title">References</h2>
          <div className="classic-items">
            {references.map((item) => (
              <div key={item.id} className="classic-item">
                <span className="classic-item-title">{item.name}</span>
                {item.designation && <div className="classic-item-subtitle">{item.designation}</div>}
                {item.contact && <div className="classic-item-desc">{item.contact}</div>}
              </div>
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
          {(personalInfo.email || personalInfo.phone || personalInfo.address) && personalInfo.website && <span className="separator">|</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {(personalInfo.email || personalInfo.phone || personalInfo.address || personalInfo.website) && personalInfo.linkedin && <span className="separator">|</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {(personalInfo.email || personalInfo.phone || personalInfo.address || personalInfo.website || personalInfo.linkedin) && personalInfo.github && <span className="separator">|</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="classic-section">
          <h2 className="classic-section-title">PROFESSIONAL SUMMARY</h2>
          <p className="classic-summary-text">{personalInfo.summary}</p>
        </section>
      )}
      {personalInfo.introduction && (
        <section className="classic-section">
          <h2 className="classic-section-title">SHORT INTRODUCTION</h2>
          <p className="classic-summary-text">{personalInfo.introduction}</p>
        </section>
      )}
      {personalInfo.careerObjective && (
        <section className="classic-section">
          <h2 className="classic-section-title">CAREER OBJECTIVE</h2>
          <p className="classic-summary-text">{personalInfo.careerObjective}</p>
        </section>
      )}
      {personalInfo.experienceSummary && (
        <section className="classic-section">
          <h2 className="classic-section-title">EXPERIENCE SUMMARY</h2>
          <p className="classic-summary-text">{personalInfo.experienceSummary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
