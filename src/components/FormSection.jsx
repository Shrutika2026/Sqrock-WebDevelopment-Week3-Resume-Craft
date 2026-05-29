import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { Check, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import SectionOrderForm from './SectionOrderForm';
import LanguagesForm from './LanguagesForm';
import CertificationsForm from './CertificationsForm';
import AchievementsForm from './AchievementsForm';
import InternshipsForm from './InternshipsForm';
import PublicationsForm from './PublicationsForm';
import InterestsForm from './InterestsForm';
import ReferencesForm from './ReferencesForm';
import './FormSection.css';

export default function FormSection() {
  const { resumeData } = useResume();
  const [notification, setNotification] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [wasPreviouslySaved, setWasPreviouslySaved] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('resumeLastSaved');
      return !!saved;
    }
    return false;
  });

  // Define pages with their forms
  const pages = [
    {
      title: 'Personal & Career',
      forms: [
        { component: PersonalInfoForm, key: 'personalInfo' },
        { component: SectionOrderForm, key: 'sectionOrder' },
      ],
    },
    {
      title: 'Skills & Languages',
      forms: [
        { component: SkillsForm, key: 'skills' },
        { component: LanguagesForm, key: 'languages' },
      ],
    },
    {
      title: 'Experience & Internships',
      forms: [
        { component: ExperienceForm, key: 'experience' },
        { component: InternshipsForm, key: 'internships' },
      ],
    },
    {
      title: 'Education & Certifications',
      forms: [
        { component: EducationForm, key: 'education' },
        { component: CertificationsForm, key: 'certifications' },
      ],
    },
    {
      title: 'Projects & Publications',
      forms: [
        { component: ProjectsForm, key: 'projects' },
        { component: PublicationsForm, key: 'publications' },
      ],
    },
    {
      title: 'Achievements & Recognition',
      forms: [
        { component: AchievementsForm, key: 'achievements' },
      ],
    },
    {
      title: 'Interests & References',
      forms: [
        { component: InterestsForm, key: 'interests' },
        { component: ReferencesForm, key: 'references' },
      ],
    },
  ];

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      localStorage.setItem('resumeLastSaved', new Date().toISOString());
    }

    const message = wasPreviouslySaved ? 'Changes updated successfully!' : 'Saved successfully!';
    setNotification({ type: 'success', message });
    setWasPreviouslySaved(true);

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const currentPageData = pages[currentPage];
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === pages.length - 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem', position: 'relative' }}>
      {notification && (
        <div className={`notification notification-${notification.type}`} role="status" aria-live="polite">
          <div className="notification-content">
            <Check size={20} className="notification-icon" />
            <span>{notification.message}</span>
          </div>
          <div className="confetti" aria-hidden>
            <span className="c c1" />
            <span className="c c2" />
            <span className="c c3" />
            <span className="c c4" />
            <span className="c c5" />
          </div>
        </div>
      )}

      {/* Page Header */}
      <div style={{
        padding: '1rem',
        background: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        borderBottom: '2px solid var(--border-color)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <h2 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{currentPageData.title}</h2>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Page {currentPage + 1} of {pages.length}
        </p>
      </div>

      {/* Page Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {currentPageData.forms.map((form) => {
          const Component = form.component;
          return <Component key={form.key} />;
        })}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', marginTop: '2rem', padding: '1rem' }}>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={prevPage}
          disabled={isFirstPage}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: isFirstPage ? 0.5 : 1, cursor: isFirstPage ? 'not-allowed' : 'pointer' }}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
          {pages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setCurrentPage(index);
                window.scrollTo(0, 0);
              }}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentPage ? 'var(--accent-color)' : 'var(--bg-tertiary)',
                color: index === currentPage ? 'white' : 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.2s ease',
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {isLastPage && (
            <button className="btn btn-primary" type="button" onClick={handleSave}>
              Save Resume
            </button>
          )}
          <button
            className="btn btn-secondary"
            type="button"
            onClick={nextPage}
            disabled={isLastPage}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: isLastPage ? 0.5 : 1, cursor: isLastPage ? 'not-allowed' : 'pointer' }}
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

