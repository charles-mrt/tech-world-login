import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 flex items-center justify-end bg-red-white">
      <a
        href="https://github.com/charles-mrt/tech-world-login"
        target="_blank"
        className="px-2 flex gap-1 items-center text-xs hover:text-violet-600"
        rel="noreferrer"
      >
        <Github size={12} />
        Github - V.1.0
      </a>
    </div>
  )
}