import { useActiveCode } from "@codesandbox/sandpack-react";
import Editor from "@monaco-editor/react";
import * as React from "react";

export function CustomEditor() {
  const { code, updateCode } = useActiveCode();

  const editorRef = React.useRef(null);

  return (
    <Editor
      defaultLanguage="javascript"
      value={code}
      onChange={(value = "") => updateCode(value)}
      onMount={(editor) => (editorRef.current = editor)}
    />
  );
}
