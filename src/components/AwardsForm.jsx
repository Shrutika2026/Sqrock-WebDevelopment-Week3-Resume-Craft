import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function AwardsForm() {
  const { resumeData, addAward, updateAward, removeAward, reorderSection } = useResume();
  const awards = resumeData.awards || [];

  return (
    <GenericListForm
      title="Awards"
      addLabel="Add Award"
      items={awards}
      onAdd={() => addAward({ title: '', organization: '', date: '', description: '' })}
      onUpdate={updateAward}
      onRemove={removeAward}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= awards.length) return;
        const newOrder = [...awards];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('awards', newOrder);
      }}
      fields={[
        { name: 'title', label: 'Award Title', placeholder: 'Best Intern of the Year' },
        { name: 'organization', label: 'Organization', placeholder: 'ABC Corporation' },
        { name: 'date', label: 'Date', type: 'month' },
        { name: 'description', label: 'Details', type: 'textarea', placeholder: 'Describe the award or recognition...' },
      ]}
      itemTitle={(item) => item.title || 'New Award'}
      emptyText="No awards added yet."
    />
  );
}
