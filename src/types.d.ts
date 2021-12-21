declare module "y-monaco" {
  import * as Y from "yjs";
  import * as monaco from "monaco-editor";

  class MonacoBinding {
    constructor(
      text: Y.Text,
      monacoModel: monaco.editor.ITextModel,
      editors: Set<monaco.editor.IStandaloneCodeEditor>,
      awareness: any
    );
  }
}
