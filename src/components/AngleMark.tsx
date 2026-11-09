/**
 * Recurring graphic motif: a literal angle mark (∠), placed before every
 * section's eyebrow label. A small, authored break from plain text — not a
 * generic icon-font glyph. See DESIGN.md → Eyebrow Label component.
 */
const AngleMark = ({ className = "" }: { className?: string }) => (
  <svg
    width="9"
    height="9"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1.5 1.5L1.5 8.5L8.5 5.2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AngleMark;
