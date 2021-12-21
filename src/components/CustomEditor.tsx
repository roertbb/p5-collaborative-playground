import * as React from "react";
import { useActiveCode } from "@codesandbox/sandpack-react";
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";
import * as monaco from "monaco-editor";
import "./CustomEditor.css";

export function CustomEditor() {
  const [value, setValue] = React.useState("");
  const [connected, setConnected] = React.useState(false);

  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );
  const { code, updateCode } = useActiveCode();

  function connect() {
    const editorModel = editorRef?.current?.getModel();

    if (editorRef?.current && editorModel) {
      const ydoc = new Y.Doc();
      const ytext = ydoc.getText("monaco");
      const provider = new WebrtcProvider(value, ydoc);

      new MonacoBinding(
        ytext,
        editorModel,
        new Set([editorRef.current]),
        provider.awareness
      );

      setConnected(true);
    }
  }

  return (
    <div className="sandbox-wrapper">
      <div className="input-wrapper">
        <label htmlFor="roomId">Room Id</label>
        <input
          id="roomId"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={connect} disabled={connected}>
          Connect
        </button>
      </div>
      <Editor
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={(value = "") => updateCode(value)}
        onMount={(editor) => (editorRef.current = editor)}
        keepCurrentModel={true}
      />
    </div>
  );
}
