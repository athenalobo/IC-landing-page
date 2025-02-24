// src/components/MainView/styles.js
export const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#0a0a0a',
    maxHeight: '100vh',
    overflowY: 'auto',
  },
  card: {
    backgroundColor: '#252531',
    border: '1px solid #252531',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    backgroundColor: '#2D2D3A',
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    border: '1px solid #8b5cf6',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '10px',
    color: '#8b5cf6',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  },
  title: {
    color: 'white',
    fontSize: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  stat: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    color: '#a0a0a0',
  },
  statValue: {
    color: 'white',
    fontWeight: 500,
  },
  
};

const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);