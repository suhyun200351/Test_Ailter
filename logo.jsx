// logo.jsx — Ailter tomato mark (faithful reconstruction from Figma vectors) + social icons

// ── Tomato logo: reproduces the Figma group structure & transforms exactly ──
function AilterMark({ size = 160 }) {
  const scale = size / 160;
  return (
    <div style={{
      position: 'relative',
      width: 160, height: 131.212,
      transform: `scale(${scale})`, transformOrigin: 'top center',
      background: 'rgb(255,255,255)',
      boxShadow: '0px 4px 22.7px 0px rgba(0,0,0,0.14)',
    }}>
      {/* inner group — flipped 180° like the source */}
      <div style={{
        position: 'absolute', left: 0, top: 0,
        width: 160, height: 131.212, overflow: 'hidden',
        transform: 'matrix(-1,0,0,-1,160,131.212)', transformOrigin: '0 0',
      }}>
        {/* body */}
        <img src="assets/petal.svg" alt="" style={{ position: 'absolute', left: 0, top: 0, width: 155.15, height: 113.497 }} />
        {/* stem (brown) */}
        <img src="assets/stem.svg" alt="" style={{
          position: 'absolute', left: 0, top: 0, width: 46.444, height: 37.71,
          transform: 'matrix(-0.948,0.319,-0.319,-0.948,151.819,113.513)', transformOrigin: '0 0',
        }} />
      </div>
      {/* eyes — drawn on top, unflipped, exactly as source */}
      <img src="assets/eye-1.svg" alt="" style={{
        position: 'absolute', left: 0, top: 0, width: 7.123, height: 9.423,
        transform: 'matrix(0.984,0.177,-0.133,0.991,78.786,62.942)', transformOrigin: '0 0',
      }} />
      <img src="assets/eye-2.svg" alt="" style={{
        position: 'absolute', left: 92.146, top: 60.652, width: 6.444, height: 9.666,
      }} />
    </div>
  );
}

// ── Brand icons for the social buttons ──
function KakaoIcon({ size = 20 }) {
  // KakaoTalk speech-bubble mark, in Kakao brown
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.4C6.75 3.4 2.5 6.78 2.5 10.95c0 2.7 1.79 5.06 4.48 6.4-.2.72-.72 2.62-.82 3.03-.13.5.18.5.39.36.16-.11 2.52-1.71 3.55-2.41.78.11 1.58.17 2.4.17 5.25 0 9.5-3.38 9.5-7.55S17.25 3.4 12 3.4Z" fill="#3A1D1D"/>
    </svg>
  );
}
function GoogleIcon({ size = 20 }) {
  return <img src="assets/google.png" alt="" style={{ width: size * 0.98, height: size, display: 'block' }} />;
}
function AppleIcon({ size = 20 }) {
  return <img src="assets/apple.svg" alt="" style={{ height: size, display: 'block' }} />;
}

// ── Back chevron (header) ──
function ChevronLeft({ color = 'rgb(84,84,81)' }) {
  return (
    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" aria-hidden="true">
      <path d="M9.5 1.5L1.5 10l8 8.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

Object.assign(window, { AilterMark, KakaoIcon, GoogleIcon, AppleIcon, ChevronLeft });
