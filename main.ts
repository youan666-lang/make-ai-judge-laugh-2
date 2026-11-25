import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Make the AI Judge Laugh — one funny line, read cold with no setup.
// The setup is asking an AI for a joke; the turn is the AI answering
// with its own error message, a 404 for humour, and then prescribing
// the classic IT fix to the human. The machine is funnier than the
// request because it treats the human as the broken device.
// Delivery: read it flat, like a support ticket, and let "turning
// yourself off and on again" land as the punchline.
const setup = "I asked my AI for a joke and it replied,";
const twist = "'Error 404: humour not found — have you tried turning yourself off and on again?'";
const joke = `${setup} ${twist}`;

function countChars(text: string): number {
  return [...text].length;
}

function sentenceCount(text: string): number {
  return text.split(/[.!?]/).filter((part) => part.trim().length > 0).length;
}

// The gate wants 1-200 characters of UTF-8 text, one funny line. One
// line, one breath: the quoted error and the question share the line,
// and the line ends on the closing quote — the question mark belongs to
// the AI's question, not to a second sentence. The joke is written as setup
// + twist so the turn ("turning yourself off and on again") is
// impossible to miss when the file is read aloud — the judge hears the
// AI prescribing its own fix to a human.
function isJudgeLaugh(text: string): boolean {
  const chars = countChars(text);
  if (chars < 1 || chars > 200) return false;
  if (text.trim().length === 0) return false;
  if (text.includes("\n")) return false;
  if (text.includes("  ")) return false;
  if (!text.includes("Error 404")) return false;
  if (!text.includes("turning yourself off and on again")) return false;
  return true;
}

function main(): void {
  if (!isJudgeLaugh(joke)) {
    throw new Error(
      `judge laugh line must be one line of 1-200 characters, got ${countChars(joke)} chars and ${sentenceCount(joke)} sentences`,
    );
  }
  const targetDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }
  const destination = join(targetDir, "entry.txt");
  writeFileSync(destination, joke, { encoding: "utf8", mode: 0o644 });
}

main();
