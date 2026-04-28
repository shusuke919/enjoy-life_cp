type Props = { type: number; color: string };

export default function ServiceIcon({ type, color }: Props) {
  switch (type) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11 L12 4 L21 11" />
          <path d="M5 10 V20 H19 V10" />
          <path d="M10 20 V14 H14 V20" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11 H20 V14 A6 6 0 0 1 14 20 H10 A6 6 0 0 1 4 14 Z" />
          <path d="M8 7 C 8 5, 10 5, 10 7 S 12 9, 12 7" />
          <path d="M14 7 C 14 5, 16 5, 16 7 S 18 9, 18 7" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 L 4 7 V13 C 4 17 8 20 12 21 C 16 20 20 17 20 13 V7 Z" />
          <path d="M9 12 L11 14 L15 10" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21 C 8 18, 3 14, 3 9 A4 4 0 0 1 12 7 A4 4 0 0 1 21 9 C 21 14 16 18 12 21 Z" />
        </svg>
      );
    default:
      return null;
  }
}
