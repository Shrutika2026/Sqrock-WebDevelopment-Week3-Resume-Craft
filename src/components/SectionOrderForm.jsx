import { GripVertical, ArrowUp, ArrowDown, Briefcase, BookOpen, Code2, Sparkles, Cpu, Handshake, BarChart3, Globe2, BadgeCheck, Trophy, Award, Zap, Medal, GraduationCap, FileText, Star, UserCheck } from 'lucide-react';
import { useState } from 'react';
import { useResume } from '../context/ResumeContext';
import './FormStyles.css';

const sectionLabels = {
  experience: 'Experience',
  internships: 'Internships',
  education: 'Education',
  projects: 'Projects',
  skills: 'Skills',
  technicalSkills: 'Technical Skills',
  softSkills: 'Soft Skills',
  skillProgress: 'Skill Progress',
  languages: 'Languages',
  certifications: 'Certifications',
  achievements: 'Achievements',
  awards: 'Awards',
  hackathons: 'Hackathons',
  competitions: 'Competitions',
  scholarships: 'Scholarships',
  publications: 'Publications',
  interests: 'Interests',
  references: 'References',
};

const sectionIcons = {
  experience: Briefcase,
  internships: Briefcase,
  education: BookOpen,
  projects: Code2,
  skills: Sparkles,
  technicalSkills: Cpu,
  softSkills: Handshake,
  skillProgress: BarChart3,
  languages: Globe2,
  certifications: BadgeCheck,
  achievements: Trophy,
  awards: Award,
  hackathons: Zap,
  competitions: Medal,
  scholarships: GraduationCap,
  publications: FileText,
  interests: Star,
  references: UserCheck,
};

export default function SectionOrderForm() {
  const { resumeData, setSectionOrder } = useResume();
  const [dragIndex, setDragIndex] = useState(null);
  const defaultOrder = [
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
  ];
  const sectionOrder = Array.from(
    new Set([...(resumeData.sectionOrder || []), ...defaultOrder])
  );

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (event, overIndex) => {
    event.preventDefault();
    if (dragIndex === null || dragIndex === overIndex) return;

    const newOrder = [...sectionOrder];
    const [movedSection] = newOrder.splice(dragIndex, 1);
    newOrder.splice(overIndex, 0, movedSection);
    setSectionOrder(newOrder);
    setDragIndex(overIndex);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
  };

  const moveSection = (index, direction) => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= sectionOrder.length) return;
    const newOrder = [...sectionOrder];
    const [moved] = newOrder.splice(index, 1);
    newOrder.splice(nextIndex, 0, moved);
    setSectionOrder(newOrder);
  };

  return (
    <div className="form-card animate-fade-in">
      <h3>Resume Section Order</h3>
      <p className="help-text">Drag-and-drop or use arrows to arrange sections for the resume preview.</p>
      <div className="section-order-list">
        {sectionOrder.map((section, index) => {
          const Icon = sectionIcons[section];
          return (
            <div
              key={section}
              className={`section-order-row${dragIndex === index ? ' dragging' : ''}`}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(event) => handleDragOver(event, index)}
              onDragEnd={handleDragEnd}
            >
              <button
                type="button"
                className="section-drag-handle"
                aria-label={`Drag ${sectionLabels[section]} to reorder`}
              >
                <GripVertical size={18} />
              </button>
              <div className="section-order-label">
                <Icon size={18} />
                <span>{sectionLabels[section]}</span>
              </div>
              <div className="section-order-actions">
                <button
                  type="button"
                  className="btn btn-outline btn-icon"
                  onClick={() => moveSection(index, 'up')}
                  disabled={index === 0}
                  aria-label={`Move ${sectionLabels[section]} up`}
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-icon"
                  onClick={() => moveSection(index, 'down')}
                  disabled={index === sectionOrder.length - 1}
                  aria-label={`Move ${sectionLabels[section]} down`}
                >
                  <ArrowDown size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
