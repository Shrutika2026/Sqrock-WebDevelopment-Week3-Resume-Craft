import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download, LayoutTemplate } from 'lucide-react';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import ATSTemplate from './templates/ATSTemplate';
import SidebarTemplate from './templates/SidebarTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import FresherTemplate from './templates/FresherTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import PortfolioTemplate from './templates/PortfolioTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import DesignerTemplate from './templates/DesignerTemplate';
import OneColumnTemplate from './templates/OneColumnTemplate';
import { useResume } from '../context/ResumeContext';

export default function ResumePreview() {
  const {
    resumeData,
    setAccentColor,
    setBrandSecondary,
    setAccentLineColor,
    setCardHighlightColor,
    setGradientStartColor,
    setGradientEndColor,
    setExecutiveGoldColor,
    setSidebarBgColor,
    setSidebarTextColor,
    setHeadingColor,
    setTextColor,
    setBackgroundColor,
    setSelectedTemplate,
  } = useResume();
  const [activeTemplate, setActiveTemplate] = useState(resumeData.selectedTemplate || 'modern');
  const [scale, setScale] = useState(1);
  const componentRef = useRef();
  const wrapperRef = useRef();
  const [fitToOnePage, setFitToOnePage] = useState(true);

  useEffect(() => {
    if (resumeData.selectedTemplate && resumeData.selectedTemplate !== activeTemplate) {
      setActiveTemplate(resumeData.selectedTemplate);
    }
  }, [resumeData.selectedTemplate, activeTemplate]);

  useLayoutEffect(() => {
    if (!componentRef.current || !wrapperRef.current) return;

    const computeScale = () => {
      const contentHeight = componentRef.current.scrollHeight;
      const targetHeight = fitToOnePage ? wrapperRef.current.clientHeight : contentHeight;
      const nextScale = contentHeight > targetHeight ? Math.max(0.55, targetHeight / contentHeight) : 1;
      setScale(nextScale);
    };

    const rafId = requestAnimationFrame(computeScale);

    const onResize = () => {
      requestAnimationFrame(computeScale);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [activeTemplate, resumeData, fitToOnePage]);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'My_Resume',
  });

  const defaults = {
      modern: {
        accentColor: '#1E3A8A',
        brandSecondary: '#3B82F6',
        accentLineColor: '#3B82F6',
        headingColor: '#111827',
        textColor: '#111827',
        backgroundColor: '#F8FAFC',
        sidebarBgColor: '#F8FAFC',
        cardHighlightColor: '#F3E8FF',
      },
      classic: {
        accentColor: '#111111',
        brandSecondary: '#4B5563',
        accentLineColor: '#D1D5DB',
        headingColor: '#111111',
        textColor: '#111111',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#F8FAFC',
      },
      ats: {
        accentColor: '#0F172A',
        brandSecondary: '#334155',
        accentLineColor: '#2563EB',
        headingColor: '#0F172A',
        textColor: '#0F172A',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#E2E8F0',
      },
      sidebar: {
        accentColor: '#6366F1',
        brandSecondary: '#4F46E5',
        accentLineColor: '#4F46E5',
        headingColor: '#FFFFFF',
        textColor: '#374151',
        backgroundColor: '#F8FAFC',
        sidebarBgColor: '#1E1B4B',
        sidebarTextColor: '#E0E7FF',
        cardHighlightColor: '#E0E7FF',
      },
      creative: {
        accentColor: '#6366F1',
        brandSecondary: '#8B5CF6',
        accentLineColor: '#EC4899',
        headingColor: '#111827',
        textColor: '#111827',
        backgroundColor: '#FAFAFA',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#EEF2FF',
        gradientStartColor: '#6366F1',
        gradientEndColor: '#8B5CF6',
      },
      portfolio: {
        accentColor: '#2563EB',
        brandSecondary: '#60A5FA',
        accentLineColor: '#60A5FA',
        headingColor: '#0F172A',
        textColor: '#0F172A',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#F8FAFC',
      },
      minimal: {
        accentColor: '#0F172A',
        brandSecondary: '#374151',
        accentLineColor: '#D1D5DB',
        headingColor: '#0F172A',
        textColor: '#0F172A',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#F8FAFC',
      },
      fresher: {
        accentColor: '#2563EB',
        brandSecondary: '#60A5FA',
        accentLineColor: '#60A5FA',
        headingColor: '#111827',
        textColor: '#111827',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#DBEAFE',
      },
      executive: {
        accentColor: '#D4AF37',
        brandSecondary: '#3B82F6',
        accentLineColor: '#334155',
        headingColor: '#F9FAFB',
        textColor: '#F9FAFB',
        backgroundColor: '#0B1120',
        sidebarBgColor: '#111827',
        cardHighlightColor: '#111827',
        executiveGoldColor: '#D4AF37',
      },
      designer: {
        accentColor: '#7C3AED',
        brandSecondary: '#EC4899',
        accentLineColor: '#EAB308',
        headingColor: '#0F172A',
        textColor: '#0F172A',
        backgroundColor: '#FFFFFF',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#FBF0FF',
        gradientStartColor: '#7c3aed',
        gradientEndColor: '#ec4899',
      },
      onecolumn: {
        accentColor: '#0F172A',
        brandSecondary: '#374151',
        accentLineColor: '#E5E7EB',
        headingColor: '#0F172A',
        textColor: '#111827',
        backgroundColor: '#WHITE',
        sidebarBgColor: '#FFFFFF',
        cardHighlightColor: '#F8FAFC',
      },
    };

  const applyTemplateDefaults = (template) => {
    const palette = defaults[template];
    if (!palette) return;

    setAccentColor(palette.accentColor);
    setBrandSecondary(palette.brandSecondary);
    setAccentLineColor(palette.accentLineColor);
    setHeadingColor(palette.headingColor);
    setTextColor(palette.textColor);
    setBackgroundColor(palette.backgroundColor);
    setSidebarBgColor(palette.sidebarBgColor);
    setCardHighlightColor(palette.cardHighlightColor);
    if (palette.gradientStartColor) setGradientStartColor(palette.gradientStartColor);
    if (palette.gradientEndColor) setGradientEndColor(palette.gradientEndColor);
    if (palette.executiveGoldColor) setExecutiveGoldColor(palette.executiveGoldColor);
    if (palette.sidebarTextColor) setSidebarTextColor(palette.sidebarTextColor);
  };

  const needsPaletteInit = () => {
    return (
      resumeData.brandSecondary === undefined ||
      resumeData.accentLineColor === undefined ||
      resumeData.cardHighlightColor === undefined ||
      (activeTemplate === 'creative' && resumeData.gradientStartColor === undefined) ||
      (activeTemplate === 'creative' && resumeData.gradientEndColor === undefined) ||
      (activeTemplate === 'executive' && resumeData.executiveGoldColor === undefined) ||
      (activeTemplate === 'sidebar' && resumeData.sidebarTextColor === undefined)
    );
  };

  useEffect(() => {
    if (needsPaletteInit()) {
      applyTemplateDefaults(activeTemplate);
    }
  }, [activeTemplate]);

  const handleTemplateChange = (template) => {
    setActiveTemplate(template);
    setSelectedTemplate(template);
    applyTemplateDefaults(template);
  };

  return (
    <div className="preview-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Toolbar */}
      <div className="preview-toolbar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        
        <div className="template-selector" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LayoutTemplate size={18} /> Template:
          </span>
          <select 
            value={activeTemplate} 
            onChange={(e) => handleTemplateChange(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-family)'
            }}
          >
            <option value="modern">Modern Professional</option>
            <option value="classic">Traditional Classic</option>
            <option value="ats">Minimal ATS Professional</option>
            <option value="sidebar">Modern Sidebar Resume</option>
            <option value="creative">Creative Portfolio</option>
            <option value="designer">Designer / Visual Portfolio</option>
            <option value="onecolumn">One-Column Professional</option>
            <option value="portfolio">Portfolio Focused</option>
            <option value="minimal">Minimal / One-Page</option>
            <option value="fresher">Student/Fresher Resume</option>
            <option value="executive">Executive Dark Theme</option>
          </select>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Primary:</span>
            <input 
              type="color" 
              value={resumeData.accentColor || '#3b82f6'} 
              onChange={(e) => setAccentColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose primary color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Secondary:</span>
            <input 
              type="color" 
              value={resumeData.brandSecondary || '#60a5fa'} 
              onChange={(e) => setBrandSecondary(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose secondary color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Accent line:</span>
            <input 
              type="color" 
              value={resumeData.accentLineColor || '#d1d5db'} 
              onChange={(e) => setAccentLineColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose accent line color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Main page text:</span>
            <input 
              type="color" 
              value={resumeData.textColor || '#222222'} 
              onChange={(e) => setTextColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose main page text color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Heading:</span>
            <input 
              type="color" 
              value={resumeData.headingColor || '#111111'} 
              onChange={(e) => setHeadingColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose heading color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Template background:</span>
            <input 
              type="color" 
              value={resumeData.backgroundColor || '#ffffff'} 
              onChange={(e) => setBackgroundColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose resume background color"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Card highlight:</span>
            <input 
              type="color" 
              value={resumeData.cardHighlightColor || '#f3e8ff'} 
              onChange={(e) => setCardHighlightColor(e.target.value)}
              style={{
                width: '30px',
                height: '30px',
                padding: '0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              aria-label="Choose card highlight color"
            />
          </div>

          {(activeTemplate === 'creative' || activeTemplate === 'executive') && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 500 }}>Gradient 1:</span>
              <input 
                type="color" 
                value={resumeData.gradientStartColor || '#7c3aed'} 
                onChange={(e) => setGradientStartColor(e.target.value)}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label="Choose gradient start color"
              />
            </div>
          )}

          {activeTemplate === 'creative' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 500 }}>Gradient 2:</span>
              <input 
                type="color" 
                value={resumeData.gradientEndColor || '#ec4899'} 
                onChange={(e) => setGradientEndColor(e.target.value)}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label="Choose gradient end color"
              />
            </div>
          )}

          {activeTemplate === 'executive' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 500 }}>Gold Accent:</span>
              <input 
                type="color" 
                value={resumeData.executiveGoldColor || '#d4af37'} 
                onChange={(e) => setExecutiveGoldColor(e.target.value)}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label="Choose executive gold accent color"
              />
            </div>
          )}

          {activeTemplate === 'sidebar' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 500 }}>Sidebar panel:</span>
              <input 
                type="color" 
                value={resumeData.sidebarBgColor || '#f8f9fa'} 
                onChange={(e) => setSidebarBgColor(e.target.value)}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label="Choose sidebar panel color"
              />
            </div>
          )}

          {(activeTemplate === 'sidebar' || activeTemplate === 'creative') && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 500 }}>
                {activeTemplate === 'sidebar' ? 'Sidebar text:' : 'Header text:'}
              </span>
              <input 
                type="color" 
                value={resumeData.sidebarTextColor || (activeTemplate === 'creative' ? '#ffffff' : '#e5e7eb')} 
                onChange={(e) => setSidebarTextColor(e.target.value)}
                style={{
                  width: '30px',
                  height: '30px',
                  padding: '0',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label={`Choose ${activeTemplate === 'sidebar' ? 'sidebar' : 'header'} text color`}
              />
            </div>
          )}
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input type="checkbox" checked={fitToOnePage} onChange={(e) => setFitToOnePage(e.target.checked)} />
          <span style={{ fontSize: '0.95rem' }}>One-page fit</span>
        </label>

        <button className="btn btn-primary" onClick={handlePrint}>
          <Download size={18} /> Download PDF
        </button>
      </div>

      {/* Resume Wrapper */}
      <div 
        className="resume-wrapper" 
        style={{
          width: '100%',
          maxWidth: '816px', // 8.5 inches at 96 DPI
          height: '1056px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)',
          '--brand-primary': resumeData.accentColor || '#3b82f6', // Inject custom accent color!
          '--brand-secondary': resumeData.brandSecondary || '#60a5fa',
          '--accent-line': resumeData.accentLineColor || '#d1d5db',
          '--card-highlight': resumeData.cardHighlightColor || '#f3e8ff',
          '--creative-gradient-start': resumeData.gradientStartColor || '#7c3aed',
          '--creative-gradient-end': resumeData.gradientEndColor || '#ec4899',
          '--executive-gold': resumeData.executiveGoldColor || '#d4af37',
          '--sidebar-bg': resumeData.sidebarBgColor || '#f8f9fa',
          '--sidebar-text': resumeData.sidebarTextColor || '#e5e7eb',
          '--template-bg': resumeData.backgroundColor || '#ffffff',
          '--template-text': resumeData.textColor || '#222222',
          '--template-heading': resumeData.headingColor || '#111111',
        }}
      >
        <div ref={wrapperRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div ref={componentRef} style={{ transform: `scale(${scale})`, transformOrigin: 'top center', transition: 'transform 180ms ease', width: '100%' }}>
          {activeTemplate === 'modern' && <ModernTemplate />}
          {activeTemplate === 'classic' && <ClassicTemplate />}
          {activeTemplate === 'ats' && <ATSTemplate />}
          {activeTemplate === 'sidebar' && <SidebarTemplate />}
          {activeTemplate === 'creative' && <CreativeTemplate />}
          {activeTemplate === 'designer' && <DesignerTemplate />}
          {activeTemplate === 'onecolumn' && <OneColumnTemplate />}
          {activeTemplate === 'portfolio' && <PortfolioTemplate />}
          {activeTemplate === 'minimal' && <MinimalTemplate />}
          {activeTemplate === 'fresher' && <FresherTemplate />}
          {activeTemplate === 'executive' && <ExecutiveTemplate />}
          </div>
        </div>
      </div>

    </div>
  );
}
