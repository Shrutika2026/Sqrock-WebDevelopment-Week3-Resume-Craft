export function renderDescription(text) {
  if (!text) return null;
  
  // If the text contains newlines, render as bullet points
  if (text.includes('\n')) {
    const points = text.split('\n').filter(line => line.trim() !== '');
    return (
      <ul style={{ margin: '0.25rem 0 0 1rem', padding: 0 }}>
        {points.map((point, i) => (
          <li key={i} style={{ marginBottom: '0.1rem' }}>{point}</li>
        ))}
      </ul>
    );
  }
  
  // Otherwise just return the paragraph
  return <p>{text}</p>;
}
