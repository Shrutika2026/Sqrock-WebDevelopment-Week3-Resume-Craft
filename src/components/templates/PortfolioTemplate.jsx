import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function PortfolioTemplate() {
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

  const contactItems = [
    personalInfo.email && `Email: ${personalInfo.email}`,
    personalInfo.phone && `Phone: ${personalInfo.phone}`,
    personalInfo.website && `Website: ${personalInfo.website}`,
    personalInfo.linkedin && `LinkedIn: ${personalInfo.linkedin}`,
    personalInfo.github && `GitHub: ${personalInfo.github}`,
  ].filter(Boolean);

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
        <section key="experience" className="portfolio-section">
          <h2 className="portfolio-section-title">Experience</h2>
          {experience.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <div className="portfolio-project-header">
                <h3 className="portfolio-project-title">{item.position || 'Position'}</h3>
              </div>
              <div className="portfolio-project-tech">{item.company} • {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}</div>
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
              {item.responsibilities && <div className="portfolio-project-desc"><strong>Responsibilities:</strong> {renderDescription(item.responsibilities)}</div>}
              {item.achievements && <div className="portfolio-project-desc"><strong>Achievements:</strong> {renderDescription(item.achievements)}</div>}
            </article>
          ))}
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="portfolio-section">
          <h2 className="portfolio-section-title">Internships</h2>
          {internships.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <div className="portfolio-project-header">
                <h3 className="portfolio-project-title">{item.role || 'Internship Role'}</h3>
              </div>
              <div className="portfolio-project-tech">{item.company} • {item.duration}</div>
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
            </article>
          ))}
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="portfolio-section">
          <h2 className="portfolio-section-title">Education</h2>
          {education.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <div className="portfolio-project-header">
                <h3 className="portfolio-project-title">{item.degree || 'Degree'}</h3>
              </div>
              <div className="portfolio-project-tech">{item.school}{item.specialization ? ` • ${item.specialization}` : ''}</div>
              <div className="portfolio-project-desc">{item.startDate} {item.endDate ? `- ${item.endDate}` : ''} {item.passingYear ? `• ${item.passingYear}` : ''}</div>
              {item.cgpa && <div className="portfolio-project-desc">CGPA / Percentage: {item.cgpa}</div>}
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
            </article>
          ))}
        </section>
      ),
    projects:
      projects.length > 0 && (
        <section key="projects" className="portfolio-section">
          <h2 className="portfolio-section-title">Selected Projects</h2>
          <div className="portfolio-projects-grid">
            {projects.map((p) => (
              <article key={p.id} className="portfolio-project-card">
                <div className="portfolio-project-header">
                  <h3 className="portfolio-project-title">{p.title || 'Project'}</h3>
                  {p.link && (
                    <a className="portfolio-project-link" href={p.link} target="_blank" rel="noreferrer">
                      Visit
                    </a>
                  )}
                </div>
                <div className="portfolio-project-tech">{p.technologies}</div>
                <div className="portfolio-project-desc">{renderDescription(p.description)}</div>
              </article>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="portfolio-section">
          <h2 className="portfolio-section-title">Skills</h2>
          <div className="portfolio-skills-grid">
            {skills.map((s) => (
              <span key={s.id} className="portfolio-skill-tag">{s.name}</span>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="portfolio-section">
          <h2 className="portfolio-section-title">Technical Skills</h2>
          <div className="portfolio-skills-grid">
            {technicalSkills.map((skill) => (
              <span key={skill.id} className="portfolio-skill-tag">{skill.name}</span>
            ))}
          </div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="portfolio-section">
          <h2 className="portfolio-section-title">Soft Skills</h2>
          <div className="portfolio-skills-grid">
            {softSkills.map((skill) => (
              <span key={skill.id} className="portfolio-skill-tag">{skill.name}</span>
            ))}
          </div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="portfolio-section">
          <h2 className="portfolio-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.name}</h3>
              <div className="portfolio-project-desc">{item.level || 0}%</div>
            </article>
          ))}
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="portfolio-section">
          <h2 className="portfolio-section-title">Languages</h2>
          <div className="portfolio-projects-grid">
            {languages.map((item) => (
              <article key={item.id} className="portfolio-project-card">
                <h3 className="portfolio-project-title">{item.language}</h3>
                <div className="portfolio-project-desc">{item.proficiency}</div>
              </article>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="portfolio-section">
          <h2 className="portfolio-section-title">Certifications</h2>
          {certifications.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.certificateName}</h3>
              <div className="portfolio-project-tech">{item.organization} • {item.completionDate}</div>
              {item.credentialUrl && <div className="portfolio-project-desc">{item.credentialUrl}</div>}
            </article>
          ))}
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="portfolio-section">
          <h2 className="portfolio-section-title">Achievements</h2>
          {achievements.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.title}</h3>
              {item.date && <div className="portfolio-project-tech">{item.date}</div>}
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
            </article>
          ))}
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="portfolio-section">
          <h2 className="portfolio-section-title">Awards</h2>
          {awards.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.title}</h3>
              {item.organization && <div className="portfolio-project-tech">{item.organization}</div>}
              {item.date && <div className="portfolio-project-desc">{item.date}</div>}
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
            </article>
          ))}
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="portfolio-section">
          <h2 className="portfolio-section-title">Hackathons</h2>
          {hackathons.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.title}</h3>
              {item.organizer && <div className="portfolio-project-tech">{item.organizer}</div>}
              {item.date && <div className="portfolio-project-desc">{item.date}</div>}
              {item.result && <div className="portfolio-project-desc">Result: {item.result}</div>}
            </article>
          ))}
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="portfolio-section">
          <h2 className="portfolio-section-title">Competitions</h2>
          {competitions.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.title}</h3>
              {item.organizer && <div className="portfolio-project-tech">{item.organizer}</div>}
              {item.date && <div className="portfolio-project-desc">{item.date}</div>}
              {item.result && <div className="portfolio-project-desc">Result: {item.result}</div>}
            </article>
          ))}
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="portfolio-section">
          <h2 className="portfolio-section-title">Scholarships</h2>
          {scholarships.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.title}</h3>
              {item.organization && <div className="portfolio-project-tech">{item.organization}</div>}
              {item.completionDate && <div className="portfolio-project-desc">{item.completionDate}</div>}
              {item.description && <div className="portfolio-project-desc">{renderDescription(item.description)}</div>}
            </article>
          ))}
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="portfolio-section">
          <h2 className="portfolio-section-title">Publications</h2>
          {publications.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.researchTitle}</h3>
              {item.journalName && <div className="portfolio-project-tech">{item.journalName}</div>}
              {item.doiLink && <div className="portfolio-project-desc">{item.doiLink}</div>}
            </article>
          ))}
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="portfolio-section">
          <h2 className="portfolio-section-title">Interests</h2>
          <div className="portfolio-skills-grid">
            {interests.map((item) => (
              <span key={item.id} className="portfolio-skill-tag">{item.interest}</span>
            ))}
          </div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="portfolio-section">
          <h2 className="portfolio-section-title">References</h2>
          {references.map((item) => (
            <article key={item.id} className="portfolio-project-card">
              <h3 className="portfolio-project-title">{item.name}</h3>
              {item.designation && <div className="portfolio-project-tech">{item.designation}</div>}
              {item.contact && <div className="portfolio-project-desc">{item.contact}</div>}
            </article>
          ))}
        </section>
      ),
  };

  return (
    <div className="resume-template portfolio-template">
      <header className="portfolio-header">
        <div className="portfolio-intro">
          <h1 className="portfolio-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.summary && (
            <div className="portfolio-summary-block">
              <h2 className="portfolio-summary-heading">Professional Summary</h2>
              <p className="portfolio-summary">{personalInfo.summary}</p>
            </div>
          )}
          {personalInfo.introduction && (
            <div className="portfolio-summary-block">
              <h2 className="portfolio-summary-heading">Short Introduction</h2>
              <p className="portfolio-summary">{personalInfo.introduction}</p>
            </div>
          )}
          {personalInfo.careerObjective && (
            <div className="portfolio-summary-block">
              <h2 className="portfolio-summary-heading">Career Objective</h2>
              <p className="portfolio-summary">{personalInfo.careerObjective}</p>
            </div>
          )}
          {personalInfo.experienceSummary && (
            <div className="portfolio-summary-block">
              <h2 className="portfolio-summary-heading">Experience Summary</h2>
              <p className="portfolio-summary">{personalInfo.experienceSummary}</p>
            </div>
          )}
          <div className="designer-contact">
            {contactItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        {personalInfo.profileImage && (
          <div className="portfolio-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
      </header>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
