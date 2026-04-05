# English Question Practice Planning Document

> **Summary**: Static web app with 400 open-ended English discussion questions across 4 difficulty levels, monetized via non-intrusive AdSense
>
> **Project**: english-question
> **Author**: Sejun Park
> **Date**: 2026-04-03
> **Status**: Draft

---

## Executive Summary

| Perspective | Content |
|-------------|---------|
| **Problem** | English learners worldwide lack accessible, structured conversation prompts for self-practice. Existing solutions are either paid AI apps ($8-15/mo) or unstructured blog lists with poor UX. |
| **Solution** | A free static web app (Vite + React) providing 400 curated open-ended questions across 4 difficulty levels (Beginner → Expert), with clean UI and non-intrusive AdSense monetization. |
| **Function/UX Effect** | Users land on a clean level-selection page, pick a difficulty, and immediately see a question card. Navigation is minimal (prev/next/random). Ads appear only as a bottom banner and between questions in All Questions View — never interrupting the practice flow. |
| **Core Value** | Zero-friction, free access to progressively challenging English discussion questions that build conversational confidence — monetized sustainably without degrading user experience. |

---

## Context Anchor

> Auto-generated from Executive Summary. Propagated to Design/Do documents for context continuity.

| Key | Value |
|-----|-------|
| **WHY** | English learners need free, structured conversation prompts — existing tools are either too expensive or poorly organized |
| **WHO** | Global English learners (ESL students, immigrants, self-learners). Primary ad market: Canada |
| **RISK** | Content quality — if questions feel generic, users won't return. Ad placement — if ads feel intrusive, users leave |
| **SUCCESS** | 5,000 MAU within 6 months, avg 3+ questions/session, bounce rate < 50%, AdSense revenue covers hosting + ad spend |
| **SCOPE** | MVP: Level selection + Question card + Navigation + AdSense bottom banner + All Questions View with inline ads |

---

## 1. Overview

### 1.1 Purpose

Provide a free, beautifully simple web app where English learners can practice open-ended discussion questions organized by 4 difficulty levels. Monetize through non-intrusive Google AdSense placement.

### 1.2 Background

- AI conversation apps (Speak, ELSA) charge $8-15/mo — overkill for users who just need discussion prompts
- Blog-based question lists have poor UX, no difficulty grading, and are ad-heavy
- Canada has 300K+ new immigrants/year needing English practice — underserved ad market
- Static hosting is free (Vercel/Netlify), making this a zero-infrastructure-cost product

### 1.3 Related Documents

- PRD: `docs/00-pm/english-question.prd.md`

---

## 2. Scope

### 2.1 In Scope (MVP)

- [x] Level selection landing page (4 levels: Beginner, Intermediate, Advanced, Expert)
- [x] Question card view (single question display, clean minimal design)
- [x] Navigation: Next / Previous / Random within selected level
- [x] Question counter (e.g., "42 / 100")
- [x] All Questions View (scrollable list of all 100 questions per level)
- [x] Google AdSense integration:
  - Bottom banner ad on question card pages
  - Inline ads in All Questions View (first after 10 questions, then every 10-14 random interval)
- [x] Mobile-first responsive design
- [x] 400 curated open-ended questions (100 per level)
- [x] Static deployment (Vite build → Vercel/Netlify)

### 2.2 Out of Scope (Future)

- Bookmark / favorites (localStorage) — v1.1
- Share question URL — v1.1
- Dark mode — v1.1
- PWA / offline support — v2.0
- Speech timer — v2.0
- User accounts / backend — not planned
- Multi-language UI — not planned

---

## 3. Requirements

### 3.1 Functional Requirements

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-01 | Landing page displays 4 difficulty level cards (Beginner, Intermediate, Advanced, Expert) with brief descriptions | High | Pending |
| FR-02 | Clicking a level navigates to question card view showing one random question from that level | High | Pending |
| FR-03 | Question card view has Next/Previous buttons to navigate questions within the level | High | Pending |
| FR-04 | Question card view has a "Random" button to jump to a random question | High | Pending |
| FR-05 | Question counter displays current position (e.g., "42 / 100") | High | Pending |
| FR-06 | "All Questions" button opens a scrollable list view of all 100 questions for the selected level | High | Pending |
| FR-07 | All Questions View shows inline AdSense ads: first ad after question #10, then at random 10-14 question intervals | High | Pending |
| FR-08 | Bottom banner AdSense ad on question card pages (fixed to bottom, does not overlap content) | High | Pending |
| FR-09 | "Back" or level indicator to return to landing page from question view | Medium | Pending |
| FR-10 | No page title/header on question card view — clean, minimal layout | Medium | Pending |

### 3.2 Non-Functional Requirements

| Category | Criteria | Measurement Method |
|----------|----------|-------------------|
| Performance | First Contentful Paint < 1.5s, Total Bundle < 200KB (excl. ads) | Lighthouse |
| Mobile | Touch-friendly, no horizontal scroll, readable on 320px+ | Manual + Chrome DevTools |
| SEO | Meta tags, Open Graph for social sharing, semantic HTML | Lighthouse SEO audit |
| Accessibility | Keyboard navigable, sufficient color contrast (WCAG 2.1 AA) | axe DevTools |
| Ad Compliance | AdSense policies compliant, ads clearly distinguishable from content | Google AdSense review |

---

## 4. Success Criteria

### 4.1 Definition of Done

- [ ] All 10 functional requirements implemented
- [ ] 400 questions created and organized by difficulty level
- [ ] AdSense script integrated and rendering correctly
- [ ] Deployed to Vercel/Netlify with custom domain (optional)
- [ ] Mobile responsive on iOS Safari + Android Chrome
- [ ] Lighthouse Performance score > 90

### 4.2 Quality Criteria

- [ ] Zero console errors in production build
- [ ] All routes work with direct URL access (client-side routing)
- [ ] Ad placements render without layout shift (CLS < 0.1)
- [ ] Bundle size < 200KB (gzipped, excluding ad scripts)

---

## 5. Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Question quality feels generic | High | Medium | Invest in curation: Beginner=relatable daily topics, Expert=genuinely thought-provoking. Test with real learners before launch |
| AdSense approval rejected | High | Low | Follow all AdSense policies: sufficient content (400 questions), original content, clear navigation, privacy policy page |
| Low retention (users don't return) | High | Medium | Track analytics from day 1. Plan v1.1 features (bookmarks, sharing) to increase stickiness |
| Ad layout causes CLS / poor UX | Medium | Medium | Reserve ad space with fixed dimensions. Bottom banner only — no pop-ups, no interstitials |
| Content copied by competitors | Low | High | Compete on UX and curation quality, not content exclusivity |

---

## 6. Impact Analysis

### 6.1 Changed Resources

| Resource | Type | Change Description |
|----------|------|--------------------|
| N/A (greenfield) | New Project | Entirely new project — no existing resources affected |

### 6.2 Current Consumers

N/A — new project with no existing consumers.

### 6.3 Verification

- [x] No existing resources to verify (greenfield project)

---

## 7. Architecture Considerations

### 7.1 Project Level Selection

| Level | Characteristics | Recommended For | Selected |
|-------|-----------------|-----------------|:--------:|
| **Starter** | Simple structure (`components/`, `lib/`, `types/`) | Static sites, portfolios, landing pages | **Yes** |
| Dynamic | Feature-based modules, BaaS integration | Web apps with backend | No |
| Enterprise | Strict layer separation, microservices | High-traffic systems | No |

### 7.2 Key Architectural Decisions

| Decision | Options | Selected | Rationale |
|----------|---------|----------|-----------|
| Build Tool | Vite / CRA / Next.js | **Vite** | User requirement. Fast build, lightweight, perfect for static SPA |
| UI Framework | React / Vue / Svelte | **React** | User requirement. Large ecosystem, familiar |
| Routing | React Router / TanStack Router | **React Router v7** | Most popular, simple for 2-3 routes |
| Styling | Tailwind / CSS Modules / styled-components | **Tailwind CSS** | Utility-first, fast development, small bundle with purge |
| Data Storage | JSON files / TypeScript constants | **TypeScript constants** | Type-safe, tree-shakeable, no runtime fetch needed |
| Ad Integration | AdSense / alternatives | **Google AdSense** | User requirement. Most popular, reliable payouts |
| Deployment | Vercel / Netlify / GitHub Pages | **Vercel** | Zero-config Vite deployment, free tier, analytics |
| Testing | Vitest / Jest | **Vitest** | Native Vite integration, fast |

### 7.3 Clean Architecture Approach

```
Selected Level: Starter

Folder Structure Preview:
┌─────────────────────────────────────────────────────┐
│ src/                                                │
│   components/     → Reusable UI components          │
│     AdBanner.tsx                                    │
│     QuestionCard.tsx                                │
│     LevelCard.tsx                                   │
│     Navigation.tsx                                  │
│   pages/          → Route-level page components     │
│     HomePage.tsx                                    │
│     QuestionPage.tsx                                │
│     AllQuestionsPage.tsx                            │
│   data/           → Question data (TypeScript)      │
│     beginner.ts                                     │
│     intermediate.ts                                 │
│     advanced.ts                                     │
│     expert.ts                                       │
│     index.ts                                        │
│   lib/            → Utilities                       │
│     adScheduler.ts  (inline ad interval logic)      │
│   types/          → TypeScript types                │
│     index.ts                                        │
│   App.tsx                                           │
│   main.tsx                                          │
│ index.html                                          │
│ vite.config.ts                                      │
│ tailwind.config.js                                  │
│ package.json                                        │
└─────────────────────────────────────────────────────┘
```

---

## 8. Convention Prerequisites

### 8.1 Existing Project Conventions

- [ ] `CLAUDE.md` has coding conventions section — **to create**
- [ ] ESLint configuration — **to create with Vite template**
- [ ] Prettier configuration — **to create**
- [ ] TypeScript configuration — **to create with Vite template**

### 8.2 Conventions to Define/Verify

| Category | Current State | To Define | Priority |
|----------|---------------|-----------|:--------:|
| **Naming** | Missing | Components: PascalCase, files: PascalCase.tsx, utils: camelCase.ts | High |
| **Folder structure** | Missing | Starter level: components/, pages/, data/, lib/, types/ | High |
| **Import order** | Missing | React → External → Internal → Types → Styles | Medium |
| **Error handling** | Missing | Minimal — graceful fallback for ad loading failures only | Low |

### 8.3 Environment Variables Needed

| Variable | Purpose | Scope | To Be Created |
|----------|---------|-------|:-------------:|
| `VITE_ADSENSE_CLIENT_ID` | AdSense publisher ID (ca-pub-XXXX) | Client | Yes |

### 8.4 Pipeline Integration

| Phase | Status | Document Location | Command |
|-------|:------:|-------------------|---------|
| Phase 1 (Schema) | Skipped | N/A — simple data structure, defined in types/ | - |
| Phase 2 (Convention) | Pending | Will be set during project init | `/phase-2-convention` |

---

## 9. Question Content Strategy

### 9.1 Difficulty Level Design

| Level | Style | Example Questions |
|-------|-------|-------------------|
| **Beginner** | Daily life, simple opinions, personal experiences | "What is the most delicious food you've eaten recently?" / "If you could visit any city in the world, where would you go?" |
| **Intermediate** | Comparisons, preferences, light debates, experiences | "Do you think working from home is better than working in an office? Why?" / "What skill do you wish you had learned as a child?" |
| **Advanced** | Abstract concepts, ethics, society, hypotheticals | "Should governments prioritize economic growth over environmental protection?" / "How has technology changed the way we form relationships?" |
| **Expert** | Deep philosophical questions, paradoxes, complex debates | "Is true altruism possible, or is every kind act ultimately self-serving?" / "If you could erase one invention from history, what would it be and why?" |

### 9.2 Question Curation Guidelines

- All questions must be **open-ended** (no yes/no answers)
- Questions must be **culturally neutral** — accessible to learners from any country
- Each question should provoke at least 2-3 minutes of thoughtful speaking
- No duplicate themes within the same level
- Beginner questions use simple vocabulary; Expert questions may use advanced vocabulary
- All 400 questions provided as TypeScript constants in `src/data/`

---

## 10. Ad Strategy

### 10.1 AdSense Placement Rules

| Placement | Location | Behavior |
|-----------|----------|----------|
| **Bottom Banner** | Fixed to viewport bottom on Question Card pages | Always visible, does not overlap question content. Padding added to prevent content being hidden behind ad. |
| **Inline (All Questions View)** | Between question items in the scrollable list | First ad appears after question #10. Subsequent ads appear at random intervals between 10-14 questions. |

### 10.2 Ad Implementation Details

- Use `@next/third-parties` pattern or manual `<script>` for AdSense integration
- Reserve fixed height for ad slots to prevent Cumulative Layout Shift (CLS)
- Bottom banner: 90px height reserved (standard mobile banner = 320x50, tablet = 728x90)
- Inline ads: 250px height reserved (responsive ad unit)
- `adScheduler.ts` utility: generates ad insertion indices using random interval (10-14)
  - First ad index: 10
  - Next indices: previous + random(10, 14)
  - Pre-computed on page load to avoid re-renders

### 10.3 AdSense Compliance Checklist

- [ ] Privacy Policy page (required for AdSense approval)
- [ ] Sufficient original content (400 unique questions)
- [ ] Clear navigation and site structure
- [ ] No misleading ad placement (ads clearly distinguishable)
- [ ] No more than 3 ads per viewport on any page
- [ ] Mobile-friendly responsive ad units

---

## 11. UX Flow

### 11.1 Page Flow

```
[Landing Page]              [Question Card]           [All Questions]
┌──────────────┐           ┌──────────────┐          ┌──────────────┐
│              │           │              │          │ Q1           │
│  Beginner    │──click──> │  "What is    │          │ Q2           │
│  Intermediate│           │   the most..." │        │ ...          │
│  Advanced    │           │              │          │ Q10          │
│  Expert      │           │ [<] 42/100 [>]│         │ [Ad]         │
│              │           │   [Random]   │          │ Q11          │
│              │           │   [All Qs]   │──click──>│ ...          │
│              │           │              │          │ Q22 (random) │
│              │           ├──────────────┤          │ [Ad]         │
│              │           │ [AdSense]    │          │ Q23          │
└──────────────┘           └──────────────┘          └──────────────┘
                             ↑ [Back to levels]
```

### 11.2 Design Principles

1. **No title/header on question pages** — maximum space for the question
2. **Level selection only on landing page** — clean separation of concerns
3. **One question at a time** — focus without overwhelm
4. **Bottom-anchored ad** — visible but never in the way
5. **Generous whitespace** — let the question breathe
6. **Large, readable typography** — the question IS the interface

---

## 12. Next Steps

1. [ ] Create design document (`/pdca design english-question`)
2. [ ] Set up Vite + React + Tailwind project
3. [ ] Curate 400 questions (100 per level)
4. [ ] Implement MVP features
5. [ ] Integrate AdSense
6. [ ] Deploy to Vercel
7. [ ] Apply for AdSense approval

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-04-03 | Initial draft based on PRD + user requirements | Sejun Park |
