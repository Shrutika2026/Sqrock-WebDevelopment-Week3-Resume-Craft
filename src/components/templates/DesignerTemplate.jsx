import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function DesignerTemplate() {
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
        <section key="experience" className="designer-section">
          <h2 className="designer-section-title">Experience</h2>
          {experience.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.position || 'Position'}</h3>
              <div className="designer-project-tech">{item.company} • {item.startDate} {item.endDate ? `- ${item.endDate}` : ''}</div>
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
              {item.responsibilities && <div className="designer-project-desc"><strong>Responsibilities:</strong> {renderDescription(item.responsibilities)}</div>}
              {item.achievements && <div className="designer-project-desc"><strong>Achievements:</strong> {renderDescription(item.achievements)}</div>}
            </div>
          ))}
        </section>
      ),
    internships:
      internships.length > 0 && (
        <section key="internships" className="designer-section">
          <h2 className="designer-section-title">Internships</h2>
          {internships.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.role || 'Internship Role'}</h3>
              <div className="designer-project-tech">{item.company} • {item.duration}</div>
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    education:
      education.length > 0 && (
        <section key="education" className="designer-section">
          <h2 className="designer-section-title">Education</h2>
          {education.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.degree || 'Degree'}</h3>
              <div className="designer-project-tech">{item.school}{item.specialization ? ` • ${item.specialization}` : ''}</div>
              <div className="designer-project-desc">{item.startDate} {item.endDate ? `- ${item.endDate}` : ''} {item.passingYear ? `• ${item.passingYear}` : ''}</div>
              {item.cgpa && <div className="designer-project-desc">CGPA / Percentage: {item.cgpa}</div>}
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    projects:
      projects.length > 0 && (
        <section key="projects" className="designer-section">
          <h2 className="designer-section-title">Portfolio</h2>
          <div className="designer-projects-grid">
            {projects.map((p) => (
              <article key={p.id} className="designer-project-card">
                {p.image && <div className="designer-project-media"><img src={p.image} alt={p.title} /></div>}
                <div className="designer-project-body">
                  <h3 className="designer-project-title">{p.title}</h3>
                  <div className="designer-project-tech">{p.technologies}</div>
                  <div className="designer-project-desc">{renderDescription(p.description)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ),
    skills:
      skills.length > 0 && (
        <section key="skills" className="designer-section">
          <h2 className="designer-section-title">Skills</h2>
          <div className="designer-skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="designer-skill-chip">{skill.name}</div>
            ))}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills.length > 0 && (
        <section key="technicalSkills" className="designer-section">
          <h2 className="designer-section-title">Technical Skills</h2>
          <div className="designer-skills-grid">
            {technicalSkills.map((skill) => (
              <div key={skill.id} className="designer-skill-chip">{skill.name}</div>
            ))}
          </div>
        </section>
      ),
    softSkills:
      softSkills.length > 0 && (
        <section key="softSkills" className="designer-section">
          <h2 className="designer-section-title">Soft Skills</h2>
          <div className="designer-skills-grid">
            {softSkills.map((skill) => (
              <div key={skill.id} className="designer-skill-chip">{skill.name}</div>
            ))}
          </div>
        </section>
      ),
    skillProgress:
      skillProgress.length > 0 && (
        <section key="skillProgress" className="designer-section">
          <h2 className="designer-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.name}</h3>
              <div className="designer-project-desc">Level: {item.level || 0}%</div>
            </div>
          ))}
        </section>
      ),
    languages:
      languages.length > 0 && (
        <section key="languages" className="designer-section">
          <h2 className="designer-section-title">Languages</h2>
          <div className="designer-projects-grid">
            {languages.map((item) => (
              <div key={item.id} className="designer-project-card">
                <h3 className="designer-project-title">{item.language}</h3>
                <div className="designer-project-desc">{item.proficiency}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    certifications:
      certifications.length > 0 && (
        <section key="certifications" className="designer-section">
          <h2 className="designer-section-title">Certifications</h2>
          {certifications.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.certificateName}</h3>
              <div className="designer-project-tech">{item.organization} • {item.completionDate}</div>
              {item.credentialUrl && <div className="designer-project-desc">Credential: {item.credentialUrl}</div>}
            </div>
          ))}
        </section>
      ),
    achievements:
      achievements.length > 0 && (
        <section key="achievements" className="designer-section">
          <h2 className="designer-section-title">Achievements</h2>
          {achievements.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.title}</h3>
              {item.date && <div className="designer-project-tech">{item.date}</div>}
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    awards:
      awards.length > 0 && (
        <section key="awards" className="designer-section">
          <h2 className="designer-section-title">Awards</h2>
          {awards.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.title}</h3>
              <div className="designer-project-tech">{item.organization}</div>
              {item.date && <div className="designer-project-desc">{item.date}</div>}
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    hackathons:
      hackathons.length > 0 && (
        <section key="hackathons" className="designer-section">
          <h2 className="designer-section-title">Hackathons</h2>
          {hackathons.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.title}</h3>
              <div className="designer-project-tech">{item.organizer}</div>
              {item.date && <div className="designer-project-desc">{item.date}</div>}
              {item.result && <div className="designer-project-desc">Result: {item.result}</div>}
            </div>
          ))}
        </section>
      ),
    competitions:
      competitions.length > 0 && (
        <section key="competitions" className="designer-section">
          <h2 className="designer-section-title">Competitions</h2>
          {competitions.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.title}</h3>
              <div className="designer-project-tech">{item.organizer}</div>
              {item.date && <div className="designer-project-desc">{item.date}</div>}
              {item.result && <div className="designer-project-desc">Result: {item.result}</div>}
            </div>
          ))}
        </section>
      ),
    scholarships:
      scholarships.length > 0 && (
        <section key="scholarships" className="designer-section">
          <h2 className="designer-section-title">Scholarships</h2>
          {scholarships.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.title}</h3>
              <div className="designer-project-tech">{item.organization}</div>
              {item.completionDate && <div className="designer-project-desc">{item.completionDate}</div>}
              {item.description && <div className="designer-project-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    publications:
      publications.length > 0 && (
        <section key="publications" className="designer-section">
          <h2 className="designer-section-title">Publications</h2>
          {publications.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.researchTitle}</h3>
              {item.journalName && <div className="designer-project-tech">{item.journalName}</div>}
              {item.doiLink && <div className="designer-project-desc">{item.doiLink}</div>}
            </div>
          ))}
        </section>
      ),
    interests:
      interests.length > 0 && (
        <section key="interests" className="designer-section">
          <h2 className="designer-section-title">Interests</h2>
          <div className="designer-skills-grid">
            {interests.map((item) => (
              <div key={item.id} className="designer-skill-chip">{item.interest}</div>
            ))}
          </div>
        </section>
      ),
    references:
      references.length > 0 && (
        <section key="references" className="designer-section">
          <h2 className="designer-section-title">References</h2>
          {references.map((item) => (
            <div key={item.id} className="designer-project-card">
              <h3 className="designer-project-title">{item.name}</h3>
              {item.designation && <div className="designer-project-tech">{item.designation}</div>}
              {item.contact && <div className="designer-project-desc">{item.contact}</div>}
            </div>
          ))}
        </section>
      ),
  };

  return (
    <div className="resume-template designer-template">
      <div className="designer-hero">
        <div className="designer-hero-left">
          <h1 className="designer-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.summary && (
            <div className="designer-summary-block">
              <h2 className="designer-summary-heading">Professional Summary</h2>
              <div className="designer-tagline">{personalInfo.summary}</div>
            </div>
          )}
          {personalInfo.introduction && (
            <div className="designer-summary-block">
              <h2 className="designer-summary-heading">Short Introduction</h2>
              <div className="designer-tagline">{personalInfo.introduction}</div>
            </div>
          )}
          {personalInfo.careerObjective && (
            <div className="designer-summary-block">
              <h2 className="designer-summary-heading">Career Objective</h2>
              <div className="designer-tagline">{personalInfo.careerObjective}</div>
            </div>
          )}
          {personalInfo.experienceSummary && (
            <div className="designer-summary-block">
              <h2 className="designer-summary-heading">Experience Summary</h2>
              <div className="designer-tagline">{personalInfo.experienceSummary}</div>
            </div>
          )}
          <div className="designer-contact">
            {contactItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        {personalInfo.profileImage && (
          <div className="designer-hero-image">
            <img src={personalInfo.profileImage} alt={personalInfo.fullName} />
          </div>
        )}
      </div>

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
