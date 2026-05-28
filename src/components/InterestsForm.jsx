import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function InterestsForm() {
  const { resumeData, addInterest, updateInterest, removeInterest, reorderSection } = useResume();
  const interests = resumeData.interests || [];

  return (
    <GenericListForm
      title="Interests / Hobbies"
      addLabel="Add Interest"
      items={interests}
      onAdd={() => addInterest({ interest: '' })}
      onUpdate={updateInterest}
      onRemove={removeInterest}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= interests.length) return;
        const newOrder = [...interests];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('interests', newOrder);
      }}
      fields={[{ name: 'interest', label: 'Interest', placeholder: 'Reading, Photography' }]}
      itemTitle={(item) => item.interest || 'New Interest'}
      emptyText="No interests added yet."
    />
  );
}
