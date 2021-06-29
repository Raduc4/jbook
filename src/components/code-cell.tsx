import React, { useState } from "react";

import bundle from "../bundler";
import Preview from "../components/preview";
import CodeEditor from "../components/code-editor";

import Resizable from "./resizable";

const CodeCell: React.FC = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="ver">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="hor">
          <CodeEditor
            initialValue="const a =1"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
