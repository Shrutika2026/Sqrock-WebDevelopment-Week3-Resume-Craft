import { useState, useRef, useEffect } from 'react';
import { Download, LayoutTemplate, Printer } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import ATSTemplate from './templates/ATSTemplate';
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
    resetSavedData,
  } = useResume();

  const [activeTemplate, setActiveTemplate] = useState(resumeData.selectedTemplate || 'modern');
  const [toastMessage, setToastMessage] = useState('');
  const componentRef = useRef();

  useEffect(() => {
    if (resumeData.selectedTemplate && resumeData.selectedTemplate !== activeTemplate) {
      setActiveTemplate(resumeData.selectedTemplate);
    }
  }, [resumeData.selectedTemplate, activeTemplate]);

  const showToast = (message) => {
    setToastMessage(message);
    window.setTimeout(() => setToastMessage(''), 2200);
  };

  const handlePrint = () => {
    if (!componentRef.current) {
      showToast('Unable to open print preview. Please try again.');
      return;
    }

    try {
      const printWindow = window.open('', '_blank', 'width=1000,height=800');
      if (!printWindow) {
        showToast('Unable to open print preview. Please try again.');
        return;
      }

      const printContent = componentRef.current.cloneNode(true);
      printContent.style.width = '816px';
      printContent.style.maxWidth = '816px';
      printContent.style.margin = '0 auto';
      printContent.style.boxSizing = 'border-box';
      printContent.style.backgroundColor = resumeData.backgroundColor || '#ffffff';

      printWindow.document.write('<!DOCTYPE html><html><head>');
      printWindow.document.write(document.head.innerHTML);
      printWindow.document.write('</head><body style="margin:0; padding:1rem; background:#f0f0f0;">');
      printWindow.document.body.appendChild(printContent);
      printWindow.document.write('</body></html>');
      printWindow.document.close();

      printWindow.focus();
      printWindow.onload = () => {
        printWindow.print();
        setTimeout(() => printWindow.close(), 100);
      };

      showToast('Print preview opened successfully');
    } catch (error) {
      console.error('Print preview error:', error);
      showToast('Unable to open print preview. Please try again.');
    }
  };

  const handleDownload = async () => {
    if (!componentRef.current) {
      showToast('Unable to download PDF. Please try again.');
      return;
    }

    try {
      // Clone the resume into an offscreen container so html2canvas
      // can render the full content (not just the visible scrolled area).
      const element = componentRef.current;
      const clone = element.cloneNode(true);
      clone.style.width = '816px';
      clone.style.maxWidth = '816px';
      clone.style.margin = '0 auto';
      clone.style.boxSizing = 'border-box';
      clone.style.backgroundColor = resumeData.backgroundColor || '#ffffff';

      const offScreen = document.createElement('div');
      offScreen.style.position = 'fixed';
      offScreen.style.left = '-10000px';
      offScreen.style.top = '0';
      offScreen.style.width = '816px';
      offScreen.style.overflow = 'visible';
      offScreen.appendChild(clone);
      document.body.appendChild(offScreen);

      const canvas = await html2canvas(clone, {
        scale: Math.max(2, window.devicePixelRatio || 2),
        useCORS: true,
        backgroundColor: '#ffffff',
        scrollY: -window.scrollY,
      });

      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('portrait', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imageData);
      const pdfWidth = pageWidth;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imageData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imageData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('resume.pdf');
      showToast('Resume downloaded successfully');

      // cleanup offscreen clone
      try {
        document.body.removeChild(offScreen);
      } catch (e) {
        // ignore
      }
    } catch (error) {
      console.error('PDF download error:', error);
      showToast('Download failed. Please try again.');
    }
  };

  const handleReset = () => {
    resetSavedData();
    showToast('Resume reset successfully');
  };

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
      backgroundColor: '#FFFFFF',
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
      (activeTemplate === 'executive' && resumeData.executiveGoldColor === undefined)
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

  const handleSave = () => {
    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      showToast('Resume saved successfully');
    } catch (e) {
      console.error('Failed to save resume', e);
      showToast('Resume saved successfully');
    }
  };

  return (
    <div className="preview-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Toolbar */}
      <div className="preview-toolbar" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '900px',
        marginBottom: '1rem',
        padding: '0.8rem',
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div className="template-selector" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <LayoutTemplate size={18} /> Template:
          </span>
          <select value={activeTemplate} onChange={(e) => handleTemplateChange(e.target.value)} style={{ padding: '0.45rem' }}>
            <option value="modern">Modern Professional</option>
            <option value="classic">Traditional Classic</option>
            <option value="ats">Minimal ATS Professional</option>
            <option value="creative">Creative Portfolio</option>
            <option value="designer">Designer / Visual Portfolio</option>
            <option value="onecolumn">One-Column Professional</option>
            <option value="portfolio">Portfolio Focused</option>
            <option value="minimal">Minimal / One-Page</option>
            <option value="fresher">Student/Fresher Resume</option>
            <option value="executive">Executive Dark Theme</option>
          </select>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Primary:</span>
            <input type="color" value={resumeData.accentColor || '#3b82f6'} onChange={(e) => setAccentColor(e.target.value)} style={{ width: '26px', height: '26px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }} aria-label="Choose primary color" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 500 }}>Secondary:</span>
            <input type="color" value={resumeData.brandSecondary || '#60a5fa'} onChange={(e) => setBrandSecondary(e.target.value)} style={{ width: '26px', height: '26px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }} aria-label="Choose secondary color" />
          </div>

        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button type="button" className="btn btn-secondary" onClick={handleSave} style={{ marginRight: '0.5rem' }}>Save Changes</button>
          <button type="button" className="btn btn-danger" onClick={handleReset} style={{ marginRight: '0.5rem' }}>Reset Resume</button>
          <button type="button" className="btn btn-secondary" onClick={handlePrint} style={{ marginRight: '0.5rem' }}><Printer size={16} /> Print Resume</button>
          <button type="button" className="btn btn-primary" onClick={handleDownload}><Download size={16} /> Download PDF</button>
        </div>
      </div>

      {toastMessage && (
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
          {toastMessage}
        </div>
      )}

      {/* Resume Wrapper */}
      <div className="resume-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '816px', maxHeight: 'calc(100vh - 180px)', overflowY: 'auto', display: 'flex', justifyContent: 'center', boxShadow: 'var(--shadow-lg)', '--brand-primary': resumeData.accentColor || '#3b82f6', '--brand-secondary': resumeData.brandSecondary || '#60a5fa', '--accent-line': resumeData.accentLineColor || '#d1d5db', '--card-highlight': resumeData.cardHighlightColor || '#f3e8ff', '--creative-gradient-start': resumeData.gradientStartColor || '#7c3aed', '--creative-gradient-end': resumeData.gradientEndColor || '#ec4899', '--executive-gold': resumeData.executiveGoldColor || '#d4af37', '--sidebar-bg': resumeData.sidebarBgColor || '#f8f9fa', '--sidebar-text': resumeData.sidebarTextColor || '#e5e7eb', '--template-bg': resumeData.backgroundColor || '#ffffff', '--template-text': resumeData.textColor || '#222222', '--template-heading': resumeData.headingColor || '#111111' }}>
        <div className="resume-preview-content" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div id="resume-print-root" ref={componentRef} style={{ width: '100%' }}>
            {activeTemplate === 'modern' && <ModernTemplate />}
            {activeTemplate === 'classic' && <ClassicTemplate />}
            {activeTemplate === 'ats' && <ATSTemplate />}
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
