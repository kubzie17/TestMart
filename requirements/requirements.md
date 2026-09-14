# TestMart Checkout — Requirements v1.0

Use this document as the initial **test basis**.

## Product

The application sells one product:

- USB-C Travel Charger
- Unit price: £20.00

## R1 — Quantity

- A customer must be able to select a whole-number quantity from **1 to 5 inclusive**.
- Values below 1, above 5, or non-whole-number values must not result in a successful order.

## R2 — Subtotal

- Subtotal = unit price × quantity.
- The displayed subtotal must update when quantity changes.

## R3 — Valid promotional code

- The promotional code `SAVE10` applies a **10% discount** to the subtotal.
- Promotional codes are **case-sensitive**.
- After a valid code is applied, the application displays `Promo code applied.`

## R4 — Expired promotional code

- `OLD10` is expired.
- It must not change the total.
- The application displays `Promo code expired.`

## R5 — Invalid / blank promotional code

- An unrecognised code must not change the total.
- The application displays `Promo code not recognised.`
- A blank code must not change the total.
- The application displays `Enter a promo code.`

## R6 — Customer details

- Name is mandatory.
- Email is mandatory.
- An email must contain an `@` symbol.

## R7 — Successful order

A successful order requires:

- quantity between 1 and 5 inclusive;
- non-empty customer name;
- email containing `@`.

After a successful order the application displays:

`Order placed for <name>.`

## R8 — Displayed monetary values

- Subtotal, discount and total are displayed in pounds sterling.
- Values are displayed to two decimal places.

---

## Questions for testers

Do not assume the document is perfect.

As part of test analysis, consider whether you would ask for clarification about:

- maximum lengths;
- whitespace handling;
- Unicode / special characters;
- stronger email validation;
- repeated promo application;
- whether promo codes can be removed;
- accessibility;
- performance;
- browser compatibility.

Record questions rather than inventing business rules.
