import * as React from "react";
import { useActiveCode } from "@codesandbox/sandpack-react";
import Editor from "@monaco-editor/react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";
import * as monaco from "monaco-editor";
import { useParams } from "react-router";
import { initCode } from "../code";
import "./CustomEditor.css";

export function CustomEditor() {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );
  const { code, updateCode } = useActiveCode();
  const params = useParams();

  function connect(editor: monaco.editor.IStandaloneCodeEditor) {
    const editorModel = editor?.getModel();

    if (editor && editorModel) {
      const ydoc = new Y.Doc();
      const ytext = ydoc.getText("monaco");
      const provider = new WebrtcProvider(params?.roomId || "", ydoc);

      new MonacoBinding(
        ytext,
        editorModel,
        new Set([editor]),
        provider.awareness
      );
    }
  }

  function setTemplateCode() {
    editorRef.current?.getModel()?.setValue(initCode);
    updateCode(initCode);
  }

  return (
    <div className="sandbox-wrapper">
      <Editor
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={(value = "") => updateCode(value)}
        onMount={(editor) => {
          editorRef.current = editor;
          connect(editor);
        }}
      />
      <div>
        <button onClick={setTemplateCode}>Set example template</button>
      </div>
    </div>
  );
}
