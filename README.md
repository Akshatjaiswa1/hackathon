# 🐛 Debugging Exercises in JavaScript

A complete collection of practical debugging exercises designed to teach **JavaScript debugging skills** through hands‑on experience. Each exercise contains intentional bugs that you must identify, understand, and fix.

---

## 🎯 Purpose
This project helps developers:
- Master debugging techniques through real‑world scenarios  
- Develop problem‑solving skills by identifying and fixing bugs  
- Understand common errors in JavaScript development  
- Adopt best practices for writing bug‑free code  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14.x or higher  
- Basic knowledge of JavaScript  
- A text editor or IDE  

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd debugging-exercises

# Install dependencies (Jest)
npm install
📖 How to Use
Choose an exercise from the exercises/ directory

Read the README.md inside that folder to understand the context

Examine buggy-code.js — it contains the broken code you must debug

Run the tests to see what fails:

bash
npm test exercises/01-calculator-error
Debug and fix the code in buggy-code.js

Re‑run the tests to verify your solution

Compare with solution.js to deepen your understanding

📁 Project Structure
Code
debugging-exercises/
├── exercises/
│   ├── 01-calculator-error/    # Individual exercise
│   ├── 02-[next]/              # More exercises
│   └── ...
├── CLAUDE.md                   # Instructions for AI agents
├── TESTING.md                  # Jest testing guide
├── EXERCISE_TEMPLATE.md        # Template for new exercises
└── README.md                   # This file
🏷️ Types of Exercises
Logical Errors: Code runs but produces wrong results

Syntax Errors: Code cannot be parsed due to invalid syntax

Runtime Errors: Errors occur during execution (null references, type errors, invalid operations)

Asynchronous Errors: Issues with promises, callbacks, race conditions

📚 Exercise Format
Each exercise contains exactly 4 files:

README.md — User Story, Acceptance Criteria, Reported Problem

buggy-code.js — Broken code to debug

solution.js — Reference solution with explanations

test.js — Jest automated tests

🎓 Learning Path
Start with 01‑calculator‑error (logical error, beginner)

Progress sequentially through exercises

Each exercise builds debugging skills step by step

🧪 Running Tests
bash
# Run tests for a specific exercise
npm test exercises/01-calculator-error
✓ Passing tests (green)

✗ Failing tests (red with details)

See TESTING.md for a full guide.

🤝 Contributing
Read EXERCISE_TEMPLATE.md for the standard structure

Create your exercise following TDD

Ensure tests fail with buggy-code.js and pass with solution.js

Document fully in Spanish

Submit a pull request

📖 For Educators
Perfect for:

Classroom instruction

Programming bootcamps

Independent study

Interview preparation

💡 Tips for Success
Don’t jump straight to the solution — practice debugging

Use console.log() to trace values

Read error messages carefully

Form hypotheses and test them

Learn from the solutions

📋 Available Exercises
Over 80+ exercises covering logical, syntax, runtime, and async bugs — from beginner to advanced.
Examples include: calculator errors, async user auth, ecommerce cart manager, crypto portfolio tracker, weather forecast, Caesar cipher, tax calculator, voting system, and more.

🔧 Troubleshooting
Ensure Node.js is installed (node --version)

Run npm install for dependencies

Check you’re in the correct directory

Use console.log() to trace values

Compare code line‑by‑line with acceptance criteria

📄 License
Open‑source project for educational use.

🙏 Acknowledgements
Created to help developers build essential debugging skills through practical experience.

Happy Debugging! 🐛➡️✨  
Every bug you fix makes you a better developer.

Code

---

This README is clean, professional, and GitHub‑ready.  
Do you want me to also create a **shorter “Quick Start” version** for students who just want t
