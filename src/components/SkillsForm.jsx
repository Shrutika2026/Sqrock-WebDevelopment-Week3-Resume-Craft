import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import { Plus, X, ArrowUp, ArrowDown } from 'lucide-react';
import './FormStyles.css';

export default function SkillsForm() {
  const {
    resumeData,
    addSkill,
    removeSkill,
    addTechnicalSkill,
    removeTechnicalSkill,
    addSoftSkill,
    removeSoftSkill,
    addSkillProgress,
    updateSkillProgress,
    removeSkillProgress,
    reorderSection,
  } = useResume();

  const { skills, technicalSkills, softSkills, skillProgress } = resumeData;

  const [newSkill, setNewSkill] = useState('');
  const [newTechnicalSkill, setNewTechnicalSkill] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== '') {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleAddTechnical = () => {
    if (newTechnicalSkill.trim() !== '') {
      addTechnicalSkill({ name: newTechnicalSkill.trim() });
      setNewTechnicalSkill('');
    }
  };

  const handleAddSoft = () => {
    if (newSoftSkill.trim() !== '') {
      addSoftSkill({ name: newSoftSkill.trim() });
      setNewSoftSkill('');
    }
  };

  const handleSkillChange = (e) => {
    if (e.key === 'Enter') {
      handleAdd(e);
    }
  };

  const moveSkill = (section, items, index, direction) => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= items.length) return;
    const newOrder = [...items];
    const [moved] = newOrder.splice(index, 1);
    newOrder.splice(nextIndex, 0, moved);
    reorderSection(section, newOrder);
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Skills</h3>

      <div className="form-group full-width">
        <label htmlFor="newSkill">General Skills</label>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <input
            type="text"
            id="newSkill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleSkillChange}
            placeholder="e.g. Time Management"
          />
          <button className="btn btn-primary" onClick={handleAdd} type="button">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={skill.id} className="skill-tag">
            {skill.name}
            <button
              type="button"
              onClick={() => moveSkill('skills', skills, index, 'up')}
              aria-label={`Move ${skill.name} up`}
              disabled={index === 0}
            >
              <ArrowUp size={14} />
            </button>
            <button
              type="button"
              onClick={() => moveSkill('skills', skills, index, 'down')}
              aria-label={`Move ${skill.name} down`}
              disabled={index === skills.length - 1}
            >
              <ArrowDown size={14} />
            </button>
            <button
              type="button"
              onClick={() => removeSkill(skill.id)}
              aria-label={`Remove ${skill.name}`}
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      <div className="divider" />

      <div className="form-group full-width">
        <label htmlFor="newTechnicalSkill">Technical Skills</label>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <input
            type="text"
            id="newTechnicalSkill"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            placeholder="e.g. React.js, Python"
          />
          <button className="btn btn-primary" onClick={handleAddTechnical} type="button">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="skills-container">
        {technicalSkills.map((skill, index) => (
          <span key={skill.id} className="skill-tag">
            {skill.name}
            <button
              type="button"
              onClick={() => moveSkill('technicalSkills', technicalSkills, index, 'up')}
              aria-label={`Move ${skill.name} up`}
              disabled={index === 0}
            >
              <ArrowUp size={14} />
            </button>
            <button
              type="button"
              onClick={() => moveSkill('technicalSkills', technicalSkills, index, 'down')}
              aria-label={`Move ${skill.name} down`}
              disabled={index === technicalSkills.length - 1}
            >
              <ArrowDown size={14} />
            </button>
            <button
              type="button"
              onClick={() => removeTechnicalSkill(skill.id)}
              aria-label={`Remove ${skill.name}`}
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      <div className="divider" />

      <div className="form-group full-width">
        <label htmlFor="newSoftSkill">Soft Skills</label>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
          <input
            type="text"
            id="newSoftSkill"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            placeholder="e.g. Leadership, Communication"
          />
          <button className="btn btn-primary" onClick={handleAddSoft} type="button">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="skills-container">
        {softSkills.map((skill, index) => (
          <span key={skill.id} className="skill-tag">
            {skill.name}
            <button
              type="button"
              onClick={() => moveSkill('softSkills', softSkills, index, 'up')}
              aria-label={`Move ${skill.name} up`}
              disabled={index === 0}
            >
              <ArrowUp size={14} />
            </button>
            <button
              type="button"
              onClick={() => moveSkill('softSkills', softSkills, index, 'down')}
              aria-label={`Move ${skill.name} down`}
              disabled={index === softSkills.length - 1}
            >
              <ArrowDown size={14} />
            </button>
            <button
              type="button"
              onClick={() => removeSoftSkill(skill.id)}
              aria-label={`Remove ${skill.name}`}
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      <div className="divider" />

      <div className="form-group full-width">
        <label>Skill Progress Bars</label>
        {skillProgress.map((progress) => (
          <div key={progress.id} className="dynamic-item" style={{ padding: '1rem', marginBottom: '0.75rem' }}>
            <div className="dynamic-item-header">
              <h4>{progress.name || 'Progress Item'}</h4>
              <button
                className="btn-danger"
                type="button"
                onClick={() => removeSkillProgress(progress.id)}
                aria-label="Remove Skill Progress"
              >
                <X size={18} />
              </button>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={progress.name}
                  onChange={(e) => updateSkillProgress(progress.id, { [e.target.name]: e.target.value })}
                  placeholder="Skill or tool"
                />
              </div>
              <div className="form-group">
                <label>Proficiency</label>
                <input
                  type="range"
                  name="level"
                  value={progress.level || 50}
                  onChange={(e) => updateSkillProgress(progress.id, { [e.target.name]: Number(e.target.value) })}
                  min="0"
                  max="100"
                />
                <span>{progress.level || 50}%</span>
              </div>
            </div>
          </div>
        ))}
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => addSkillProgress({ name: '', level: 50 })}
        >
          <Plus size={16} /> Add Progress Bar
        </button>
      </div>
    </div>
  );
}
