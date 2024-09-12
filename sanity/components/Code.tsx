import "./Code.css";

import Refractor from "react-refractor";
import javascript from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import jsx from "refractor/lang/jsx";
import tsx from "refractor/lang/tsx";
import sh from "refractor/lang/shell-session";

// Prism auto-highlights, but we only want the API, so we need to set it to manual mode
if (typeof window !== "undefined") {
  const prismWindow = window as any;
  prismWindow.Prism = prismWindow.Prism || {};
  prismWindow.Prism.manual = true;
}

Refractor.registerLanguage(javascript);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(sh);

export interface CodeBlock {
  _type: "code";
  code: string;
  language?: string;
}

export const Code = ({ value }: any) => {
  return <Refractor language={value.language || "js"} value={value.code} />;
};
