import { useResume } from '../context/ResumeContext';
import GenericListForm from './GenericListForm';

export default function CertificationsForm() {
  const { resumeData, addCertification, updateCertification, removeCertification, reorderSection } = useResume();
  const certifications = resumeData.certifications || [];

  return (
    <GenericListForm
      title="Certifications"
      addLabel="Add Certification"
      items={certifications}
      onAdd={() => addCertification({ certificateName: '', organization: '', completionDate: '', credentialUrl: '' })}
      onUpdate={updateCertification}
      onRemove={removeCertification}
      onMove={(index, direction) => {
        const nextIndex = direction === 'up' ? index - 1 : index + 1;
        if (nextIndex < 0 || nextIndex >= certifications.length) return;
        const newOrder = [...certifications];
        const [moved] = newOrder.splice(index, 1);
        newOrder.splice(nextIndex, 0, moved);
        reorderSection('certifications', newOrder);
      }}
      fields={[
        { name: 'certificateName', label: 'Certificate Name', placeholder: 'AWS Certified Developer' },
        { name: 'organization', label: 'Organization', placeholder: 'Amazon Web Services' },
        { name: 'completionDate', label: 'Completion Date', type: 'month' },
        { name: 'credentialUrl', label: 'Credential URL', type: 'url', placeholder: 'https://example.com' },
      ]}
      itemTitle={(item) => item.certificateName || 'New Certification'}
      emptyText="No certifications added yet."
    />
  );
}
