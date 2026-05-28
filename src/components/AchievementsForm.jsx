import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function AchievementsForm() {
  const { resumeData, addAchievement, updateAchievement, removeAchievement, reorderSection } = useResume();
  const achievements = resumeData.achievements || [];

  return (
    <GenericListForm
      title="Achievements"
      addLabel="Add Achievement"
      items={achievements}
      onAdd={() => addAchievement({ title: '', date: '', description: '' })}
      onUpdate={updateAchievement}
      onRemove={removeAchievement}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= achievements.length) return;
        const newOrder = [...achievements];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('achievements', newOrder);
      }}
      fields={[
        { name: 'title', label: 'Achievement Title', placeholder: 'Won University Scholarship' },
        { name: 'date', label: 'Date', type: 'month' },
        { name: 'description', label: 'Details', type: 'textarea', placeholder: 'Describe the achievement...' },
      ]}
      itemTitle={(item) => item.title || 'New Achievement'}
      emptyText="No achievements added yet."
    />
  );
}
