export function renderDescription(text) {
  if (!text) return null;
  // Preserve paragraphs and single-line breaks.
  // Split into paragraphs on double-newline, and within each paragraph convert single newlines to <br />.
  if (text.includes('\n')) {
    const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(p => p !== '');
    return (
      <>
        {paragraphs.map((para, idx) => (
          <p key={idx} style={{ margin: '0.25rem 0 0 0' }}>
            {para.split('\n').map((line, i) => (
              // insert <br/> between manual line breaks
              <span key={i}>{line}{i < para.split('\n').length - 1 ? <br /> : null}</span>
            ))}
          </p>
        ))}
      </>
    );
  }

  return <p>{text}</p>;
}
