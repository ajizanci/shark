import React from "react";
import ReactMarkdown from "react-markdown";
import TeX from "@matejmazur/react-katex";
import RemarkMath from "remark-math";
import "katex/dist/katex.min.css";

interface MarkdownRendererProps {
  source: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ source }) => {
  return (
    <ReactMarkdown
      source={source}
      plugins={[RemarkMath]}
      renderers={{
        math: (props: { value: string }) => <TeX block>{props.value}</TeX>,
        inlineMath: (props: { value: string }) => <TeX>{props.value}</TeX>,
      }}
    />
  );
};

export default MarkdownRenderer;
