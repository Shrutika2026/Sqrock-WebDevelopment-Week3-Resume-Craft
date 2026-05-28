import { useResume } from '../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';
import './FormStyles.css';

export default function ProjectsForm() {
  const { resumeData, addProject, updateProject, removeProject } = useResume();
  const projects = resumeData.projects || [];

  const handleAdd = () => {
    addProject({
      title: '',
      technologies: '',
      link: '',
      description: '',
    });
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    updateProject(id, { [name]: value });
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>
        Projects
        <button className="btn btn-primary" onClick={handleAdd} aria-label="Add Project">
          <Plus size={16} /> Add
        </button>
      </h3>

      {projects.map((proj) => (
        <div key={proj.id} className="dynamic-item">
          <div className="dynamic-item-header">
            <h4>{proj.title || 'New Project'}</h4>
            <button 
              className="btn-danger" 
              onClick={() => removeProject(proj.id)}
              aria-label="Remove Project"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="form-grid">
            <div className="form-group full-width">
              <label>Project Title</label>
              <input
                type="text"
                name="title"
                value={proj.title}
                onChange={(e) => handleChange(proj.id, e)}
                placeholder="E-commerce Website"
              />
            </div>
            
            <div className="form-group">
              <label>Technologies Used</label>
              <input
                type="text"
                name="technologies"
                value={proj.technologies}
                onChange={(e) => handleChange(proj.id, e)}
                placeholder="React, Node.js, MongoDB"
              />
            </div>

            <div className="form-group">
              <label>Project Link (URL)</label>
              <input
                type="text"
                name="link"
                value={proj.link}
                onChange={(e) => handleChange(proj.id, e)}
                placeholder="https://github.com/username/project"
              />
            </div>

            <div className="form-group full-width">
              <label>Description</label>
              <textarea
                name="description"
                value={proj.description}
                onChange={(e) => handleChange(proj.id, e)}
                placeholder="What did you build? What problems did you solve? Use new lines for bullet points."
                rows="3"
              />
            </div>
          </div>
        </div>
      ))}
      
      {projects.length === 0 && (
        <p className="help-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
          No projects added yet. Click "Add" to start.
        </p>
      )}
    </div>
  );
}
