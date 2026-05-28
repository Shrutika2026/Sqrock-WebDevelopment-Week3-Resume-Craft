import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { Check, AlertCircle } from 'lucide-react';
import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';
import SectionOrderForm from './SectionOrderForm';
import LanguagesForm from './LanguagesForm';
import CertificationsForm from './CertificationsForm';
import AchievementsForm from './AchievementsForm';
import AwardsForm from './AwardsForm';
import HackathonsForm from './HackathonsForm';
import CompetitionsForm from './CompetitionsForm';
import ScholarshipsForm from './ScholarshipsForm';
import InternshipsForm from './InternshipsForm';
import PublicationsForm from './PublicationsForm';
import InterestsForm from './InterestsForm';
import ReferencesForm from './ReferencesForm';
import './FormSection.css';

export default function FormSection() {
  const { resumeData } = useResume();
  const [notification, setNotification] = useState(null);
  const [wasPreviouslySaved, setWasPreviouslySaved] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('resumeLastSaved');
      return !!saved;
    }
    return false;
  });

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

      <PersonalInfoForm />
      <SectionOrderForm />
      <SkillsForm />
      <ExperienceForm />
      <InternshipsForm />
      <EducationForm />
      <ProjectsForm />
      <CertificationsForm />
      <AchievementsForm />
      <AwardsForm />
      <HackathonsForm />
      <CompetitionsForm />
      <ScholarshipsForm />
      <PublicationsForm />
      <InterestsForm />
      <ReferencesForm />

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '2rem', padding: '1rem' }}>
        <button className="btn btn-primary" type="button" onClick={handleSave}>
          Save Resume
        </button>
      </div>
    </div>
  );
}

