import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useResume } from './context/ResumeContext.jsx';
import FormSection from './components/FormSection';
import ResumePreview from './components/ResumePreview';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const { resetSavedData, resumeData } = useResume();
  const [showLanding, setShowLanding] = useState(true);
  const [resetMessage, setResetMessage] = useState('');

  const logoSrc = resumeData?.personalInfo?.siteLogo || '/assets/resume_logo.jpeg';

  const handleClearSaved = () => {
    if (window.confirm('Clear saved resume data? This cannot be undone.')) {
      resetSavedData();
      setResetMessage('Resume reset successfully');
      window.setTimeout(() => setResetMessage(''), 2200);
    }
  };

  const handleEnterApp = () => {
    setShowLanding(false);
  };

  if (showLanding) {
    return (
      <div className="app-container landing-screen">
        <div className="landing-card">
          <img
            src={logoSrc}
            alt="Resume Craft Logo"
            className="landing-logo"
            onError={(e) => (e.currentTarget.src = '/assets/resume_logo.jpeg')}
          />
          <h1 className="landing-title">RESUME CRAFT</h1>
          <p className="landing-tagline">Create a standout resume in minutes with modern templates, built-in styling, and fast export options.</p>
          <div className="landing-feature-list">
            <span className="landing-feature">Smart resume templates</span>
            <span className="landing-feature">Custom logo & branding</span>
            <span className="landing-feature">Fast PDF download</span>
          </div>
          <button className="landing-button" onClick={handleEnterApp}>
            Start Building
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <img
            src={logoSrc}
            alt="Resume Craft Logo"
            className="logo-image"
            onError={(e) => (e.currentTarget.src = '/assets/resume_logo.svg')}
          />
          <h1>
            <span className="resume-text">Resume</span>
            <span className="craft-text">Craft</span>
          </h1>
        </div>
        <div className="header-actions">
          <span className="autosave-indicator">Autosave: On</span>
          <button 
            onClick={handleClearSaved}
            className="clear-saved"
            title="Reset all resume data"
          >
            Reset resume
          </button>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <main className="main-content">
        <section className="form-section">
          <FormSection />
        </section>

        <section className="preview-section">
          <ResumePreview />
        </section>
      </main>

      {resetMessage && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '1rem 1.4rem',
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          zIndex: 9999,
          textAlign: 'center',
        }}>
          {resetMessage}
        </div>
      )}
    </div>
  );
}

export default App;


