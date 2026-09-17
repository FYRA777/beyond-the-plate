type ModuleSnapshotProps = {
  number: string;
  phase: string;
  title: string;
  duration: string;
  question: string;
  skills: string[];
  vocabulary: string[];
  structures: string[];
  cultureFocus: string;
  outcome: string;
  activities: [string, string];
};

export function ModuleSnapshot({ number, phase, title, duration, question, skills, vocabulary, structures, cultureFocus, outcome, activities }: ModuleSnapshotProps) {
  return (
    <section className="module-snapshot" aria-labelledby={`module-${number}-snapshot`}>
      <header className="snapshot-heading">
        <p>MODULE {number} · {phase}</p>
        <h2 id={`module-${number}-snapshot`}>{title}</h2>
        <span>{duration}</span>
      </header>
      <div className="snapshot-question"><small>GUIDING QUESTION</small><p>{question}</p></div>
      <div className="snapshot-grid">
        <div><small>SKILLS</small><p className="snapshot-skills">{skills.join(' · ')}</p></div>
        <div><small>KEY VOCABULARY</small><div className="snapshot-tags">{vocabulary.map((word) => <span key={word}>{word}</span>)}</div></div>
        <div><small>LANGUAGE STRUCTURES</small>{structures.map((structure) => <p className="snapshot-frame" key={structure}>{structure}</p>)}</div>
        <div><small>CULTURE FOCUS</small><p>{cultureFocus}</p></div>
      </div>
      <div className="snapshot-outcome"><small>BY THE END, I CAN…</small><p>{outcome}</p></div>
      <div className="snapshot-activities">
        <small>TWO CORE ACTIVITIES</small>
        <ol><li><span>01</span>{activities[0]}</li><li><span>02</span>{activities[1]}</li></ol>
      </div>
    </section>
  );
}

const rubricCriteria = [
  {
    title: 'CULTURAL CONTEXT',
    ready: 'The story clearly explains the food, place/community, and relevant context.',
    almost: 'The story gives some context, but one important detail is missing.',
    exploring: 'The food is presented with little or no cultural context.',
  },
  {
    title: 'STEREOTYPE AWARENESS',
    ready: 'The story avoids generalizations and clearly shows that one story does not represent everyone.',
    almost: 'The story mostly avoids stereotypes, but one broad statement needs revision.',
    exploring: 'The story uses broad claims or treats a group as if everyone were the same.',
  },
  {
    title: 'RESPECTFUL ENGLISH',
    ready: 'The student uses clear A2 English and respectful, precise expressions.',
    almost: 'The language is generally respectful but sometimes unclear or too general.',
    exploring: 'The language needs support to become clearer or more respectful.',
  },
  {
    title: 'PARTICIPATION & COMMUNICATION',
    ready: 'The student participates meaningfully through the chosen route and communicates the story clearly.',
    almost: 'The student participates partially or needs some prompts/support.',
    exploring: 'Participation or communication is incomplete and needs additional support.',
  },
  {
    title: 'MEANINGFUL PRESENTATION',
    ready: 'The chosen format clearly supports the food story and its meaning.',
    almost: 'The story is understandable, but organization or presentation needs development.',
    exploring: 'The format or missing elements make the story difficult to understand.',
  },
] as const;

export function FinalRubric() {
  return (
    <div className="final-rubric">
      <div className="rubric-intro">
        <p>FINAL PERFORMANCE RUBRIC</p>
        <h2>WHAT MAKES A STORY READY TO SHARE?</h2>
        <strong>15 POINTS TOTAL · 5 CRITERIA × 3 POINTS</strong>
      </div>
      <div className="rubric-level-key" aria-label="Rubric levels">
        <span><b>3</b> READY TO SHARE</span><span><b>2</b> ALMOST THERE</span><span><b>1</b> KEEP EXPLORING</span>
      </div>
      <div className="rubric-criteria">
        {rubricCriteria.map((criterion, index) => (
          <details key={criterion.title} open={index === 0}>
            <summary><span>0{index + 1}</span><strong>{criterion.title}</strong><i aria-hidden="true">+</i></summary>
            <div className="rubric-levels">
              <article><b>3</b><h3>READY TO SHARE</h3><p>{criterion.ready}</p></article>
              <article><b>2</b><h3>ALMOST THERE</h3><p>{criterion.almost}</p></article>
              <article><b>1</b><h3>KEEP EXPLORING</h3><p>{criterion.exploring}</p></article>
            </div>
          </details>
        ))}
      </div>
      <p className="rubric-total">TOTAL <span aria-label="Write your total score">____</span> / 15</p>
    </div>
  );
}
