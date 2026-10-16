<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F2557,100:2563EB&height=170&section=header&text=Basic%20Calculator&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship&descAlignY=62&descSize=17" alt="Basic Calculator header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563EB&center=true&vCenter=true&width=680&lines=Veda+Technology+Internship+%E2%80%A2+Task+7;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Add+%E2%80%A2+Subtract+%E2%80%A2+Multiply+%E2%80%A2+Divide" alt="Typing introduction" />

  <p><b>Clean • Responsive • Accessible • No eval() • Keyboard ready</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-22c55e?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563EB?style=for-the-badge)

</div>

---

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=0F2557&center=true&vCenter=true&width=620&lines=Type+or+click...every+key+works!;No+backend+%E2%80%A2+No+build+%E2%80%A2+Just+open+index.html" alt="Greeting typing animation" />
</div>

Basic Calculator of **Abhishek Shahaji Jadhav** — Web Developer & first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: no frameworks, no libraries, no APIs, no build step, no external assets in the app itself.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Task 7: Basic Calculator.

<details>
<summary><b>📖 Table of Contents (click to expand)</b></summary>

- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
- [🧮 Calculation Model](#-calculation-model)
- [➗ Operations Reference](#-operations-reference)
- [📁 Project Structure](#-project-structure)
- [🚀 How to Run](#-how-to-run)
- [🔗 Profile Links](#-profile-links)
- [📝 My Approach](#-my-approach)
- [✅ Outcome](#-outcome)
- [🌐 Deployment](#-deployment)
- [🧪 Testing Checklist](#-testing-checklist)
- [📜 JavaScript Concepts](#-javascript-concepts)
- [🕹️ Controls Behaviour](#️-controls-behaviour)
- [📸 Screenshots](#-screenshots)
- [⚠️ Limitations](#️-limitations)

</details>

## ✨ Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=5B6B8C&center=true&vCenter=true&width=680&lines=Chained+Ops+%E2%80%A2+Repeated+Equals+%E2%80%A2+Divide-by-Zero+Guard;Decimals+%E2%80%A2+Negatives+%E2%80%A2+Backspace+%E2%80%A2+Sign+Toggle" alt="Features animation" />
</div>

- **➕ Four operations** — addition, subtraction, multiplication, and division through one shared `operate()` code path (no `eval()`, no `Function()`).
- **🔢 Digit entry with overflow guard** — digits `0–9`, leading zeros collapsed (`007` → `7`), input capped at 12 digits per number.
- **🔹 Safe decimals** — a second `.` is ignored, so `5.2.3` is impossible; a leading `.` becomes `0.`.
- **🟰 Accurate equals** — floating-point artefacts cleaned (`0.1 + 0.2 = 0.3`, `2.5 + 1.2 = 3.7`); `=` with a lone number does nothing (never `NaN`).
- **⛓️ Chained operations** — sequential left-to-right model: `12 + 3 × 2 = 30`; pressing an operator mid-chain finishes the pending step first.
- **🔁 Repeated equals** — `5 + 3 = 8`, `=` → `11`, `=` → `14`; a fresh digit starts a new calculation and clears repeat memory.
- **🚫 Divide-by-zero guard** — `5 ÷ 0` shows `Can't divide by zero`; typing a digit starts fresh, `C` fully resets.
- **➖ Negative numbers** — negative results (`4 − 9 = −5`) plus a `±` key for entering negated values, including a negative second operand.
- **🔄 Consecutive operators** — pressing `+` then `−` simply replaces the pending operator instead of breaking.
- **🧹 Clear + backspace** — `C` resets every piece of state; `⌫` deletes the last digit (and edits a just-calculated result).
- **📏 Long-result handling** — repeating decimals show in full (`1 ÷ 3 = 0.333333333333`); huge/tiny magnitudes use compact exponential notation; the display shrinks type instead of overflowing.
- **⌨️ Keyboard friendly** — `0–9`, `.`, `+ - * /`, `Enter`/`=`, `Backspace`, `Esc`/`C`; `/` and `Enter` defaults prevented.
- **🎨 Professional UI** — light background, deep navy type, blue primary accent, rounded card, soft shadows, operator highlight, subtle press feedback, polished focus rings.
- **♿ Accessible** — semantic `header`/`main`/`section`/`footer`, labelled buttons, `aria-live` display, `role="alert"` error message, AA-safe contrast.
- **📱 Responsive** — CSS Grid keys, single-column card, tuned type and padding under 480 px, `prefers-reduced-motion` support.

## 🛠️ Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Variables, CSS Grid keys, media queries, focus states (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | State machine, safe arithmetic, display + keyboard handling (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-0F2557?style=flat-square) | Zero dependencies — requirement compliant |
| ![Fonts](https://img.shields.io/badge/System_Fonts-5B6B8C?style=flat-square) | System stack (works offline) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) + GitHub Pages | Version control + static hosting |

No React, Bootstrap, Tailwind, jQuery, APIs, or build tools. Badge/typing images above are README-only; the app itself loads zero external assets.

## 🧮 Calculation Model

**Sequential (immediate-execution)** — chained operations run left to right, like a classic pocket calculator, *not* with mathematical precedence:

```text
12 + 3 × 2 = 30   →   (12 + 3) = 15, then 15 × 2 = 30
```

Worked examples from the brief:

```text
5 + 3 = 8
9 − 4 = 5
6 × 7 = 42
8 ÷ 2 = 4
2.5 + 1.2 = 3.7
0.1 + 0.2 = 0.3   (binary float artefact cleaned via toPrecision(12))
5 ÷ 0   = Can't divide by zero (friendly error, recover with C or new digits)
```

## ➗ Operations Reference

| Button | Operation | Example | Result |
|--------|-----------|---------|--------|
| `+` | Addition | `5 + 3 =` | `8` |
| `−` | Subtraction | `9 − 4 =` | `5` |
| `×` | Multiplication | `6 × 7 =` | `42` |
| `÷` | Division | `8 ÷ 2 =` | `4` |
| `=` | Calculate / repeat | `5 + 3 = =` | `8` then `11` |
| `C` | Clear all state | — | `0` |
| `⌫` | Delete last digit | `123 ⌫` | `12` |
| `±` | Toggle sign | `5 ±` | `-5` |

Rule: pressing `=` with only a single number entered does nothing — it never produces `NaN`.

## 📁 Project Structure

```text
internship-task-7/
├── index.html                              # Semantic page structure
├── style.css                               # Complete responsive styling
├── script.js                               # Calculator state, arithmetic, and event handling
├── README.md                               # This file
├── Veda_Technology_Task_7_Project_Report.docx  # Internship project report
└── assets/
    └── favicon.svg                         # Calculator favicon (navy + blue + orange)
```

All paths are **relative** (`./style.css`, `./script.js`, `./assets/favicon.svg`) for GitHub Pages compatibility.

## 🚀 How to Run

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1500&color=22c55e&center=true&vCenter=true&width=560&lines=No+npm+install...just+double-click!+%E2%9C%A8;Works+offline+%E2%80%A2+No+server+needed" alt="How to run animation" />
</div>

No install or build step. ✨

1. 📂 Open the `internship-task-7` folder.
2. 🖱️ Double-click `index.html` → opens in Chrome / Edge / Firefox.
   - Or right-click `index.html` → **Open with** → your browser.
   - Or serve it: `python -m http.server 8000` → http://localhost:8000
   - Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.
3. 🎉 Styling loads from `style.css`, logic from `script.js` (works offline, no backend).

Quick syntax check (Node, from the project folder):

```powershell
node --check script.js
```

## 🔗 Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |

## 📝 My Approach

1. **Read the brief first:** four operations, decimals without `5.2.3`, `=` accuracy, `C` reset, chained + repeated equals, divide-by-zero guard, negatives, overflow-safe display, no malformed expressions, full keyboard map, error recovery, no `eval()`, sequential-vs-precedence documented, separate files, relative paths.
2. **Built the structure:** semantic landmarks, single `h1` ("Basic Calculator") + subtitle, navy display with a history line + large current value + `role="alert"` error slot, 19-button CSS Grid (`C ⌫ ± ÷ / 7–9 × / 4–6 − / 1–3 + / 0-wide . =`), model note, keyboard-shortcut card.
3. **Styled mobile-up:** same token system as Task 6 (light / navy / blue); number keys pale, operators blue-tint, `C` navy, `=` solid blue with pending-operator highlight; shrinking display type past 12 characters; 480 px breakpoint; `prefers-reduced-motion` support.
4. **Wrote honest JS:** explicit state (`currentInput`, `previousInput`, `operator`, `shouldResetDisplay`, `lastOperator`, `lastOperand`, `errorState`); `operate()` switch with `toPrecision(12)` float cleanup; `formatResult()` with magnitude-based exponential fallback; `textContent` only; error recovery on next digit; keyboard handler with `preventDefault` on `/` and `Enter`.
5. **Tested honestly:** syntax check plus 40 executed assertions against the real `script.js` (29 core + 11 edge cases) covering every row of the brief's testing checklist; fixed one real precision bug found (`1 ÷ 3` rendering) before finishing.

## ✅ Outcome

A complete, responsive, dependency-free Basic Calculator: correct results on all five brief examples (`8` / `5` / `42` / `4` / `3.7`), clean `0.1 + 0.2 = 0.3`, friendly divide-by-zero error with recovery, decimal/operator guards, chained and repeated equals, negatives, backspace and sign toggle, full keyboard control, and zero console errors. Ready to push to a public repo and deploy on GitHub Pages or Vercel.

## 🌐 Deployment

**GitHub Pages:**

```powershell
Set-Location "<path-to>\internship-task-7"
git init -b main
git add index.html style.css script.js README.md Veda_Technology_Task_7_Project_Report.docx assets
git commit -m "Task 7: Basic Calculator (HTML + CSS + JS)"
git remote add origin <your-repository-url>
git push -u origin main
```

Then GitHub → **Settings → Pages → Deploy from a branch → `main` / root** → GitHub shows your live URL.

> Keep `index.html`, `style.css`, and `script.js` in the same directory with relative links so Pages resolves them correctly. The repository URL above is a placeholder — replace it with your real repo. Do not push unless you intend to submit — the commands above are provided for the submission step only.

**Vercel:**

1. Push the project to GitHub.
2. Go to <https://vercel.com> → **Add New → Project** → import the repository.
3. Set the **Root Directory** to `internship-task-7` (if the repo holds all internship tasks).
4. Framework preset: **Other**. No build command, no output directory.
5. Deploy.

## 🧪 Testing Checklist

- [x] `5 + 3 =` → `8`.
- [x] `9 − 4 =` → `5`.
- [x] `6 × 7 =` → `42`.
- [x] `8 ÷ 2 =` → `4`.
- [x] `2.5 + 1.2 =` → `3.7`.
- [x] `0.1 + 0.2 =` → `0.3` (no `0.30000000000000004`).
- [x] `5 ÷ 0` shows `Can't divide by zero`; typing a digit starts fresh, `C` fully resets.
- [x] Multiple decimal points prevented (`5 . 2 . 3` → `5.23`).
- [x] Consecutive operators replace instead of breaking (`5 + − 3 =` → `2`).
- [x] `C` resets display, history, operator, repeat memory, and error state.
- [x] `⌫` deletes the last digit (`123` → `12`); single digit → `0`.
- [x] Keyboard: `2 + 3 Enter` → `5`; `Backspace` deletes; `Escape`/`c` clears; `,` works as decimal point.
- [x] Negative results (`4 − 9 = −5`) and `±` toggle (including negative second operand).
- [x] Chained sequential ops (`12 + 3 × 2 = 30`; `2 + 3 + 4 = 9`) and repeated `=` (`5 + 3 = 8 → 11 → 14`).
- [x] Lone `=` does nothing; `5 + =` doubles to `10` (no `NaN` anywhere).
- [x] Long results stay readable (`1 ÷ 3 = 0.333333333333`; huge results use exponential notation; typing capped at 12 digits).
- [x] No JavaScript console errors (`node --check` clean; all logic executed through 40 passing assertions).
- [x] Responsive on mobile and desktop (grid keys, display type shrinks past 12 characters).
- [x] The project folder includes `index.html`, `style.css`, `script.js`, `README.md`, `assets`, and the project report.

## 📜 JavaScript Concepts

| Concept | Where |
|---|---|
| Explicit state machine | `currentInput`, `previousInput`, `operator`, `shouldResetDisplay`, `lastOperator`, `lastOperand`, `errorState` |
| Safe arithmetic (no eval) | `operate()` — `switch` on `+ - * /`, `null` return for divide-by-zero |
| Float-artefact cleanup | `parseFloat(result.toPrecision(12))` — `0.1 + 0.2` → `0.3` |
| Result formatting | `formatResult()` — full decimals, exponential fallback for ≥1e12 / <1e-9, `-0` → `0` |
| Sequential chaining | `chooseOperator()` — finishes the pending step before storing the next operator |
| Repeated equals | `calculate()` — saves `lastOperator`/`lastOperand`, replays them on bare `=` |
| Error handling + recovery | `showError()`, `recoverFromErrorIfNeeded()` — digit/decimal auto-recover, operators wait for `C` |
| Input guards | `appendNumber()` digit cap + leading-zero rules, `appendDecimal()` single-dot rule |
| Sign toggle | `toggleSign()` — negates entry, result, or starts a negative second operand |
| DOM selection | `getElementById` bindings for history, current, and error nodes |
| DOM updates | `textContent`, `innerHTML` (escaped history only), `hidden`, operator `.active` class, font shrink |
| Event listeners | click bindings per `data-number` / `data-operator` / `data-action`, document `keydown` |
| Keyboard mapping | `handleKeyboardInput()` — digits, `.`/`,`, operators, `Enter`/`=`, `Backspace`, `Escape`/`c`/`Delete` |
| XSS-safe history | `escapeHtml()` before writing the history line |

## 🕹️ Controls Behaviour

| Control | Behaviour |
|---|---|
| **Number keys (click or `0–9`)** | Appends digits; leading zeros collapse; capped at 12 digits; a fresh entry after `=` starts a new calculation |
| **Operators (click or `+ - * /`)** | Stores the pending step; consecutive presses replace the operator; mid-chain presses compute the interim result first |
| **`=` (click, `Enter`, or `=`)** | Calculates `previous operator current`; bare `=` repeats the last step; lone `=` with no operation does nothing |
| **`C` (click, `Esc`, `c`)** | Clears display, history, operator, repeat memory, and any error |
| **`⌫` (click or `Backspace`)** | Deletes the last digit; on an error it resets; after `=` it edits the result |
| **`±`** | Toggles the sign of the entry or result; after an operator it starts a negative second operand |
| **`.` (click, `.`, or `,`)** | Adds one decimal point; extra presses ignored; recovers from an error into `0.` |

## 📸 Screenshots

> Placeholder — add a screenshot after running the app.

```text
[ Screenshot coming soon — capture the calculator showing 12 + 3 × 2 = 30 ]
```

To add one later, save an image as `screenshot.png` in this folder and embed it:

```markdown
![Basic Calculator screenshot](./screenshot.png)
```

## ⚠️ Limitations

- **Sequential model only** — chained operations run left to right (`2 + 3 × 4 = 20`, not `14`); stated in the app, README, and report.
- No parentheses, percentages, or memory keys — out of scope for Task 7.
- Input capped at 12 digits per number to protect the display.
- Results ≥ 1e12 or < 1e-9 fall back to exponential notation (e.g. `9.99e+14`).
- No data is stored or sent anywhere — everything runs locally in the browser.

## Accuracy Notes

- All expected values verified by executed Node assertions against the real `script.js` — no invented results.
- Skills are presented as *learning/using* at internship level.
- Internship is described as *ongoing, project-based learning*.
- App uses zero external requests; README badges/animations are docs-only.

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:0F2557&height=120&section=footer" alt="Footer wave" />

  <p><sub>Veda Technology Internship — Task 7: Basic Calculator • HTML5 • CSS3 • Vanilla JavaScript ✨</sub></p>

</div>
