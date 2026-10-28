<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFC107,100:2563eb&height=170&section=header&text=Star%20Rating%20Widget&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2019&descAlignY=62&descSize=17" alt="Star Rating Widget header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=FFC107&center=true&vCenter=true&width=700&lines=Veda+Technology+Internship+%E2%80%A2+Day+19;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Hover+Preview+%E2%80%A2+Click+Select+%E2%80%A2+Keyboard+Accessible" alt="Typing introduction" />

  <p><b>Light Theme &#183; Gold Stars &#183; Responsive &#183; Accessible &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563eb?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-16a34a?style=for-the-badge)

</div>

---

Star Rating Widget by **Abhishek Jadhav** — Web Developer and first-year BCA student at VIIT, Baramati. Built with **HTML5 + CSS3 + Vanilla JavaScript**: an interactive 5-star rating component with hover preview, click selection, live rating message, contextual feedback, reset, and full keyboard support. No frameworks, no build step, no backend.

> **Internship attribution:** 45-day Web Development Internship at **Veda Technology** — Day 19: Interactive Star Rating Widget.

## Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=FFC107&center=true&vCenter=true&width=700&lines=Hover+Preview+%E2%80%A2+Click+Select+%E2%80%A2+Reset;Separate+Hover+%26+Selected+States+%E2%80%A2+Keyboard+Ready" alt="Features animation" />
</div>

- **5 clickable stars** in a horizontal row.
- **Gold (#FFC107) filled stars** for active ratings, muted gray for inactive.
- **Hover preview** fills the hovered star and all stars before it.
- **Click selection** permanently selects a rating until another star is clicked.
- **Separate hover and selected states** — moving the cursor away restores the previously selected rating.
- **Live rating display** — "You rated this 4 out of 5 stars."
- **Contextual messages** based on the selected rating (1–5).
- **Reset button** clears the selection and restores the initial state.
- **Keyboard accessibility** — arrow keys, Home/End, Enter/Space, roving tabindex, visible focus rings.
- **ARIA support** — `role="radiogroup"`, `aria-checked`, `aria-label`, `aria-live`.
- **Responsive** — works on mobile, tablet, and desktop.
- **Reduced motion** — respects `prefers-reduced-motion`.

## Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, buttons, ARIA attributes (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom properties, Flexbox, transitions, media queries, focus states (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Hover/click/keyboard logic, state variables (`script.js`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=flat-square) | Zero dependencies |

## State Management

Separate variables keep hover preview and selection independent:

```js
let selectedRating = 0;  // committed rating
let hoverRating = 0;     // temporary preview
```

`activeRating()` returns `hoverRating` when hovering, otherwise `selectedRating`. Stars are toggled with a CSS class `star--filled` based on `value <= active`.

## Keyboard Controls

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Move into/out of the rating group (roving tabindex) |
| `ArrowRight` / `ArrowUp` | Move focus to the next star |
| `ArrowLeft` / `ArrowDown` | Move focus to the previous star |
| `Home` | Focus the first star |
| `End` | Focus the last star |
| `Enter` / `Space` | Select the focused star's rating |

## Project Structure

```text
internship-task-19/
├── index.html          # Semantic structure and star-rating widget
├── style.css           # Responsive styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
├── Veda_Technology_Task_19_Project_Report.docx
└── assets/
    └── favicon.svg     # Gold star favicon
```

## How to Run

1. Open the `internship-task-19` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |

## My Approach

1. Read the brief: 5 stars, hover preview, click selection, separate states, reset, keyboard, responsive, ARIA, contextual messages.
2. Built semantic HTML with `data-rating` attributes and ARIA roles.
3. Styled mobile-up with CSS custom properties, gold/gray palette, scale hover animation, focus rings.
4. Wrote vanilla JS with separate `selectedRating` and `hoverRating`, event listeners, roving tabindex, reset.
5. Tested hover, click, mouse-leave restore, reset, keyboard navigation, and responsive layouts.

## Outcome

A complete, responsive, dependency-free Star Rating Widget: 5 stars, hover preview, click selection, live rating message with contextual feedback, reset, keyboard support, ARIA attributes, and no console errors.

## Testing Checklist

- [x] All five stars appear correctly on initial load.
- [x] Hovering over the third star previews three filled stars.
- [x] Clicking the fourth star selects a rating of 4.
- [x] Moving the cursor away preserves the selected rating.
- [x] Hovering over another star previews a different rating without overwriting the selected rating.
- [x] Clicking a new star updates the selection immediately.
- [x] Reset clears the selection and restores the initial state.
- [x] The rating message matches the selected rating.
- [x] Keyboard users can access and change the rating.
- [x] The layout remains usable on mobile and desktop.
- [x] No JavaScript errors.

## Limitations

- Rating is not persisted; refreshing the page resets it.
- No half-star ratings.
- No backend submission; purely client-side.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:FFC107,100:2563eb&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 19: Star Rating Widget — HTML5 • CSS3 • Vanilla JavaScript</sub></p>
</div>
