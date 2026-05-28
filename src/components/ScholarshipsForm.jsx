import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function ScholarshipsForm() {
  const { resumeData, addScholarship, updateScholarship, removeScholarship, reorderSection } = useResume();
  const scholarships = resumeData.scholarships || [];

  return (
    <GenericListForm
      title="Scholarships"
      addLabel="Add Scholarship"
      items={scholarships}
      onAdd={() => addScholarship({ title: '', organization: '', completionDate: '', description: '' })}
      onUpdate={updateScholarship}
      onRemove={removeScholarship}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= scholarships.length) return;
        const newOrder = [...scholarships];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('scholarships', newOrder);
      }}
      fields={[
        { name: 'title', label: 'Scholarship Name', placeholder: 'Merit Scholarship' },
        { name: 'organization', label: 'Organization', placeholder: 'National Education Fund' },
        { name: 'completionDate', label: 'Year', type: 'month' },
        { name: 'description', label: 'Details', type: 'textarea', placeholder: 'Describe the scholarship or award...' },
      ]}
      itemTitle={(item) => item.title || 'New Scholarship'}
      emptyText="No scholarships added yet."
    />
  );
}
