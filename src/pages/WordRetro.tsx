import { Link } from "react-router-dom";
import skyPattern from "@/assets/word-sky-pattern.png";
import heartControls from "@/assets/word-heart-controls.png";
import {
  Save, FilePlus2, FolderOpen, Printer, Search, Scissors, Copy, ClipboardPaste,
  Undo2, Redo2, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  List, ListOrdered, Indent, Outdent, Paintbrush, Type, ChevronDown, Image as ImgIcon,
  Table as TableIcon, Link2,
} from "lucide-react";

const MENUS = ["File", "Edit", "View", "Insert", "Format", "Tools", "Table", "Window", "Help"];

const ToolBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="wd-tool-btn" type="button">{children}</button>
);

const Sep = () => <span className="wd-sep" aria-hidden />;

const WordRetro = () => {
  return (
    <div className="wd-screen min-h-screen w-full p-2 sm:p-6 flex items-center justify-center">
      <div className="wd-window w-full max-w-[1200px] mx-auto">
        {/* TITLE BAR */}
        <div className="wd-titlebar">
          <div className="flex items-center gap-2 min-w-0">
            <span className="wd-title-icon" aria-hidden>♡</span>
            <span className="wd-title-text truncate">Document1 - Microsoft Word</span>
          </div>
          <img
            src={heartControls}
            alt="window controls"
            width={512}
            height={512}
            className="h-7 w-auto object-contain pixelated"
            loading="lazy"
          />
        </div>

        {/* MENU BAR */}
        <div className="wd-menubar">
          {MENUS.map((m) => (
            <button key={m} className="wd-menu-item" type="button">
              <span className="underline decoration-dotted underline-offset-2">{m[0]}</span>
              {m.slice(1)}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 pr-1">
            <span className="wd-menu-item">Type a question for help</span>
            <span className="wd-help-box">▾</span>
          </div>
        </div>

        {/* TOOLBAR ROW 1 */}
        <div className="wd-toolbar">
          <ToolBtn><FilePlus2 size={14} /></ToolBtn>
          <ToolBtn><FolderOpen size={14} /></ToolBtn>
          <ToolBtn><Save size={14} /></ToolBtn>
          <ToolBtn><Printer size={14} /></ToolBtn>
          <ToolBtn><Search size={14} /></ToolBtn>
          <Sep />
          <ToolBtn><Scissors size={14} /></ToolBtn>
          <ToolBtn><Copy size={14} /></ToolBtn>
          <ToolBtn><ClipboardPaste size={14} /></ToolBtn>
          <ToolBtn><Paintbrush size={14} /></ToolBtn>
          <Sep />
          <ToolBtn><Undo2 size={14} /></ToolBtn>
          <ToolBtn><Redo2 size={14} /></ToolBtn>
          <Sep />
          <ToolBtn><Link2 size={14} /></ToolBtn>
          <ToolBtn><TableIcon size={14} /></ToolBtn>
          <ToolBtn><ImgIcon size={14} /></ToolBtn>
          <Sep />
          <div className="wd-zoom">
            <span>100%</span>
            <ChevronDown size={12} />
          </div>
        </div>

        {/* TOOLBAR ROW 2 — formatting */}
        <div className="wd-toolbar">
          <div className="wd-select wd-select-style">
            <span>Default Paragraph Font</span>
            <ChevronDown size={12} />
          </div>
          <div className="wd-select wd-select-font">
            <Type size={12} />
            <span>Times New Roman</span>
            <ChevronDown size={12} />
          </div>
          <div className="wd-select wd-select-size">
            <span>12</span>
            <ChevronDown size={12} />
          </div>
          <Sep />
          <ToolBtn><span className="font-bold">B</span></ToolBtn>
          <ToolBtn><span className="italic font-serif">I</span></ToolBtn>
          <ToolBtn><span className="underline">U</span></ToolBtn>
          <Sep />
          <ToolBtn><AlignLeft size={14} /></ToolBtn>
          <ToolBtn><AlignCenter size={14} /></ToolBtn>
          <ToolBtn><AlignRight size={14} /></ToolBtn>
          <ToolBtn><AlignJustify size={14} /></ToolBtn>
          <Sep />
          <ToolBtn><ListOrdered size={14} /></ToolBtn>
          <ToolBtn><List size={14} /></ToolBtn>
          <ToolBtn><Outdent size={14} /></ToolBtn>
          <ToolBtn><Indent size={14} /></ToolBtn>
          <Sep />
          <div className="wd-color">
            <span className="wd-color-swatch" style={{ background: "hsl(330 90% 55%)" }} />
            <ChevronDown size={10} />
          </div>
          <div className="wd-color">
            <span className="wd-color-swatch" style={{ background: "hsl(50 100% 60%)" }} />
            <ChevronDown size={10} />
          </div>
        </div>

        {/* RULER ROW + LEFT RULER + DOC AREA */}
        <div className="wd-ruler-row">
          <div className="wd-corner" />
          <div className="wd-ruler-h">
            {Array.from({ length: 17 }).map((_, i) => (
              <div key={i} className="wd-tick">
                <span className="wd-tick-num">{i === 0 ? "" : i}</span>
              </div>
            ))}
          </div>
          <div className="wd-corner" />
        </div>

        <div className="wd-body-row">
          {/* left ruler */}
          <div className="wd-ruler-v">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="wd-tick-v">{i === 0 ? "" : i}</div>
            ))}
          </div>

          {/* DOCUMENT CANVAS */}
          <div className="wd-doc-wrap">
            <div
              className="wd-doc"
              style={{
                backgroundImage: `url(${skyPattern})`,
                backgroundSize: "320px 320px",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="wd-doc-inner">
                <h1 className="wd-doc-h1">♡ My Diary ♡</h1>
                <p className="wd-doc-p">
                  Today I rewrote the entire interface in pink. The clouds are pixelated
                  and the sky never ends. I think I'm in love with bevel borders again.
                </p>
                <p className="wd-doc-p">
                  ✿ Note to self: <em>install more cute fonts.</em>
                </p>
                <p className="wd-doc-p wd-cursor">
                  <span className="wd-blink">|</span>
                </p>
              </div>
            </div>
          </div>

          {/* vertical scrollbar */}
          <div className="wd-scroll-v">
            <div className="wd-scroll-btn">▲</div>
            <div className="wd-scroll-track">
              <div className="wd-scroll-thumb" />
            </div>
            <div className="wd-scroll-btn">▼</div>
          </div>
        </div>

        {/* horizontal scrollbar */}
        <div className="wd-scroll-h">
          <div className="wd-scroll-btn-h">◀</div>
          <div className="wd-scroll-track-h">
            <div className="wd-scroll-thumb-h" />
          </div>
          <div className="wd-scroll-btn-h">▶</div>
        </div>

        {/* STATUS BAR */}
        <div className="wd-statusbar">
          <div className="wd-status-cell">Page 1</div>
          <div className="wd-status-cell">Sec 1</div>
          <div className="wd-status-cell">1/1</div>
          <div className="wd-status-cell">At 1"</div>
          <div className="wd-status-cell">Ln 1</div>
          <div className="wd-status-cell">Col 1</div>
          <div className="wd-status-cell wd-status-flag">REC</div>
          <div className="wd-status-cell wd-status-flag">TRK</div>
          <div className="wd-status-cell wd-status-flag">EXT</div>
          <div className="wd-status-cell wd-status-flag">OVR</div>
          <div className="wd-status-cell flex-1 justify-start">English (U.S.)</div>
          <div className="wd-status-resize" aria-hidden>◢</div>
        </div>
      </div>

      {/* tiny back link */}
      <Link to="/" className="fixed bottom-3 left-3 wd-back-link">← back to starnet</Link>
    </div>
  );
};

export default WordRetro;
