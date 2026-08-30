import { describe, expect, test } from "bun:test";
import { existsSync, readFileSync, readdirSync } from "node:fs";

import { locales, siteContent } from "../src/i18n/content";

const siteSource = readFileSync(
  new URL("../src/components/eco-taxi-site.tsx", import.meta.url),
  "utf8",
);
const logoSource = readFileSync(
  new URL("../public/assets/brand/ekotaxi-logo.svg", import.meta.url),
  "utf8",
);
const rootSource = readFileSync(new URL("../src/routes/__root.tsx", import.meta.url), "utf8");
const appMeta = readFileSync(new URL("../src/app-meta.json", import.meta.url), "utf8");
const manifest = readFileSync(new URL("../public/site.webmanifest", import.meta.url), "utf8");
const styleSource = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");

const unsupportedClaims =
  /\b(?:the original|originalna|die originale|originale|since 2010|od 2010|seit 2010|dal 2010)\b/i;

function sourceFiles(directory: URL): URL[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const url = new URL(entry.isDirectory() ? `${entry.name}/` : entry.name, directory);
    return entry.isDirectory() ? sourceFiles(url) : [url];
  });
}

describe("real EkoTaxi identity", () => {
  test("ships both confirmed direct phone links", () => {
    expect(siteSource).toContain('href: "tel:+385981652854"');
    expect(siteSource).toContain('href: "tel:+385958584045"');
    expect(siteSource).toContain('name: "Igor"');
    expect(siteSource).toContain('name: "Toni"');
  });

  test("keeps both confirmed numbers in every locale metadata description", () => {
    for (const locale of locales) {
      expect(siteContent[locale].meta.description).toContain("+385 98 165 2854");
      expect(siteContent[locale].meta.description).toContain("+385 95 858 4045");
    }
  });

  test("keeps originality and operating-history claims out of public copy", () => {
    for (const locale of locales) {
      expect(JSON.stringify(siteContent[locale])).not.toMatch(unsupportedClaims);
      expect(siteContent[locale].facts.since.value).toContain("2010");
      expect(siteContent[locale].facts.since.note.toLowerCase()).toMatch(
        /decal|naljepnici|aufkleber|decalcomania/,
      );
    }

    for (const source of [siteSource, rootSource, appMeta, manifest]) {
      expect(source).not.toMatch(unsupportedClaims);
    }
    expect(siteSource).not.toContain("foundingDate");
  });

  test("does not deploy or reference the removed people presets", () => {
    const removedPresets = ["cover.png", "explain.png", "hyper-motion.png"];
    const liveSource = sourceFiles(new URL("../src/", import.meta.url))
      .filter((url) => /\.(?:css|json|ts|tsx)$/.test(url.pathname))
      .map((url) => readFileSync(url, "utf8"))
      .join("\n");

    for (const preset of removedPresets) {
      expect(existsSync(new URL(`../public/presets/${preset}`, import.meta.url))).toBeFalse();
      expect(liveSource).not.toContain(`/presets/${preset}`);
    }
  });

  test("gives every language link a 24px minimum target", () => {
    expect(styleSource).toMatch(/\.lang-switch a\s*\{[^}]*min-width:\s*24px/s);
    expect(styleSource).toMatch(/\.lang-switch a\s*\{[^}]*min-height:\s*24px/s);
  });

  test("uses an outlined local SVG instead of a cropped decal", () => {
    expect(logoSource).toContain("EkoTaxi");
    expect(logoSource).toContain("Grasshopper reconstructed");
    expect(logoSource).toContain("Passenger sidecar and cycle");
    expect(logoSource).not.toContain("<image");
    expect(logoSource).not.toContain("<text");
  });
});
