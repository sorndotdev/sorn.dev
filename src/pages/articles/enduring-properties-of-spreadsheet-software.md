---
layout: ../../layouts/BaseLayout.astro
title: "The Enduring Properties of Spreadsheet Software: Why It Has Survived for Decades"
description: Spreadsheets have survived for decades not because they offer the most features, but because they combine a specific set of properties that reinforce one another. Composability, orthogonality, discoverability, and extensibility—the mechanisms behind them, and what Christopher Alexander's centers teach us about compounding systems.
date: 2026-07-24
prose: true
---

# The Enduring Properties of Spreadsheet Software: Why It Has Survived for Decades

*July 24, 2026*

> 💡 **Key idea:** Durable systems don't win by having the most features. They win by making each new feature reinforce the existing ones.

Spreadsheets have been one of the most durable software products in existence for decades—not because they offer the most features, but because they combine a specific set of properties that reinforce one another. This synergy is what makes a system more than just the sum of its parts. Understanding these properties is the key to building systems that compound rather than decay. In this article, we'll go through the properties and mechanisms that make them possible.

## Who Is This For?

Anyone building software: founders, product managers, software engineers, and anyone else interested in creating systems with lasting value. If that's you, this should be a worthwhile read.

> 🗒️ **Note:** This is an original, unreviewed perspective, so don't treat it as ground truth. Instead, use it as a lens for evaluating the systems you build—something to challenge, refine, and adapt as you develop your own products.

## Creating Synergy: The Four Properties

I've broken synergy down into four main properties. Whenever you're considering a new feature, try scoring it from 1-10 on each property. If its average score is below a threshold, say 7, there's a good chance the feature is doing the product more harm than good.

- **Composability:** parts can be combined to create new capabilities.
- **Orthogonality:** changes in one area do not create unexpected effects in another area.
- **Discoverability:** users can naturally find and understand the system's capabilities.
- **Extensibility:** the system can grow and adapt to new needs without breaking its foundation.

> 💡 **Acronym:** The four properties spell CODE, a useful checklist for building durable systems.

More important than any individual property is their combination, which creates synergy. Spreadsheet software exhibits all of them:

- **Composability:** Formulas return values that can be consumed by other cells and formulas, allowing simple operations to be composed into complex models.
- **Orthogonality:** Changing a cell's formatting doesn't change its value, and editing a formula doesn't affect how the spreadsheet is displayed. Each concern can evolve independently.
- **Discoverability:** The entire model is visible and directly manipulable. Users can inspect formulas, trace dependencies, and discover capabilities naturally as they explore the sheet.
- **Extensibility:** Custom functions, macros, add-ins and plugins, scripts, and external data connections allow spreadsheets to evolve without changing the core model.

## Mechanisms

The properties describe what a durable system looks like. Mechanisms describe how those properties emerge. Here are some of the most important ones—there are more:

- **Closure:** do your outputs become valid inputs for further operations? Example chain: *input → output → input → output → ...*
- **Primitives:** are your system's capabilities exposed as small building blocks? Example: `lookup`, `aggregate`, `filter` rather than `financial report builder`.
- **Uniform representation:** is your system's information represented in the same way? Example: every spreadsheet value lives in a cell, every Unix resource is a file, ...
- **Pure methods:** do your components depend only on their inputs rather than mutating shared state? Example: `calculateTotal(items)` returns a value rather than updating a global shopping cart.
- **Polymorphism:** do your components operate on abstractions rather than concrete implementations? Example: `draw(shape)` rather than `draw(rectangle)`, `draw(circle)`, ...
- **Encapsulation:** can your components change internally without affecting their users? Example: changing a database implementation without changing the API.
- **HCI / direct manipulation:** do users interact with the underlying model directly and immediately see the results? Example: selecting, dragging, editing, and inspecting the objects themselves.
- **Extension points:** does your system provide stable places where new behavior can be added without modifying existing functionality? Example: plugins, hooks, events, and scripting.

| Property | Mechanisms that enable it |
| --- | --- |
| Composability | closure, primitives, uniform representation, polymorphism |
| Orthogonality | pure methods, encapsulation, polymorphism |
| Discoverability | direct manipulation, primitives |
| Extensibility | extension points, polymorphism |

## Compounding Systems

Features are not assets by themselves. They become assets only when they strengthen the capabilities already present. Durable products don't grow by accumulating features—they grow by increasing the number of meaningful interactions between features. That's why the most enduring systems often look surprisingly small: their power comes from reinforcement, not addition.

### Centers and Living Structure

The deepest formulation of this idea comes from architect Christopher Alexander, in his 1996 talk *Patterns in Architecture* at the ACM OOPSLA conference.

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Re-uploading this here, just in case it ever gets lost on YouTube.<br><br>🎬 Christopher Alexander - Patterns in Architecture<br><br>This presentation was recorded live in San Jose, California, October of 1996, at the 1996 ACM Conference on Object-Oriented Programs, Systems, Languages and… <a href="https://t.co/dlP1S1yFtX">pic.twitter.com/dlP1S1yFtX</a></p>&mdash; Sorn.dev (@sorndotdev) <a href="https://x.com/sorndotdev/status/2088643142727680015?ref_src=twsrc%5Etfw">August 15, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

Alexander's concept of **centers** in living structures shows how elements gain strength only through mutual reinforcement: each center makes others more coherent, much as spreadsheet cells and formulas do. This is the same principle behind the CODE properties: composability, orthogonality, discoverability, and extensibility are precisely what let each new feature intensify the centers already present—a feature is only as durable as the centers it intensifies. Centers gain life only through recursive mutual intensification; each must strengthen the others.

Alexander's idea, applied to building software:

> Build software by observing reality, then make the smallest change that strengthens the current whole.
>
> **Not:** "What's the next feature?"
>
> **But:** "What did reality reveal, and what's the smallest strengthening transformation?"

### Reflexivity

Reflexivity is built into the recursion of centers. Each structure-preserving step feeds the intensified whole back into observation, so the system—and its maker—continually disclose new weak centers from within. The process is self-referential by nature: living software does not merely accumulate; it regenerates its own coherence through that closed loop of sensing and minimal transformation. The principle has a distinguished pedigree: George Soros built his investment philosophy on it in *The Alchemy of Finance*, arguing that participants' biased perceptions shape the very situation they are perceiving, which in turn reshapes those perceptions.

### Homoiconicity

Homoiconicity makes the program a field of centers. The term was coined by Douglas Hofstadter in *Gödel, Escher, Bach* for languages like Lisp, where code and data share one representation. Such a system can observe its own structure and apply the same minimal, structure-preserving transformations to itself. Reflexivity becomes operational: the software continually regenerates its coherence from within, turning every extension into living structure rather than bolted-on matter.
