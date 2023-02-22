import { writable } from "svelte/store";

export const plugins = writable([
  {
    id: "removeDoctype",
    name: "Remove doctype",
    enabledByDefault: false,
  },
  {
    id: "removeXMLProcInst",
    name: "Remove XML instructions",
    enabledByDefault: false,
  },
  {
    id: "removeComments",
    name: "Remove comments",
    enabledByDefault: true,
  },
  {
    id: "removeMetadata",
    name: "Remove <metadata>",
    enabledByDefault: true,
  },
  {
    id: "removeXMLNS",
    name: "Remove xmlns",
    enabledByDefault: false,
  },
  {
    id: "removeEditorsNSData",
    name: "Remove editor data",
    enabledByDefault: false,
  },
  {
    id: "cleanupAttrs",
    name: "Clean up attribute whitespace",
    enabledByDefault: true,
  },
  {
    id: "mergeStyles",
    name: "Merge styles",
    enabledByDefault: false,
  },
  {
    id: "inlineStyles",
    name: "Inline styles",
    enabledByDefault: false,
  },
  {
    id: "minifyStyles",
    name: "Minify styles",
    enabledByDefault: false,
  },
  {
    id: "convertStyleToAttrs",
    name: "Style to attributes",
    enabledByDefault: true,
  },
  {
    id: "cleanupIds",
    name: "Clean up IDs",
    enabledByDefault: false,
  },
  {
    id: "removeRasterImages",
    name: "Remove raster images",
    enabledByDefault: false,
  },
  {
    id: "removeUselessDefs",
    name: "Remove unused defs",
    enabledByDefault: true,
  },
  {
    id: "cleanupNumericValues",
    name: "Round/rewrite numbers",
    enabledByDefault: true,
  },
  {
    id: "cleanupListOfValues",
    name: "Round/rewrite number lists",
    enabledByDefault: false,
  },
  {
    id: "convertColors",
    name: "Minify colours",
    enabledByDefault: false,
  },
  {
    id: "removeUnknownsAndDefaults",
    name: "Remove unknowns & defaults",
    enabledByDefault: true,
  },
  {
    id: "removeNonInheritableGroupAttrs",
    name: "Remove unneeded group attrs",
    enabledByDefault: true,
  },
  {
    id: "removeUselessStrokeAndFill",
    name: "Remove useless stroke & fill",
    enabledByDefault: true,
  },
  {
    id: "removeViewBox",
    name: "Remove viewBox",
    enabledByDefault: false,
  },
  {
    id: "cleanupEnableBackground",
    name: "Remove/tidy enable-background",
    enabledByDefault: false,
  },
  {
    id: "removeHiddenElems",
    name: "Remove hidden elements",
    enabledByDefault: true,
  },
  {
    id: "removeEmptyText",
    name: "Remove empty text",
    enabledByDefault: true,
  },
  {
    id: "convertShapeToPath",
    name: "Shapes to (smaller) paths",
    enabledByDefault: true,
  },
  {
    id: "moveElemsAttrsToGroup",
    name: "Move attrs to parent group",
    enabledByDefault: true,
  },
  {
    id: "moveGroupAttrsToElems",
    name: "Move group attrs to elements",
    enabledByDefault: true,
  },
  {
    id: "collapseGroups",
    name: "Collapse useless groups",
    enabledByDefault: true,
  },
  {
    id: "convertPathData",
    name: "Round/rewrite paths",
    enabledByDefault: true,
  },
  {
    id: "convertEllipseToCircle",
    name: "Convert non-eccentric <ellipse> to <circle>",
    enabledByDefault: true,
  },
  {
    id: "convertTransform",
    name: "Round/rewrite transforms",
    enabledByDefault: true,
  },
  {
    id: "removeEmptyAttrs",
    name: "Remove empty attrs",
    enabledByDefault: true,
  },
  {
    id: "removeEmptyContainers",
    name: "Remove empty containers",
    enabledByDefault: true,
  },
  {
    id: "mergePaths",
    name: "Merge paths",
    enabledByDefault: true,
  },
  {
    id: "removeUnusedNS",
    name: "Remove unused namespaces",
    enabledByDefault: true,
  },
  {
    id: "reusePaths",
    name: "Replace duplicate elements with links",
    enabledByDefault: false,
  },
  {
    id: "sortAttrs",
    name: "Sort attrs",
    enabledByDefault: true,
  },
  {
    id: "sortDefsChildren",
    name: "Sort children of <defs>",
    enabledByDefault: true,
  },
  {
    id: "removeTitle",
    name: "Remove <title>",
    enabledByDefault: true,
  },
  {
    id: "removeDesc",
    name: "Remove <desc>",
    enabledByDefault: true,
  },
  {
    id: "removeDimensions",
    name: "Prefer viewBox to width/height",
    enabledByDefault: false,
  },
  {
    id: "removeStyleElement",
    name: "Remove style elements",
    enabledByDefault: false,
  },
  {
    id: "removeScriptElement",
    name: "Remove script elements",
    enabledByDefault: false,
  },
  {
    id: "removeOffCanvasPaths",
    name: "Remove out-of-bounds paths",
    enabledByDefault: false,
  },
]);
