// Text that rolls up to a copy of itself on hover (see `.roll` in globals.css).
export default function Roll({ children }: { children: React.ReactNode }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}
