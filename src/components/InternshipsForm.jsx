import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function InternshipsForm() {
  const { resumeData, addInternship, updateInternship, removeInternship, reorderSection } = useResume();
  const internships = resumeData.internships || [];

  return (
    <GenericListForm
      title="Internships"
      addLabel="Add Internship"
      items={internships}
      onAdd={() => addInternship({ company: '', role: '', duration: '', description: '' })}
      onUpdate={updateInternship}
      onRemove={removeInternship}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= internships.length) return;
        const newOrder = [...internships];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('internships', newOrder);
      }}
      fields={[
        { name: 'company', label: 'Company', placeholder: 'ABC Tech' },
        { name: 'role', label: 'Role', placeholder: 'Software Intern' },
        { name: 'duration', label: 'Duration', placeholder: 'Jun 2024 - Aug 2024' },
        { name: 'description', label: 'Work Description', type: 'textarea', placeholder: 'Describe responsibilities and results...' },
      ]}
      itemTitle={(item) => item.company || 'New Internship'}
      emptyText="No internships added yet."
    />
  );
}
