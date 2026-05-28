import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function LanguagesForm() {
  const { resumeData, addLanguage, updateLanguage, removeLanguage, reorderSection } = useResume();
  const languages = resumeData.languages || [];

  return (
    <GenericListForm
      title="Languages Known"
      addLabel="Add Language"
      items={languages}
      onAdd={() => addLanguage({ language: '', proficiency: '' })}
      onUpdate={updateLanguage}
      onRemove={removeLanguage}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= languages.length) return;
        const newOrder = [...languages];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('languages', newOrder);
      }}
      fields={[
        { name: 'language', label: 'Language', placeholder: 'English' },
        { name: 'proficiency', label: 'Proficiency Level', placeholder: 'Native, Fluent, Intermediate' },
      ]}
      itemTitle={(item) => item.language || 'New Language'}
      emptyText="No language skills added yet."
    />
  );
}
