import { useResume } from '../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';
import './FormStyles.css';

export default function ExperienceForm() {
  const { resumeData, addExperience, updateExperience, removeExperience } = useResume();
  const { experience } = resumeData;

  const handleAdd = () => {
    addExperience({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateExperience(id, { [name]: value });
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>
        Work Experience
        <button className="btn btn-primary" onClick={handleAdd} aria-label="Add Experience">
          <Plus size={16} /> Add
        </button>
      </h3>

      {experience.map((exp) => (
        <div key={exp.id} className="dynamic-item">
          <div className="dynamic-item-header">
            <h4>{exp.company || 'New Experience'}</h4>
            <button 
              className="btn-danger" 
              onClick={() => removeExperience(exp.id)}
              aria-label="Remove Experience"
            >
              <Trash2 size={18} />
            </button>
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
                placeholder="Describe your responsibilities and achievements..."
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
