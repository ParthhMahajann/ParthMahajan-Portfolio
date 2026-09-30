// Explanatory project graphics, not screenshots or simulated product data.
const weights = [
  { label: 'Skill overlap', value: 40 },
  { label: 'Semantic similarity', value: 30 },
  { label: 'Preferences', value: 20 },
  { label: 'Recency', value: 10 },
];

export function NextStepPreview() {
  return <div className="technical-preview ranking-preview">
    <span className="preview-name">NextStep AI</span>
    <h4>What makes a job<br/>a better match?</h4>
    <dl className="ranking-weights">{weights.map(({label, value}) => <div key={label}>
      <dt>{label}</dt><dd>{value}%</dd><span style={{width:`${value * 2}%`}} aria-hidden="true" />
    </div>)}</dl>
    <p className="preview-caption">Default ranking weights from the project source.</p>
  </div>;
}

export function SentinelPreview() {
  return <div className="technical-preview recovery-preview">
    <span className="preview-name">SentinelD</span>
    <h4>A recovery action<br/>has to earn approval.</h4>
    <ol className="recovery-steps">
      <li><strong>Collect</strong><span>Linux telemetry</span></li>
      <li><strong>Detect</strong><span>Rules & anomalies</span></li>
      <li><strong>Review</strong><span>Operator approval</span></li>
      <li><strong>Execute</strong><span>Validated actions</span></li>
    </ol>
    <p className="preview-caption">Incident-to-recovery workflow, simplified.</p>
  </div>;
}
