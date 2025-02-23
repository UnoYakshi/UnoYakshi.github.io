# What?
A website to share my CV and contacts + a blog to share my thoughts on technicalities and development processes.

# Theme
The theme used is my mashup of [Duckquill](https://duckquill.daudix.one/) and [Tufte-CSS](https://edwardtufte.github.io/tufte-css/).
I prefer to only use dimmed (low'ish constrast) dark theme.

# Known Issues
- [Markdown Test](https://yakshi.uno/blog/md-cheat/) crashes Chromium
  - can crash your whole browser, joke: test is not passed
  - or just throw `SIGSEGV`
- side/margin notes
  - they are not the part of the same `<p>` in the HTML, hence, they are disalligned on bigger screens
  - there is an issue with opening "accordion" on a margin note: it opens the same one (ignored IDs?)
  - sidenotes are not clickable now
  - both are not highlighted as footnotes in Duckqill
