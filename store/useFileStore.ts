import { create } from "zustand";

// interface FileMetadata {
//   name: string;
//   size: number;
//   type: string;
//   content: string; // Base64 string for the file content
// }
//
// interface FileStore {
//   fileName: string;
//   fileContent: string;
//   setFile: (name: string, content: any) => void;
//   clearFile: () => void;
//   loadFile: () => void;
// }
//
// const useFileStore = create<FileStore>((set) => ({
//   fileName: "",
//   fileContent: "",
//   setFile: (name, content) => {
//     set({ fileName: name, fileContent: content });
//     localStorage.setItem("uploadedFileName", name);
//     localStorage.setItem("uploadedFileContent", content);
//   },
//   clearFile: () => {
//     set({ fileName: "", fileContent: "" });
//     localStorage.removeItem("uploadedFileName");
//     localStorage.removeItem("uploadedFileContent");
//   },
//   loadFile: () => {
//     const name = localStorage.getItem("uploadedFileName");
//     const content = localStorage.getItem("uploadedFileContent");
//     if (name && content) {
//       set({ fileName: name, fileContent: content });
//     }
//   },
// }));
//
// export default useFileStore;

const usePdfStore = create((set) => ({
  pdfFiles: [],
  extractedText: "",
  addPdfFile: (file) =>
    set((state) => ({ pdfFiles: [...state.pdfFiles, file] })),
  setPdfText: (text) => set({ extractedText: text }),
  clearStore: () => set({ pdfFiles: [], extractedText: "" }),
}));

export default usePdfStore;
