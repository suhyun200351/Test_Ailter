// screens.jsx — Login (splash) + Age-select screens

const { useState } = React;

// ───────────────────────── Social login button ─────────────────────────
function SocialButton({ icon, label, bg, color, border, onClick }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        width: '100%', height: 52, borderRadius: 8,
        background: bg, border: border || 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: 'var(--kr-btn)', fontWeight: 500, fontSize: 14,
        letterSpacing: '-0.016em', color,
        boxShadow: bg === 'rgb(255,255,255)' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
        transform: pressed ? 'scale(0.98)' : 'scale(1)',
        filter: pressed ? 'brightness(0.96)' : 'none',
        transition: 'transform 0.12s ease, filter 0.12s ease',
      }}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      paddingBottom: 34,
      background: 'var(--bg)',
    }}>
      {/* logo + wordmark, optically centered in the open area */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 0,
      }}>
        <AilterMark size={160} />
        <div style={{
          fontFamily: 'var(--display)', fontWeight: 900, fontSize: 56,
          lineHeight: 1.5, letterSpacing: '-0.04em', color: 'var(--accent-strong)',
          textShadow: '0px 1px 6px rgba(0,0,0,0.16)', marginTop: 4,
        }}>Ailter</div>
        <div style={{
          maxWidth: 256, textAlign: 'center',
          fontSize: 16, lineHeight: 1.5, letterSpacing: '-0.02em', color: 'var(--muted)',
        }}>청소년을 위한 AI 콘텐츠 신뢰 판단 서비스</div>
      </div>

      {/* social logins */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 12,
        padding: '20px 20px 24px',
      }}>
        <SocialButton icon={<KakaoIcon />} label="카카오로 시작하기"
          bg="rgb(249,224,0)" color="rgb(0,0,0)" onClick={onLogin} />
        <SocialButton icon={<GoogleIcon />} label="구글로 시작하기"
          bg="rgb(255,255,255)" color="rgb(0,0,0)" border="1px solid var(--border)" onClick={onLogin} />
        <SocialButton icon={<AppleIcon />} label="애플로 시작하기"
          bg="rgb(233,235,239)" color="rgb(0,0,0)" onClick={onLogin} />
      </div>
    </div>
  );
}

// ───────────────────────── Age select ─────────────────────────
const AGE_OPTIONS = ['13세 이하', '14~16세', '17~19세', '20세 이상'];

function ProgressBar({ step = 1, total = 3 }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: 4 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 4,
          background: i < step ? 'var(--accent)' : 'var(--border)',
          transition: 'background 0.3s ease',
        }} />
      ))}
    </div>
  );
}

function OptionRow({ label, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', height: 56, borderRadius: 12,
      background: selected ? 'var(--accent-tint)' : 'var(--bg)',
      border: selected ? '1px solid var(--accent)' : '1px solid var(--border)',
      display: 'flex', alignItems: 'center', padding: '0 16px',
      fontFamily: 'var(--kr)', fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em',
      color: selected ? 'var(--ink)' : 'var(--muted)',
      transition: 'background 0.18s ease, border-color 0.18s ease, color 0.18s ease',
      textAlign: 'left',
    }}>
      {label}
    </button>
  );
}

function AgeScreen({ active, age, onSelect, onBack, onNext }) {
  const ready = age !== null;
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      paddingBottom: 34,
      background: 'var(--bg)',
    }}>
      {/* header */}
      <div style={{
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 20px',
      }}>
        <button onClick={onBack} style={{
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 8,
        }}><ChevronLeft /></button>
        <span style={{ fontSize: 14, lineHeight: 1.5, letterSpacing: '-0.02em', color: 'var(--ink)' }}>연령대 선택</span>
        <div style={{ width: 36, height: 36 }} />
      </div>
      <ProgressBar step={1} total={3} />

      {/* heading */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{
          fontWeight: 700, fontSize: 24, lineHeight: 1.35, letterSpacing: '-0.02em', color: 'var(--ink)',
        }}>사용자의 연령대를<br/>선택해주세요</div>
        <div style={{
          fontSize: 16, lineHeight: 1.5, letterSpacing: '-0.02em', color: 'var(--muted)', textWrap: 'pretty',
        }}>연령대에 따라 추천 콘텐츠와 보호 기능이 달라질 수 있어요</div>
      </div>

      {/* options */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {AGE_OPTIONS.map((label, i) => (
          <OptionRow key={i} label={label} selected={age === i}
            onClick={() => onSelect(age === i ? null : i)} />
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* CTA */}
      <div style={{ padding: '20px' }}>
        <button onClick={ready ? onNext : undefined} disabled={!ready} style={{
          width: '100%', height: 56, borderRadius: 12,
          background: ready ? 'var(--accent)' : 'var(--border)',
          color: ready ? 'var(--bg)' : 'rgb(170,172,180)',
          fontFamily: 'var(--kr)', fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em',
          cursor: ready ? 'pointer' : 'not-allowed',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}>다음</button>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen, AgeScreen, SocialButton, ProgressBar, OptionRow });
