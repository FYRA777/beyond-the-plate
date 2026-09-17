import { LessonShell, MicroNote, SectionTitle } from '@/components/unit-shell';

export const dynamic = 'force-static';

export default function ReferencesPage() {
  return (
    <LessonShell current="R" prev={{ href: '/lesson-5', label: 'The Inclusive Food Table' }}>
      <div className="round-two round2-references">
      <section className="references-hero"><p className="eyebrow">SOURCE DESK · VERIFIED FOR THIS ACADEMIC UNIT</p><h1>REFERENCES<br />& MEDIA CREDITS</h1><p>Culture is investigated, not decorated.</p></section>

      <section className="lesson-section reference-section">
        <SectionTitle kicker="01" title="ACADEMIC FOUNDATIONS" />
        <div className="reference-list">
          <article><span>01</span><p>Arsel, Z., Crockett, D., & Scott, M. L. (2022). Diversity, equity, and inclusion (DEI) in the <em>Journal of Consumer Research</em>: A curation and research agenda. <em>Journal of Consumer Research, 48</em>(5), 920–933. <a href="https://doi.org/10.1093/jcr/ucab057" target="_blank" rel="noreferrer">https://doi.org/10.1093/jcr/ucab057 ↗</a></p></article>
          <article><span>02</span><p>Deardorff, D. K. (Ed.). (2009). <em>The SAGE handbook of intercultural competence.</em> SAGE. <a href="https://www.sagepub.com/shop/buy-a-book/the-sage-handbook-of-intercultural-competence-1-232239" target="_blank" rel="noreferrer">Publisher record ↗</a></p></article>
          <article><span>03</span><p>Della Chiesa, B., Scott, J., & Hinton, C. (Eds.). (2012). <em>Languages in a global world: Learning for better cultural understanding.</em> OECD Publishing. <a href="https://doi.org/10.1787/9789264123557-en" target="_blank" rel="noreferrer">https://doi.org/10.1787/9789264123557-en ↗</a></p></article>
          <article><span>04</span><p>Morehouse, K. N., & Banaji, M. R. (2024). The science of implicit race bias: Evidence from the Implicit Association Test. <em>Dædalus, 153</em>(1), 21–50. <a href="https://doi.org/10.1162/daed_a_02047" target="_blank" rel="noreferrer">https://doi.org/10.1162/daed_a_02047 ↗</a></p></article>
        </div>
      </section>

      <section className="lesson-section cultural-sources">
        <SectionTitle kicker="02" title="CULTURAL SOURCES" note="These sources support the cultural facts in Lesson 2. The unit uses short, A2-level summaries and does not treat one source as a whole culture." />
        <div className="source-grid">
          <article><small>COLOMBIA</small><h3>MINISTERIO DE CULTURA</h3><p>Inventario de recetas de cocinas tradicionales colombianas. Used for arroz con coco, ajiaco, mamona / ternera a la llanera, casabe, and the national inventory count.</p><a href="https://patrimonio.mincultura.gov.co/Paginas/INVENTARIO-DE-RECETAS-DE-COCINAS-TRADICIONALES-COLOMBIANAS.aspx" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
          <article><small>BOGOTÁ · COLOMBIA</small><h3>INSTITUTO DISTRITAL DE TURISMO</h3><p>Information on Ajiaco Santafereño, its ingredients, its connection to Bogotá, and varied interpretations of the recipe.</p><a href="https://www.idt.gov.co/noticias/el-festival-del-ajiaco-regresa-a-bogota-tradicion-sabor-y-cultura-en-un-mismo-plato" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
          <article><small>MEXICO</small><h3>SECRETARÍA DE AGRICULTURA</h3><p>Government information on the seasonal, locally produced ingredients used for chile en nogada in Puebla.</p><a href="https://www.gob.mx/agricultura/prensa/listos-ingredientes-del-campo-que-dan-sabor-y-color-a-la-temporada-gastronomica-de-los-chiles-en-nogada?idiom=es" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
          <article><small>JAPAN</small><h3>GOVERNMENT PUBLIC RELATIONS OFFICE</h3><p>“The Onigiri Project: Promoting the Appeal of Rice.” Used for onigiri as a familiar rice food with varied fillings and regional ingredients.</p><a href="https://www.gov-online.go.jp/hlj/en/february_2026/february_2026-09.html" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
          <article><small>REPUBLIC OF KOREA</small><h3>UNESCO INTANGIBLE CULTURAL HERITAGE</h3><p>“Kimjang, making and sharing kimchi in the Republic of Korea.” Used for preparation, sharing, seasons, family cooperation, and regional differences.</p><a href="https://ich.unesco.org/en/RL/kimjang-making-and-sharing-kimchi-in-the-republic-of-korea-00881" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
          <article><small>PERU</small><h3>UNESCO INTANGIBLE CULTURAL HERITAGE</h3><p>“Practices and meanings associated with the preparation and consumption of ceviche.” Used for regional versions, daily meals, festivities, and social gatherings.</p><a href="https://ich.unesco.org/en/RL/practices-and-meanings-associated-with-the-preparation-and-consumption-of-ceviche-an-expression-of-peruvian-traditional-cuisine-01952" target="_blank" rel="noreferrer">OPEN SOURCE ↗</a></article>
        </div>
      </section>

      <section className="lesson-section media-note-section">
        <SectionTitle kicker="03" title="MEDIA & AI DISCLOSURE" note="Illustration, not evidence." />
        <div className="media-note"><p>Selected visual assets in this academic unit were created with generative AI tools under original art direction for educational purposes. They are illustrative images and are not presented as documentary photographs or cultural evidence. All cultural information was verified using the sources listed in this section.</p><ul><li><strong>Hero shared table:</strong> original AI-generated illustrative photograph; custom prompt and art direction for Beyond the Plate.</li><li><strong>Mystery market table:</strong> original AI-generated illustrative photograph; used as multiple observational crops.</li><li><strong>Curiosity table:</strong> original AI-generated illustrative photograph; fictional classroom situation, not a real student record.</li><li><strong>Lesson plate cutouts:</strong> original AI-generated illustrative food images; isolated overhead compositions, not cultural evidence.</li><li><strong>Kimjang process:</strong> original AI-generated illustrative photograph; a learning visual, not documentary evidence.</li></ul></div>
        <MicroNote type="CULTURE NOTE" tone="blue"><p>Images invite observation. Sources provide cultural context. Neither one photo nor one source can speak for everyone.</p></MicroNote>
      </section>
      </div>
    </LessonShell>
  );
}
