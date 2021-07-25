import React, { useState, useEffect } from "react";
import { Cell } from "../state";
import bundle from "../bundler";
import Preview from "../components/preview";
import CodeEditor from "../components/code-editor";

import Resizable from "./resizable";

import { useActions } from "../hooks/use-actions";

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState<string>("");
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setError(output.err);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="ver">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="hor">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
