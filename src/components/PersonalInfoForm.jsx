import { useResume } from '../context/ResumeContext';
import { Upload } from 'lucide-react';
import './FormStyles.css';

export default function PersonalInfoForm() {
  const { resumeData, updatePersonalInfo } = useResume();
  const { personalInfo } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo(name, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo('profileImage', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Personal Information</h3>
      
      <div className="image-upload-container">
        <div className="image-preview">
          {personalInfo.profileImage ? (
            <img src={personalInfo.profileImage} alt="Profile" />
          ) : (
            <Upload className="upload-icon" />
          )}
        </div>
        <div className="upload-actions">
          <label htmlFor="profileImage" className="btn btn-outline">
            Upload Photo
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <p className="help-text">Recommended: Square image, max 2MB</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={personalInfo.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            placeholder="New York, NY"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={personalInfo.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={personalInfo.github}
            onChange={handleChange}
            placeholder="https://github.com/username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">Portfolio Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={personalInfo.website}
            onChange={handleChange}
            placeholder="https://yourportfolio.com"
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={personalInfo.summary}
          onChange={handleChange}
          placeholder="A brief summary of your professional background and goals..."
          rows="4"
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="introduction">Short Introduction</label>
        <textarea
          id="introduction"
          name="introduction"
          value={personalInfo.introduction}
          onChange={handleChange}
          placeholder="Introduce yourself in 1–2 sentences..."
          rows="2"
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="careerObjective">Career Objective</label>
        <textarea
          id="careerObjective"
          name="careerObjective"
          value={personalInfo.careerObjective}
          onChange={handleChange}
          placeholder="Describe your career goals and the impact you want to make..."
          rows="2"
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="experienceSummary">Experience Summary</label>
        <textarea
          id="experienceSummary"
          name="experienceSummary"
          value={personalInfo.experienceSummary}
          onChange={handleChange}
          placeholder="Summarize your work experience and achievements..."
          rows="2"
        />
      </div>
    </div>
  );
}
