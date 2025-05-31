// App.jsx
import Three from './lib/Three';

export default function App() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      position: 'relative',
      fontFamily: `'Poppins', sans-serif`,
    }}>
      <Three />

      <h1 style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#ffffff',
        fontSize: '3.5rem',
        fontWeight: 700,
        textShadow: `
          0 0 8px rgba(255, 255, 255, 0.8),
          0 0 16px rgba(200, 220, 255, 0.6),
          0 0 32px rgba(180, 200, 255, 0.4)
        `,
        letterSpacing: '1.5px',
        zIndex: 10,
        textAlign: 'center'
      }}>
        Compsci @ THS
      </h1>
    </div>
  );
}
