import { createContext, useContext, useState, useEffect } from 'react';
/* eslint-disable react-refresh/only-export-components */

const defaultResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    profileImage: '',
    siteLogo: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [], // Adding this in advance for Step 2
  accentColor: '#3b82f6',
  brandSecondary: '#60a5fa',
  accentLineColor: '#d1d5db',
  cardHighlightColor: '#f3e8ff',
  gradientStartColor: '#7c3aed',
  gradientEndColor: '#ec4899',
  executiveGoldColor: '#d4af37',
  sidebarBgColor: '#f8f9fa',
  sidebarTextColor: '#e5e7eb',
  headingColor: '#111827',
  textColor: '#222222',
  backgroundColor: '#ffffff',
  selectedTemplate: 'modern',
};

const ResumeContext = createContext();

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

const STORAGE_KEY = 'resumeData';

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (e) {
          console.error('Error parsing resume data', e);
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    }
    return defaultResumeData;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
      } catch (error) {
        console.error('Unable to save resume data to localStorage', error);
      }
    }
  }, [resumeData]);

  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  const updateSiteLogo = (value) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        siteLogo: value,
      },
    }));
  };

  const addExperience = (exp) => {
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...exp, id: crypto.randomUUID() }],
    }));
  };

  const updateExperience = (id, updatedExp) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, ...updatedExp } : exp)),
    }));
  };

  const removeExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addEducation = (edu) => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, { ...edu, id: crypto.randomUUID() }],
    }));
  };

  const updateEducation = (id, updatedEdu) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, ...updatedEdu } : edu)),
    }));
  };

  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }));
  };

  const addSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: skill, id: crypto.randomUUID() }],
    }));
  };

  const removeSkill = (id) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };
  
  const addProject = (project) => {
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: crypto.randomUUID() }],
    }));
  };

  const updateProject = (id, updatedProject) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => (proj.id === id ? { ...proj, ...updatedProject } : proj)),
    }));
  };

  const removeProject = (id) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((proj) => proj.id !== id),
    }));
  };
  
  const reorderSection = (section, newOrder) => {
    setResumeData(prev => ({
        ...prev,
        [section]: newOrder
    }));
  }

  const setAccentColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      accentColor: color
    }));
  };

  const setBrandSecondary = (color) => {
    setResumeData(prev => ({
      ...prev,
      brandSecondary: color
    }));
  };

  const setAccentLineColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      accentLineColor: color
    }));
  };

  const setCardHighlightColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      cardHighlightColor: color
    }));
  };

  const setGradientStartColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      gradientStartColor: color
    }));
  };

  const setGradientEndColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      gradientEndColor: color
    }));
  };

  const setExecutiveGoldColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      executiveGoldColor: color
    }));
  };

  const setSidebarBgColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      sidebarBgColor: color
    }));
  };

  const setSidebarTextColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      sidebarTextColor: color
    }));
  };

  const setHeadingColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      headingColor: color
    }));
  };

  const setTextColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      textColor: color
    }));
  };

  const setBackgroundColor = (color) => {
    setResumeData(prev => ({
      ...prev,
      backgroundColor: color
    }));
  };

  const setSelectedTemplate = (template) => {
    setResumeData(prev => ({
      ...prev,
      selectedTemplate: template,
    }));
  };

  const resetSavedData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    setResumeData(defaultResumeData);
  };

  const value = {
    resumeData,
    updatePersonalInfo,
    updateSiteLogo,
    addExperience,
    updateExperience,
    removeExperience,
    addEducation,
    updateEducation,
    removeEducation,
    addSkill,
    removeSkill,
    reorderSection,
    setAccentColor,
    setBrandSecondary,
    setAccentLineColor,
    setCardHighlightColor,
    setGradientStartColor,
    setGradientEndColor,
    setExecutiveGoldColor,
    setHeadingColor,
    setTextColor,
    setBackgroundColor,
    setSelectedTemplate,
    addProject,
    updateProject,
    removeProject,
    resetSavedData,
    setSidebarBgColor,
    setSidebarTextColor,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};
