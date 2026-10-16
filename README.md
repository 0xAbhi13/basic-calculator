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

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:0F2557&height=120&section=footer" alt="Footer wave" />

  <p><sub>Veda Technology Internship — Task 7: Basic Calculator • HTML5 • CSS3 • Vanilla JavaScript ✨</sub></p>

</div>
