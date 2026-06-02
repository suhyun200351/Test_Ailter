# Ailter Design System

**Ailter** (Korean: 에일터 / wordmark "Ailter") is a **mobile service that helps teenagers judge the trustworthiness of AI-generated content** — tagline _"청소년을 위한 AI 콘텐츠 신뢰 판단 서비스"_ ("An AI-content trust-judgment service for youth"). Age is a first-class signal in the product: recommended content and protection features adapt to the user's age band, so onboarding collects it up front.

The visual identity is **friendly, soft, and safety-forward**: a warm off-white canvas, a single confident **coral-red** accent, generous rounded cards, and a hand-drawn **tomato mascot** that keeps the tone approachable for a young audience.

## Sources

This system was reconstructed from a single design source:

- **Figma file:** `Test_Ailter.fig` (page "Page-1") — two mobile frames:
  - `스플래쉬 / 로그인` — Splash / Login (node `1:663`, 390×844)
  - `A-0-2 연령대 선택_회원가입 시` — Age-band selection during sign-up (node `1:688`, 390×844)
- No codebase, marketing site, or production tokens were provided. All values below are measured directly from the Figma frames and their components. Where the source was lossy (the mascot was exported as layered vectors; brand fonts ship from CDN), this is flagged inline.

---

## Content Fundamentals

- **Language:** Korean (한국어). All UI copy is Korean; only the brand wordmark **"Ailter"** and platform names (AI) appear in Latin script.
- **Voice:** Warm, plain, and reassuring — it speaks _to_ the user (사용자 / 너에 가까운 존댓말). Sentences use the polite **-요 / -세요** ending, never blunt commands.
  - Title: **"사용자의 연령대를 선택해주세요"** ("Please select your age band") — request, not order.
  - Helper: **"연령대에 따라 추천 콘텐츠와 보호 기능이 달라질 수 있어요"** ("Recommended content and protection features may change by age band") — explains _why_, softly, with the gentle **-어요** ending.
- **Microcopy style:** Short, single-purpose. Buttons are verb-led and consistent: **"…로 시작하기"** ("Start with …") for every social login; **"다음"** ("Next") for forward progress.
- **Casing & punctuation:** Korean has no casing. The wordmark is title-case **Ailter**. No terminal periods on UI labels or button text. No exclamation marks in-product.
- **Numbers/ranges:** Age bands written tersely with native markers — **"13세 이하"**, **"14~16세"**, **"17~19세"**, **"20세 이상"** (tilde `~` for ranges, 이하/이상 for bounds).
- **Emoji:** None. Personality comes from the mascot, not emoji.

---

## Visual Foundations

### Color
- **One accent, used decisively.** Coral-red `rgb(255,60,56)` is the single brand action color — primary CTA fill, selected-state border, progress fill. A hotter `rgb(255,28,0)` is reserved for the **wordmark only**.
- **Warm-neutral canvas.** Screens sit on `rgb(249,250,251)` (a faintly cool off-white); pure white `rgb(255,255,255)` is used for elevated/“sticker” surfaces. Hairlines are `rgb(233,235,239)`.
- **Two text tones:** primary `rgb(30,30,30)`, secondary/helper `rgb(111,113,124)`. Disabled text drops to ~`rgb(170,172,180)`.
- **Selected tint:** the faint pink `rgb(255,248,248)` fills a chosen option — accent at very low saturation, never a heavy fill.
- **Brand-partner colors** appear only on their own buttons: Kakao yellow `rgb(249,224,0)`, Apple chip gray `rgb(233,235,239)`, Kakao bubble brown `#3A1D1D`.
- **Mascot palette:** body is a vertical gradient `rgba(255,114,97,.34) → rgba(255,126,51,.34) → rgb(255,74,52)`; stem `rgb(126,70,55) → rgb(53,32,27)`; eyes near-black `rgb(18,18,18)`.

### Type
- **Pretendard Variable** is the workhorse (Korean + Latin) for titles, body, options, CTAs.
- **Wanted Sans (ExtraBlack)** is the display face — used at 56px for the **Ailter** wordmark only.
- **SUIT** sets the social-login button labels (14px / Medium). _(Visually close to Pretendard; if SUIT is unavailable it falls back to Pretendard.)_
- **Tracking is consistently negative:** −0.02em for Korean text, −0.016em for buttons, −0.04em for the display wordmark. **Line-height 1.5** almost everywhere.
- Scale in use: Display 56 · Title 24/Bold · Body 16/Regular · Label·Button 14/Medium · Nav title 14/Regular.

### Space, shape & elevation
- **20px screen gutters** on every edge. Vertical rhythm: **16px** between option rows, **12px** between login buttons.
- **Corner radii:** 8px (social buttons), 12px (option rows + primary CTA), 4px (icon hit-areas). The mascot "sticker" card is square.
- **Control heights:** 52px social buttons, 56px option rows & CTA. Icon buttons 36×36 (≥44px touch target preserved via padding).
- **Elevation is sparse and soft.** Only two real shadows: the mascot sticker `0 4px 22.7px rgba(0,0,0,.14)`, and a barely-there lift on white buttons `0 1px 2px rgba(0,0,0,.05)`. No colored or hard shadows.
- **Borders over shadows** for definition: 1px `rgb(233,235,239)` outlines white/neutral surfaces; selected state swaps the border to 1px accent.

### Motion & states
- **Transitions are short and eased** (~0.18–0.22s) on background/border/color for selection and CTA enable; screen-to-screen uses a ~0.42s `cubic-bezier(0.4,0,0.15,1)` horizontal slide.
- **Press state:** subtle scale-down (~0.98) + slight brightness drop on buttons. No bounce.
- **Selection:** instant tint + border swap; tapping a selected row deselects it.
- **Validation gating:** the primary CTA is disabled (neutral gray fill, muted label, `not-allowed`) until a valid choice exists, then fills accent-red.
- Respect `prefers-reduced-motion` for the slide transition in production.

### Layout
- Built for a **390×844** iPhone canvas (recreated inside a 402×874 device frame). iOS status bar + home indicator are present.
- **Top-anchored header / bottom-anchored CTA.** The forward action lives in a fixed bottom region above the home indicator; content scrolls between header and CTA.
- A **3-segment progress bar** sits directly under the header during multi-step sign-up (age = step 1 of 3).

---

## Iconography

- **Minimal, purposeful icons.** The product uses only what it needs: a **back chevron** (thin ~2px stroke, rounded caps/joins, `rgb(84,84,81)`) and **brand/social marks**.
- **Social marks are real brand assets, not redrawn UI icons:**
  - Google — full-color "G" raster (`assets/google.png`).
  - Apple — monochrome silhouette (`assets/apple.svg`).
  - Kakao — KakaoTalk speech-bubble in Kakao brown (`#3A1D1D`).
- **No icon font / no icon library** appears in the source. Glyphs are inline SVG at 20px on buttons, 11–20px for chevrons.
- **No emoji and no Unicode dingbats** are used as icons anywhere.
- The **mascot is the hero brand graphic**, not an icon — see `assets/logo-mark.svg`.

> Substitution flags: the **Kakao** mark is rebuilt as the canonical KakaoTalk bubble (the Figma export was a layered "TALK" lockup that doesn't survive as a clean asset). Brand **fonts load from jsDelivr CDN** — no offline font files were available. Replace both with official assets/files when you have them.

---

## Index / Manifest

| File | What it is |
|------|------------|
| `README.md` | This document |
| `colors_and_type.css` | All design tokens (color + type) as CSS custom properties + semantic classes |
| `SKILL.md` | Agent-skill entry point |
| `assets/` | Brand assets — `logo-mark.svg` (mascot), petal/stem/eye parts, `google.png`, `apple.svg` |
| `preview/` | Design-system cards shown in the Design System tab |
| `ui_kits/mobile-app/` | High-fidelity, click-through recreation of the app (login + age-select) with reusable JSX components |

**Fonts:** Pretendard Variable, Wanted Sans (ExtraBlack), SUIT — loaded via CDN in `colors_and_type.css`. See substitution flag above.
