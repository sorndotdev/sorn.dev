---
layout: ../../layouts/BaseLayout.astro
title: How Global Fintechs Implement Double-Entry Bookkeeping
description: Every card payment, bank transfer, or currency exchange processed by a modern fintech ultimately becomes a series of immutable ledger entries. Debits and credits, payment lifecycles, and multi-currency accounting at internet scale.
date: 2026-08-15
prose: true
---

# How Global Fintechs Implement Double-Entry Bookkeeping

*August 15, 2026*

Every card payment, bank transfer, or currency exchange processed by a modern fintech ultimately becomes a series of immutable ledger entries. Although the underlying systems span distributed databases, event streams, and globally replicated services, the accounting model is still built on the same double-entry bookkeeping principles developed more than 500 years ago.

---

## Part I: The Foundation

Before looking at how digital ledgers work, it helps to understand the bookkeeping concepts behind them. Everything in a ledger ultimately comes down to debits and credits.

### Debits and Credits

A **Debit (Dr.)** refers to the left side of an account, while a **Credit (Cr.)** refers to the right. Neither inherently means an increase (<span style="color:#10B981">↑</span>) or decrease (<span style="color:#F59E0B">↓</span>) in the account balance. Whether a debit increases or decreases an account depends on the accounting equation:

<br>

$$
\begin{aligned}
\text{Assets} = \text{Liabilities} + \text{Equity}
\end{aligned}
$$

<br>

Accounts on the left side of the equation are **debit-normal** because they increase with debits, while accounts on the right side are **credit-normal** because they increase with credits.

- Assets, e.g. cash, accounts receivable, and inventory.
- Liabilities, e.g. loans payable and taxes.
- Equity, e.g. contributed capital and retained earnings.

| Account Type | Debit (dr.) | Credit (cr.) |
| --- | --- | --- |
| Assets | <span style="color:#10B981">↑</span>| <span style="color:#F59E0B">↓</span> |
| Liabilities | <span style="color:#F59E0B">↓</span> | <span style="color:#10B981">↑</span> |
| Equity | <span style="color:#F59E0B">↓</span> | <span style="color:#10B981">↑</span> |

> 🗒️ **Note:** You may also have come across temporary income statement accounts, such as revenue and expenses. These ultimately flow into retained earnings, so they can be viewed as temporary subdivisions of equity.

### The Rules of Double-Entry Bookkeeping

A double-entry bookkeeping system has four defining properties:

1. Posted entries are immutable.
2. Every entry affects at least two accounts.
3. Total debits always equal total credits per currency.
4. The accounting equation always holds.

If you make a mistake in your bookkeeping, you cannot modify an entry that has already been posted, because doing so would violate the first property. Instead, errors are corrected by recording compensating (adjusting or reversing) entries.

### Example: Recording a Transaction

Suppose you start a business with \$200 worth of inventory contributed by the owner:

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 7rem">
<col style="width: 7rem">
</colgroup>
<thead>
<tr>
    <th>Account</th>
    <th align="right">Debit (Dr.)</th>
    <th align="right">Credit (Cr.)</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Inventory</td>
    <td align="right">$200 <span style="color:#10B981">↑</span></td>
    <td align="right">-</td>
</tr>
<tr>
    <td>Owner's Capital</td>
    <td align="right">-</td>
    <td align="right">$200 <span style="color:#10B981">↑</span></td>
</tr>
</tbody>
</table>

You then sell a \$100 product that cost you \$40 to make. How should this transaction be recorded?

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 7rem">
<col style="width: 7rem">
</colgroup>
<thead>
<tr>
    <th>Account</th>
    <th align="right">Debit (Dr.)</th>
    <th align="right">Credit (Cr.)</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Accounts Receivable</td>
    <td align="right">$100 <span style="color:#10B981">↑</span></td>
    <td align="right">-</td>
</tr>
<tr>
    <td>Revenue</td>
    <td align="right">-</td>
    <td align="right">$100 <span style="color:#10B981">↑</span></td>
</tr>
</tbody>
</table>

The first entry records the sale. Revenue is recognized when the sale occurs, even though the cash has not yet been collected. Because the customer has not yet paid, the offsetting debit is recorded in Accounts Receivable rather than Cash. Accounts Receivable (Asset) represents the amount owed to you by the customer.

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 7rem">
<col style="width: 7rem">
</colgroup>
<thead>
<tr>
    <th>Account</th>
    <th align="right">Debit (Dr.)</th>
    <th align="right">Credit (Cr.)</th>
</tr>
</thead>
<tbody>
<tr>
    <td>COGS</td>
    <td align="right">$40 <span style="color:#F59E0B">↓</span></td>
    <td align="right">-</td>
</tr>
<tr>
    <td>Inventory</td>
    <td align="right">-</td>
    <td align="right">$40 <span style="color:#F59E0B">↓</span></td>
</tr>
</tbody>
</table>

The second entry records the cost of goods sold (COGS), the cost of making the product. This decreases inventory and recognizes an expense. Since expenses ultimately reduce retained earnings, they are ultimately reductions in equity.

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 7rem">
<col style="width: 7rem">
</colgroup>
<thead>
<tr>
    <th>Account</th>
    <th align="right">Debit (Dr.)</th>
    <th align="right">Credit (Cr.)</th></tr>
</thead>
<tbody>
<tr>
    <td>Cash</td>
    <td align="right">$100 <span style="color:#10B981">↑</span></td>
    <td align="right">-</td>
</tr>
<tr>
    <td>Accounts Receivable</td>
    <td align="right">-</td>
    <td align="right">$100 <span style="color:#F59E0B">↓</span></td>
</tr>
</tbody>
</table>

Finally, when the customer eventually pays the invoice, a third entry records the collection of cash. Accounts receivable decreases because the customer no longer owes you, while cash increases because you have received the payment.

The final account balances are:

<div class="md:flex md:items-start md:justify-start md:gap-8">
<div>

**Assets**

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 6rem">
</colgroup>
<thead>
<tr><th>Account</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Cash</td><td>$100</td></tr>
<tr><td>Inventory</td><td>$160</td></tr>
<tr><td><strong>Total Assets</strong></td><td><strong>$260</strong></td></tr>
</tbody>
</table>
</div>
<div>

**Liabilities**

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 6rem">
</colgroup>
<thead>
<tr><th>Account</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>-</td><td>$0</td></tr>
<tr><td><strong>Total Liabilities</strong></td><td><strong>$0</strong></td></tr>
</tbody>
</table>
</div>
<div>

**Equity**

<table class="ledger">
<colgroup>
<col style="width: 12rem">
<col style="width: 6rem">
</colgroup>
<thead>
<tr><th>Account</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Owner's Capital</td><td>$200</td></tr>
<tr><td>Revenue</td><td>$100</td></tr>
<tr><td>COGS</td><td>-$40</td></tr>
<tr><td><strong>Total Equity</strong></td><td><strong>$260</strong></td></tr>
</tbody>
</table>
</div>
</div>
<br>

All four aforementioned properties of double-entry bookkeeping are maintained.

Now that you understand the basics of bookkeeping, let's explore how global fintechs use double-entry bookkeeping for payment processing. We’ll demonstrate this by walking through a transaction end-to-end from the perspective of a Payment Service Provider (PSP).

<br>

## Part II: The Payment Lifecycle

### Payment Lifecycle States

The payment lifecycle has five main stages:

1. Initiated
2. Authorized
3. Captured
4. Settled
5. Paid Out

![Payment lifecycle state diagram](/images/blog/payment_lifecycle_state_diagram.png)

<br>

#### I. Initiation

The merchant creates a payment intent with the PSP, specifying the amount and order details. The PSP synchronously acknowledges this request. The merchant then redirects the cardholder to the checkout page, where the cardholder enters their payment details.

![Payment intent and initiation](/images/blog/payment_lifecycle_initiation.png)

<br>

#### II. Authorization

The PSP then sends an authorization request through the card scheme. The authorization reserves the required funds on the customer's card, allowing the merchant to capture them later. At this point, no funds have moved yet; the issuer has simply approved (or declined) the transaction and placed a hold on the cardholder's available balance.

![Payment authorization](/images/blog/payment_lifecycle_authorization.png)

<br>

#### III. Capture

When the merchant is ready to fulfill the order, they request that the PSP capture the payment. No funds move at this stage either. The PSP submits the capture request to the card scheme for clearing. Steps 3–5 in the diagram are typically asynchronous and often processed in batches.

![Payment capture](/images/blog/payment_lifecycle_capture.png)

<br>

#### IV. Settlement

Settlement is when the card scheme settles the previously captured payment with the PSP.

![Payment settled](/images/blog/payment_lifecycle_settlement.png)

<br>

#### V. Payout

Finally, after the payment has settled, the PSP initiates a payout to the merchant. This transfers the funds from the PSP's bank account to the merchant's bank account.

![Payment settled](/images/blog/payment_lifecycle_payout.png)

### Ledgering

Although only settlement and payout move actual funds, the PSP records every payment lifecycle transition in its ledger. Each transition is recorded as a new accounting entry that closes the previous position and opens the next one. Let's go through the same example again, this time from the PSP's accounting perspective.

#### Accounts

We can model the payment lifecycle using three accounts (ignoring processing fees):

| Account | Type | Description |
| --- | --- | --- |
| Nostro | Asset | Funds held in the PSP's bank account |
| Card Scheme Receivable | Asset | Amount owed to the PSP by the card scheme |
| Merchant Payable | Liability | Amount owed by the PSP to the merchant |

<br>

#### I. Initiation

The first entry opens an **Initiated** position on the card scheme receivable and merchant payable accounts.

| Position | Account | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: |
| Initiated | Card Scheme Receivable | \$100 | - |
| Initiated | Merchant Payable | - | \$100 |

<br>

#### II. Authorization

The second entry closes the previous **Initiated** position and opens a new **Authorized** position on the same accounts. Although no funds have moved yet, the ledger records the payment as **Authorized** and awaiting capture.

| Position | Account | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: |
| Initiated | Merchant Payable | \$100 | - |
| Initiated | Card Scheme Receivable | - | \$100 |
| Authorized | Card Scheme Receivable | \$100 | - |
| Authorized | Merchant Payable | - | \$100 |

<br>

#### III. Capture

The third entry—**Captured**—closes the previous **Authorized** position and opens a **Captured** position. The payment has now been submitted for clearing.

| Position | Account | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: |
| Authorized | Merchant Payable | \$100 | - |
| Authorized | Card Scheme Receivable | - | \$100 |
| Captured | Card Scheme Receivable | \$100 | - |
| Captured | Merchant Payable | - | \$100 |

<br>

#### IV. Settlement

The fourth entry, **Settled**, closes the **Captured** position. This is the first point at which real funds move. The PSP receives the funds through the card scheme, replacing the receivable with cash while leaving the merchant payable open.

| Position | Account | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: |
| Captured | Merchant Payable | \$100 | - |
| Captured | Card Scheme Receivable | - | \$100 |
| Settled | Nostro | \$100 | - |
| Settled | Merchant Payable | - | \$100 |

<br>

#### V. Payout

The final entry, **Paid Out**, closes the **Settled** position by settling the merchant payable and reducing cash.

| Position | Account | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: |
| Settled | Merchant Payable | \$100 | - |
| Settled | Nostro | - | \$100 |

<br>

#### Summary

At this point, the payment lifecycle is complete and all positions have been closed. Although this example used a simple card payment, the same pattern extends naturally to cancellations, refunds, disputes, chargebacks, partial captures, and multiple currencies, as we'll see next.

<br>

## Part III: Multiple Currencies

So far, every example has involved a single currency. In reality, a global PSP processes transactions in dozens of currencies every day.

Suppose a cardholder pays in Japanese yen (JPY), the card scheme settles the PSP in U.S. dollars (USD), and the merchant expects euros (EUR). To make the example even more realistic, suppose the PSP is British and keeps its books in pounds sterling (GBP). The payment lifecycle unfolds over four days, followed by a fifth day when the PSP hedges externally with its liquidity provider (LP):

| Party      | Action                    | Currency | Time |
| ---------- | ------------------------- | :------- | :--- |
| Merchant   | initiates payment request | JPY      | T+0  |
| Cardholder | authorizes                | JPY      | T+0  |
| Merchant   | captures payment          | JPY      | T+1  |
| PSP        | settled                   | USD      | T+2  |
| Merchant   | paid out                  | EUR      | T+3  |
| PSP        | hedges                    | GBP      | T+4  |

### Exchange Rates

Over the five days, FX rates move as follows:

| Currency Pair | T+0 | T+1 | T+2 | T+3 | T+4 |
| --- | ---: | ---: | ---: | ---: | ---: |
| EUR/GBP | 0.8500 | 0.8500 | 0.8400 | 0.8300 | 0.8000 |
| EUR/USD | 1.2000 | 1.2500 | 1.2000 | 1.2000 | 1.2000 |
| EUR/JPY | 192.0000 | 200.0000 | 186.0000 | 180.0000 | 174.0000 |
| USD/JPY | 160.0000 | 160.0000 | 155.0000 | 150.0000 | 145.0000 |

### Entries

#### I. Initiation (T+0)

As before, the PSP first books an **Initiated** entry in the original currency.

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Initiated | Card Scheme Receivable | JPY | 1000 | - |
| Initiated | Merchant Payable | JPY | - | 1000 |

<br>

#### II. Authorization (T+0)

The cardholder authorizes the payment, and we open the **Authorized** memo position—no real funds move at this stage.

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Initiated | Merchant Payable | JPY | 1000 | - |
| Initiated | Card Scheme Receivable | JPY | - | 1000 |
| Authorized | Card Scheme Receivable | JPY | 1000 | - |
| Authorized | Merchant Payable | JPY | - | 1000 |

> 🗒️ **Note:** At this point, the PSP already knows from its internal config that it does not have a like-for-like (L4L) setup with the scheme and will receive USD rather than JPY. However, it does not know the exact USD amount until settlement because it does not know the scheme's USD/JPY exchange rate. Furthermore, the capture may be partial, and settlement may occur days later, so it books the entry positions in JPY for now.

<br>

#### III. Capture (T+1)

The merchant requests a capture, which the PSP forwards to the card scheme. Upon acknowledgement, the PSP creates a new entry that closes the previous **Authorized** position and opens a **Captured** position.

However, to make reconciliation easier for the merchant, the PSP already books the merchant-payable leg of the **Captured** position in the merchant's payout currency, EUR.

Because the PSP does not yet know the exact USD amount it will receive from the card scheme at settlement, it uses its own internal USD/JPY rate and charges the merchant a "small" (2.5%) markup to account for the resulting exchange-rate risk.

JPY to USD using the PSP's internal rate:

$$
\begin{aligned}
\text{JPY }1{,}000 \times \frac{\text{USD }1}{\text{JPY }160} &= \text{USD }6.25 \\
\end{aligned}
$$

USD to EUR using the PSP's internal rate:

$$
\begin{aligned}
\text{USD }6.25 \times \frac{\text{EUR }1}{\text{USD }1.25} &= \text{EUR }5.00 \\
\end{aligned}
$$

EUR foreign exchange markup calculation:

$$
\begin{aligned}
\text{EUR }5.00 \times 2.5\% &\approx \text{EUR }0.13
\end{aligned}
$$

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Authorized | Merchant Payable | JPY | 1000 | - |
| Authorized | Scheme Receivable | JPY | - | 1000 |
| Captured | Scheme Receivable | USD | 6.25 | - |
| Exchange | EUR Counter Currencies | USD | - | 6.25 |
| Exchange | USD Counter Currencies | EUR | 5.00 | - |
| Commission | USD Counter Currencies | EUR | - | 0.13 |
| Captured | Merchant Payable | EUR | - | 4.87 |

| Variable | |
| --- | ---: |
| USD/JPY | 160.0000 |
| EUR/USD | 1.2500 |
| EUR/JPY | 200.0000 |
| PSP Markup | 2.5% |

> In this booking we introduced two new position types: **Exchange** and **Commission**, and one new account type: Counter Currencies. Together, they track the currency conversions. We'll return to the benefits of this setup later in the article. For now, just note that the "debits = credits per currency" invariant remains intact.

<br>

#### IV. Scheme Settlement (T+2)

At settlement (T+2), the PSP receives the exact USD amount through the card scheme: \$6.<u>4</u>5, rather than the \$6.<u>2</u>5 it expected. Overnight, the U.S. dollar weakened against the Japanese yen, moving in the PSP's favor and resulting in an additional 20 cents of profit from the rate fluctuation.

$$
\begin{aligned}
\text{JPY }1000 \times \frac{\text{USD }1}{\text{JPY }155} &= \text{USD }6.45 \\
\end{aligned}
$$

We close the **Captured** positions like before, and open the **Settled** positions.

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Captured | Merchant Payable | EUR | 4.87 | - |
| Settled | Merchant Payable | EUR | - | 4.87 |
| Settled | USD Nostro | USD | 6.45 | - |
| Captured | Scheme Receivable | USD | - | 6.25 |
| Differences | JPY Counter Currencies | USD | - | 0.20 |

| Variable | |
| --- | ---: |
| USD/JPY | 155.0000 |
| EUR/USD | 1.2000 |
| EUR/JPY | 186.0000 |

Here, we introduced yet another position—**Differences**—to keep track of P&L resulting from exchange rate fluctuations.

<br>

#### V. Payout (T+3)

Finally, the PSP needs to pay out the merchant in EUR. But the PSP itself was settled in dollars, so where does the euro come from?

PSPs maintain buffers in common payout currencies so that they don't have to buy the currencies externally for each payout (as doing so is expensive).

Suppose the PSP started with a €100 buffer. After this payout, it would have €95.13 remaining. There are two ways to restore the buffer to €100:

1. **Hedging**: Buy the missing currency and sell excess currencies.
2. **Netting** (most favorable): Another payment settles with the PSP in the opposite direction, offsetting the EUR shortage.

We'll cover both later in the article. Let's first close the **Settled** positions by paying out the merchant from the PSP's EUR buffer.

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Settled | Merchant Payable | EUR | 4.87 | - |
| Settled | EUR Nostro | EUR | - | 4.87 |

| Variable | |
| --- | ---: |
| USD/JPY | 150.0000 |
| EUR/USD | 1.2000 |
| EUR/JPY | 180.0000 |

<br>

#### VI. Balances

What do our final positions look like?

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Authorized | Scheme Receivable | JPY | 1000 | - |
| Authorized | Merchant Payable | JPY | - | 1000 |
| Authorized | Merchant Payable | JPY | 1000 | - |
| Authorized | Scheme Receivable | JPY | - | 1000 |

* *Authorized → Balanced & closed*

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Captured | Scheme Receivable | USD | 6.25 | - |
| Captured | Scheme Receivable | USD | - | 6.25 |
| Captured | Merchant Payable | EUR | 4.87 | - |
| Captured | Merchant Payable | EUR | - | 4.87 |

* *Captured → Balanced & closed*

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Settled | Merchant Payable | EUR | 4.87 | - |
| Settled | Merchant Payable | EUR | - | 4.87 |
| Settled | USD Nostro | USD | 6.45 | - |
| Settled | EUR Nostro | EUR | - | 4.87 |

* *Settled on Merchant payable → Balanced & closed*
* *Settled on Nostro accounts → Open (long USD, short EUR relative to the PSP's buffer target)*

| Position | Account | Currency | Debit (Dr.) | Credit (Cr.) |
| --- | --- | ---: | ---: | ---: |
| Exchange | USD Counter Currencies | EUR | 5.00 | - |
| Exchange | EUR Counter Currencies | USD | - | 6.25 |
| Differences | JPY Counter Currencies | USD | - | 0.20 |
| Commission | USD Counter Currencies | EUR | - | 0.13 |

* *Exchanges → Open*
* *Differences → Open*
* *Commissions → Open*


> The remaining open positions represent the PSP's outstanding FX exposure. To restore its currency buffers, the PSP needs to buy EUR and sell excess USD. If it buys €4.87, selling dollars, it will approximately offset the position, but not exactly because rates have changed. The remaining small difference can be sold for GBP, the PSP's operating currency. Similarly, the €0.13 commission and previously unrealized \$0.20 profit should be sold for GBP.

<br>

#### VII. Counter Currency Accounts

Why do we have counter-currency accounts instead of maintaining positions by base currency? In other words, why not simply book JPY on a JPY account, EUR on a EUR account, and so on?

Suppose you did the following three trades on the same day:

| Trade | Rate |
| --- | --- |
| €100 --> \$120 | EUR/USD=1.2000 |
| €100 --> £80 | EUR/GBP=0.8000 |
| £50 --> \$75 | GBP/USD=1.5000 |

Had you stored them on base currency accounts, you'd have the following balances:

<table class="ledger">
<colgroup>
<col style="width: 10rem">
<col style="width: 10rem">
<col style="width: 10rem">
</colgroup>
<thead>
<tr align="right">
    <th>EUR Account</th>
    <th>USD Account</th>
    <th>GBP account</th>
</tr>
</thead>
<tbody>
<tr align="right">
    <td><span style="color:#F59E0B">-</span>€200</td>
    <td><span style="color:#10B981">+</span>$195</td>
    <td><span style="color:#10B981">+</span>£30</td>
</tr>
</tbody>
</table>

By just looking at these balances, how do you know which currency pairs originally caused the positions?

On the other hand, if you use counter currency accounts, the positions would be:


<table class="ledger">
<colgroup>
<col style="width: 10rem">
<col style="width: 10rem">
<col style="width: 10rem">
</colgroup>
<thead>
<tr align="right">
    <th>EUR Account</th>
    <th>USD Account</th>
    <th>GBP account</th>
</tr>
</thead>
<tbody>
<tr align="right">
    <td><span style="color:#10B981">+</span>$120</td>
    <td><span style="color:#F59E0B">-</span>€100</td>
    <td></td>
</tr>
<tr align="right">
    <td><span style="color:#10B981">+</span>£80</td>
    <td></td>
    <td><span style="color:#F59E0B">-</span>€100</td>
</tr>
<tr align="right">
    <td></td>
    <td><span style="color:#F59E0B">-</span>£50</td>
    <td><span style="color:#10B981">+</span>$75</td>
</tr>
</tbody>
</table>

The original currency pairs are now preserved. For example, we can see that we bought \$120 by selling €100 without looking elsewhere.

<br>

#### VIII. Hedging

As mentioned, one way for the PSP to restore its EUR and USD buffers to baseline is to buy €4.87 with US dollars. This is typically done on a schedule (e.g., daily) or automatically whenever the buffer reaches a predefined threshold.

The liquidity providers the PSP trades against charge a small fee, often hidden in the bid-ask spread, and typically offer wholesale pricing for larger trade sizes (say \$50K). As a result, the PSP wants to avoid making many small trades.

Furthermore, the exchange rate might move against the PSP between settlement by the card scheme and the hedge, resulting in a further loss.

Therefore, the PSP often charges higher fees for more exotic currency pairs and lower fees for major pairs. They also often apply weekend markups because global FX markets close Friday at 17:00 NY and reopen Sunday at 18:00 NY (Tokyo open), leaving the PSP unable to hedge during that period.

It's important that the liquidity provider not force the PSP to specify a direction—i.e., whether it is buying or selling—but instead always provide both sides when the PSP requests a quote. Otherwise, the LP knows which side the PSP intends to trade and can skew the quote in its own favor. A PSP should also work with multiple liquidity providers, build its own quote ladder, and select the tightest bid/ask across them (JPM, Citibank, ...). This makes it harder for any single LP to infer the PSP's trading direction from historical flow.

The less the PSP needs to trade, the cheaper payments it can provide to its merchants. Real cost reduction comes from internalization and netting, as we'll see next.

<br>

#### IX. Netting

International PSPs handle millions of daily transactions. Very often, a large percentage of these transactions can be netted, allowing the PSP to lock in the full commission without cost. This is why foreign exchange is a major part of the business model for many PSPs, accounting for a significant share of net revenue.

Internalization isn't a moat in theory—any firm with a two-sided flow can net. But in practice, the economics are highly scale-dependent: large PSPs can internalize as much as 80–90% of their flow, particularly on major, non-exotic currency pairs. Smaller fintechs may only be able to internalize 20–30% because the unit economics don't support the same level of netting.

To clarify what we mean by netting: Suppose we have three payments using the rate EUR/USD = 1.2000 and the PSP charges 2.5%:

1. The PSP gets settled \$100 by the card scheme and pays out €81.25 to Merchant A, keeping €2.08 as commission.
2. The PSP gets settled \$25 by the card scheme and pays out €20.31 to Merchant A, keeping €0.52 as commission.
3. The PSP gets settled €150 by the card scheme and pays out \$175.50 to Merchant B, keeping \$4.50 as commission.

For the first two payments, the PSP is settled in USD and pays the merchants out in EUR. Typically, it would have to buy the missing euros and sell its excess dollars—i.e. hedge. However, the third payment came in from the opposite direction and effectively offset the first two payments. The remaining open position is therefore to buy \$180 − \$100 − \$25 = \$55 and sell the excess €150 − €81.25 − €20.31 = €48.44. As a result, the commissions on the first two payments are fully realized. Had the PSP needed to hedge these positions, the exchange rate might have moved against it in the meantime, potentially causing an FX loss on the payments.

<br>

## Part IV: How To Implement Ledgers

In our examples, each entry has a date and a set of individual entry lines. Each entry represents an accounting event in the lifecycle of a transaction. The entry lines specify the affected position, account and the amount posted.

![Full core ledger ERD with 10 entities (AccountingPeriod, Transaction, TransactionType, Entry, EntryType, Position, EntryLine, Account, AccountType, Tenant)](/images/blog/core_ledger_entity_relationship_diagram_full.png)

### Tenants

Accounts belong to a tenant, which isolates data between different business units, such as customers, companies, or organizations.

![Partial core entity relationship diagram showing: Account, AccountType, Tenant](/images/blog/core_ledger_entity_relationship_diagram_2.png)

It is common to store all accounts, transactions, and ledger entries for a tenant on the same database shard. This allows bookkeeping operations within a tenant to execute transactionally, making it easier to enforce the four bookkeeping invariants.

> 🗒️ **Note:** Be careful with shard distribution. A single "whale" tenant with a large volume of activity can skew shard sizes.

### Partitioning

In a production ledger, the `entry` and `entry_lines` tables are typically by far the largest tables. An obvious (but naive) next step would be to partition each shard by the entry's related transaction `id`. Older partitions could then be archived while keeping more recent data in hot storage.

However, this partitioning strategy has a major drawback: transactions have an unbounded lifecycle. Related entries, such as disputes, can be recorded months after the original transaction, making archived partitions impossible to permanently "close" and file away from a bookkeeping or audit perspective.

Transactions are therefore the wrong unit of partitioning.

Instead, ledgers partition positions, not transactions, into accounting periods. An accounting period represents a logical posting window, typically a day or month. Once a period has been closed, no further entry lines can be posted to it.

![Partial core entity relationship diagram showing: Account, AccountType, Tenant](/images/blog/core_ledger_entity_relationship_diagram_3.png)

This keeps historical periods immutable for reporting and audit purposes, while future accounting events are recorded in an open period, even when they relate to earlier transactions.

Because accounting periods are independent of a transaction's lifecycle, they form natural partition boundaries that can be closed and archived without reopening historical data. As a general principle, closed periods must never be reopened.

### Transaction References

Once bookkeeping is distributed across many database shards, another challenge emerges: efficiently locating transactions. As a result, transaction references are often more than random identifiers. They directly encode information such as the tenant or shard, priority, timestamp, and checksum, allowing the system to route, validate, or locate transactions without performing additional lookups.

Suppose a customer requests transaction `XYZ42`. You can determine which shard stores it directly from the transaction reference.

![Reference decoder from XYZ42 to 30012800999 where the '3' digit is the shard](/images/blog/psp_reference_decoder.png)


### Balance Snapshots

From the posted entries, the system can reconstruct an account balance at any point in time. However, scanning the entire ledger every time a balance is requested would be inefficient.

Instead, systems typically subscribe to the `ledger.entries` stream and maintain a materialized `balance` view. The `balance` projection stores the current balance for each account, while the immutable ledger remains the source of truth. In this example, the `balance-webapp` can retrieve the current balance from the projection using a simple indexed lookup.

![Balance materialization flow: ledger.entries -consumed by-> balance consumer -materializes-> balance master db -replicates-> balance replica db -balance-> balance-webapp -balance-> customer](/images/blog/balance_materialization.png)


> 💾 **Note:** Fintechs often build their own in-house Postgres-backed consumers for ledger projections instead of relying on a separate streaming platform. The consumer framework tracks its progress in a checkpoint table, storing the last successfully processed stream position. It updates the balance projection and advances the checkpoint within the same database transaction, resulting in a simple crash-recovery model: if the consumer crashes before committing, both changes are rolled back and the entry is replayed; if it crashes after committing, the checkpoint ensures the entry is not processed again.

### Debits and Credits in Practice

In our introductory example, we used two columns: one for debits and one for credits. In practice, you can simplify this by storing both in a single amount column, where debits are represented as positive values and credits as negative values by convention (or vice versa).

This approach has two advantages:

- You only need one column instead of two.
- It makes it easy to verify that `debits = credits` by checking that the sum of the amount column is zero for each currency.

> ❗️ **A critical detail:** a positive amount does not mean the account balance increases. It only indicates that the entry is on the debit (left) side. Whether the account balance increases or decreases still depends on the account type.

### Reconciliation & Matching

Double-entry bookkeeping guarantees internal consistency, but it does not guarantee that external systems agree. Fintechs therefore run reconciliation processes that match internal ledger entries against external statements (intraday or end-of-day) and settlement files.

In an ideal world, matching transactions would be as simple as matching end-to-end references. In reality, external parties do not always provide complete or timely data: references can be lost in translation, settlement files can be delayed or missing, and different systems may use different response formats and fields.

## Five Centuries Later

The accounting model is simple and has remained largely unchanged for centuries. The engineering challenge is not to reinvent bookkeeping, but to preserve its invariants at scale. Modern fintech infrastructure takes a small set of accounting rules and makes them reliable across millions of transactions, distributed databases, asynchronous workflows, and imperfect external systems. The result is a system where every financial event can be recorded once, traced through its lifecycle, and verified against the same principles that have governed accounting for centuries.
