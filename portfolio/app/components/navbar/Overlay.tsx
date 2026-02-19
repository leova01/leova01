interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export function Overlay({ isVisible, onClose }: OverlayProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
  );
}
