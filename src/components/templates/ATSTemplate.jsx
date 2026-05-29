import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function ATSTemplate() {
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
                {exp.description && <div className="ats-text">{renderDescription(exp.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="ats-section">
          <h2 className="ats-heading">INTERNSHIPS</h2>
          <div className="ats-items">
            {internships.map((item) => (
              <div key={item.id} className="ats-item">
                <div className="ats-item-header">
                  <span className="ats-item-title">{item.role || 'Internship Role'}</span>
                  <span className="ats-item-date">{item.duration}</span>
                </div>
                <p className="ats-company">{item.company}</p>
                {item.description && <div className="ats-text">{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
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
                {edu.description && <div className="ats-text">{renderDescription(edu.description)}</div>}
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
                {proj.description && <div className="ats-text">{renderDescription(proj.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="ats-section">
          <h2 className="ats-heading">SKILLS</h2>
          <p className="ats-skills-text">{skills.map((skill) => skill.name).join(', ')}</p>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="ats-section">
          <h2 className="ats-heading">TECHNICAL SKILLS</h2>
          <div className="ats-text">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="ats-section">
          <h2 className="ats-heading">SOFT SKILLS</h2>
          <div className="ats-text">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="ats-section">
          <h2 className="ats-heading">SKILL PROGRESS</h2>
          <div className="ats-items">
            {skillProgress.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.name || 'Skill'}</span>
                <span className="ats-item-date">{item.level || 0}%</span>
              </div>
            ))}
          </div>
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="ats-section">
          <h2 className="ats-heading">LANGUAGES</h2>
          <div className="ats-items">
            {languages.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.language}</span>
                <span className="ats-item-date">{item.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="ats-section">
          <h2 className="ats-heading">CERTIFICATIONS</h2>
          <div className="ats-items">
            {certifications.map((cert) => (
              <div key={cert.id} className="ats-item">
                <span className="ats-item-title">{cert.certificateName || 'Certification'}</span>
                <span className="ats-item-date">{cert.completionDate}</span>
                {cert.organization && <p className="ats-company">{cert.organization}</p>}
                {cert.credentialUrl && <div className="ats-text">{cert.credentialUrl}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="ats-section">
          <h2 className="ats-heading">ACHIEVEMENTS</h2>
          <div className="ats-items">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="ats-item">
                <span className="ats-item-title">{achievement.title}</span>
                {achievement.date && <span className="ats-item-date">{achievement.date}</span>}
                {achievement.description && <div className="ats-text">{renderDescription(achievement.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="ats-section">
          <h2 className="ats-heading">AWARDS</h2>
          <div className="ats-items">
            {awards.map((award) => (
              <div key={award.id} className="ats-item">
                <span className="ats-item-title">{award.title}</span>
                {award.organization && <p className="ats-company">{award.organization}</p>}
                {award.date && <span className="ats-item-date">{award.date}</span>}
                {award.description && <div className="ats-text">{renderDescription(award.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="ats-section">
          <h2 className="ats-heading">HACKATHONS</h2>
          <div className="ats-items">
            {hackathons.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.title}</span>
                {item.organizer && <p className="ats-company">{item.organizer}</p>}
                {item.date && <span className="ats-item-date">{item.date}</span>}
                {item.result && <div className="ats-text">Result: {item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="ats-section">
          <h2 className="ats-heading">COMPETITIONS</h2>
          <div className="ats-items">
            {competitions.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.title}</span>
                {item.organizer && <p className="ats-company">{item.organizer}</p>}
                {item.date && <span className="ats-item-date">{item.date}</span>}
                {item.result && <div className="ats-text">Result: {item.result}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="ats-section">
          <h2 className="ats-heading">SCHOLARSHIPS</h2>
          <div className="ats-items">
            {scholarships.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.title}</span>
                {item.organization && <p className="ats-company">{item.organization}</p>}
                {item.completionDate && <span className="ats-item-date">{item.completionDate}</span>}
                {item.description && <div className="ats-text">{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="ats-section">
          <h2 className="ats-heading">PUBLICATIONS</h2>
          <div className="ats-items">
            {publications.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.researchTitle}</span>
                {item.journalName && <p className="ats-company">{item.journalName}</p>}
                {item.doiLink && <div className="ats-text">{item.doiLink}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="ats-section">
          <h2 className="ats-heading">INTERESTS</h2>
          <div className="ats-text">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="ats-section">
          <h2 className="ats-heading">REFERENCES</h2>
          <div className="ats-items">
            {references.map((item) => (
              <div key={item.id} className="ats-item">
                <span className="ats-item-title">{item.name}</span>
                {item.designation && <p className="ats-company">{item.designation}</p>}
                {item.contact && <div className="ats-text">{item.contact}</div>}
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
          {personalInfo.website && <span> | {personalInfo.website}</span>}
          {personalInfo.linkedin && <span> | {personalInfo.linkedin}</span>}
          {personalInfo.github && <span> | {personalInfo.github}</span>}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="ats-section">
          <h2 className="ats-heading">PROFESSIONAL SUMMARY</h2>
          <p className="ats-text">{personalInfo.summary}</p>
        </section>
      )}

      {personalInfo.introduction && (
        <section className="ats-section">
          <h2 className="ats-heading">SHORT INTRODUCTION</h2>
          <p className="ats-text">{personalInfo.introduction}</p>
        </section>
      )}

      {personalInfo.careerObjective && (
        <section className="ats-section">
          <h2 className="ats-heading">CAREER OBJECTIVE</h2>
          <p className="ats-text">{personalInfo.careerObjective}</p>
        </section>
      )}

      {personalInfo.experienceSummary && (
        <section className="ats-section">
          <h2 className="ats-heading">EXPERIENCE SUMMARY</h2>
          <p className="ats-text">{personalInfo.experienceSummary}</p>
        </section>
      )}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
