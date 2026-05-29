import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { Plus, X, ChevronDown, ChevronUp } from 'lucide-react';
import GenericListForm from './GenericListForm';
import './FormStyles.css';

export default function AchievementsForm() {
  const {
    resumeData,
    addAchievement,
    updateAchievement,
    removeAchievement,
    addAward,
    updateAward,
    removeAward,
    addHackathon,
    updateHackathon,
    removeHackathon,
    addCompetition,
    updateCompetition,
    removeCompetition,
    reorderSection,
  } = useResume();

  const achievements = resumeData.achievements || [];
  const awards = resumeData.awards || [];
  const hackathons = resumeData.hackathons || [];
  const competitions = resumeData.competitions || [];

  const [expandedSection, setExpandedSection] = useState('achievements');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Achievements & Recognition</h3>

      {/* Achievements Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={() => toggleSection('achievements')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 0',
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
          }}
        >
          {expandedSection === 'achievements' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          Achievements
        </button>
        {expandedSection === 'achievements' && (
          <div style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
            <GenericListForm
              title=""
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
          </div>
        )}
      </div>

      {/* Awards Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={() => toggleSection('awards')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 0',
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
          }}
        >
          {expandedSection === 'awards' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          Awards
        </button>
        {expandedSection === 'awards' && (
          <div style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
            <GenericListForm
              title=""
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
          </div>
        )}
      </div>

      {/* Hackathons Section */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          type="button"
          onClick={() => toggleSection('hackathons')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 0',
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
          }}
        >
          {expandedSection === 'hackathons' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          Hackathons
        </button>
        {expandedSection === 'hackathons' && (
          <div style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
            <GenericListForm
              title=""
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
          </div>
        )}
      </div>

      {/* Competitions Section */}
      <div>
        <button
          type="button"
          onClick={() => toggleSection('competitions')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem 0',
            fontSize: '0.95rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
          }}
        >
          {expandedSection === 'competitions' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          Competitions
        </button>
        {expandedSection === 'competitions' && (
          <div style={{ marginTop: '1rem', paddingLeft: '1rem' }}>
            <GenericListForm
              title=""
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
                { name: 'title', label: 'Competition Title', placeholder: 'Coding Challenge' },
                { name: 'organizer', label: 'Organizer', placeholder: 'Tech Company' },
                { name: 'date', label: 'Date', type: 'month' },
                { name: 'result', label: 'Result / Rank', placeholder: 'Winner / 1st Place' },
              ]}
              itemTitle={(item) => item.title || 'New Competition'}
              emptyText="No competitions added yet."
            />
          </div>
        )}
      </div>
    </div>
  );
}
