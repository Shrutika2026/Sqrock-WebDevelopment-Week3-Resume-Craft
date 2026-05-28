import { useResume } from '../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';
import './FormStyles.css';

export default function EducationForm() {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();
  const { education } = resumeData;

  const handleAdd = () => {
    addEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateEducation(id, { [name]: value });
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>
        Education
        <button className="btn btn-primary" onClick={handleAdd} aria-label="Add Education">
          <Plus size={16} /> Add
        </button>
      </h3>

      {education.map((edu) => (
        <div key={edu.id} className="dynamic-item">
          <div className="dynamic-item-header">
            <h4>{edu.school || 'New Education'}</h4>
            <button 
              className="btn-danger" 
              onClick={() => removeEducation(edu.id)}
              aria-label="Remove Education"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>School / University</label>
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => handleChange(edu.id, e)}
                placeholder="Harvard University"
              />
            </div>
            
            <div className="form-group">
              <label>Degree</label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(edu.id, e)}
                placeholder="B.S. Computer Science"
              />
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                name="startDate"
                value={edu.startDate}
                onChange={(e) => handleChange(edu.id, e)}
              />
            </div>

            <div className="form-group">
              <label>End Date (or Expected)</label>
              <input
                type="month"
                name="endDate"
                value={edu.endDate}
                onChange={(e) => handleChange(edu.id, e)}
              />
            </div>

            <div className="form-group full-width">
              <label>Description (Optional)</label>
              <textarea
                name="description"
                value={edu.description}
                onChange={(e) => handleChange(edu.id, e)}
                placeholder="Relevant coursework, honors, or achievements..."
                rows="2"
              />
            </div>
          </div>
        </div>
      ))}
      
      {education.length === 0 && (
        <p className="help-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
          No education added yet. Click "Add" to start.
        </p>
      )}
    </div>
  );
}
