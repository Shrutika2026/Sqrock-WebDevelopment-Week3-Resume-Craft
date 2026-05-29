import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function FresherTemplate() {
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
    'education',
    'experience',
    'internships',
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
    education:
      education.length > 0 && (
        <section key="education" className="fresher-section">
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
                {edu.description && <div className="fresher-item-desc">{renderDescription(edu.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    experience:
      experience.length > 0 && (
        <section key="experience" className="fresher-section">
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
                {exp.description && <div className="fresher-item-desc">{renderDescription(exp.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="fresher-section">
          <h2 className="fresher-section-title">Internships</h2>
          <div className="fresher-items">
            {internships.map((item) => (
              <div key={item.id} className="fresher-item">
                <div className="fresher-item-header">
                  <h3 className="fresher-item-title">{item.role || 'Internship Role'}</h3>
                  <span className="fresher-item-date">{item.duration}</span>
                </div>
                <p className="fresher-item-subtitle">{item.company || 'Company'}</p>
                {item.description && <div className="fresher-item-desc">{renderDescription(item.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="fresher-section">
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
                {proj.description && <div className="fresher-item-desc">{renderDescription(proj.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="fresher-section">
          <h2 className="fresher-section-title">Technical Skills</h2>
          <div className="fresher-skills-chips">
            {skills.map((skill) => (
              <span key={skill.id} className="fresher-skill-chip">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="fresher-section">
          <h2 className="fresher-section-title">Technical Skills</h2>
          <div className="fresher-item-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="fresher-section">
          <h2 className="fresher-section-title">Soft Skills</h2>
          <div className="fresher-item-desc">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="fresher-section">
          <h2 className="fresher-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.name || 'Skill'}</strong>
              <div>{item.level || 0}%</div>
            </div>
          ))}
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="fresher-section">
          <h2 className="fresher-section-title">Languages</h2>
          <div className="fresher-item-desc">{languages.map((item) => `${item.language} (${item.proficiency})`).join(', ')}</div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="fresher-section">
          <h2 className="fresher-section-title">Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="fresher-item">
              <strong>{cert.certificateName}</strong>
              <div>{cert.organization} {cert.completionDate ? `• ${cert.completionDate}` : ''}</div>
              {cert.credentialUrl && <div className="fresher-item-desc">{cert.credentialUrl}</div>}
            </div>
          ))}
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="fresher-section">
          <h2 className="fresher-section-title">Achievements</h2>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="fresher-item">
              <strong>{achievement.title}</strong>
              {achievement.date && <div>{achievement.date}</div>}
              {achievement.description && <div className="fresher-item-desc">{renderDescription(achievement.description)}</div>}
            </div>
          ))}
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="fresher-section">
          <h2 className="fresher-section-title">Awards</h2>
          {awards.map((award) => (
            <div key={award.id} className="fresher-item">
              <strong>{award.title}</strong>
              {award.organization && <div>{award.organization}</div>}
              {award.date && <div>{award.date}</div>}
              {award.description && <div className="fresher-item-desc">{renderDescription(award.description)}</div>}
            </div>
          ))}
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="fresher-section">
          <h2 className="fresher-section-title">Hackathons</h2>
          {hackathons.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.title}</strong>
              {item.organizer && <div>{item.organizer}</div>}
              {item.date && <div>{item.date}</div>}
              {item.result && <div>{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="fresher-section">
          <h2 className="fresher-section-title">Competitions</h2>
          {competitions.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.title}</strong>
              {item.organizer && <div>{item.organizer}</div>}
              {item.date && <div>{item.date}</div>}
              {item.result && <div>{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="fresher-section">
          <h2 className="fresher-section-title">Scholarships</h2>
          {scholarships.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.title}</strong>
              {item.organization && <div>{item.organization}</div>}
              {item.completionDate && <div>{item.completionDate}</div>}
              {item.description && <div className="fresher-item-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="fresher-section">
          <h2 className="fresher-section-title">Publications</h2>
          {publications.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.researchTitle}</strong>
              {item.journalName && <div>{item.journalName}</div>}
              {item.doiLink && <div>{item.doiLink}</div>}
            </div>
          ))}
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="fresher-section">
          <h2 className="fresher-section-title">Interests</h2>
          <div className="fresher-item-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="fresher-section">
          <h2 className="fresher-section-title">References</h2>
          {references.map((item) => (
            <div key={item.id} className="fresher-item">
              <strong>{item.name}</strong>
              {item.designation && <div>{item.designation}</div>}
              {item.contact && <div>{item.contact}</div>}
            </div>
          ))}
        </section>
      ),
  };

  return (
    <div className="resume-template fresher-template">
      <header className="fresher-header">
        <h1 className="fresher-name">{personalInfo.fullName || 'Your Name'}</h1>
        {personalInfo.summary && (
          <section className="fresher-section">
            <h2 className="fresher-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="fresher-objective">{personalInfo.summary}</p>
          </section>
        )}
        {personalInfo.introduction && (
          <section className="fresher-section">
            <h2 className="fresher-section-title">SHORT INTRODUCTION</h2>
            <p className="fresher-objective">{personalInfo.introduction}</p>
          </section>
        )}
        {personalInfo.careerObjective && (
          <section className="fresher-section">
            <h2 className="fresher-section-title">CAREER OBJECTIVE</h2>
            <p className="fresher-objective">{personalInfo.careerObjective}</p>
          </section>
        )}
        {personalInfo.experienceSummary && (
          <section className="fresher-section">
            <h2 className="fresher-section-title">EXPERIENCE SUMMARY</h2>
            <p className="fresher-objective">{personalInfo.experienceSummary}</p>
          </section>
        )}
        <div className="fresher-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span> | {personalInfo.phone}</span>}
          {personalInfo.address && <span> | {personalInfo.address}</span>}
          {personalInfo.website && <span> | {personalInfo.website}</span>}
          {personalInfo.linkedin && <span> | {personalInfo.linkedin}</span>}
          {personalInfo.github && <span> | {personalInfo.github}</span>}
        </div>
      </header>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
