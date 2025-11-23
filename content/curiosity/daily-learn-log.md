---
title: "daily learn log"
description: "a log of what i've learned each day"
category: ["Learning"]
date: "2025-11-17"
---

### 17 Nov

- [rules of react](https://react.dev/reference/rules):
  - **components and hooks must be pure**:
    - always return the same output, w.r.t the inputs
    - side effects should not run in render
    - props and state are IMMUTABLE!
    - return values and arguments to hooks are IMMUTABLE!
    - values passed into a JSX component are IMMUTABLE
  - **react calls components and hooks**: components should only be used in JSX
  - hooks are a special type of reusable UI logic with restrictions on where they can be called
    - only call hooks at the top level
    - only call hooks from react functions
- a typical react bug called **race condition**, which basically means the component displays data incorrectly. the context where i encountered this bug was when i tried to [update a game](https://github.com/thuthancs/snake-game-rl/pull/7) with multiple state updates and using the `setTimeInterval()` API. so, the async state render and the set time interval got messed up, leading to the data being subtracted incorrectly.

### 18 Nov

- data schema and column names are super prone to change so don't hardcode it in the function. it's better to put the column names we want to extract from a dataset as something configurable.
- always ask someone who has little to no context to the code you wrote give you the most honest and direct feedback on your documentation and code. you won't realize how confusing or unreadable your code is :)
- sometimes you can use canva to design technical diagram :) no need to use miro or excalidraw. as long as the diagram conveys enough and clear information. it all comes down to first principles, not the tools.

### 19 Nov

- the word used to describe a UI that can change its size and width depending on the screen size is "responsive" :)

### 20 Nov

- animation is basically a tons of frames arranged sequentially

### 21 Nov

- generating images using AI is easy, keeping the consistency of style and design across design is hard.
- things take longer than you expect and things take less time than you expect :) my friend and i finished this [mvp for a fun project](https://race-personality.vercel.app/) in ~5 hours in total. we came up with the idea in 15 mins, finished the storyline in 2 hours, and locked in for ~3 hours to get it done. i thought it would take us several days to finish it but then one day i told her: "let's finish it tonight!" and... we did. estimation has always been hard.
- prompting is by no means a trivial task and most of the time, it feels random and unpredictable. like i have no control over how the output would turn out apart from from the fact that i can keep tweaking, waiting until the output is generated, deciding whether i like it or not and tweaking it again. i wonder if there is a more deterministic and controllable way of doing it.

### 22 Nov
