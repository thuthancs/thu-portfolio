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
