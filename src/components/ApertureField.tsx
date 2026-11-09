/**
 * Ambient atmosphere for the lens-studio world — replaces the old plain
 * blurred color blobs with faint, heavily blurred aperture-iris rings
 * (concentric polygons echoing camera aperture blades). Never sharp-edged,
 * never competing with foreground content: 4-7% opacity, corner-anchored.
 */
const IrisRing = ({ size, className }: { size: number; className: string }) => (
  <div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: "conic-gradient(from 0deg, hsl(var(--primary)/0.10), transparent 30%, hsl(var(--accent)/0.08) 55%, transparent 80%)",
    }}
    aria-hidden="true"
  />
);

const ApertureField = ({ variant = "default" }: { variant?: "default" | "reverse" | "center" }) => {
  if (variant === "center") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <IrisRing size={620} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <IrisRing
        size={520}
        className={variant === "reverse" ? "-bottom-40 -left-40" : "-top-40 -right-40"}
      />
      <IrisRing
        size={360}
        className={variant === "reverse" ? "-top-32 -right-32" : "-bottom-32 -left-32"}
      />
    </div>
  );
};

export default ApertureField;
