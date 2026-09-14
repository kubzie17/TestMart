# Module 3A Test Project — TestMart Checkout

This repository is the working project for Module 3A of the Software Tester Academy.

You will use the **same small frontend application across all three days**. Each activity adds another piece of testing work to the project.

## What you will build across the module

By the end of the module you should have:

- a short test approach;
- test conditions derived from requirements;
- manual test cases;
- exploratory testing notes;
- a DOM/CSS selector inventory;
- test execution results;
- defect reports;
- Selenium browser automation;
- Gherkin feature scenarios;
- Cucumber step definitions;
- a regression / maintenance impact analysis;
- security test ideas;
- a final test summary and release recommendation.

You are **not expected to build a complex automation framework from scratch**. The coding tasks progress from reading and running examples to making small changes.

---

## 1. Prerequisites

Install:

- Node.js 20 or later
- Google Chrome
- VS Code
- Git

Check Node and npm:

```bash
node --version
npm --version
```

## 2. Clone the repository

```bash
git clone <YOUR-INSTRUCTOR-REPOSITORY-URL>
cd TestMart
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the test application

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

Keep that terminal running while you work.

## 5. Project structure

```text
public/
  index.html
  styles.css
  app.js

requirements/
  requirements.md

project-workbook/
  01-test-approach.md
  02-test-conditions.md
  03-test-cases.md
  04-exploratory-testing.md
  05-selector-inventory.md
  06-test-execution-log.md
  07-defect-report-template.md
  08-regression-impact-analysis.md
  09-security-test-ideas.md
  10-final-test-summary.md

tests/selenium/
  checkout.test.js

features/
  checkout.feature
  step_definitions/
    checkout.steps.js
```

## Day 1 — understand and manually test

You will:

1. review the requirements;
2. identify test conditions;
3. design manual test cases;
4. explore the app;
5. inspect the DOM with browser Developer Tools;
6. record selectors;
7. execute tests;
8. record defects and evidence.

Do not jump straight into the automation files.

## Day 2 — automate and maintain

You will:

1. classify existing tests by test level and test type;
2. run the supplied Selenium starter test;
3. inspect and modify selectors;
4. add a small automated test;
5. troubleshoot a deliberately simple automation issue;
6. decide which tests should be rerun after a hypothetical change;
7. complete a regression impact analysis.

Run Selenium tests with:

```bash
npm run test:selenium
```

> The app must already be running on `http://localhost:3000`.

## Day 3 — BDD, Cucumber, security and release decision

You will:

1. convert selected manual tests into Given / When / Then;
2. complete the starter `.feature` file;
3. connect scenarios to step definitions;
4. run the Cucumber scenarios;
5. write security test ideas;
6. complete the final test summary.

Run Cucumber with:

```bash
npm run test:cucumber
```

> The app must already be running on `http://localhost:3000`.

## Working rules

- Save your work regularly.
- Keep tests small and understandable.
- Record what you actually observed rather than what you expected to observe.
- A failed automated test does **not automatically prove** the application is defective.
- Do not run automated tests against public websites unless the instructor explicitly asks you to.

## Challenge exercises

Open `EXERCISES.md` and then the challenge sheet for the current day.

The challenge sheets deliberately do not contain model answers. Many tasks require investigation, evidence and justification rather than reproducing a supplied solution.
