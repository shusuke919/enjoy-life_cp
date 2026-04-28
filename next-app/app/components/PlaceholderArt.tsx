type Props = {
  tone: string;
  label: string;
  idx?: number;
  small?: boolean;
};

export default function PlaceholderArt({ tone, label, idx = 0, small = false }: Props) {
  const patterns = [
    <svg key="0" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={tone} />
      <circle cx="100" cy="120" r="70" fill="#fff" opacity="0.55" />
      <circle cx="280" cy="200" r="90" fill="#fff" opacity="0.4" />
      <path d="M0 240 Q 100 200 200 240 T 400 230 L 400 300 L 0 300 Z" fill="#fff" opacity="0.35" />
    </svg>,
    <svg key="1" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={tone} />
      <rect x="40" y="80" width="140" height="160" rx="14" fill="#fff" opacity="0.5" />
      <rect x="210" y="50" width="150" height="200" rx="14" fill="#fff" opacity="0.38" />
      <circle cx="350" cy="90" r="30" fill="#fff" opacity="0.5" />
    </svg>,
    <svg key="2" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={tone} />
      <path d="M0 180 L 100 110 L 200 170 L 300 90 L 400 150 L 400 300 L 0 300 Z" fill="#fff" opacity="0.4" />
      <circle cx="320" cy="80" r="28" fill="#fff" opacity="0.6" />
    </svg>,
    <svg key="3" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill={tone} />
      <circle cx="200" cy="150" r="110" fill="#fff" opacity="0.35" />
      <circle cx="200" cy="150" r="70" fill="#fff" opacity="0.35" />
      <circle cx="200" cy="150" r="35" fill="#fff" opacity="0.45" />
    </svg>,
  ];
  return (
    <div className="va-ph" style={{ background: tone }}>
      {patterns[idx % patterns.length]}
      <span className="va-ph-label" style={{ fontSize: small ? 10 : 12 }}>
        [ {label} ]
      </span>
    </div>
  );
}
