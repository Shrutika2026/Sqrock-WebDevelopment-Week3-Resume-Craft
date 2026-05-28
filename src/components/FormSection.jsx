import PersonalInfoForm from './PersonalInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProjectsForm from './ProjectsForm';

export default function FormSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
      <PersonalInfoForm />
      <SkillsForm />
      <ExperienceForm />
      <ProjectsForm />
      <EducationForm />
    </div>
  );
}
