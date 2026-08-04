function convertMarkdown() {
  const markdownInput = document.getElementById('markdown-input').value;
  let html = markdownInput;

  // 1. Headings — must run longest-prefix first (###, then ##, then #)
  //    ^ *  -> optional leading spaces, but the # must be the first real char
  //    (.*) -> capture the rest of the line as the heading text
  html = html.replace(/^ *### (.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^ *## (.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^ *# (.*)$/gm, '<h1>$1</h1>');

  // 2. Bold — GREEDY (.*) on purpose. Since "." never matches a newline,
  //    greedy still respects line boundaries, but it lets a lone "*"
  //    (an italic marker) survive inside the bold text untouched.
  html = html.replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*)__/g, '<strong>$1</strong>');

  // 3. Italic — LAZY (.+?) so it grabs the smallest possible chunk
  //    between two single markers. Must run AFTER bold.
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // 4. Images — MUST run before links, since ![alt](src) contains
  //    the exact same [text](url) shape a link uses.
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // 5. Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // 6. Blockquotes — same anchored pattern as headings
  html = html.replace(/^ *> (.*)$/gm, '<blockquote>$1</blockquote>');

  return html;
}

// === Wiring: input event updates both the raw code view and the live preview ===
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

markdownInput.addEventListener('input', () => {
  const html = convertMarkdown();
  htmlOutput.textContent = html; // shows the raw HTML as plain text
  preview.innerHTML = html;      // actually renders it
});

// Run once on load in case there's default text already in the textarea
markdownInput.dispatchEvent(new Event('input'));

  // EXTRA - not required by the tests
  // Inline code: `like this` -> <code>like this</code>
  html = html.replace(/`(.+?)`/g, '<code>$1</code>');
