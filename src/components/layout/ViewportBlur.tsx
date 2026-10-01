const layers = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export function ViewportBlur() {
  return (
    <div className="viewport-blur" aria-hidden="true">
      {layers.map((layer) => (
        <span key={layer} />
      ))}
    </div>
  );
}
