import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const require = createRequire(import.meta.url);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function flatten(value, prefix = "") {
  /** @type {string[]} */
  const keys = [];

  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, nested] of Object.entries(value)) {
      const path = prefix ? `${prefix}.${key}` : key;
      keys.push(...flatten(nested, path));
    }
    return keys;
  }

  keys.push(prefix);
  return keys;
}

const en = require(resolve(root, "messages/en.json"));
const pt = require(resolve(root, "messages/pt-PT.json"));

const enKeys = new Set(flatten(en));
const ptKeys = new Set(flatten(pt));

const missingInPt = [...enKeys].filter((key) => !ptKeys.has(key));
const extraInPt = [...ptKeys].filter((key) => !enKeys.has(key));

if (missingInPt.length > 0 || extraInPt.length > 0) {
  if (missingInPt.length > 0) {
    console.error("Missing in pt-PT.json:");
    for (const key of missingInPt) console.error(`  - ${key}`);
  }
  if (extraInPt.length > 0) {
    console.error("Extra in pt-PT.json:");
    for (const key of extraInPt) console.error(`  - ${key}`);
  }
  process.exit(1);
}

console.log(`i18n check passed (${enKeys.size} keys).`);
