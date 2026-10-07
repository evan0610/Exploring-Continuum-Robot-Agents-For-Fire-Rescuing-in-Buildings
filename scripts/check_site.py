"""Check static references and required assets without external dependencies."""
from pathlib import Path
from html.parser import HTMLParser
import re
ROOT = Path(__file__).resolve().parents[1]
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.refs = []
    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key in ("src", "href", "poster") and value:
                self.refs.append(value)
p = Links(); p.feed((ROOT / "index.html").read_text(encoding="utf-8"))
refs = [v for v in p.refs if not v.startswith(("https:", "http:", "#", "mailto:"))]
js = (ROOT / "assets/js/main.js").read_text(encoding="utf-8")
refs += ["assets/videos/" + x for x in re.findall(r"demo-\d+\.mp4", js)]
refs += ["assets/images/" + x for x in re.findall(r"frame-\d+\.png", js)]
readme = (ROOT / "README.md").read_text(encoding="utf-8")
refs += [x for x in re.findall(r'(?:\]\(|(?:src|href)=")([^\s)"\n]+)', readme) if not x.startswith(("https:", "http:", "#"))]
missing = [x for x in refs if not (ROOT / x).is_file()]
if missing:
    raise SystemExit("Missing assets: " + ", ".join(missing))
assert len(list((ROOT / "assets/videos").glob("*.mp4"))) == 10
print(f"PASS: {len(refs)} local references, 10 demonstration clips.")
