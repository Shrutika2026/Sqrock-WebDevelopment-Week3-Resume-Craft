import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function PublicationsForm() {
  const { resumeData, addPublication, updatePublication, removePublication, reorderSection } = useResume();
  const publications = resumeData.publications || [];

  return (
    <GenericListForm
      title="Research Papers / Publications"
      addLabel="Add Publication"
      items={publications}
      onAdd={() => addPublication({ researchTitle: '', journalName: '', doiLink: '' })}
      onUpdate={updatePublication}
      onRemove={removePublication}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= publications.length) return;
        const newOrder = [...publications];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('publications', newOrder);
      }}
      fields={[
        { name: 'researchTitle', label: 'Research Title', placeholder: 'Machine Learning for Healthcare' },
        { name: 'journalName', label: 'Journal Name', placeholder: 'Journal of AI Research' },
        { name: 'doiLink', label: 'DOI / Publication Link', type: 'url', placeholder: 'https://doi.org/...' },
      ]}
      itemTitle={(item) => item.researchTitle || 'New Publication'}
      emptyText="No publications added yet."
    />
  );
}
