/**
 * Signature framing device of the lens-studio world: four camera-viewfinder
 * corner brackets, drawn in one stroke, currentColor. Sits absolutely over
 * any relative-positioned container to mark it as "in frame" — the hero
 * photo, a focused card, a form panel. Purely decorative, aria-hidden.
 */
const ViewfinderFrame = ({
  className = "",
  inset = "inset-4 sm:inset-5",
  color = "text-white/70",
}: {
  className?: string;
  inset?: string;
  color?: string;
}) => (
  <div className={`pointer-events-none absolute ${inset} ${color} ${className}`} aria-hidden="true">
    {[
      "top-0 left-0 border-t border-l",
      "top-0 right-0 border-t border-r",
      "bottom-0 left-0 border-b border-l",
      "bottom-0 right-0 border-b border-r",
    ].map((pos) => (
      <span key={pos} className={`absolute w-4 h-4 sm:w-5 sm:h-5 border-current ${pos}`} />
    ))}
  </div>
);

export default ViewfinderFrame;
