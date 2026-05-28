import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function CompetitionsForm() {
  const { resumeData, addCompetition, updateCompetition, removeCompetition, reorderSection } = useResume();
  const competitions = resumeData.competitions || [];

  return (
    <GenericListForm
      title="Competitions"
      addLabel="Add Competition"
      items={competitions}
      onAdd={() => addCompetition({ title: '', organizer: '', date: '', result: '' })}
      onUpdate={updateCompetition}
      onRemove={removeCompetition}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= competitions.length) return;
        const newOrder = [...competitions];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('competitions', newOrder);
      }}
      fields={[
        { name: 'title', label: 'Competition Title', placeholder: 'Case Study Challenge' },
        { name: 'organizer', label: 'Organizer', placeholder: 'Business School' },
        { name: 'date', label: 'Date', type: 'month' },
        { name: 'result', label: 'Result / Placement', placeholder: 'Runner Up' },
      ]}
      itemTitle={(item) => item.title || 'New Competition'}
      emptyText="No competitions added yet."
    />
  );
}
