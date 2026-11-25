// Make the AI Judge Laugh.
//
// One funny line, read cold with no setup. I ask my AI for a joke and
// it answers with its own error message: humour not found, 404. Then
// it prescribes the classic IT fix — to the human. The machine is
// funnier than the request because it treats me as the broken device
// and tells me to turn myself off and on again. Read it flat, like a
// support ticket, and let the last clause land on its own.
import fs from "node:fs";
import path from "node:path";

const LINE =
  "I asked my AI for a joke and it replied, 'Error 404: humour not found — have you tried turning yourself off and on again?'";

function problems(text: string): string[] {
  const found: string[] = [];
  const chars = [...text].length;
  if (chars < 1 || chars > 200) found.push(`length ${chars} is outside 1-200`);
  if (text.trim().length === 0) found.push("line is only white space");
  if (text.includes("\n")) found.push("line spans more than one line");
  if (text.includes("  ")) found.push("line has a double space");
  // The line ends on a closing quote after a question mark; that
  // question mark is the AI's question, not a second sentence, so the
  // check only insists the quoted error and the fix are both present.
  if (!text.includes("Error 404")) found.push("the error is missing");
  if (!text.includes("turning yourself off and on again")) found.push("the fix is missing");
  return found;
}

function main(): void {
  const bad = problems(LINE);
  if (bad.length > 0) {
    throw new Error(`judge laugh line is not valid: ${bad.join("; ")}`);
  }
  const outDir = path.resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, { encoding: "utf8", mode: 0o644 });
}

main();
