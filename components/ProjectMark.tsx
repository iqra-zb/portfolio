export default function ProjectMark({
  code,
  logo,
  size = 'md',
}: {
  code: string;
  logo?: string;
  size?: 'md' | 'lg';
}) {
  const box = size === 'lg' ? 'w-16 h-16 rounded-2xl' : 'w-11 h-11 rounded-xl';
  if (logo) {
    return (
      <span className={`${box} flex items-center justify-center bg-white border border-zinc-200 shrink-0 overflow-hidden p-1.5`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={`${code} logo`} className="max-w-full max-h-full w-auto h-auto object-contain" />
      </span>
    );
  }
  return (
    <span className={`${box} flex items-center justify-center bg-accent text-white font-display font-bold text-sm shrink-0`}>
      {code}
    </span>
  );
}
