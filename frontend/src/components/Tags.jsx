const TAG_COLORS = {
    react: "#61DAFB",
    python: "#3773A5",
    javascript: "#FFC701",
    typescript: "#3178C6",
    "next.js": "#000000",
    "d3.js": "#DE744D",
    automation: "#10A958",
    climate: "#10A958",
    nature: "#10A958",
    r: "#2268BB",
    research: "#F5F5F5",
    "social impact": "#FEFFD4",
    manifesto: "#FEFFD4",
    culture: "#FFD4E7",
    graphic: "#FFD4E7",
    art: "#FFD4E7",
    animation: "#FFA500"
  };
  
  function getTagColor(tag) {
    const key = tag.toLowerCase();
    return TAG_COLORS[key] ?? "#E5E5E5";
  }
  
  // --- helpers to choose black/white text based on bg brightness ---
  
  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  function getRelativeLuminance({ r, g, b }) {
    // normalize to 0–1
    const [rs, gs, bs] = [r, g, b].map((v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }
  
  function getTextColorForBg(hex) {
    const rgb = hexToRgb(hex);
    const luminance = getRelativeLuminance(rgb);
    // threshold: if background is "dark", use white text, else black
    return luminance < 0.5 ? "#FFFFFF" : "#000000";
  }
  
  export default function Tags({ tags = [] }) {
    return (
      <div className="flex flex-wrap gap-2 mb-2 -mt-2">
        {tags.map((tag) => {
          const bg = getTagColor(tag);
          const textColor = getTextColorForBg(bg);
  
          return (
            <span
              key={tag}
              style={{ backgroundColor: bg, color: textColor }}
              className="inline-flex items-center px-2 py-0.5 text-[12px] lowercase tracking-wide"
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  }