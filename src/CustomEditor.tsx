import * as React from "react";
import { useActiveCode } from "@codesandbox/sandpack-react";
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
// @ts-ignore
import { MonacoBinding } from "y-monaco";
import "./CustomEditor.css";

export function CustomEditor() {
  const [value, setValue] = React.useState("");
  const editorRef =
    React.useRef<MonacoBinding.editor.IStandaloneCodeEditor | null>(null);
  const { code, updateCode } = useActiveCode();

  function connect() {
    if (editorRef) {
      const ydoc = new Y.Doc();
      const provider = new WebrtcProvider(value, ydoc);
      const ytext = ydoc.getText("monaco");

      const monacoBinding = new MonacoBinding(
        ytext,
        editorRef.current.getModel(),
        new Set([editorRef.current]),
        provider.awareness
      );
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={connect}>connect</button>
      </div>
      <Editor
        defaultLanguage="javascript"
        value={code}
        onChange={(value = "") => updateCode(value)}
        onMount={(editor) => (editorRef.current = editor)}
      />
    </div>
  );
}
