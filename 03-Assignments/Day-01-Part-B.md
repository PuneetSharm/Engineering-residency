# Day 1 – Part B

# Browser Engineering Lab

---

## Overview

Welcome to your first Engineering Lab.

Unlike the Engineering Handbook, where you learn concepts, the Engineering Lab is where you verify those concepts through observation, experimentation, and reasoning.

The purpose of today's lab is **not** to write a React application.

The purpose is to observe how the browser behaves before we begin working with React.

Remember:

> Engineers do not accept behaviour.
>
> Engineers investigate behaviour.

---

# Lab Objectives

By the end of today's lab, you should be able to:

- Observe how a browser behaves when loading a webpage.
- Become comfortable using Chrome DevTools.
- Understand that HTML is rendered by the browser.
- Understand that React is not required to display HTML.
- Begin thinking like an engineer by observing instead of assuming.

---

# Before You Begin

Open the following tools:

- Google Chrome
- Chrome DevTools
- VS Code
- Your Engineering Residency repository

Create the following file if it does not already exist:

```text
03-Assignments/
└── Day-01-Lab-Answers.md
```

All answers for today's Engineering Lab should be written in that file.

Do not write answers inside this document.

---

# Experiment 1 — Observe a Webpage

## Objective

Observe what the browser does before any JavaScript framework is involved.

---

## Instructions

1. Open Google Chrome.
2. Visit:

```
https://example.com
```

3. Do not interact with the page for one minute.
4. Simply observe the webpage.

---

## Record in Day-01-Lab-Answers.md

Answer the questions provided for Experiment 1.

Do not search the internet.

Write only your current understanding.

---

# Experiment 2 — Explore Chrome DevTools

## Objective

Become familiar with the browser's developer tools.

---

## Instructions

1. Open Chrome DevTools.

Use any one of the following:

- F12
- Ctrl + Shift + I
- Right Click → Inspect

2. Locate the following tabs:

- Elements
- Console
- Network
- Sources
- Application

3. Do not attempt to understand every tab today.

Simply identify them.

---

## Record in Day-01-Lab-Answers.md

Write your observations and answers for Experiment 2.

---

# Experiment 3 — Observe HTML

## Objective

Observe how the browser represents an HTML document.

---

## Instructions

1. Open the **Elements** panel.
2. Expand:

- `<html>`
- `<head>`
- `<body>`

3. Observe the hierarchy.

Do not analyse every tag.

Focus only on the structure.

---

## Record in Day-01-Lab-Answers.md

Write your observations for Experiment 3.

---

# Experiment 4 — Your First HTML Page

## Objective

Observe that the browser can render HTML without React.

---

## Instructions

Create the following folder:

```text
browser-lab/
```

Inside it create:

```text
index.html
```

Paste:

```html
<!DOCTYPE html>
<html>

<head>
    <title>Browser Lab</title>
</head>

<body>

<h1>Hello Engineering Residency</h1>

<p>I built my first page.</p>

</body>

</html>
```

Save the file.

Open it in your browser.

Observe what happens.

---

## Record in Day-01-Lab-Answers.md

Answer the questions for Experiment 4.

---

# DSA Exercise

## Today's Objective

Today's DSA exercise is intentionally very simple.

You are **not expected to know DSA yet**.

The goal is to start developing the habit of:

**Understanding → Thinking → Solving → Explaining**

Do not write code yet.

---

## Problem

You are given the following numbers:

```text
12, 45, 2, 91, 37
```

Your task is:

> **Find the largest number in the list.**

---

## Step 1 — Solve It Yourself

Before looking at any solution, determine how you would find the largest number if someone gave you this list on paper.

Write down your thought process.

Do not worry about using technical terminology.

Explain it exactly as you would explain it to another person.

---

## Step 2 — Answer These Questions

Record your answers in `Day-01-Lab-Answers.md`.

### Question 1

How did you determine that `91` is the largest number?

---

### Question 2

Did you need to look at every number in the list?

Explain why.

---

### Question 3

If the numbers were:

```text
12, 45, 91, 37, 2
```

would your approach change?

Why or why not?

---

### Question 4

What would happen if the list contained only one number?

For example:

```text
25
```

Would your approach still work?

---

### Question 5

What would happen if all the numbers were negative?

For example:

```text
-10, -4, -25, -2, -15
```

What would the largest number be?

Explain your reasoning.

---

### Question 6

What would happen if the list were empty?

```text
[]
```

Can you still determine the largest number?

If not, what do you think should happen?

---

### Question 7

What if the list contained duplicate values?

For example:

```text
12, 91, 45, 91, 37
```

Would your approach still work?

---

## Step 3 — Think About the Algorithm

Now describe your approach as a sequence of steps.

For example:

```text
Step 1:
...

Step 2:
...

Step 3:
...
```

Do not write JavaScript yet.

The objective is to describe the algorithm using plain language.

---

## Step 4 — Think About Efficiency

Consider this question:

> If there were 5 numbers, would your approach work?

What about:

```text
100 numbers
```

What about:

```text
1,000,000 numbers
```

Would you still need to inspect the numbers?

Explain your reasoning.

Do not worry about knowing the term **Big O** yet.

We will formally learn time complexity later.

---

## Step 5 — Interview Explanation

Imagine an interviewer asks:

> "How would you find the largest number in an array?"

Explain your approach in your own words.

Do not memorise an interview answer.

The interviewer is interested in your **thinking process**, not just the final answer.

---

## Important Rule

**Do not search for the solution.**

Do not use ChatGPT, Google, or an AI coding assistant to solve this problem before completing your own reasoning.

You are allowed to make mistakes.

In fact, making mistakes here is useful.

The purpose of today's DSA exercise is to understand how you naturally approach a problem before we start teaching you formal DSA techniques.

---

## What You Are NOT Expected To Know Today

You do not need to know:

* Arrays formally
* Big O notation
* Time complexity terminology
* Space complexity
* Sorting algorithms
* Searching algorithms
* JavaScript array methods
* LeetCode patterns

Those concepts will be introduced gradually.

For today, focus only on:

> **How do I think when I receive a problem?**

---

## End of DSA Exercise

---

## Record in Day-01-Lab-Answers.md

Complete the DSA reasoning section.

---

# Frontend Fundamentals

Today's topic:

> Who understands HTML?

Think carefully before answering.

Do not search online.

Reason using what you learned in Part A.

---

## Record in Day-01-Lab-Answers.md

Complete the Frontend Fundamentals section.

---

# Production Observation

Open your office project.

Find any HTML element such as:

- input
- button
- table
- form

Observe it carefully.

Do not modify any production code.

---

## Record in Day-01-Lab-Answers.md

Complete the Production Observation section.

---

# Interview Exercise

Imagine I ask you:

> Why did you study the browser before React?

Answer in your own words.

Do not copy the handbook.

---

## Record in Day-01-Lab-Answers.md

Complete the Interview Exercise.

---

# Engineering Thinking

Today's Engineering Question

Which is more important:

- Learning React?

or

- Understanding the browser?

There is no perfect answer.

I want your reasoning.

---

## Record in Day-01-Lab-Answers.md

Complete the Engineering Thinking section.

---

# Completion Checklist

Before moving to Part C, verify that you have:

- Read Part A completely.
- Completed all four experiments.
- Answered the DSA reasoning questions.
- Completed the Frontend Fundamentals exercise.
- Completed the Production Observation.
- Completed the Interview Exercise.
- Completed the Engineering Thinking exercise.
- Recorded all answers in `Day-01-Lab-Answers.md`.

Only after completing the checklist should you continue to Part C.

---

## End of Part B