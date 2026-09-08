export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} Iqra Ramzan. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <a href="https://www.linkedin.com/in/iqra-ramzan-dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/iqra-zb" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="mailto:iqra046cs@gmail.com" className="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
