import { ReactNode } from "react";

interface CallToActionComponentProps {
  title: string;
  links: ReactNode[];
  className?: string;
  isVertical?: boolean
}

export default function CallToActionComponent(props: Readonly<CallToActionComponentProps>) {
  const { title, links, className, isVertical: isVerical = false } = props

  if (isVerical) {
    return (
      <div className={`mx-auto text-center flex flex-col justify-center items-center gap-8 bg-black text-white rounded-xl ${ className }`}>
        <h2 className="text-4xl font-bold">{ title }</h2>
        <div className="flex justify-center gap-8">
          { links }
        </div>
      </div>
    );
  }
  
  return (
    <div className={`mx-auto text-center flex justify-center sm:justify-between items-center flex-wrap gap-8 bg-black text-white rounded-xl ${ className }`}>
      <h2 className="text-4xl font-bold">{ title }</h2>
      <div className="flex justify-center gap-8">
        { links }
      </div>
    </div>
  );
}
