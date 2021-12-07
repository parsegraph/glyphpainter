import GlyphPainter from "../dist/parsegraph-glyphpainter";
import Font from 'parsegraph-font';
import {GraphicsWindow} from "parsegraph-window";

import { mockDOM } from "node-canvas-webgl";
mockDOM(window);

describe("Package", function () {
  it("works", () => {
    const window = new GraphicsWindow();
    const font = new Font(18, "serif");

    const painter = new GlyphPainter(window, font);
    painter.initBuffer({ 0: 1000, 1: 1000 });
    for (let i = 0; i < 1000; ++i) {
      painter.drawGlyph(String.fromCharCode(32 + i), 0, 0, 1);
    }
    painter.initBuffer({ 0: 1000 });
    for (let i = 0; i < 400; ++i) {
      painter.drawGlyph(String.fromCharCode(32 + i), 0, 0, 1);
    }
    painter.initBuffer({ 0: 1000, 1: 1000 });
    for (let i = 0; i < 1000; ++i) {
      painter.drawGlyph(String.fromCharCode(32 + i), 0, 0, 1);
    }
    painter.initBuffer({});
    painter.initBuffer({ 0: 1000, 1: 1000 });
    for (let i = 0; i < 1000; ++i) {
      painter.drawGlyph(String.fromCharCode(32 + i), 0, 0, 1);
    }
  });
});
