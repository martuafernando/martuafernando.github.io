import { ReactNode } from "react";

interface CallToActionComponentProps {
  title: string;
  links: ReactNode[];
}

export default function CallToActionComponent(props: Readonly<CallToActionComponentProps>) {
  return (
    <div className="mx-auto text-center flex justify-between items-center bg-black text-white p-12 rounded-xl">
      <h2 className="text-4xl font-bold">{props.title}</h2>
      <div className="flex justify-center gap-8">
        {props.links}
      </div>
    </div>
  );
}
