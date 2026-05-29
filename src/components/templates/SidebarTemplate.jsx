import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function SidebarTemplate() {
  const { resumeData } = useResume();
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], sectionOrder = [], internships = [], technicalSkills = [], softSkills = [], skillProgress = [], languages = [], certifications = [], achievements = [], awards = [], hackathons = [], competitions = [], scholarships = [], publications = [], interests = [], references = [], sidebarBgColor = '' } = resumeData || {};

  const defaultOrder = [
    'experience',
    'internships',
    'projects',
    'certifications',
    'technicalSkills',
    'softSkills',
    'languages',
    'achievements',
    'awards',
    'hackathons',
    'competitions',
    'publications',
    'interests',
    'references',
  ];

  const orderedSections = Array.from(new Set([...(sectionOrder || []), ...defaultOrder]));

  const sectionBlocks = {
    experience:
      experience.length > 0 && (
        <section key="experience" className="sidebar-content-section">
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
                {exp.description && <div className="sidebar-content-text">{renderDescription(exp.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Internships</h2>
          <div className="sidebar-content-items">
            {internships.map((internship) => (
              <div key={internship.id} className="sidebar-content-card">
                <div className="sidebar-content-card-header">
                  <h3 className="sidebar-content-card-title">{internship.role || 'Internship Role'}</h3>
                  <span className="sidebar-content-card-date">{internship.duration}</span>
                </div>
                <p className="sidebar-content-card-subtitle">{internship.company}</p>
                {internship.description && <div className="sidebar-content-text">{renderDescription(internship.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="sidebar-content-section">
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
                {proj.description && <div className="sidebar-content-text">{renderDescription(proj.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications && certifications.length > 0 && (
        <section key="certifications" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Certifications</h2>
          <div className="sidebar-content-items">
            {certifications.map((cert) => (
              <div key={cert.id} className="sidebar-content-card">
                <div className="sidebar-content-card-header">
                  <h3 className="sidebar-content-card-title">{cert.certificateName || 'Certification'}</h3>
                  <span className="sidebar-content-card-date">{cert.completionDate}</span>
                </div>
                <p className="sidebar-content-card-subtitle">{cert.organization}</p>
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="sidebar-content-card-link">
                    Credential Link
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills && technicalSkills.length > 0 && (
        <section key="technicalSkills" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Technical Skills</h2>
          <div className="sidebar-skills">
            {technicalSkills.map((skill) => (
              <span key={skill.id} className="sidebar-skill-chip">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    softSkills:
      softSkills && softSkills.length > 0 && (
        <section key="softSkills" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Soft Skills</h2>
          <div className="sidebar-skills">
            {softSkills.map((skill) => (
              <span key={skill.id} className="sidebar-skill-chip">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      ),
    languages:
      languages && languages.length > 0 && (
        <section key="languages" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Languages</h2>
          <div className="sidebar-content-items">
            {languages.map((lang) => (
              <div key={lang.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{lang.language}</h3>
                <p className="sidebar-content-card-subtitle">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </section>
      ),
    achievements:
      achievements && achievements.length > 0 && (
        <section key="achievements" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Achievements</h2>
          <div className="sidebar-content-items">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{achievement.title}</h3>
                {achievement.date && <p className="sidebar-content-card-date">{achievement.date}</p>}
                {achievement.description && <div className="sidebar-content-text">{renderDescription(achievement.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    awards:
      awards && awards.length > 0 && (
        <section key="awards" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Awards</h2>
          <div className="sidebar-content-items">
            {awards.map((award) => (
              <div key={award.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{award.title}</h3>
                {award.organization && <p className="sidebar-content-card-subtitle">{award.organization}</p>}
                {award.date && <p className="sidebar-content-card-date">{award.date}</p>}
                {award.description && <div className="sidebar-content-text">{renderDescription(award.description)}</div>}
              </div>
            ))}
          </div>
        </section>
      ),
    hackathons:
      hackathons && hackathons.length > 0 && (
        <section key="hackathons" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Hackathons</h2>
          <div className="sidebar-content-items">
            {hackathons.map((hackathon) => (
              <div key={hackathon.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{hackathon.title}</h3>
                {hackathon.organizer && <p className="sidebar-content-card-subtitle">{hackathon.organizer}</p>}
                {hackathon.date && <p className="sidebar-content-card-date">{hackathon.date}</p>}
                {hackathon.result && <p className="sidebar-content-text"><strong>Result:</strong> {hackathon.result}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
    competitions:
      competitions && competitions.length > 0 && (
        <section key="competitions" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Competitions</h2>
          <div className="sidebar-content-items">
            {competitions.map((competition) => (
              <div key={competition.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{competition.title}</h3>
                {competition.organizer && <p className="sidebar-content-card-subtitle">{competition.organizer}</p>}
                {competition.date && <p className="sidebar-content-card-date">{competition.date}</p>}
                {competition.result && <p className="sidebar-content-text"><strong>Result:</strong> {competition.result}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
    publications:
      publications && publications.length > 0 && (
        <section key="publications" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Publications</h2>
          <div className="sidebar-content-items">
            {publications.map((publication) => (
              <div key={publication.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{publication.researchTitle}</h3>
                {publication.journalName && <p className="sidebar-content-card-subtitle">{publication.journalName}</p>}
                {publication.doiLink && (
                  <a href={publication.doiLink} target="_blank" rel="noreferrer" className="sidebar-content-card-link">
                    Publication Link
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      ),
    interests:
      interests && interests.length > 0 && (
        <section key="interests" className="sidebar-content-section">
          <h2 className="sidebar-content-title">Interests</h2>
          <div className="sidebar-skills">
            {interests.map((interest) => (
              <span key={interest.id} className="sidebar-skill-chip">
                {interest.interest}
              </span>
            ))}
          </div>
        </section>
      ),
    references:
      references && references.length > 0 && (
        <section key="references" className="sidebar-content-section">
          <h2 className="sidebar-content-title">References</h2>
          <div className="sidebar-content-items">
            {references.map((reference) => (
              <div key={reference.id} className="sidebar-content-card">
                <h3 className="sidebar-content-card-title">{reference.name}</h3>
                {reference.designation && <p className="sidebar-content-card-subtitle">{reference.designation}</p>}
                {reference.contact && <p className="sidebar-content-text">{reference.contact}</p>}
              </div>
            ))}
          </div>
        </section>
      ),
  };

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
              <h2 className="sidebar-content-title">Professional Summary</h2>
              <div className="sidebar-content-text">{renderDescription(personalInfo.summary)}</div>
            </section>
          )}
          {personalInfo.introduction && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">Short Introduction</h2>
              <div className="sidebar-content-text">{renderDescription(personalInfo.introduction)}</div>
            </section>
          )}
          {personalInfo.careerObjective && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">Career Objective</h2>
              <div className="sidebar-content-text">{renderDescription(personalInfo.careerObjective)}</div>
            </section>
          )}
          {personalInfo.experienceSummary && (
            <section className="sidebar-content-section">
              <h2 className="sidebar-content-title">Experience Summary</h2>
              <div className="sidebar-content-text">{renderDescription(personalInfo.experienceSummary)}</div>
            </section>
          )}

          {orderedSections.map((section) => sectionBlocks[section])}
        </main>
      </div>
    </div>
  );
}
