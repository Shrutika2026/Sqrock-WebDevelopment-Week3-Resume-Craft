import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function HackathonsForm() {
  const { resumeData, addHackathon, updateHackathon, removeHackathon, reorderSection } = useResume();
  const hackathons = resumeData.hackathons || [];

  return (
    <GenericListForm
      title="Hackathons"
      addLabel="Add Hackathon"
      items={hackathons}
      onAdd={() => addHackathon({ title: '', organizer: '', date: '', result: '' })}
      onUpdate={updateHackathon}
      onRemove={removeHackathon}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= hackathons.length) return;
        const newOrder = [...hackathons];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('hackathons', newOrder);
      }}
      fields={[
        { name: 'title', label: 'Hackathon Title', placeholder: 'AI Product Sprint' },
        { name: 'organizer', label: 'Organizer', placeholder: 'Tech University' },
        { name: 'date', label: 'Date', type: 'month' },
        { name: 'result', label: 'Result / Award', placeholder: 'Winner / Top 5' },
      ]}
      itemTitle={(item) => item.title || 'New Hackathon'}
      emptyText="No hackathons added yet."
    />
  );
}
