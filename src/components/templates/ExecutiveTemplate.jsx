import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ExecutiveTemplate() {
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
                    {exp.description && <div className="executive-card-desc">{renderDescription(exp.description)}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="executive-section">
          <h2 className="executive-section-title">Internships</h2>
          <div className="executive-items">
            {internships.map((item) => (
              <div key={item.id} className="executive-card">
                <h3 className="executive-card-title">{item.role || 'Internship Role'}</h3>
                <p className="executive-card-company">{item.company}</p>
                <p className="executive-card-date">{item.duration}</p>
                {item.description && <div className="executive-card-desc">{renderDescription(item.description)}</div>}
              </div>
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
                {edu.description && <div className="executive-card-desc">{renderDescription(edu.description)}</div>}
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
                {proj.technologies && <p className="executive-card-meta">{proj.technologies}</p>}
                {proj.description && <div className="executive-card-desc">{renderDescription(proj.description)}</div>}
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
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="executive-section">
          <h2 className="executive-section-title">Technical Skills</h2>
          <div className="executive-card-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="executive-section">
          <h2 className="executive-section-title">Soft Skills</h2>
          <div className="executive-card-desc">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="executive-section">
          <h2 className="executive-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <div key={item.id} className="executive-card">
              <div className="executive-card-header">
                <span className="executive-card-title">{item.name || 'Skill'}</span>
                <span className="executive-card-date">{item.level || 0}%</span>
              </div>
            </div>
          ))}
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="executive-section">
          <h2 className="executive-section-title">Languages</h2>
          <div className="executive-card-desc">{languages.map((item) => `${item.language} (${item.proficiency})`).join(', ')}</div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="executive-section">
          <h2 className="executive-section-title">Certifications</h2>
          <div className="executive-items">
            {certifications.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.certificateName}</strong>
                <div>{item.organization}</div>
                <div>{item.completionDate}</div>
                {item.credentialUrl && <div>{item.credentialUrl}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="executive-section">
          <h2 className="executive-section-title">Achievements</h2>
          <div className="executive-items">
            {achievements.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.title}</strong>
                {item.date && <div>{item.date}</div>}
                {item.description && <div>{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="executive-section">
          <h2 className="executive-section-title">Awards</h2>
          <div className="executive-items">
            {awards.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.title}</strong>
                {item.organization && <div>{item.organization}</div>}
                {item.date && <div>{item.date}</div>}
                {item.description && <div>{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="executive-section">
          <h2 className="executive-section-title">Hackathons</h2>
          <div className="executive-items">
            {hackathons.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.title}</strong>
                {item.organizer && <div>{item.organizer}</div>}
                {item.date && <div>{item.date}</div>}
                {item.result && <div>{item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="executive-section">
          <h2 className="executive-section-title">Competitions</h2>
          <div className="executive-items">
            {competitions.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.title}</strong>
                {item.organizer && <div>{item.organizer}</div>}
                {item.date && <div>{item.date}</div>}
                {item.result && <div>{item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="executive-section">
          <h2 className="executive-section-title">Scholarships</h2>
          <div className="executive-items">
            {scholarships.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.title}</strong>
                {item.organization && <div>{item.organization}</div>}
                {item.completionDate && <div>{item.completionDate}</div>}
                {item.description && <div>{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="executive-section">
          <h2 className="executive-section-title">Publications</h2>
          <div className="executive-items">
            {publications.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.researchTitle}</strong>
                {item.journalName && <div>{item.journalName}</div>}
                {item.doiLink && <div>{item.doiLink}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="executive-section">
          <h2 className="executive-section-title">Interests</h2>
          <div className="executive-card-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="executive-section">
          <h2 className="executive-section-title">References</h2>
          <div className="executive-items">
            {references.map((item) => (
              <div key={item.id} className="executive-card">
                <strong>{item.name}</strong>
                {item.designation && <div>{item.designation}</div>}
                {item.contact && <div>{item.contact}</div>}
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
          {personalInfo.website && <span>•</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>•</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="executive-section">
          <h2 className="executive-section-title">PROFESSIONAL SUMMARY</h2>
          <div className="executive-card-desc">{personalInfo.summary}</div>
        </section>
      )}
      {personalInfo.introduction && (
        <section className="executive-section">
          <h2 className="executive-section-title">SHORT INTRODUCTION</h2>
          <div className="executive-card-desc">{personalInfo.introduction}</div>
        </section>
      )}
      {personalInfo.careerObjective && (
        <section className="executive-section">
          <h2 className="executive-section-title">CAREER OBJECTIVE</h2>
          <div className="executive-card-desc">{personalInfo.careerObjective}</div>
        </section>
      )}
      {personalInfo.experienceSummary && (
        <section className="executive-section">
          <h2 className="executive-section-title">EXPERIENCE SUMMARY</h2>
          <div className="executive-card-desc">{personalInfo.experienceSummary}</div>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
