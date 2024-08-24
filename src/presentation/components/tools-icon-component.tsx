import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

export default function ToolsIcon({
  tools,
  className,
}: {
  readonly tools: string[];
  readonly className?: string;
}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {tools.map((tool) => {
        switch (tool) {
          case "HTML":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaHtml5 size={32} className="text-red-500" />
                <span className="text-xs">HTML</span>
              </div>
            );
          case "CSS":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaCss3Alt size={32} className="text-blue-500" />
                <span className="text-xs">CSS</span>
              </div>
            );
          case "JavaScript":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaNodeJs size={32} className="text-yellow-500" />
                <span className="text-xs">JavaScript</span>
              </div>
            );
          case "React":
            return (
              <div key={tool} className="flex flex-col gap-1 items-center">
                <FaReact size={32} className="text-blue-500" />
                <span className="text-xs">React</span>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
