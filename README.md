# Beyond the Plate

**Exploring Food, Culture, and Stereotypes** is a complete interactive academic unit for seventh-grade A2 English learners in a Colombian public-school context.

The source in this folder is the master project. It is a portable static website with no login, database, paid service, or student account requirement. It has not been deployed publicly.

## Preview the full website

Requirements: Node.js 22.13 or newer and npm.

```powershell
npm install
npm run dev
```

Open the exact local address printed by the development server, normally `http://localhost:3000/`.

To verify a production build:

```powershell
npm run lint
npm run build
npx serve dist/client
```

The export in `dist/client` is static and portable.

## Learning journey

1. **Experience — Open the Mystery Box:** observation before labels, tactile reveal, language support, essential-question poll, and exit reflection.
2. **Explore — More Than a Dish:** inward exploration of four Colombian stories, outward exploration of Mexico, Japan, the Republic of Korea, and Peru, comparisons, and My Food Map.
3. **Question — Fact, Experience or Stereotype?:** six explained classification cases, context stepper, word watch, rewriting, and private reflection.
4. **Communicate — Curiosity, Not Judgment:** second-choice language, impact, repair, respectful-question toolkit, participation routes, and formative exit.
5. **Create + Reflect — The Inclusive Food Table:** food-story builder, format and group options, context checklist, gallery mission, individual reflection, mystery-box callback, and Then/Now conclusion.

## Evidence for the objectives

| Objective | Main evidence |
| --- | --- |
| Recognize a food stereotype | Lesson 3 assumption table and Catch It · Fix It · Explain It exit |
| Compare food traditions | Lesson 2 Colombia/world explorers and My Food Map |
| Ask respectful questions | Lesson 4 Rephrase It challenge and The Second Choice exit |
| Share a food story without stereotyping | Lesson 5 builder, Context Check, final product, and reflection |

## Project structure

```text
app/
  page.tsx                 Home
  lesson-1/page.tsx        Experience
  lesson-2/page.tsx        Explore inward + outward
  lesson-3/page.tsx        Question assumptions
  lesson-4/page.tsx        Communicate respectfully
  lesson-5/page.tsx        Create + reflect
  references/page.tsx      APA references, cultural sources, media note
  globals.css              Design system and responsive layouts
components/
  interactive.tsx          Polls, reveals, selectors, feedback, local reflections
  unit-shell.tsx           Navigation, lesson heroes, notes, signatures
  ui/                      Generated accessible interface primitives
public/images/             Optimized WebP website assets
assets/source-images/      Full-resolution source PNG assets
assets/IMAGEGEN_PROMPTS.md Image-generation record
vercel.json                Static Vercel build configuration
```

## Interaction and privacy

- The initial essential-question poll and typed reflections use browser-local storage only.
- Clearing browser storage removes those entries but never blocks a lesson.
- No data leaves the device. There are no names, emails, accounts, uploads, or location requests.
- Personal story participation and the private stereotype reflection are explicitly optional.
- The website exposes a small progressive WebMCP interface for recording and reading the same local starting poll when a supporting browser is used. Unsupported browsers continue normally.

## Accessibility

- Semantic headings, landmarks, fieldsets, labels, and meaningful alternative text.
- Keyboard-accessible native buttons plus accessible Radio Group, Checkbox, Tabs, and Textarea primitives.
- Visible high-contrast focus states and no color-only feedback.
- Tap/select alternatives throughout; there is no mouse-only drag dependency.
- The map has a complete story-list route.
- Sensory work has LOOK and VISUAL ROUTE alternatives; tasting is voluntary.
- A2 sentence frames, short instructions, large touch targets, reduced-motion support, and no autoplay media.

## Responsive behavior

- Desktop uses wide, asymmetric editorial compositions.
- Tablet reduces to two or one columns where needed and keeps controls touch-first.
- Mobile intentionally recomposes into a single reading path; required learning never depends on horizontal scrolling or a tiny map.

## Visual system

- Warm cream base with disciplined cobalt, mango yellow, coral, ink, and green accents.
- Expressive condensed display typography, readable system sans-serif body text, and limited handwritten annotation.
- Controlled asymmetry, visible borders, large typographic statements, documentary crops, and the incomplete **Open Plate** motif.
- Three original AI-generated illustrative photographs are credited on the References & Media Credits page. They are not presented as documentary or cultural evidence.

## Sources

All cultural claims in Lesson 2 link to the official sources listed on the References & Media Credits page. Academic references are formatted in APA 7. Links and metadata were checked on 2026-09-08.

## Deployment after approval

The project is ready for the intended GitHub → Vercel flow, but deployment should happen only after final user approval.

1. Create a GitHub repository and push the contents of this `beyond-the-plate` folder as the repository root.
2. In Vercel, import the GitHub repository.
3. Keep the framework preset as **Other**. The included `vercel.json` uses `npm run build` and publishes `dist/client`.
4. Review the preview deployment before promoting it to production.

The same `dist/client` folder can be hosted on another static host.

## Review notes

- The observation gallery uses six intentional crops from one authored market-table composition. This creates a coherent mystery while avoiding unsupported country labels.
- Food-story images are illustrative details, never factual proof. The text and source links carry the cultural claims.
- The unit does not grade open text automatically. Model responses and reasoning feedback are transparent and instructional.
- Classroom work is integrated under the single label **IN CLASS**; there is no Teacher Corner.

