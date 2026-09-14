# Day 3 Challenges — BDD, Security and Release Decision

## Challenge 1 — Convert behaviour, not implementation

**Type:** Core  
**Use:** `project-workbook/03-test-cases.md` and `features/checkout.feature`

Choose two existing manual test cases and rewrite them as Gherkin scenarios.

Use:

- Given
- When
- Then

Describe behaviour that a stakeholder could understand.

### Avoid
Do not write Selenium details such as:

> When I find #checkout-button and call click()

---

## Challenge 2 — Critique this scenario

**Type:** Investigation

What is wrong with this scenario?

```gherkin
Scenario: Checkout
  Given I open Chrome
  And I maximise the window
  And I find #quantity
  When I send keys 2
  And I find #checkout-button
  And I click it
  Then #checkout-message should contain some text
```

Rewrite it so that it expresses useful business behaviour.

Be ready to explain every change.

---

## Challenge 3 — Complete the Cucumber test

**Type:** Core  
**Use:** `features/checkout.feature` and `features/step_definitions/checkout.steps.js`

Run:

```bash
npm run test:cucumber
```

One scenario is already implemented as a reference.

The promotional-code scenario has missing step-definition code.

Your job:

1. read the feature;
2. inspect the working steps;
3. implement the missing interaction;
4. implement a meaningful assertion;
5. run it;
6. investigate the result.

### Rule
Do not weaken a correct requirement just to make a scenario pass.

---

## Challenge 4 — Make a step reusable

**Type:** Stretch

Look for behaviour that could use the same step definition with different data.

Consider whether a Cucumber expression such as:

- `{int}`
- `{word}`
- `{string}`

could make a step reusable.

Implement one parameterised step if time allows.

---

## Challenge 5 — Security tester mindset

**Type:** Core  
**Use:** `project-workbook/09-security-test-ideas.md`

Identify at least **five** security-related questions or test ideas for a checkout-style application.

Consider:

- input validation;
- browser/client-side trust;
- authentication and authorisation if accounts existed;
- secrets/configuration;
- error messages;
- sensitive information;
- dependencies.

For each idea record:

- risk;
- why it matters;
- a safe testing approach;
- expected secure behaviour.

### Stretch
Which of your ideas could be considered **before** the complete application exists?

---

## Challenge 6 — Final evidence-based recommendation

**Type:** Core  
**Use:** `project-workbook/10-final-test-summary.md`

Use evidence from the whole project.

Complete:

- what you tested;
- what you automated;
- important pass/fail results;
- defects and concerns;
- remaining untested areas;
- regression considerations;
- security considerations.

Then choose:

- Recommend release
- Recommend release with known risk
- Do not recommend release yet
- Need more information

Your recommendation must be supported by evidence.

---

## Final challenge — Defend your decision

You have **90 seconds**.

Present:

1. your recommendation;
2. your strongest piece of evidence;
3. the biggest remaining risk;
4. the next test you would run if given another hour.

Other learners may challenge your reasoning.
