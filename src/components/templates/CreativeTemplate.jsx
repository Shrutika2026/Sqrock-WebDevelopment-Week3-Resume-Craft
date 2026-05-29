import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function CreativeTemplate() {
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
    'skills',
    'technicalSkills',
    'softSkills',
    'skillProgress',
    'languages',
    'experience',
    'internships',
    'education',
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
    skills:
      skills.length > 0 && (
        <section key="skills" className="creative-section">
          <h2 className="creative-section-title">Core Skills</h2>
          <div className="creative-skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.id} className="creative-skill-item">
                <div className="creative-skill-name">{skill.name}</div>
                <div className="creative-skill-bar">
                  <div
                    className="creative-skill-fill"
                    style={{
                      width: `${70 + (index % 30)}%`,
                      backgroundColor: `hsl(${(index * 360) / skills.length}, 70%, 50%)`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="creative-section">
          <h2 className="creative-section-title">Technical Skills</h2>
          <div className="creative-project-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="creative-section">
          <h2 className="creative-section-title">Soft Skills</h2>
          <div className="creative-project-desc">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="creative-section">
          <h2 className="creative-section-title">Skill Progress</h2>
          <div className="creative-projects-grid">
            {skillProgress.map((item) => (
              <div key={item.id} className="creative-project-card">
                <h3 className="creative-project-title">{item.name || 'Skill'}</h3>
                <p className="creative-project-desc">{item.level || 0}%</p>
              </div>
            ))}
          </div>
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="creative-section">
          <h2 className="creative-section-title">Languages</h2>
          <div className="creative-project-desc">{languages.map((item) => `${item.language} (${item.proficiency})`).join(', ')}</div>
        </section>
      ),
    experience:
      experience.length > 0 && (
        <section key="experience" className="creative-section">
          <h2 className="creative-section-title">Experience</h2>
          <div className="creative-timeline">
            {experience.map((exp) => (
              <div key={exp.id} className="creative-timeline-item">
                <div className="creative-timeline-dot"></div>
                <div className="creative-timeline-content">
                  <h3 className="creative-timeline-title">{exp.position || 'Position'}</h3>
                  <p className="creative-timeline-company">{exp.company || 'Company'}</p>
                  <p className="creative-timeline-date">
                    {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ''}
                  </p>
                  {exp.description && <div className="creative-timeline-desc">{renderDescription(exp.description)}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="creative-section">
          <h2 className="creative-section-title">Internships</h2>
          <div className="creative-timeline">
            {internships.map((item) => (
              <div key={item.id} className="creative-timeline-item">
                <div className="creative-timeline-dot"></div>
                <div className="creative-timeline-content">
                  <h3 className="creative-timeline-title">{item.role || 'Internship Role'}</h3>
                  <p className="creative-timeline-company">{item.company}</p>
                  <p className="creative-timeline-date">{item.duration}</p>
                  {item.description && <div className="creative-timeline-desc">{renderDescription(item.description)}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="creative-section">
          <h2 className="creative-section-title">Education</h2>
          <div className="creative-timeline">
            {education.map((edu) => (
              <div key={edu.id} className="creative-timeline-item">
                <div className="creative-timeline-dot"></div>
                <div className="creative-timeline-content">
                  <h3 className="creative-timeline-title">{edu.degree || 'Degree'}</h3>
                  <p className="creative-timeline-company">{edu.school || 'School'}</p>
                  <p className="creative-timeline-date">
                    {edu.startDate} {edu.endDate ? `- ${edu.endDate}` : ''}
                  </p>
                  {edu.description && <div className="creative-timeline-desc">{renderDescription(edu.description)}</div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="creative-section">
          <h2 className="creative-section-title">Featured Projects</h2>
          <div className="creative-projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="creative-project-card">
                <div className="creative-project-header">
                  <h3 className="creative-project-title">{proj.title || 'Project'}</h3>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="creative-project-link">
                      Visit →
                    </a>
                  )}
                </div>
                {proj.technologies && (
                  <div className="creative-project-tech">
                    {proj.technologies.split(',').map((tech, idx) => (
                      <span key={idx} className="creative-tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {proj.description && <div className="creative-project-desc">{renderDescription(proj.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="creative-section">
          <h2 className="creative-section-title">Certifications</h2>
          <div className="creative-items">
            {certifications.map((cert) => (
              <div key={cert.id} className="creative-item">
                <strong>{cert.certificateName}</strong>
                <div>{cert.organization}</div>
                <div>{cert.completionDate}</div>
                {cert.credentialUrl && <div>{cert.credentialUrl}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="creative-section">
          <h2 className="creative-section-title">Achievements</h2>
          <div className="creative-items">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="creative-item">
                <strong>{achievement.title}</strong>
                {achievement.date && <div>{achievement.date}</div>}
                {achievement.description && <div>{renderDescription(achievement.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="creative-section">
          <h2 className="creative-section-title">Awards</h2>
          <div className="creative-items">
            {awards.map((award) => (
              <div key={award.id} className="creative-item">
                <strong>{award.title}</strong>
                {award.organization && <div>{award.organization}</div>}
                {award.date && <div>{award.date}</div>}
                {award.description && <div>{renderDescription(award.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="creative-section">
          <h2 className="creative-section-title">Hackathons</h2>
          <div className="creative-items">
            {hackathons.map((item) => (
              <div key={item.id} className="creative-item">
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
        <section key="competitions" className="creative-section">
          <h2 className="creative-section-title">Competitions</h2>
          <div className="creative-items">
            {competitions.map((item) => (
              <div key={item.id} className="creative-item">
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
        <section key="scholarships" className="creative-section">
          <h2 className="creative-section-title">Scholarships</h2>
          <div className="creative-items">
            {scholarships.map((item) => (
              <div key={item.id} className="creative-item">
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
        <section key="publications" className="creative-section">
          <h2 className="creative-section-title">Publications</h2>
          <div className="creative-items">
            {publications.map((item) => (
              <div key={item.id} className="creative-item">
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
        <section key="interests" className="creative-section">
          <h2 className="creative-section-title">Interests</h2>
          <div className="creative-project-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="creative-section">
          <h2 className="creative-section-title">References</h2>
          <div className="creative-items">
            {references.map((item) => (
              <div key={item.id} className="creative-item">
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
    <div className="resume-template creative-template">
      <section className="creative-profile-section">
        {personalInfo.profileImage && (
          <div className="creative-profile-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
        <div className="creative-profile-text">
          <h1 className="creative-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.summary && <p className="creative-tagline">{personalInfo.summary}</p>}
          {personalInfo.introduction && <p className="creative-tagline">{personalInfo.introduction}</p>}
          {personalInfo.careerObjective && <p className="creative-tagline">{personalInfo.careerObjective}</p>}
          {personalInfo.experienceSummary && <p className="creative-tagline">{personalInfo.experienceSummary}</p>}
          <div className="creative-contact-badges">
            {personalInfo.email && <span className="creative-badge">{personalInfo.email}</span>}
            {personalInfo.phone && <span className="creative-badge">{personalInfo.phone}</span>}
            {personalInfo.address && <span className="creative-badge">{personalInfo.address}</span>}
            {personalInfo.website && <span className="creative-badge">{personalInfo.website}</span>}
            {personalInfo.linkedin && <span className="creative-badge">{personalInfo.linkedin}</span>}
            {personalInfo.github && <span className="creative-badge">{personalInfo.github}</span>}
          </div>
        </div>
      </section>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
