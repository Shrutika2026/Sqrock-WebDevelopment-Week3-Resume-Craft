import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function ReferencesForm() {
  const { resumeData, addReference, updateReference, removeReference, reorderSection } = useResume();
  const references = resumeData.references || [];

  return (
    <GenericListForm
      title="References"
      addLabel="Add Reference"
      items={references}
      onAdd={() => addReference({ name: '', designation: '', contact: '' })}
      onUpdate={updateReference}
      onRemove={removeReference}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= references.length) return;
        const newOrder = [...references];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('references', newOrder);
      }}
      fields={[
        { name: 'name', label: 'Reference Name', placeholder: 'Jane Doe' },
        { name: 'designation', label: 'Designation', placeholder: 'Senior Manager' },
        { name: 'contact', label: 'Contact Information', placeholder: 'jane@example.com / +1 234 567 890' },
      ]}
      itemTitle={(item) => item.name || 'New Reference'}
      emptyText="No references added yet."
    />
  );
}
