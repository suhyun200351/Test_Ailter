---
name: ailter-design
description: Use this skill to generate well-branded interfaces and assets for Ailter (에일터 — an AI-content trust-judgment service for youth), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files:

- `colors_and_type.css` — all color & type tokens as CSS custom properties + semantic classes (`.ds-btn`, `.ds-social`, `.ds-option`, `.ds-display`, etc.). Link this first.
- `assets/` — brand assets: `logo-mark.svg` (tomato mascot), the mascot parts (`petal/stem/eye`), `google.png`, `apple.svg`.
- `ui_kits/mobile-app/` — reusable JSX components and a working click-through prototype to copy from.
- `preview/` — rendered token/component cards (reference only).

Core rules to honor: one decisive **coral-red** accent (`rgb(255,60,56)`) on a **warm off-white canvas** (`rgb(249,250,251)`); **Pretendard** for everything, **Wanted Sans ExtraBlack** only for the "Ailter" wordmark; rounded cards (12px) with thin `rgb(233,235,239)` borders and very soft shadows; polite Korean microcopy (`-요/-세요`); no emoji. The tomato mascot is the personality — use it, don't redraw it.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and apply the rules here. If invoked with no other guidance, ask what the user wants to build, ask a few focused questions, and act as an expert Ailter designer who outputs HTML artifacts or production code as needed.

> Substitution flags: brand fonts load from jsDelivr CDN (no offline files); the Kakao mark is rebuilt as the canonical KakaoTalk bubble. Swap in official files/assets when available.
