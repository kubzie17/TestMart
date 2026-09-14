# Day 1 Challenges — Understand and Test the Product

## Challenge 1 — You are the test team

**Type:** Investigation  
**Use:** `project-workbook/01-test-approach.md`

You have been given TestMart Checkout and one sentence:

> Test this application and tell us whether we should release it.

Before detailed testing, decide:

- what information you need;
- what appears highest risk;
- what you would test first;
- what evidence you would keep;
- what might be suitable for automation later.

### Stretch
Rank your three highest risks using **likelihood × impact** and defend the order.

---

## Challenge 2 — Requirements detective

**Type:** Core  
**Use:** `requirements/requirements.md` and `project-workbook/02-test-conditions.md`

Analyse the requirements and produce at least **10 test conditions**.

Your conditions should include a mixture of:

- positive behaviour;
- negative behaviour;
- boundary values;
- calculations;
- validation;
- user feedback.

Also record at least **three questions, ambiguities or assumptions** that you would raise with the product owner.

### Constraint
Do **not** write detailed test steps yet.

### Stretch
Which requirement would you test first if you had only 20 minutes? Justify your choice.

---

## Challenge 3 — Design tests another tester could execute

**Type:** Core  
**Use:** `project-workbook/03-test-cases.md`

Choose at least **four** of your own test conditions and convert them into manual test cases.

Your set must contain:

- one happy-path test;
- one negative test;
- one boundary test;
- one calculation/display test.

A different learner should be able to execute the test without asking what you meant.

### Peer review
Swap one test case and review it:

- Is the precondition clear?
- Is the test data sufficient?
- Are the actions understandable?
- Is the expected result objective?
- Is the test focused on one clear behaviour?

---

## Challenge 4 — DOM scavenger hunt

**Type:** Core  
**Use:** browser DevTools and `project-workbook/05-selector-inventory.md`

Find useful selectors for at least **six** important elements in the application.

For each, record:

- tag;
- useful id/class/attribute;
- CSS selector;
- whether you think it is unique and stable.

### Investigation
For one element, find **two different selectors** and decide which one you would prefer in an automated test. Explain why.

### Stretch
Find a useful selector that does not rely on an `id`.

---

## Challenge 5 — Execute, don't assume

**Type:** Core  
**Use:** `project-workbook/06-test-execution-log.md` and `07-defect-report-template.md`

Execute at least **four** of your manual tests.

For each test record:

- expected result;
- actual result;
- PASS / FAIL / BLOCKED;
- notes/evidence.

If behaviour conflicts with a requirement:

1. reproduce it;
2. re-check the requirement;
3. re-check your data and steps;
4. decide whether you have enough evidence to raise a defect.

If appropriate, write at least one defect report.

### Stretch
For one failed test, list three possible causes before deciding whether the application is defective.

---

## Challenge 6 — Exploratory mission

**Type:** Investigation  
**Use:** `project-workbook/04-exploratory-testing.md`

You have **12 minutes**.

> Explore TestMart Checkout to discover behaviour that is incorrect, confusing, inconsistent or sensitive to unusual user input.

Choose one mindset:

- **Boundary breaker** — concentrate on limits and unusual numeric values.
- **Awkward customer** — omit information or do things in a strange order.
- **Promo investigator** — concentrate on promotional-code behaviour.
- **UX investigator** — concentrate on messages, clarity and ease of use.
- **Technical investigator** — use DevTools while exploring.

Record what you tried and what you learned.

### Success criterion
Finish with at least one **new test idea** that was not in your original manual cases.

---

## Challenge 7 — Test levels

**Type:** Core

For selected tests from your project, decide which test level is most relevant:

- component;
- component integration;
- system;
- system integration;
- acceptance.

Not every level can be directly demonstrated in this small standalone application.

For a level that cannot be performed directly, describe a realistic TestMart example of what would need to exist.

### Stretch
Explain why **"browser test"** is not itself a test level.
