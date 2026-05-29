import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log the error to an external service here
    console.error('Unhandled error caught by ErrorBoundary:', error, info);
    this.setState({ info });
  }

  handleReload = () => {
    try {
      localStorage.clear();
    } catch (e) {}
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { error, info } = this.state;

    return (
      <div style={{ padding: 24, fontFamily: 'Inter, system-ui, Arial', color: '#111' }}>
        <h2 style={{ marginTop: 0 }}>Something went wrong</h2>
        <p>The app encountered an unexpected error while rendering. This usually indicates a runtime problem in your browser or app code.</p>
        <div style={{ background: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 6px 20px rgba(0,0,0,0.06)', marginBottom: 12 }}>
          <strong>Error:</strong>
          <pre style={{ whiteSpace: 'pre-wrap', margin: '8px 0 0 0', fontSize: 12 }}>{String(error)}</pre>
        </div>
        {info && (
          <details style={{ background: '#f7f7f8', padding: 12, borderRadius: 8 }}>
            <summary style={{ cursor: 'pointer' }}>Stack / component trace</summary>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>{info.componentStack}</pre>
          </details>
        )}

        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={this.handleReload} style={{ padding: '8px 12px', borderRadius: 8, border: 'none', background: '#2563eb', color: 'white', cursor: 'pointer' }}>
            Clear local data & reload
          </button>
          <button onClick={() => window.open('about:blank', '_self')} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>
            Open blank page
          </button>
        </div>
      </div>
    );
  }
}
