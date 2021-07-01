import React, { useState, useEffect } from "react";

import bundle from "../bundler";
import Preview from "../components/preview";
import CodeEditor from "../components/code-editor";

import Resizable from "./resizable";

const CodeCell: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setError(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="ver">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="hor">
          <CodeEditor
            initialValue="const a =1"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
