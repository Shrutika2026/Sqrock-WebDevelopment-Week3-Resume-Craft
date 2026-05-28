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
    linkedin: '',
    github: '',
    website: '',
    careerObjective: '',
    introduction: '',
    experienceSummary: '',
  },
  experience: [],
  internships: [],
  education: [],
  projects: [],
  skills: [],
  technicalSkills: [],
  softSkills: [],
  skillProgress: [],
  languages: [],
  certifications: [],
  achievements: [],
  awards: [],
  hackathons: [],
  competitions: [],
  scholarships: [],
  publications: [],
  interests: [],
  references: [],
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
  sectionOrder: [
    'skills',
    'technicalSkills',
    'softSkills',
    'languages',
    'skillProgress',
    'education',
    'experience',
    'internships',
    'projects',
    'certifications',
    'achievements',
    'awards',
    'hackathons',
    'competitions',
    'scholarships',
    'publications',
    'interests',
    'references',
  ],
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

  const addCertification = (certification) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, { ...certification, id: crypto.randomUUID() }],
    }));
  };

  const updateCertification = (id, updatedCertification) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert) => (cert.id === id ? { ...cert, ...updatedCertification } : cert)),
    }));
  };

  const removeCertification = (id) => {
    setResumeData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((cert) => cert.id !== id),
    }));
  };

  const addAchievement = (achievement) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, { ...achievement, id: crypto.randomUUID() }],
    }));
  };

  const updateAchievement = (id, updatedAchievement) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.map((item) => (item.id === id ? { ...item, ...updatedAchievement } : item)),
    }));
  };

  const removeAchievement = (id) => {
    setResumeData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((item) => item.id !== id),
    }));
  };

  const addAward = (award) => {
    setResumeData((prev) => ({
      ...prev,
      awards: [...prev.awards, { ...award, id: crypto.randomUUID() }],
    }));
  };

  const updateAward = (id, updatedAward) => {
    setResumeData((prev) => ({
      ...prev,
      awards: prev.awards.map((item) => (item.id === id ? { ...item, ...updatedAward } : item)),
    }));
  };

  const removeAward = (id) => {
    setResumeData((prev) => ({
      ...prev,
      awards: prev.awards.filter((item) => item.id !== id),
    }));
  };

  const addHackathon = (hackathon) => {
    setResumeData((prev) => ({
      ...prev,
      hackathons: [...prev.hackathons, { ...hackathon, id: crypto.randomUUID() }],
    }));
  };

  const updateHackathon = (id, updatedHackathon) => {
    setResumeData((prev) => ({
      ...prev,
      hackathons: prev.hackathons.map((item) => (item.id === id ? { ...item, ...updatedHackathon } : item)),
    }));
  };

  const removeHackathon = (id) => {
    setResumeData((prev) => ({
      ...prev,
      hackathons: prev.hackathons.filter((item) => item.id !== id),
    }));
  };

  const addCompetition = (competition) => {
    setResumeData((prev) => ({
      ...prev,
      competitions: [...prev.competitions, { ...competition, id: crypto.randomUUID() }],
    }));
  };

  const updateCompetition = (id, updatedCompetition) => {
    setResumeData((prev) => ({
      ...prev,
      competitions: prev.competitions.map((item) => (item.id === id ? { ...item, ...updatedCompetition } : item)),
    }));
  };

  const removeCompetition = (id) => {
    setResumeData((prev) => ({
      ...prev,
      competitions: prev.competitions.filter((item) => item.id !== id),
    }));
  };

  const addScholarship = (scholarship) => {
    setResumeData((prev) => ({
      ...prev,
      scholarships: [...prev.scholarships, { ...scholarship, id: crypto.randomUUID() }],
    }));
  };

  const updateScholarship = (id, updatedScholarship) => {
    setResumeData((prev) => ({
      ...prev,
      scholarships: prev.scholarships.map((item) => (item.id === id ? { ...item, ...updatedScholarship } : item)),
    }));
  };

  const removeScholarship = (id) => {
    setResumeData((prev) => ({
      ...prev,
      scholarships: prev.scholarships.filter((item) => item.id !== id),
    }));
  };

  const addInternship = (internship) => {
    setResumeData((prev) => ({
      ...prev,
      internships: [...prev.internships, { ...internship, id: crypto.randomUUID() }],
    }));
  };

  const updateInternship = (id, updatedInternship) => {
    setResumeData((prev) => ({
      ...prev,
      internships: prev.internships.map((item) => (item.id === id ? { ...item, ...updatedInternship } : item)),
    }));
  };

  const removeInternship = (id) => {
    setResumeData((prev) => ({
      ...prev,
      internships: prev.internships.filter((item) => item.id !== id),
    }));
  };

  const addPublication = (publication) => {
    setResumeData((prev) => ({
      ...prev,
      publications: [...prev.publications, { ...publication, id: crypto.randomUUID() }],
    }));
  };

  const updatePublication = (id, updatedPublication) => {
    setResumeData((prev) => ({
      ...prev,
      publications: prev.publications.map((item) => (item.id === id ? { ...item, ...updatedPublication } : item)),
    }));
  };

  const removePublication = (id) => {
    setResumeData((prev) => ({
      ...prev,
      publications: prev.publications.filter((item) => item.id !== id),
    }));
  };

  const addInterest = (interest) => {
    setResumeData((prev) => ({
      ...prev,
      interests: [...prev.interests, { ...interest, id: crypto.randomUUID() }],
    }));
  };

  const updateInterest = (id, updatedInterest) => {
    setResumeData((prev) => ({
      ...prev,
      interests: prev.interests.map((item) => (item.id === id ? { ...item, ...updatedInterest } : item)),
    }));
  };

  const removeInterest = (id) => {
    setResumeData((prev) => ({
      ...prev,
      interests: prev.interests.filter((item) => item.id !== id),
    }));
  };

  const addReference = (reference) => {
    setResumeData((prev) => ({
      ...prev,
      references: [...prev.references, { ...reference, id: crypto.randomUUID() }],
    }));
  };

  const updateReference = (id, updatedReference) => {
    setResumeData((prev) => ({
      ...prev,
      references: prev.references.map((item) => (item.id === id ? { ...item, ...updatedReference } : item)),
    }));
  };

  const removeReference = (id) => {
    setResumeData((prev) => ({
      ...prev,
      references: prev.references.filter((item) => item.id !== id),
    }));
  };

  const addLanguage = (language) => {
    setResumeData((prev) => ({
      ...prev,
      languages: [...prev.languages, { ...language, id: crypto.randomUUID() }],
    }));
  };

  const updateLanguage = (id, updatedLanguage) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.map((item) => (item.id === id ? { ...item, ...updatedLanguage } : item)),
    }));
  };

  const removeLanguage = (id) => {
    setResumeData((prev) => ({
      ...prev,
      languages: prev.languages.filter((item) => item.id !== id),
    }));
  };

  const addTechnicalSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      technicalSkills: [...prev.technicalSkills, { ...skill, id: crypto.randomUUID() }],
    }));
  };

  const updateTechnicalSkill = (id, updatedSkill) => {
    setResumeData((prev) => ({
      ...prev,
      technicalSkills: prev.technicalSkills.map((item) => (item.id === id ? { ...item, ...updatedSkill } : item)),
    }));
  };

  const removeTechnicalSkill = (id) => {
    setResumeData((prev) => ({
      ...prev,
      technicalSkills: prev.technicalSkills.filter((item) => item.id !== id),
    }));
  };

  const addSoftSkill = (skill) => {
    setResumeData((prev) => ({
      ...prev,
      softSkills: [...prev.softSkills, { ...skill, id: crypto.randomUUID() }],
    }));
  };

  const updateSoftSkill = (id, updatedSkill) => {
    setResumeData((prev) => ({
      ...prev,
      softSkills: prev.softSkills.map((item) => (item.id === id ? { ...item, ...updatedSkill } : item)),
    }));
  };

  const removeSoftSkill = (id) => {
    setResumeData((prev) => ({
      ...prev,
      softSkills: prev.softSkills.filter((item) => item.id !== id),
    }));
  };

  const addSkillProgress = (progress) => {
    setResumeData((prev) => ({
      ...prev,
      skillProgress: [...prev.skillProgress, { ...progress, id: crypto.randomUUID() }],
    }));
  };

  const updateSkillProgress = (id, updatedProgress) => {
    setResumeData((prev) => ({
      ...prev,
      skillProgress: prev.skillProgress.map((item) => (item.id === id ? { ...item, ...updatedProgress } : item)),
    }));
  };

  const removeSkillProgress = (id) => {
    setResumeData((prev) => ({
      ...prev,
      skillProgress: prev.skillProgress.filter((item) => item.id !== id),
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

  const setSectionOrder = (newOrder) => {
    setResumeData((prev) => ({
      ...prev,
      sectionOrder: newOrder,
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
    addProject,
    updateProject,
    removeProject,
    addCertification,
    updateCertification,
    removeCertification,
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
    addScholarship,
    updateScholarship,
    removeScholarship,
    addInternship,
    updateInternship,
    removeInternship,
    addPublication,
    updatePublication,
    removePublication,
    addInterest,
    updateInterest,
    removeInterest,
    addReference,
    updateReference,
    removeReference,
    addLanguage,
    updateLanguage,
    removeLanguage,
    addTechnicalSkill,
    updateTechnicalSkill,
    removeTechnicalSkill,
    addSoftSkill,
    updateSoftSkill,
    removeSoftSkill,
    addSkillProgress,
    updateSkillProgress,
    removeSkillProgress,
    addInterest,
    updateInterest,
    removeInterest,
    addReference,
    updateReference,
    removeReference,
    addLanguage,
    updateLanguage,
    removeLanguage,
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
    setSectionOrder,
    resetSavedData,
    setSidebarBgColor,
    setSidebarTextColor,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};
