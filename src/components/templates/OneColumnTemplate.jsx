import { useResume } from '../../context/ResumeContext';
import { renderDescription } from '../../utils/formatUtils';
import './Templates.css';

export default function OneColumnTemplate() {
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
      experience && experience.length > 0 && (
        <section key="experience" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Experience</h2>
          {experience.map((e) => (
            <div key={e.id} className="onecolumn-item">
              <div className="onecolumn-item-head">
                <strong>{e.position || 'Position'}</strong>
                <span className="onecolumn-item-date">{e.startDate} {e.endDate ? `- ${e.endDate}` : ''}</span>
              </div>
              <div className="onecolumn-item-company">{e.company}</div>
              <div className="onecolumn-item-desc">{renderDescription(e.description)}</div>
            </div>
          ))}
        </section>
      ),
    internships:
      internships && internships.length > 0 && (
        <section key="internships" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Internships</h2>
          {internships.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <div className="onecolumn-item-head">
                <strong>{item.role || 'Internship Role'}</strong>
                <span className="onecolumn-item-date">{item.duration}</span>
              </div>
              <div className="onecolumn-item-company">{item.company}</div>
              <div className="onecolumn-item-desc">{renderDescription(item.description)}</div>
            </div>
          ))}
        </section>
      ),
    education:
      education && education.length > 0 && (
        <section key="education" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Education</h2>
          {education.map((ed) => (
            <div key={ed.id} className="onecolumn-edu">
              <strong>{ed.degree}</strong>
              <div className="onecolumn-edu-school">{ed.school} • {ed.startDate} {ed.endDate ? `- ${ed.endDate}` : ''}</div>
              {ed.description && <div className="onecolumn-item-desc">{renderDescription(ed.description)}</div>}
            </div>
          ))}
        </section>
      ),
    projects:
      projects && projects.length > 0 && (
        <section key="projects" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Selected Projects</h2>
          <div className="onecolumn-projects">
            {projects.map((p) => (
              <div key={p.id} className="onecolumn-project">
                <strong>{p.title}</strong>
                {p.technologies && <div className="onecolumn-item-desc">{p.technologies}</div>}
                <div className="onecolumn-project-desc">{renderDescription(p.description)}</div>
              </div>
            ))}
          </div>
        </section>
      ),
    skills:
      skills && skills.length > 0 && (
        <section key="skills" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Skills</h2>
          <div className="onecolumn-skills">
            {skills.map((s) => <span key={s.id} className="onecolumn-skill">{s.name}</span>)}
          </div>
        </section>
      ),
    technicalSkills:
      technicalSkills && technicalSkills.length > 0 && (
        <section key="technicalSkills" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Technical Skills</h2>
          <div className="onecolumn-item-desc">{technicalSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    softSkills:
      softSkills && softSkills.length > 0 && (
        <section key="softSkills" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Soft Skills</h2>
          <div className="onecolumn-item-desc">{softSkills.map((skill) => skill.name).join(', ')}</div>
        </section>
      ),
    skillProgress:
      skillProgress && skillProgress.length > 0 && (
        <section key="skillProgress" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Skill Progress</h2>
          {skillProgress.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <div className="onecolumn-item-head">
                <strong>{item.name || 'Skill'}</strong>
                <span>{item.level || 0}%</span>
              </div>
            </div>
          ))}
        </section>
      ),
    languages:
      languages && languages.length > 0 && (
        <section key="languages" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Languages</h2>
          <div className="onecolumn-item-desc">{languages.map((item) => `${item.language} (${item.proficiency})`).join(', ')}</div>
        </section>
      ),
    certifications:
      certifications && certifications.length > 0 && (
        <section key="certifications" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Certifications</h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="onecolumn-item">
              <strong>{cert.certificateName}</strong>
              <div className="onecolumn-edu-school">{cert.organization} {cert.completionDate ? `• ${cert.completionDate}` : ''}</div>
              {cert.credentialUrl && <div className="onecolumn-item-desc">{cert.credentialUrl}</div>}
            </div>
          ))}
        </section>
      ),
    achievements:
      achievements && achievements.length > 0 && (
        <section key="achievements" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Achievements</h2>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="onecolumn-item">
              <strong>{achievement.title}</strong>
              {achievement.date && <div className="onecolumn-item-desc">{achievement.date}</div>}
              {achievement.description && <div className="onecolumn-item-desc">{renderDescription(achievement.description)}</div>}
            </div>
          ))}
        </section>
      ),
    awards:
      awards && awards.length > 0 && (
        <section key="awards" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Awards</h2>
          {awards.map((award) => (
            <div key={award.id} className="onecolumn-item">
              <strong>{award.title}</strong>
              {award.organization && <div className="onecolumn-item-desc">{award.organization}</div>}
              {award.date && <div className="onecolumn-item-desc">{award.date}</div>}
              {award.description && <div className="onecolumn-item-desc">{renderDescription(award.description)}</div>}
            </div>
          ))}
        </section>
      ),
    hackathons:
      hackathons && hackathons.length > 0 && (
        <section key="hackathons" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Hackathons</h2>
          {hackathons.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <strong>{item.title}</strong>
              {item.organizer && <div className="onecolumn-item-desc">{item.organizer}</div>}
              {item.date && <div className="onecolumn-item-desc">{item.date}</div>}
              {item.result && <div className="onecolumn-item-desc">{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    competitions:
      competitions && competitions.length > 0 && (
        <section key="competitions" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Competitions</h2>
          {competitions.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <strong>{item.title}</strong>
              {item.organizer && <div className="onecolumn-item-desc">{item.organizer}</div>}
              {item.date && <div className="onecolumn-item-desc">{item.date}</div>}
              {item.result && <div className="onecolumn-item-desc">{item.result}</div>}
            </div>
          ))}
        </section>
      ),
    scholarships:
      scholarships && scholarships.length > 0 && (
        <section key="scholarships" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Scholarships</h2>
          {scholarships.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <strong>{item.title}</strong>
              {item.organization && <div className="onecolumn-item-desc">{item.organization}</div>}
              {item.completionDate && <div className="onecolumn-item-desc">{item.completionDate}</div>}
              {item.description && <div className="onecolumn-item-desc">{renderDescription(item.description)}</div>}
            </div>
          ))}
        </section>
      ),
    publications:
      publications && publications.length > 0 && (
        <section key="publications" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Publications</h2>
          {publications.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <strong>{item.researchTitle}</strong>
              {item.journalName && <div className="onecolumn-item-desc">{item.journalName}</div>}
              {item.doiLink && <div className="onecolumn-item-desc">{item.doiLink}</div>}
            </div>
          ))}
        </section>
      ),
    interests:
      interests && interests.length > 0 && (
        <section key="interests" className="onecolumn-section">
          <h2 className="onecolumn-section-title">Interests</h2>
          <div className="onecolumn-item-desc">{interests.map((item) => item.interest).join(', ')}</div>
        </section>
      ),
    references:
      references && references.length > 0 && (
        <section key="references" className="onecolumn-section">
          <h2 className="onecolumn-section-title">References</h2>
          {references.map((item) => (
            <div key={item.id} className="onecolumn-item">
              <strong>{item.name}</strong>
              {item.designation && <div className="onecolumn-item-desc">{item.designation}</div>}
              {item.contact && <div className="onecolumn-item-desc">{item.contact}</div>}
            </div>
          ))}
        </section>
      ),
  };

  return (
    <div className="resume-template onecolumn-template">
      <header className="onecolumn-header">
        <h1 className="onecolumn-name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="onecolumn-contact">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.address && <span>{personalInfo.address}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>
      </header>

      {personalInfo.summary && <section className="onecolumn-section"><h2 className="onecolumn-section-title">PROFESSIONAL SUMMARY</h2><p className="onecolumn-summary">{personalInfo.summary}</p></section>}
      {personalInfo.introduction && <section className="onecolumn-section"><h2 className="onecolumn-section-title">SHORT INTRODUCTION</h2><p className="onecolumn-summary">{personalInfo.introduction}</p></section>}
      {personalInfo.careerObjective && <section className="onecolumn-section"><h2 className="onecolumn-section-title">CAREER OBJECTIVE</h2><p className="onecolumn-summary">{personalInfo.careerObjective}</p></section>}
      {personalInfo.experienceSummary && <section className="onecolumn-section"><h2 className="onecolumn-section-title">EXPERIENCE SUMMARY</h2><p className="onecolumn-summary">{personalInfo.experienceSummary}</p></section>}

      {orderedSections.map((section) => sectionBlocks[section])}
    </div>
  );
}
