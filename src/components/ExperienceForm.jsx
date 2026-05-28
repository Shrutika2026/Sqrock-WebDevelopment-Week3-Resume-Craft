import { useResume } from '../context/ResumeContext';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';
import './FormStyles.css';

export default function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience, reorderSection } = useResume();
  const { experience } = resumeData;

  const handleAdd = () => {
    addExperience({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      responsibilities: '',
      achievements: '',
    });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateExperience(id, { [name]: value });
  };

  const moveExperience = (index, direction) => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= experience.length) return;
    const newOrder = [...experience];
    const [moved] = newOrder.splice(index, 1);
    newOrder.splice(nextIndex, 0, moved);
    reorderSection('experience', newOrder);
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>
        Work Experience
        <button className="btn btn-primary" onClick={handleAdd} aria-label="Add Experience">
          <Plus size={16} /> Add
        </button>
      </h3>

      {experience.map((exp, index) => (
        <div key={exp.id} className="dynamic-item">
          <div className="dynamic-item-header">
            <h4>{exp.company || 'New Experience'}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => moveExperience(index, 'up')}
                aria-label="Move experience up"
                disabled={index === 0}
              >
                <ArrowUp size={16} />
              </button>
              <button
                className="btn btn-outline"
                type="button"
                onClick={() => moveExperience(index, 'down')}
                aria-label="Move experience down"
                disabled={index === experience.length - 1}
              >
                <ArrowDown size={16} />
              </button>
              <button
                className="btn-danger"
                type="button"
                onClick={() => removeExperience(exp.id)}
                aria-label="Remove Experience"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Google"
              />
            </div>
            
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Software Engineer"
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => handleChange(exp.id, e)}
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, e)}
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Describe the role overview..."
                rows="3"
              />
            </div>

            <div className="form-group full-width">
              <label>Responsibilities</label>
              <textarea
                name="responsibilities"
                value={exp.responsibilities}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="List your responsibilities in this role..."
                rows="3"
              />
            </div>

            <div className="form-group full-width">
              <label>Achievements</label>
              <textarea
                name="achievements"
                value={exp.achievements}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Key achievements or results from this role..."
                rows="3"
              />
            </div>
          </div>
        </div>
      ))}
      
      {experience.length === 0 && (
        <p className="help-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
          No work experience added yet. Click "Add" to start.
        </p>
      )}
    </div>
  );
}
