import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { Plus, X } from 'lucide-react';
import './FormStyles.css';

export default function SkillsForm() {
  const { resumeData, addSkill, removeSkill } = useResume();
  const { skills } = resumeData;
  const [newSkill, setNewSkill] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== '') {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd(e);
    }
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Skills</h3>

      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill.id} className="skill-tag">
            {skill.name}
            <button onClick={() => removeSkill(skill.id)} aria-label={`Remove ${skill.name}`}>
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      <div className="form-group" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '0.5rem' }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="newSkill">Add a Skill</label>
          <input
            type="text"
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. React.js, Project Management"
          />
        </div>
        <button className="btn btn-primary" onClick={handleAdd} type="button">
          <Plus size={20} />
        </button>
      </div>
      <p className="help-text">Press Enter or click the '+' button to add a skill.</p>
    </div>
  );
}
