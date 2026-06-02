# Ailter — Mobile App UI Kit

A high-fidelity, click-through recreation of the Ailter onboarding flow, rebuilt from `Test_Ailter.fig`. These are cosmetic recreations meant for prototyping — not production logic.

## Run
Open `index.html`. It renders inside a 402×874 iOS device frame and is fully interactive:
- **Splash / Login** — tap any social button (Kakao / Google / Apple) to advance.
- **Age select** — tap an age band to select it (tap again to deselect); the **다음** CTA stays disabled until a band is chosen; the back chevron returns to login. Screens slide horizontally.

## Files
| File | Role |
|------|------|
| `index.html` | App shell + screen router (slide transition, state) |
| `screens.jsx` | `LoginScreen`, `AgeScreen`, and reusable `SocialButton`, `OptionRow`, `ProgressBar` |
| `logo.jsx` | `AilterMark` (mascot), `KakaoIcon`/`GoogleIcon`/`AppleIcon`, `ChevronLeft` |
| `ios-frame.jsx` | Device bezel, status bar, home indicator (starter component) |

Brand assets are pulled from the design-system root (`../../assets/`). Tokens mirror `../../colors_and_type.css`.

## Component coverage
Social login buttons (3 brand variants), single-select option rows (default/selected), primary CTA (enabled/disabled validation gate), step header with back action, 3-segment progress bar, and the mascot logo lockup.

## Not included
Only the two designed frames exist in the source, so the flow ends at "다음". Downstream sign-up steps (steps 2–3 of the progress bar), home, and content-trust screens are **intentionally omitted** — they were not in the Figma. Add them here as they're designed.
