# English Question Practice - Product Requirements Document

> **Date**: 2026-04-03
> **Author**: PM Agent Team (bkit)
> **Method**: bkit PM Agent Team (based on pm-skills by Pawel Huryn, MIT)
> **Status**: Draft

---

## Executive Summary

| Perspective | Content |
|-------------|---------|
| **Problem** | English learners worldwide lack accessible, structured conversation prompts for self-practice; existing apps are either AI-heavy with subscription costs ($8-15/mo), or gamified platforms that focus on repetition rather than genuine discussion. There is no simple, free, open-ended question bank organized by difficulty. |
| **Solution** | A static web app (Vite + React) that provides 400 curated open-ended English discussion questions across 4 difficulty levels (Beginner to Expert), requiring no accounts, no backend, and no cost -- enabling instant conversation practice anywhere. |
| **Target User** | Adults worldwide studying English conversation independently or in study groups, who want structured discussion prompts without the overhead of apps, subscriptions, or AI tutors. Primary advertising market: Canada. |
| **Core Value** | Zero-friction access to progressively challenging English discussion questions that build conversational confidence from daily topics to philosophical debates -- completely free, instantly available, and infinitely reusable. |

---

## 1. Opportunity Discovery

### 1.1 Desired Outcome

Enable English learners worldwide to practice open-ended English conversation daily by providing structured, difficulty-graded discussion prompts that reduce the barrier to speaking practice from "find a partner/app/tutor" to "open a webpage and start talking."

**Target Metric**: 5,000+ monthly active users within 6 months of launch, with an average session duration of 5+ minutes. Primary advertising market: Canada.

### 1.2 Brainstormed Ideas (Top 5)

| # | Idea | Perspective | Rationale |
|---|------|-------------|-----------|
| 1 | Curated question bank with 4 difficulty levels | Content-first | Questions designed for global learners' progression from daily-life to philosophical topics |
| 2 | Random question picker per difficulty | UX simplicity | Removes decision fatigue; instant practice with one click |
| 3 | Study group / pair mode (show same question) | Social learning | Study groups and language exchange partners need shared prompts |
| 4 | Bookmark / favorites system (localStorage) | Personalization | Users can save questions they want to revisit without accounts |
| 5 | Timer / recording prompt for speaking practice | Self-assessment | Encourages timed responses to simulate real conversation pressure |

### 1.3 Opportunity Solution Tree

```
Outcome: English learners worldwide practice open-ended conversation daily
|
+-- Opportunity 1: Learners lack structured, graded discussion prompts
|   +-- Solution A: 400-question bank across 4 difficulty levels
|   +-- Solution B: Progressive difficulty recommendation engine
|   +-- Solution C: Topic-based categorization (travel, ethics, philosophy)
|
+-- Opportunity 2: Existing tools are too expensive or complex for casual practice
|   +-- Solution D: Free static site with zero signup friction
|   +-- Solution E: PWA support for offline access
|
+-- Opportunity 3: Self-learners have no feedback loop for speaking practice
|   +-- Solution F: Timer-based speaking challenges
|   +-- Solution G: Sample answers / discussion points as optional hints
|   +-- Solution H: Speech-to-text self-check (browser API)
|
+-- Opportunity 4: Study groups need shared discussion tools
|   +-- Solution I: Shareable question links with difficulty context
|   +-- Solution J: "Question of the day" feature for group synchronization
```

### 1.4 Prioritized Opportunities

| # | Opportunity | Importance | Satisfaction | Score |
|---|------------|:----------:|:------------:|:-----:|
| 1 | Lack of structured, graded discussion prompts | 0.9 | 0.2 | 0.72 |
| 2 | Existing tools too expensive/complex for casual use | 0.8 | 0.3 | 0.56 |
| 3 | No feedback loop for self-learners | 0.7 | 0.4 | 0.42 |
| 4 | Study groups need shared discussion tools | 0.6 | 0.3 | 0.42 |

*Score = Importance x (1 - Satisfaction). Higher = bigger opportunity gap.*

### 1.5 Key Assumptions & Risk Prioritization

| # | Assumption | Category | Impact | Risk | Score | Action |
|---|-----------|----------|:------:|:----:|:-----:|--------|
| 1 | global English learners will use a web app (vs native app) for conversation practice | User Behavior | 5 | 3 | 15 | Validate via landing page test |
| 2 | 400 questions across 4 levels provides sufficient variety for sustained use | Content | 4 | 2 | 8 | Track question exhaustion rate |
| 3 | Users can self-practice speaking without AI feedback and still find value | Value | 5 | 4 | 20 | Survey early adopters on perceived value |
| 4 | Open-ended questions (vs structured exercises) are preferred for conversation practice | Content | 4 | 3 | 12 | A/B test open vs structured formats |
| 5 | Free + no-signup model is sufficient for organic growth | GTM | 3 | 3 | 9 | Monitor acquisition channels |
| 6 | Non-native speakers will be comfortable with an English-only UI | UX | 4 | 3 | 12 | Track bounce rate by locale |

### 1.6 Recommended Experiments

| # | Tests Assumption | Method | Success Criteria | Effort |
|---|-----------------|--------|-----------------|:------:|
| 1 | #3 (Self-practice value) | Launch MVP with 100 questions (Beginner only), measure retention | 30% week-1 return rate | Low |
| 2 | #6 (English-only UI) | Deploy with English UI, track bounce rate and session duration | Bounce rate < 60% | Low |
| 3 | #1 (Web vs native) | Run Google Ads in Canada, share on Reddit ESL communities, measure adoption | 2,000+ visitors in first month | Low |
| 4 | #4 (Open-ended preference) | Post-session micro-survey ("Was this helpful?") | 70%+ positive responses | Low |

---

## 2. Value Proposition & Strategy

### 2.1 JTBD Value Proposition (6-Part)

| Part | Content |
|------|---------|
| **Who** | Adults worldwide (20-40) studying English independently or in small study groups, with primary ad focus on Canada's multicultural ESL community |
| **Why** | They want to improve English conversation skills but struggle to find structured, low-pressure speaking practice opportunities outside of expensive tutors or AI apps |
| **What Before** | Currently rely on: (1) paid AI conversation apps like Speak ($14/mo), Talkio ($10/mo); (2) language exchange apps like HelloTalk (inconsistent partners); (3) generic question lists from blogs (unstructured, no difficulty progression); (4) ChatGPT voice mode (requires prompting skill, unstructured) |
| **How** | Provides 400 curated, open-ended discussion questions organized into 4 progressive difficulty levels (Beginner to Expert), accessible instantly via browser with zero signup, zero cost, and zero friction |
| **What After** | Users have a reliable daily practice resource: pick a level, get a question, speak/discuss. Study groups use it as a shared prompt generator. Learners build confidence progressing from "What is your favorite food?" to "Is free will an illusion?" |
| **Alternatives** | Speak/ELSA/Talkio (paid AI, $8-15/mo, overkill for prompt-seeking users); Duolingo (repetition, not discussion); blog question lists (static, no UX); ChatGPT (requires setup, not curated for progression) |

**Value Proposition Statement**: English Question Practice gives English learners worldwide instant access to 400 curated discussion questions across 4 difficulty levels -- completely free, with no accounts or apps required -- so they can practice real conversation skills anywhere, anytime. Primary advertising market: Canada (large immigrant/ESL population, high digital literacy).

### 2.2 Lean Canvas

| Section | Content |
|---------|---------|
| **Problem** | 1. Paid conversation apps are overkill for users who just need discussion prompts 2. Generic question lists lack difficulty progression and good UX 3. Self-learners have no structured way to incrementally challenge their speaking |
| **Solution** | 1. 400 curated questions across 4 difficulty levels 2. Clean, mobile-friendly web UI with random question selection 3. Progressive difficulty from daily life topics to philosophical debates |
| **UVP** | Free, instant, structured English discussion prompts -- no signup, no AI, no subscriptions. Just questions that make you think and speak. |
| **Unfair Advantage** | Open-source (Apache 2.0), zero operating cost (static hosting), culturally neutral question progression accessible to all backgrounds, Canada-focused ad strategy targeting underserved ESL market |
| **Customer Segments** | 1. ESL learners and immigrants worldwide, especially in Canada (20-40, working professionals and students) 2. English study group participants (language exchange, ESL classes) 3. ESL teachers looking for classroom discussion prompts |
| **Channels** | Google Ads (Canada), SEO for "English discussion questions", Reddit/social media ESL communities, partnerships with ESL schools, word-of-mouth in study groups |
| **Revenue Streams** | None (free, open-source). Future potential: donations, sponsored content, premium question packs (if validated) |
| **Cost Structure** | Near-zero: static hosting (free tier on Vercel/Netlify/GitHub Pages), domain name (~$10/yr optional), development time (volunteer/personal project) |
| **Key Metrics** | North Star: Monthly Active Users (MAU). Supporting: session duration, questions viewed per session, return visit rate, difficulty level distribution |

### 2.3 SWOT Analysis

| | Helpful | Harmful |
|---|---------|---------|
| **Internal** | **Strengths**: Zero cost to operate, zero friction for users (no signup), mobile-friendly static site, open-source community potential, fast load times, works offline (cacheable), curated content quality | **Weaknesses**: No AI feedback/correction, no speech recognition, limited to 400 static questions, no personalization without accounts, no revenue model, single developer |
| **External** | **Opportunities**: Growing global English learning market (~$60B), Canada's large ESL population (300K+ immigrants/year), PWA adoption for offline, community question contributions, SEO for English practice queries, potential for AI integration later | **Threats**: AI conversation apps becoming free (ChatGPT voice), established competitors adding free tiers, content easily copied, low switching costs, user expectation for AI features |

**SO Strategy**: Leverage zero-cost operation and zero-friction UX to capture users who find AI apps overkill for daily practice. Position as the "warm-up tool" that complements AI apps rather than competing directly. Target Canada's underserved ESL immigrant community with paid ads for initial traction.

**WT Strategy**: Mitigate limited features by focusing on content quality and curation (what AI cannot easily replicate: carefully graded progression from daily life to philosophical topics). Address content exhaustion risk by enabling community contributions. Plan for optional AI integration (browser speech API) as a v2 enhancement.

### 2.4 Additional Strategic Analysis

#### Porter's Five Forces (English Conversation Practice Market)

| Force | Intensity | Analysis |
|-------|:---------:|---------|
| **Threat of New Entrants** | High | Very low barrier to create a question list app; however, curation quality and UX design create soft moats |
| **Bargaining Power of Users** | High | Users can switch to alternatives instantly (zero switching cost). Must earn loyalty through quality and convenience |
| **Bargaining Power of Suppliers** | Low | Content is self-created; no external dependencies. Open-source tools (Vite, React) are free |
| **Threat of Substitutes** | High | ChatGPT voice mode, AI tutors, language exchange apps, physical flashcards, YouTube videos |
| **Competitive Rivalry** | Medium | Many tools exist but few focus specifically on curated, graded discussion prompts for English learners globally |

**Strategic Implication**: Compete on simplicity and specificity. Do one thing extremely well (curated discussion prompts) rather than trying to be a full learning platform.

#### Pricing Strategy

| Model | Rationale |
|-------|-----------|
| **Freemium (Free forever)** | Aligns with open-source ethos. Zero cost to operate means no need for monetization. Maximizes adoption and community growth. If future monetization needed: premium question packs, teacher/group features, or sponsorship. |

---

## 3. Market Research

### 3.1 User Personas

#### Persona 1: Maria (Primary)

| Attribute | Details |
|-----------|---------|
| **Demographics** | 29, recent immigrant to Toronto from Colombia, works in customer service, IELTS 5.5 |
| **Primary JTBD** | "When I have 15 minutes during lunch break, I want to practice answering English questions out loud so I can feel more confident speaking English at work and in daily life" |
| **Pain Points** | 1. Cannot afford $14/mo for Speak when she only needs prompts 2. Generic blog question lists are boring and unstructured 3. Wants to practice alone before speaking with native speakers |
| **Desired Gains** | 1. Quick, structured practice without setup time 2. Progressive difficulty that matches her improving level 3. Questions relevant to daily life and work contexts |
| **Unexpected Insight** | She often practices by whispering to herself -- she does not need a conversation partner or AI, just a good question to think about and formulate a response to |
| **Product Fit** | Core MVP perfectly addresses her need: browse to the site, pick Intermediate, get a question, think/speak for 2-3 minutes, move on |

#### Persona 2: Ahmed

| Attribute | Details |
|-----------|---------|
| **Demographics** | 24, international university student in Vancouver from Egypt, enrolled in ESL program |
| **Primary JTBD** | "When our study group meets weekly, I want ready-made discussion questions at the right level so we can have productive English-only conversations without spending time finding topics" |
| **Pain Points** | 1. Spends 30+ minutes before each meeting searching for suitable discussion topics 2. Found questions are either too easy or too hard for mixed-level groups 3. Free tools are scattered across blogs with no consistent quality |
| **Desired Gains** | 1. One-stop source of graded questions for weekly group sessions 2. Ability to share specific questions with group members 3. Mix of difficulty levels for different group participants |
| **Unexpected Insight** | He uses the questions as "homework" -- assigns a question from the next difficulty level for members to prepare before meetings |
| **Product Fit** | Multiple difficulty levels allow him to pick questions for different group members. Shareable URLs let him send questions to the group chat. |

#### Persona 3: Lisa Chen

| Attribute | Details |
|-----------|---------|
| **Demographics** | 35, ESL teacher at a language school in Montreal, MA TESOL, originally from China |
| **Primary JTBD** | "When I need to run a discussion activity in my advanced class, I want thought-provoking English questions that are culturally accessible to diverse international students so I can facilitate genuine classroom discussions" |
| **Pain Points** | 1. Textbook discussion questions are outdated and culturally narrow 2. Creating original discussion questions for every class is time-consuming 3. Needs questions that students from diverse backgrounds can relate to and have opinions about |
| **Desired Gains** | 1. Large bank of questions organized by topic and difficulty 2. Culturally neutral questions accessible to learners from any background 3. Fresh content that students have not seen in their textbooks |
| **Unexpected Insight** | She values the Beginner questions as much as Expert ones -- uses them as "warm-up" before diving into harder material, regardless of student level |
| **Product Fit** | 400 questions across 4 levels provides weeks of classroom material. Expert-level philosophical questions work perfectly for her advanced discussion classes. |

### 3.2 Competitive Landscape

| Competitor | Strengths | Weaknesses | Our Opportunity |
|-----------|-----------|------------|-----------------|
| **Speak** ($14/mo) | AI-powered conversation, pronunciation feedback, 15M+ downloads, strong global brand | Expensive for casual users, requires app install, AI conversations feel artificial, subscription fatigue | Free alternative for users who just want discussion prompts, not AI tutoring |
| **ELSA Speak** ($12/mo) | Best pronunciation scoring, detailed feedback, gamification | Focused on pronunciation not discussion, subscription model, heavy app | We focus on open-ended discussion (complementary, not competing on pronunciation) |
| **ChatGPT Voice** (free/paid) | Infinitely flexible, free tier available, can simulate any scenario | Not curated, requires user to set up prompts, no difficulty progression, overwhelming for beginners | We provide the curation and structure that ChatGPT lacks |
| **ConversationStarters.com** (free) | Large question database, free, no signup | Outdated UI, not mobile-friendly, no difficulty grading, not designed for language learners, English-native focused | Modern UI + difficulty grading + ESL learner focus |
| **ESL Conversation Questions (various blogs)** (free) | Free, wide variety, topic-based | Scattered across sites, inconsistent quality, poor UX, no progressive difficulty, ad-heavy | Consolidated, well-designed, ad-free, progressive difficulty |

**Differentiation Strategy**: Position as the "Goldilocks" solution -- more structured than ChatGPT, simpler than Speak, better UX than blog lists. Key differentiators: (1) 4-level difficulty progression for learners worldwide, (2) zero friction (no app, no account, no cost), (3) curated question quality over quantity, (4) culturally neutral questions accessible to all backgrounds.

### 3.3 Market Sizing

| Metric | Current Estimate | 3-Year Projection |
|--------|:---------------:|:-----------------:|
| **TAM** | $60B (Global English language learning market) | $75B (8% CAGR) |
| **SAM** | $5B (Adults worldwide using digital tools for English conversation practice, ~100M users at ~$50/yr avg spend) | $7B (growing digital adoption, especially in Canada, LATAM, Asia, Middle East) |
| **SOM** | $0 revenue / 50K-200K users (free product, measured in user base, not revenue. Equivalent value: ~$1M if monetized at $10/user/yr) | 500K-1M users (equivalent value: ~$5M) |

**Key Assumptions**:
1. ~1.5B people worldwide are learning English; ~100M use digital tools for conversation practice
2. Canada alone has 300K+ new immigrants/year, many needing English practice (primary ad market)
3. As a free tool, SOM is measured in user capture rather than revenue
4. 3-year projection assumes paid ads in Canada + organic growth via SEO globally
5. Market sizing uses dual-method: Top-down (global language learning market segmentation) and Bottom-up (estimated addressable users x average digital spend)

### 3.4 Customer Journey Map (Primary Persona: Maria)

| Stage | Touchpoint | Actions | Emotions | Pain Points | Opportunities |
|-------|-----------|---------|----------|-------------|---------------|
| **Awareness** | Google/social media ad (Canada), colleague recommendation, Google search "English discussion questions" | Clicks link, lands on site | Curious but skeptical ("another English app?") | Too many low-quality options, ad fatigue | Clean landing page that immediately shows the value (question examples) |
| **Consideration** | Homepage, difficulty level selection | Browses difficulty descriptions, reads sample questions | Interested ("these are actually good questions") | Unclear if questions match her level | Clear level descriptions with example questions per difficulty |
| **Decision** | First question interaction | Selects Intermediate, sees first question | Excited ("I can use this right now") | None -- zero friction, no signup wall | Instant gratification -- question appears in <1 second |
| **Onboarding** | First session (3-5 questions) | Reads question, thinks/speaks response, clicks next | Engaged, slightly challenged | Might feel uncertain about self-practice without feedback | Optional "tip" showing how to practice effectively (timer, record yourself) |
| **Usage** | Daily/weekly practice sessions | Returns via bookmark/PWA, selects level, practices | Confident, routine-forming | Question repetition over time, desire for new content | Bookmark favorites, track viewed questions (localStorage), community contributions |
| **Advocacy** | Study group, social media, Reddit/forums | Shares link with study group, posts about it | Proud, helpful | No easy share mechanism | Shareable question URLs, "Share this question" button, social meta tags |

**Moments of Truth**:
1. **First Question Quality**: If the first question feels generic ("What is your name?"), user leaves. If it is genuinely thought-provoking for their level, they stay.
2. **Mobile Experience**: 80%+ of users will access on mobile. If the site is not perfectly mobile-optimized, adoption drops dramatically.
3. **Third Visit**: If a user returns 3 times, they are likely to become a regular. Focus on making the first 3 sessions feel fresh and valuable.

---

## 4. Go-To-Market

### 4.1 Beachhead Segment

| Criteria | Score (1-5) | Evidence |
|----------|:-----------:|---------|
| Burning Pain | 4 | ESL learners and study group leaders spend 30+ min/week finding discussion topics; individual learners pay $8-15/mo for apps when they just need prompts |
| Willingness to Pay | 2 | Target is free product; "willingness to use" is high -- they actively search for these resources |
| Winnable Share | 5 | No direct free competitor offers curated, graded English discussion questions with good UX for English learners globally |
| Referral Potential | 5 | Study groups are inherently viral -- one member finds it, shares with 5-10 others. ESL class networks and immigrant communities amplify word-of-mouth |

**Primary Beachhead**: ESL learners and immigrants in Canada (Toronto, Vancouver, Montreal) who need structured English conversation practice for work and daily life.

**90-Day Acquisition Plan**:
- **Day 1-30**: Launch MVP, run Google Ads targeting "English practice" keywords in Canada. Post on Reddit r/languagelearning, r/ESL, r/canada immigration forums.
- **Day 31-60**: SEO optimization for high-intent queries ("English discussion questions", "ESL conversation practice", "English speaking prompts"). Facebook/Instagram ads targeting ESL communities in GTA (Greater Toronto Area) and Vancouver.
- **Day 61-90**: Partner with Canadian ESL schools and immigrant settlement services. Cross-post to global English learning communities. Target ESL teachers through TESOL Canada and LINC program networks.

### 4.2 GTM Strategy

| Element | Details |
|---------|---------|
| **Channels** | Primary: Google Ads (Canada), SEO (English keywords globally). Secondary: Reddit (r/languagelearning, r/ESL), Facebook/Instagram ads (Canadian ESL communities), partnerships with Canadian ESL schools and settlement services |
| **Messaging** | "400 English discussion questions, 4 levels, completely free. No app, no account, no AI -- just great questions that make you think and speak." |
| **Success Metrics** | Month 1: 2,000 unique visitors, 500 returning users. Month 3: 10,000 MAU, avg 3+ questions/session. Month 6: 30,000 MAU, 40%+ return rate |
| **Launch Timeline** | **Pre-launch** (Week 1-2): Build MVP, curate 400 questions, set up static hosting + analytics. **Launch** (Week 3): Start Google Ads in Canada, post on Reddit/social. **Post-launch** (Week 4-8): Iterate based on analytics, expand to Facebook ads, improve mobile UX |

### 4.3 Ideal Customer Profile (ICP)

| Attribute | Details |
|-----------|---------|
| **Demographics** | Adults aged 20-40 worldwide, primary focus on Canada (immigrants, international students, ESL learners), digitally savvy |
| **English Level** | Beginner to Advanced (can read basic English but lack speaking confidence) |
| **Role/Context** | New immigrants preparing for work/daily life in English, international students, ESL program participants, self-learners practicing independently |
| **Primary JTBD** | "Help me practice forming and expressing opinions in English on diverse topics, at a difficulty I can handle" |
| **Budget Range** | $0 (actively avoiding paid subscriptions for this specific need; willing to use free tools) |

### 4.4 Competitive Battlecards

| Category | English Question Practice | Speak | ChatGPT Voice | ESL Blog Lists |
|----------|--------------------------|-------|---------------|----------------|
| **Positioning** | Curated discussion prompts, graded difficulty | AI conversation tutor | General AI assistant with voice | Scattered question collections |
| **Key Strength** | Zero friction, free, structured progression | AI feedback, pronunciation | Infinitely flexible | Wide topic variety |
| **Key Weakness** | No AI feedback, static content | $14/mo, app-only | No curation/structure | Poor UX, ad-heavy |
| **Price** | Free | $14/mo | Free/$20/mo | Free (ad-supported) |
| **Best For** | Self-practice prompts, study groups, teachers | Serious learners wanting AI coaching | Advanced users who can self-direct | One-off topic searches |

### 4.5 Growth Loops

| Loop Type | Trigger | Action | Output | Metric |
|-----------|---------|--------|--------|--------|
| **Study Group Viral** | User finds good question | Shares link to study group chat (WhatsApp, Discord) | 5-10 new users per share | Referral visits from messaging apps |
| **SEO Content** | User searches "English discussion questions" | Lands on site via Google | Organic user who bookmarks | Organic search traffic growth |
| **Teacher Adoption** | Teacher uses in classroom | Students access independently | Entire class becomes users | .edu referral traffic |
| **Open-Source Community** | Developer discovers on GitHub | Stars repo, contributes questions | More content + developer users | GitHub stars, PR count |
| **Social Proof** | User completes Expert-level question | Screenshots/shares on social media | Aspirational content drives new users | Social media mentions |

---

## 5. Product Requirements (PRD)

### 5.1 Summary

English Question Practice is a free, static web application built with Vite and React that provides 400 curated open-ended English discussion questions across 4 progressive difficulty levels. Designed specifically for English learners worldwide, it offers zero-friction access to structured conversation practice without accounts, subscriptions, or AI dependencies.

### 5.2 Background & Context

**Why now?**
- AI conversation apps have raised the bar for English practice tools but also created subscription fatigue ($8-15/mo) among casual learners
- Global ESL community is thriving post-pandemic, with increasing demand for accessible practice tools
- Static site hosting is effectively free (Vercel, Netlify, GitHub Pages), making zero-cost operation sustainable
- The gap between "expensive AI tutor" and "random blog question list" remains unserved
- Browser technologies (PWA, localStorage) now enable rich experiences without backends

**What became possible?**
- Modern static site frameworks (Vite + React) enable fast, professional web apps with minimal infrastructure
- Static hosting free tiers are mature and reliable for production use
- Open-source licensing enables community-driven content growth

### 5.3 Objectives & Key Results

| Objective | Key Result | Target |
|-----------|-----------|--------|
| Provide valuable English practice content | Questions rated "helpful" by users | 80%+ positive feedback |
| Achieve product-market fit globally (Canada-first) | Monthly Active Users | 5,000 MAU within 6 months |
| Drive engagement through content quality | Average questions viewed per session | 3+ questions/session |
| Build returning user base | Week-1 retention rate | 30%+ return within 7 days |
| Enable study group adoption | Sessions from shared/referral links | 20%+ of traffic from referrals |

### 5.4 Market Segments

| Segment | Problem / JTBD | Size Estimate |
|---------|---------------|:-------------:|
| **Independent Learners** | "I want structured prompts to practice speaking alone without paying for an app" | ~100M globally |
| **Study Group Members** | "I need shared discussion questions for our weekly English conversation group" | ~500K (estimated 50K+ active groups) |
| **English Teachers** | "I need ready-made, graded discussion prompts for classroom activities" | ~2M ESL teachers worldwide |

### 5.5 Value Propositions

Reference Section 2.1 (JTBD 6-Part VP).

**Core value per segment**:
- **Independent Learners**: Structured self-practice without cost or complexity
- **Study Groups**: Shared question resource that eliminates topic-finding overhead
- **Teachers**: Classroom-ready discussion bank organized by difficulty

### 5.6 Solution (Key Features)

| Feature | Description | Priority | Addresses |
|---------|-------------|----------|-----------|
| Difficulty Level Selection | 4 levels: Beginner, Intermediate, Advanced, Expert with clear descriptions | Must | Structured progression (#1 opportunity) |
| Question Display | Clean, readable presentation of one question at a time with level indicator | Must | Core UX, reduces decision fatigue |
| Random Question | Get a random question within selected difficulty level | Must | Instant practice, variety |
| Next/Previous Navigation | Browse through questions sequentially within a level | Must | Systematic practice |
| Mobile-Responsive Design | Optimized for mobile screens (primary access method) | Must | 80%+ mobile users globally |
| All Questions View | View all 100 questions for a difficulty level as a list | Should | Teachers and study group planning |
| Bookmark / Favorites | Save favorite questions to localStorage for quick access | Should | Personalization without accounts |
| Share Question | Copy shareable URL for a specific question | Should | Study group viral loop |
| Question Counter | Show progress (e.g., "Question 42 of 100") | Should | Sense of completeness |
| Dark Mode | System-preference-aware dark/light theme | Could | UX polish, night practice |
| PWA Support | Installable as app, works offline | Could | Offline access, app-like experience |
| Speech Timer | Optional countdown timer for timed speaking practice | Could | Self-practice structure |

### 5.7 Assumptions & Risks

| # | Assumption | Category | Confidence | Validation Method |
|---|-----------|----------|:----------:|-------------------|
| 1 | global English learners want open-ended discussion questions (not fill-in-blank or grammar) | Content | High (80%) | User feedback, session duration analysis |
| 2 | 400 questions provide enough variety for 3+ months of regular use | Content | Medium (60%) | Track unique questions viewed per user over time |
| 3 | Users will practice speaking aloud even without AI feedback | User Behavior | Medium (65%) | Self-reported survey, session duration as proxy |
| 4 | Mobile web is acceptable (vs native app) for global users | Platform | High (75%) | Mobile vs desktop traffic ratio |
| 5 | English-only UI works for target users (all levels) | UX | High (75%) | Bounce rate analysis |
| 6 | Static hosting free tiers will remain available and sufficient | Infrastructure | High (90%) | Monitor hosting provider policies |
| 7 | Word-of-mouth in study groups will drive organic growth | GTM | Medium (55%) | Referral traffic analysis |

### 5.8 Release Plan

| Phase | Scope | Timeframe |
|-------|-------|-----------|
| **v1.0 (MVP)** | 400 questions, 4 difficulty levels, random question, next/prev navigation, mobile-responsive design, clean UI | 2-3 weeks |
| **v1.1** | Bookmark/favorites (localStorage), share question URL, question counter, all-questions list view | +1-2 weeks |
| **v2.0** | PWA support, dark mode, speech timer, topic-based categories within levels, "Question of the Day" | +2-3 weeks |
| **v2.1 (Community)** | GitHub-based community question submissions, multi-language UI support, usage analytics | +2-3 weeks |
| **v3.0 (Future)** | Browser speech-to-text self-check, sample discussion points/hints, study group features | Backlog |

---

## 6. Execution Deliverables

### 6.1 Pre-mortem

| # | Failure Mode | Category | Likelihood | Impact | Prevention Strategy |
|---|-------------|----------|:----------:|:------:|-------------------|
| 1 | Questions feel generic and uninteresting, users do not return | Content Quality | Medium | High | Invest heavily in question curation; test with real global English learners before launch; prioritize thought-provoking over generic |
| 2 | Users visit once but never come back (no retention hook) | Engagement | High | High | Add bookmarks, track viewed questions (localStorage), implement "new question" indicator, encourage bookmarking the page |
| 3 | Mobile UX is poor, high bounce rate on phones | Technical | Medium | High | Mobile-first design approach; test on iOS Safari and Android Chrome; keep UI minimal |
| 4 | English-only UI alienates absolute beginners | UX/Localization | Medium | Medium | Clear visual hierarchy with minimal text; use simple icons and visual cues alongside English labels |
| 5 | Content is copied by competitors immediately | Competition | High | Low | Open-source it intentionally; compete on UX and community, not content scarcity |
| 6 | SEO fails to drive organic traffic | Growth | Medium | Medium | Optimize for English search terms globally; create landing pages per difficulty level; structured data markup; supplement with paid ads in Canada |

**Top 3 Risks**:
1. **Content quality** -- If questions are not genuinely thought-provoking, the entire value proposition collapses. Mitigation: Human curation with feedback loops.
2. **Retention** -- Zero-friction means zero switching cost. Users must find repeated value. Mitigation: Progressive difficulty and variety.
3. **Mobile UX** -- Users are mobile-first. A poor mobile experience means no users. Mitigation: Mobile-first responsive design.

### 6.2 User Stories

| ID | User Story | Priority | Acceptance Criteria (Given/When/Then) |
|----|-----------|:--------:|--------------------------------------|
| US-01 | As a learner, I want to select a difficulty level so I can practice at my comfort zone | Must | Given I am on the homepage, When I click a difficulty level (Beginner/Intermediate/Advanced/Expert), Then I see questions from that level only |
| US-02 | As a learner, I want to see a random question so I can start practicing immediately | Must | Given I have selected a difficulty level, When the question page loads, Then I see one random question from that level |
| US-03 | As a learner, I want to get the next question so I can continue my practice session | Must | Given I am viewing a question, When I click "Next", Then I see a different question from the same difficulty level |
| US-04 | As a study group leader, I want to share a specific question so my group can prepare | Should | Given I am viewing a question, When I click "Share", Then a URL is copied to clipboard that opens this exact question for others |
| US-05 | As a learner, I want to bookmark questions so I can revisit challenging ones later | Should | Given I am viewing a question, When I click "Bookmark", Then the question is saved to my favorites (localStorage) and I can access it from a favorites page |
| US-06 | As a teacher, I want to see all questions for a level so I can plan my class | Should | Given I am on a difficulty level page, When I click "View All", Then I see all 100 questions for that level in a scrollable list |
| US-07 | As a learner, I want to know my progress so I feel motivated | Should | Given I am viewing questions, When I look at the question card, Then I see "Question X of 100" and how many I have viewed in this session |
| US-08 | As a mobile user, I want the app to work well on my phone so I can practice during commute | Must | Given I access the site on a mobile device, When the page loads, Then all elements are properly sized and touch-friendly |

### 6.3 Job Stories

| ID | When (Situation) | I want to (Motivation) | So I can (Outcome) |
|----|-----------------|----------------------|-------------------|
| JS-01 | When I have 10 minutes before a meeting and want to warm up my English thinking | I want to quickly get a discussion question at my level | So I can mentally rehearse forming English opinions |
| JS-02 | When our study group meets on Saturday and we have no prepared topic | I want to pull up graded discussion questions instantly | So we can start practicing immediately without wasting time |
| JS-03 | When I have mastered Intermediate questions and feel ready for more challenge | I want to move up to Advanced level questions | So I can progressively build my discussion ability |
| JS-04 | When I found a question that really made me think deeply | I want to save it and share it with friends | So we can discuss it together later |
| JS-05 | When I am planning next week's English class discussion activity | I want to browse all Expert-level questions | So I can choose the most relevant ones for my students' interests |

### 6.4 Test Scenarios

| ID | Story Ref | Scenario | Steps | Expected Result | Priority |
|----|-----------|----------|-------|----------------|:--------:|
| TS-01 | US-01 | Select Beginner difficulty | 1. Open homepage 2. Click "Beginner" | Navigate to Beginner question page, display a Beginner-level question | Must |
| TS-02 | US-02 | Random question on page load | 1. Select any difficulty 2. Observe question displayed | A random question from selected difficulty is shown | Must |
| TS-03 | US-03 | Navigate to next question | 1. View a question 2. Click "Next" | Different question from same level is displayed | Must |
| TS-04 | US-04 | Share question URL | 1. View a question 2. Click "Share" 3. Open URL in new tab | Same question is displayed in new tab | Should |
| TS-05 | US-05 | Bookmark and retrieve | 1. Bookmark a question 2. Navigate to Favorites 3. Click bookmarked question | Bookmarked question is displayed | Should |
| TS-06 | US-06 | View all questions | 1. Select difficulty 2. Click "View All" | All 100 questions for that level displayed as scrollable list | Should |
| TS-07 | US-08 | Mobile responsiveness | 1. Open site on 375px-wide viewport 2. Navigate all pages | All content is readable, buttons are touch-friendly, no horizontal scroll | Must |
| TS-08 | US-01 | All four difficulty levels work | 1. Click each difficulty level sequentially | Each level shows its own set of questions, no cross-contamination | Must |

### 6.5 Stakeholder Map

| Stakeholder | Role | Power | Interest | Strategy |
|------------|------|:-----:|:--------:|----------|
| Developer/Owner (Sejun) | Creator, maintainer, content curator | 5 | 5 | Manage closely: primary decision-maker for all features and content |
| Global English Learners | End users (self-study) | 1 | 5 | Keep informed: regular updates, listen to feedback via GitHub issues |
| Study Group Leaders | Power users, distributors | 2 | 4 | Keep informed: features that support group use (sharing, question lists) |
| English Teachers | Professional users | 2 | 3 | Keep satisfied: classroom-friendly features, bulk question access |
| Open-Source Contributors | Community developers | 2 | 3 | Keep satisfied: clear contribution guidelines, responsive to PRs |
| Hosting Provider (Vercel/Netlify) | Infrastructure | 3 | 1 | Monitor: ensure free tier limits are not exceeded |

---

## Attribution

This PRD was generated by bkit PM Agent Team.
Frameworks based on [pm-skills](https://github.com/phuryn/pm-skills) by Pawel Huryn (MIT License).

- Opportunity Solution Tree: Teresa Torres, *Continuous Discovery Habits*
- Brainstorm & Assumptions: Multi-perspective ideation + 8-category risk assessment (4 Product + 4 GTM)
- Value Proposition: JTBD 6-Part (Pawel Huryn & Aatir Abdul Rauf)
- Lean Canvas: Ash Maurya
- SWOT/PESTLE/Porter's: Strategic analysis frameworks
- Beachhead Segment: Geoffrey Moore, *Crossing the Chasm*
- GTM Strategy: Product Compass methodology
- ICP & Battlecard: Sales-ready competitive tools
- Growth Loops: Product-led & sales-led mechanisms
- Pre-mortem: Gary Klein, prospective hindsight
- User Stories: 3C + INVEST (Ron Jeffries)
- Job Stories: Alan Klement, *When Coffee and Kale Compete*
- Test Scenarios: BDD Given/When/Then
- Stakeholder Map: Mendelow's Power/Interest matrix
