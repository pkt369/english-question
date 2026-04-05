# English Question Practice Design Document

> **Summary**: Static SPA with 4-level English discussion questions, AdSense monetization, Vite + React + Tailwind
>
> **Project**: english-question
> **Version**: 1.0.0
> **Author**: Sejun Park
> **Date**: 2026-04-03
> **Status**: Draft
> **Planning Doc**: [english-question.plan.md](../../01-plan/features/english-question.plan.md)

### Pipeline References

| Phase | Document | Status |
|-------|----------|--------|
| Phase 1 | Schema Definition | N/A (simple data) |
| Phase 2 | Coding Conventions | Defined in Section 10 |
| Phase 3 | Mockup | Defined in Section 5 |
| Phase 4 | API Spec | N/A (static site, no API) |

---

## Context Anchor

> Copied from Plan document. Ensures strategic context survives Design->Do handoff.

| Key | Value |
|-----|-------|
| **WHY** | English learners need free, structured conversation prompts -- existing tools are either too expensive or poorly organized |
| **WHO** | Global English learners (ESL students, immigrants, self-learners). Primary ad market: Canada |
| **RISK** | Content quality -- if questions feel generic, users won't return. Ad placement -- if ads feel intrusive, users leave |
| **SUCCESS** | 5,000 MAU within 6 months, avg 3+ questions/session, bounce rate < 50%, AdSense revenue covers hosting + ad spend |
| **SCOPE** | MVP: Level selection + Question card + Navigation + AdSense bottom banner + All Questions View with inline ads |

---

## 1. Overview

### 1.1 Design Goals

- **Minimalist UI**: The question IS the interface. No clutter, no distractions.
- **Fast load**: < 1.5s FCP. All data bundled as TypeScript constants (zero API calls).
- **Non-intrusive ads**: Bottom banner + inline ads in All Questions View only. No interstitials, no pop-ups.
- **Mobile-first**: Touch-friendly, optimized for 375px+ screens.

### 1.2 Design Principles

- **Content-first**: Maximum screen real estate for the question text
- **Progressive complexity**: UI matches difficulty level — Beginner feels approachable, Expert feels sophisticated
- **Ad transparency**: Ads are always visually distinguishable from content
- **Zero-config UX**: No accounts, no settings, no onboarding — just questions

---

## 2. Architecture Options

### 2.0 Architecture Comparison

| Criteria | Option A: Minimal | Option B: Clean | **Option C: Pragmatic** |
|----------|:-:|:-:|:-:|
| **Approach** | All-in-one files | Feature-based modules | Component/page separation |
| **New Files** | ~10 | ~20 | **~15** |
| **Complexity** | Low | High | **Medium** |
| **Maintainability** | Medium | High | **High** |
| **Effort** | Low | High | **Medium** |
| **Risk** | Low (coupled) | Low (over-engineered) | **Low (balanced)** |
| **Recommendation** | Quick prototype | Enterprise app | **This project** |

**Selected**: Option C -- **Rationale**: Right balance of organization and simplicity for a Starter-level static site with clear path to v1.1 features (bookmarks, sharing).

### 2.1 Component Diagram

```
┌─────────────────────────────────────────────┐
│                   Browser                    │
│                                             │
│  ┌─────────┐   ┌──────────────┐   ┌──────┐│
│  │ React   │──>│ React Router │──>│ Pages ││
│  │ (main)  │   │  (v7)        │   │      ││
│  └─────────┘   └──────────────┘   └──┬───┘│
│                                      │     │
│                    ┌─────────────────┐│     │
│                    │ Components      ││     │
│                    │ QuestionCard    ││     │
│                    │ LevelCard       ││     │
│                    │ Navigation      ││     │
│                    │ AdBanner        ││     │
│                    └─────────────────┘│     │
│                                      │     │
│              ┌──────────┐  ┌────────┐│     │
│              │ data/    │  │ lib/   ││     │
│              │ questions │  │ adSch. ││     │
│              └──────────┘  └────────┘│     │
│                                      │     │
│  ┌───────────────────────────────────┘     │
│  │ Google AdSense (external script)        │
│  └─────────────────────────────────────────│
└─────────────────────────────────────────────┘
```

### 2.2 Data Flow

```
App Load → React Router resolves route
  ├─ "/" → HomePage (displays 4 LevelCards)
  ├─ "/:level" → QuestionPage (loads questions[level], shows QuestionCard)
  └─ "/:level/all" → AllQuestionsPage (renders all 100 + inline ads)

Navigation: QuestionPage
  User clicks Next/Prev/Random → useState updates currentIndex → QuestionCard re-renders

Ad Scheduling: AllQuestionsPage
  adScheduler.generateAdIndices(100) → [10, 22, 34, ...] (pre-computed)
  Render: questions.map((q, i) => adIndices.includes(i) ? <Ad/><Q/> : <Q/>)
```

### 2.3 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19 | UI framework |
| react-dom | ^19 | DOM rendering |
| react-router | ^7 | Client-side routing (3 routes) |
| tailwindcss | ^4 | Utility-first CSS |
| vite | ^6 | Build tool + dev server |
| typescript | ^5.7 | Type safety |

**Zero runtime dependencies beyond React + Router + Tailwind.**

---

## 3. Data Model

### 3.1 Entity Definition

```typescript
// types/index.ts

export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Question {
  id: number;        // 1-100 within each level
  text: string;      // The question text in English
  level: Level;      // Difficulty level
}

export interface LevelInfo {
  key: Level;
  title: string;           // Display name: "Beginner", "Intermediate", etc.
  description: string;     // Brief description of this level
  questionCount: number;   // Always 100 for MVP
  color: string;           // Tailwind color class for the level card
}
```

### 3.2 Data Storage

```typescript
// data/beginner.ts
export const beginnerQuestions: Question[] = [
  { id: 1, text: "What is the most delicious food you've eaten recently?", level: 'beginner' },
  { id: 2, text: "If you could visit any city in the world, where would you go?", level: 'beginner' },
  // ... 100 questions
];

// data/index.ts
import { beginnerQuestions } from './beginner';
import { intermediateQuestions } from './intermediate';
import { advancedQuestions } from './advanced';
import { expertQuestions } from './expert';
import type { Level, Question } from '../types';

export const questions: Record<Level, Question[]> = {
  beginner: beginnerQuestions,
  intermediate: intermediateQuestions,
  advanced: advancedQuestions,
  expert: expertQuestions,
};
```

No database. No API. All 400 questions are bundled at build time as TypeScript constants.

---

## 4. API Specification

N/A — This is a static site with no backend API. All data is bundled at build time.

---

## 5. UI/UX Design

### 5.1 Screen Layouts

#### Landing Page (HomePage)

```
Mobile (375px)                    Desktop (1024px+)
┌─────────────────┐              ┌────────────────────────────────┐
│                 │              │                                │
│   ┌───────────┐ │              │  ┌──────────┐  ┌──────────┐   │
│   │ Beginner  │ │              │  │ Beginner │  │ Intermed.│   │
│   │ Simple    │ │              │  │          │  │          │   │
│   │ daily...  │ │              │  └──────────┘  └──────────┘   │
│   └───────────┘ │              │  ┌──────────┐  ┌──────────┐   │
│   ┌───────────┐ │              │  │ Advanced │  │ Expert   │   │
│   │Intermedi. │ │              │  │          │  │          │   │
│   └───────────┘ │              │  └──────────┘  └──────────┘   │
│   ┌───────────┐ │              │                                │
│   │ Advanced  │ │              ├────────────────────────────────┤
│   └───────────┘ │              │     [ AdSense Banner ]        │
│   ┌───────────┐ │              └────────────────────────────────┘
│   │ Expert    │ │
│   └───────────┘ │
│                 │
├─────────────────┤
│ [AdSense Banner]│
└─────────────────┘
```

#### Question Card Page (QuestionPage)

```
Mobile (375px)                    Desktop (1024px+)
┌─────────────────┐              ┌────────────────────────────────┐
│ ← Beginner      │              │ ← Beginner                    │
│                 │              │                                │
│                 │              │    ┌──────────────────────┐    │
│  ┌─────────────┐│              │    │                      │    │
│  │             ││              │    │  "What is the most   │    │
│  │ "What is    ││              │    │   delicious food     │    │
│  │  the most   ││              │    │   you've eaten       │    │
│  │  delicious  ││              │    │   recently?"         │    │
│  │  food..."   ││              │    │                      │    │
│  │             ││              │    └──────────────────────┘    │
│  └─────────────┘│              │                                │
│                 │              │     [<]   42 / 100   [>]       │
│  [<]  42/100 [>]│              │        [Random] [All Qs]       │
│  [Random][AllQs]│              │                                │
│                 │              ├────────────────────────────────┤
├─────────────────┤              │     [ AdSense Banner ]        │
│ [AdSense Banner]│              └────────────────────────────────┘
└─────────────────┘
```

#### All Questions Page (AllQuestionsPage)

```
Mobile (375px)
┌─────────────────┐
│ ← Beginner  All │
│                 │
│ 1. What is the  │
│    most delic... │
│ 2. If you could │
│    visit any... │
│ ...             │
│ 10. What is... │
│                 │
│ ┌─────────────┐ │
│ │ [AdSense]   │ │
│ └─────────────┘ │
│                 │
│ 11. Do you...  │
│ 12. What kind..│
│ ...             │
│ 22. (random)   │
│                 │
│ ┌─────────────┐ │
│ │ [AdSense]   │ │
│ └─────────────┘ │
│                 │
│ 23. If you...  │
│ ...             │
├─────────────────┤
│ [AdSense Banner]│
└─────────────────┘
```

### 5.2 User Flow

```
[Landing Page "/"]
    │
    ├── Click "Beginner"    → /beginner     (random question shown)
    ├── Click "Intermediate"→ /intermediate
    ├── Click "Advanced"    → /advanced
    └── Click "Expert"      → /expert
                                │
                                ├── Next / Prev → same page, index changes
                                ├── Random → same page, random index
                                ├── "All Questions" → /:level/all
                                │                       │
                                │                       └── Click question → /:level?q=N
                                └── "← Back" → /
```

### 5.3 Component List

| Component | Location | Responsibility |
|-----------|----------|----------------|
| `LevelCard` | `src/components/LevelCard.tsx` | Displays one difficulty level with title, description, color accent. Clickable → navigates to /:level |
| `QuestionCard` | `src/components/QuestionCard.tsx` | Displays a single question text in a large, centered card with generous padding |
| `Navigation` | `src/components/Navigation.tsx` | Prev/Next/Random buttons + question counter (e.g., "42 / 100") + "All Questions" link |
| `AdBanner` | `src/components/AdBanner.tsx` | Wrapper for Google AdSense ad unit. Handles bottom banner and inline ad variants |
| `BackButton` | `src/components/BackButton.tsx` | "← Level name" link to return to landing or question page |

### 5.4 Page UI Checklist

#### HomePage ("/")

- [ ] Grid: 4 LevelCard components (2x2 on desktop, 1-column on mobile)
- [ ] LevelCard: Level title ("Beginner", "Intermediate", "Advanced", "Expert")
- [ ] LevelCard: Brief description (1 line about what kind of questions)
- [ ] LevelCard: Color-coded accent (each level has distinct color)
- [ ] LevelCard: Clickable → navigates to `/:level`
- [ ] AdBanner: Bottom fixed banner (does NOT overlap cards, content has bottom padding)
- [ ] No page title/header — clean, full-screen level selection

#### QuestionPage ("/:level")

- [ ] BackButton: "← {Level name}" at top-left, navigates to "/"
- [ ] QuestionCard: Large centered text displaying current question
- [ ] Navigation: Previous button (disabled if first question)
- [ ] Navigation: Next button (disabled if last question)
- [ ] Navigation: Random button
- [ ] Navigation: "All Questions" link → `/:level/all`
- [ ] Counter: "N / 100" showing current question position
- [ ] AdBanner: Bottom fixed banner (90px reserved space)
- [ ] No page title — only back button + question + navigation

#### AllQuestionsPage ("/:level/all")

- [ ] BackButton: "← {Level name}" at top-left, navigates to `/:level`
- [ ] Header: "All Questions - {Level name}" (only header in the app)
- [ ] List: All 100 questions as numbered items (1-100)
- [ ] List item: Clickable → navigates to `/:level?q=N`
- [ ] InlineAd: First ad after question #10
- [ ] InlineAd: Subsequent ads at random 10-14 question intervals
- [ ] AdBanner: Bottom fixed banner
- [ ] Smooth scrolling, no pagination

---

## 6. Error Handling

Minimal error handling for a static site:

| Scenario | Handling |
|----------|----------|
| Invalid level in URL (e.g., `/foo`) | Redirect to "/" (landing page) |
| Invalid question index (`?q=999`) | Clamp to valid range (1-100) |
| AdSense fails to load | Ad slot shows empty (reserved space remains to prevent CLS) |
| JavaScript disabled | Show `<noscript>` message with static question list |

No error modals, no toasts, no error boundaries needed. Just graceful fallbacks.

---

## 7. Security Considerations

- [x] No user input (read-only app — no forms, no database)
- [x] No authentication required
- [x] No sensitive data
- [x] HTTPS enforced by hosting provider (Vercel/Netlify)
- [ ] Content Security Policy header for AdSense script sources
- [ ] Subresource Integrity (SRI) not applicable for AdSense (Google-managed)

Minimal attack surface — static HTML/JS/CSS served from CDN.

---

## 8. Test Plan

### 8.1 Test Scope

| Type | Target | Tool | Phase |
|------|--------|------|-------|
| Unit | adScheduler logic, data integrity | Vitest | Do |
| L2: UI Action | Page elements, navigation, ad placement | Vitest + Testing Library | Do |
| L3: E2E | Full user journey across pages | Manual (optional Playwright) | Check |

### 8.2 Unit Test Scenarios

| # | Module | Test Description | Expected Result |
|---|--------|-----------------|-----------------|
| 1 | adScheduler | First ad at index 10 | `indices[0] === 10` |
| 2 | adScheduler | Subsequent gaps are 10-14 | All gaps in [10,14] range |
| 3 | adScheduler | Generates correct count for 100 items | ~7-8 ad positions |
| 4 | data | Each level has exactly 100 questions | `questions[level].length === 100` |
| 5 | data | All questions have non-empty text | No empty strings |
| 6 | data | Question IDs are 1-100 sequential | IDs match expected range |

### 8.3 L2: UI Action Test Scenarios

| # | Page | Action | Expected Result |
|---|------|--------|----------------|
| 1 | HomePage | Render | 4 LevelCards visible with correct titles |
| 2 | HomePage | Click "Beginner" | Navigate to /beginner |
| 3 | QuestionPage | Load /beginner | Shows a question from beginner level |
| 4 | QuestionPage | Click "Next" | Different question displayed, counter increments |
| 5 | QuestionPage | Click "Previous" at index 1 | Previous button disabled |
| 6 | QuestionPage | Click "Random" | Question changes (may be same, probabilistically unlikely) |
| 7 | QuestionPage | Click "All Questions" | Navigate to /beginner/all |
| 8 | AllQuestionsPage | Render /beginner/all | All 100 questions visible |
| 9 | AllQuestionsPage | Scroll | Inline ads appear after Q10 and at intervals |
| 10 | AllQuestionsPage | Click question #42 | Navigate to /beginner?q=42 |

### 8.4 L3: E2E Scenario Test Scenarios

| # | Scenario | Steps | Success Criteria |
|---|----------|-------|-----------------|
| 1 | Full browse flow | "/" → Click Beginner → Next x3 → Random → All Qs → Click Q50 → Back | All navigations work, no errors |
| 2 | All levels accessible | Visit /beginner, /intermediate, /advanced, /expert | Each shows correct level questions |
| 3 | URL direct access | Open /advanced?q=50 directly | Shows question 50 of Advanced |
| 4 | Invalid URL | Open /foo | Redirects to "/" |
| 5 | Mobile layout | Viewport 375px, navigate all pages | No horizontal scroll, touch-friendly |

### 8.5 Seed Data Requirements

| Entity | Count | Key Fields |
|--------|:-----:|------------|
| Question (per level) | 100 | id (1-100), text (non-empty), level |
| Total | 400 | 4 levels x 100 questions |

---

## 9. Clean Architecture

### 9.1 Layer Structure (Starter Level)

| Layer | Responsibility | Location |
|-------|---------------|----------|
| **Pages** | Route-level containers, page layout | `src/pages/` |
| **Components** | Reusable UI elements | `src/components/` |
| **Data** | Question content (static) | `src/data/` |
| **Lib** | Utility functions | `src/lib/` |
| **Types** | TypeScript type definitions | `src/types/` |

### 9.2 Dependency Rules

```
Pages ──→ Components ──→ Types
  │                       ↑
  └──→ Data ──────────────┘
  └──→ Lib ───────────────┘
```

Simple top-down dependency. No circular imports.

### 9.3 This Feature's Layer Assignment

| Component | Layer | Location |
|-----------|-------|----------|
| HomePage | Pages | `src/pages/HomePage.tsx` |
| QuestionPage | Pages | `src/pages/QuestionPage.tsx` |
| AllQuestionsPage | Pages | `src/pages/AllQuestionsPage.tsx` |
| QuestionCard | Components | `src/components/QuestionCard.tsx` |
| LevelCard | Components | `src/components/LevelCard.tsx` |
| Navigation | Components | `src/components/Navigation.tsx` |
| AdBanner | Components | `src/components/AdBanner.tsx` |
| BackButton | Components | `src/components/BackButton.tsx` |
| adScheduler | Lib | `src/lib/adScheduler.ts` |
| Question types | Types | `src/types/index.ts` |
| Question data | Data | `src/data/*.ts` |

---

## 10. Coding Convention Reference

### 10.1 Naming Conventions

| Target | Rule | Example |
|--------|------|---------|
| Components | PascalCase | `QuestionCard`, `AdBanner` |
| Functions | camelCase | `getRandomIndex()`, `generateAdIndices()` |
| Constants | UPPER_SNAKE_CASE | `LEVELS`, `AD_FIRST_INDEX` |
| Types/Interfaces | PascalCase | `Question`, `Level`, `LevelInfo` |
| Files (component) | PascalCase.tsx | `QuestionCard.tsx` |
| Files (utility) | camelCase.ts | `adScheduler.ts` |
| Files (data) | lowercase.ts | `beginner.ts`, `expert.ts` |

### 10.2 Import Order

```typescript
// 1. React
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';

// 2. Internal (components, data, lib)
import { QuestionCard } from '../components/QuestionCard';
import { questions } from '../data';

// 3. Types
import type { Level } from '../types';
```

### 10.3 Environment Variables

| Variable | Purpose | Scope |
|----------|---------|-------|
| `VITE_ADSENSE_CLIENT_ID` | Google AdSense publisher ID (ca-pub-XXXX) | Client |
| `VITE_ADSENSE_SLOT_BANNER` | Ad slot ID for bottom banner | Client |
| `VITE_ADSENSE_SLOT_INLINE` | Ad slot ID for inline ads | Client |

### 10.4 This Feature's Conventions

| Item | Convention Applied |
|------|-------------------|
| Component naming | PascalCase, one component per file |
| File organization | Starter level: pages/ + components/ + data/ + lib/ + types/ |
| State management | React useState only (no external state library) |
| Styling | Tailwind CSS utility classes, no custom CSS except index.css base |
| Routing | React Router v7, 3 routes only |

---

## 11. Implementation Guide

### 11.1 File Structure

```
english-question/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── QuestionCard.tsx      # Question display card
│   │   ├── LevelCard.tsx         # Level selection card
│   │   ├── Navigation.tsx        # Prev/Next/Random + counter
│   │   ├── AdBanner.tsx          # AdSense wrapper (banner + inline)
│   │   └── BackButton.tsx        # "← Level" back navigation
│   ├── pages/
│   │   ├── HomePage.tsx          # Landing: 4 level cards
│   │   ├── QuestionPage.tsx      # Single question view
│   │   └── AllQuestionsPage.tsx  # All 100 questions list
│   ├── data/
│   │   ├── beginner.ts           # 100 beginner questions
│   │   ├── intermediate.ts       # 100 intermediate questions
│   │   ├── advanced.ts           # 100 advanced questions
│   │   ├── expert.ts             # 100 expert questions
│   │   └── index.ts              # Aggregated export
│   ├── lib/
│   │   └── adScheduler.ts        # Ad placement interval logic
│   ├── types/
│   │   └── index.ts              # Question, Level, LevelInfo types
│   ├── App.tsx                   # Router setup
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Tailwind base + custom styles
├── index.html                    # AdSense script tag in <head>
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── .env                          # VITE_ADSENSE_* variables
```

### 11.2 Implementation Order

1. [ ] **Project setup**: `npm create vite@latest`, install React, Router, Tailwind
2. [ ] **Types + Data structure**: `types/index.ts`, `data/index.ts` with placeholder data
3. [ ] **Routing**: `App.tsx` with 3 routes (/, /:level, /:level/all)
4. [ ] **Components**: LevelCard, QuestionCard, Navigation, BackButton
5. [ ] **Pages**: HomePage, QuestionPage (with state logic), AllQuestionsPage
6. [ ] **Ad integration**: AdBanner component, adScheduler.ts, inline ads in AllQuestionsPage
7. [ ] **Question content**: Curate and write all 400 questions in data/ files
8. [ ] **Styling polish**: Responsive design, color scheme, typography
9. [ ] **Testing**: Unit tests for adScheduler + data, UI tests for pages
10. [ ] **Deploy**: Vite build, deploy to Vercel

### 11.3 Session Guide

> Auto-generated from Design structure. Session split is recommended, not required.

#### Module Map

| Module | Scope Key | Description | Estimated Effort |
|--------|-----------|-------------|:---------------:|
| Project Init + Types + Routing | `module-1` | Vite setup, types, React Router, App.tsx | Small |
| Components + Pages | `module-2` | All 5 components + 3 pages with full logic | Medium |
| Ad Integration | `module-3` | AdSense script, AdBanner, adScheduler, inline ads | Small |
| Question Content | `module-4` | 400 questions (100 per level) in data/ files | Large (content) |
| Polish + Testing + Deploy | `module-5` | Responsive fine-tuning, tests, Vercel deploy | Medium |

#### Recommended Session Plan

| Session | Phase | Scope | Description |
|---------|-------|-------|-------------|
| Session 1 | Do | `--scope module-1,module-2` | Core app: setup + components + pages |
| Session 2 | Do | `--scope module-3` | AdSense integration |
| Session 3 | Do | `--scope module-4` | Write 400 questions |
| Session 4 | Do | `--scope module-5` | Polish, test, deploy |
| Session 5 | Check + Report | Full | Gap analysis + completion report |

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 0.1 | 2026-04-03 | Initial draft — Option C architecture | Sejun Park |
