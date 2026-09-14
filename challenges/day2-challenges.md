# Day 2 Challenges — Automate and Respond to Change

## Challenge 1 — Classify yesterday's tests

**Type:** Core

Take at least five tests or test ideas from Day 1.

For each one classify, where appropriate:

- test level;
- functional or non-functional;
- black-box or white-box.

Add a one-sentence reason.

### Investigation
Can one test be, for example, both **system-level** and **functional**? Explain why those labels do not compete with each other.

---

## Challenge 2 — Read automation before writing it

**Type:** Core  
**Use:** `tests/selenium/checkout.test.js`

Start the application, then run:

```bash
npm run test:selenium
```

Before editing the working Selenium test, explain in your own words:

- where the browser is created;
- where navigation happens;
- how an element is located;
- how text is read;
- where the assertion happens;
- where the browser is closed.

Do not copy definitions from the internet. Explain what this specific test is doing.

---

## Challenge 3 — Automate one of your own Day 1 tests

**Type:** Core

Choose one Day 1 manual test that is a sensible candidate for browser automation.

Automate it.

Requirements:

- use selectors from your Day 1 selector inventory where sensible;
- keep the automated test focused;
- include at least one meaningful assertion;
- make it readable enough that another learner can explain it.

### Stretch
Automate a second test that reuses part of the same interaction flow but uses different test data.

---

## Challenge 4 — Debug the test, not the application

**Type:** Core  
**Use:** `tests/selenium/debug-me.test.js`

The supplied test is deliberately wrong.

1. Remove `.skip`.
2. Run the test.
3. Read the failure carefully.
4. Decide whether the problem is likely to be:
   - selector;
   - expected value;
   - timing;
   - application behaviour;
   - something else.
5. Make the **smallest sensible fix**.
6. Run again.
7. Continue until the test is meaningful and passing.

### Rule
Do not change the application just to make a bad test pass.

### Reflection
What did each failure message tell you?

---

## Challenge 5 — Waiting challenge

**Type:** Investigation

Choose an automated interaction where the test expects the page to change after an action.

Discuss:

- What would make a fixed sleep fragile?
- What condition would be better to wait for?
- What visible or DOM state proves the application is ready?

If your instructor asks you to, add an explicit wait to one Selenium test.

---

## Challenge 6 — Selenium or Cypress?

**Type:** Investigation

For each scenario, decide which tool you would lean towards and justify your decision.

A. A Java-heavy organisation already has a large WebDriver suite.

B. A JavaScript frontend team wants fast feedback during UI development.

C. A team needs browser automation but already has deep Selenium knowledge and infrastructure.

D. A new frontend project has no existing automation and wants a JavaScript-first developer experience.

There is no universal winner. The quality of your reasoning matters.

---

## Challenge 7 — Version 1.1 impact analysis

**Type:** Core  
**Use:** `project-workbook/08-regression-impact-analysis.md`

Your instructor will announce a change to TestMart.

Decide:

- intended consequences;
- possible unintended side effects;
- affected functionality;
- existing tests that need updating;
- existing tests that should be rerun unchanged;
- any new tests required;
- what deserves confirmation testing;
- what deserves regression testing.

### Stretch
Choose one existing test that you would **not** rerun and defend that decision.

---

## Challenge 8 — Build a five-test regression set

You may select a maximum of **five** tests.

For each chosen test explain:

- which risk it protects against;
- why it deserves frequent rerunning;
- whether automation adds value.

You are not allowed to select every test.
