# Day 1 – Lab Answers

## Experiment 1 – Observe a Webpage

> **Objective:** Observe what the browser does before any JavaScript framework is involved.

### Question 1

> What do you observe when you open a webpage? Record your observations and current understanding.

### Answer / Observation

When I perform a Google search, Google opens a results page containing results related to the search query.

I observed that the URL contains `/search` followed by several query parameters.

For example:

```text
https://www.google.com/search?q=lovable&rlz=1C1YTUH_enIN1202IN1202&oq=lovable&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyBggBEEUYPDITCAIQLhiDARjHARixAxjRAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDINCAUQABiDARixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABNIBCTEzMDUxajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8
```

The search results page is then rendered in the browser.

When I directly open a website, the page is rendered and its styling is applied. I observed this behaviour on the Lovable website. The page contains a header, search functionality, and headings. I also noticed placeholders with animations before some of the content appeared.

This made me think that the browser is receiving and rendering different resources rather than simply displaying one complete piece of content all at once.

---

## Experiment 2 – Chrome DevTools

> **Objective:** Become familiar with the browser's developer tools.

### Question 1

> What did you observe when you explored Chrome DevTools?

### Answer / Observation

I explored Chrome DevTools using Google's website.

I observed several tabs and tools:

### Elements

The Elements tab displays the HTML structure of the page. When an element is selected, the corresponding element is highlighted on the webpage.

### Console

The Console displays logs, warnings, and errors. Developers can use it to inspect information and debug JavaScript-related issues.

### Sources

The Sources panel displays source files and provides debugging capabilities, including the ability to use breakpoints and the debugger.

### Network

The Network panel shows network requests made by the webpage. It can be used to inspect requests made to APIs and other resources.

### Performance

The Performance panel provides information about page performance and helps analyse browser activity during page loading and interaction. I noticed metrics such as LCP and CLS.

### Memory

I am not completely sure about the Memory panel yet. I observed that it can be used to take memory snapshots and analyse memory usage.

### Application

The Application panel contains information related to browser storage and application data. I observed options related to:

* Local Storage
* Session Storage
* Shared Storage
* Extension Storage
* IndexedDB
* Cache
* Cookies

### Security

The Security panel provides information related to the security of the current webpage.

### Lighthouse

Lighthouse can generate a report for a webpage. I observed options related to mode, device, and categories, along with an option to analyse the page.

### Recorder

I noticed the Recorder panel, but I am not yet sure what it is used for.

### Redux

I observed a Redux-related DevTools panel. I understand that it is available when Redux DevTools integration is present.

### Components

I have not used this extensively yet. I understand that it can be available for React applications and provides information about React components.

### Profiler

I have not used this extensively yet. I understand that it can be used to analyse React-related performance.

---

## Experiment 3 – Observe HTML

> **Objective:** Observe how the browser represents an HTML document.

### Question 1

> What did you observe in the Elements tab when inspecting an HTML document?

### Answer / Observation

When I inspect a webpage in the Elements tab, I can see the HTML document structure.

It starts with:

```html
<!DOCTYPE html>
```

The `<!DOCTYPE html>` declaration tells the browser that the document is an HTML document and helps the browser use the appropriate rendering mode.

The `<html>` element wraps the entire HTML document. It can contain attributes such as `lang`, `class`, and `style`.

The `<head>` element contains information and resources related to the webpage, such as:

* `<meta>`
* `<script>`
* `<link>`
* `<title>`

The `<title>` element is used to define the title displayed in the browser tab.

The `<body>` element contains the content that is displayed as part of the webpage.

I also observed that HTML elements are generally written using lowercase letters. HTML element names are not case-sensitive, but using lowercase is the recommended convention.

---

## Experiment 4 – First HTML Page

> **Objective:** Observe that the browser can render HTML without React.

### Question 1

> What did you observe after creating and opening the HTML file?

### Answer / Observation

The HTML document starts with:

```html
<!DOCTYPE html>
```

followed by the `<html>` element, which wraps the entire document.

Inside the `<html>` element, we have the `<head>` and `<body>` elements.

The `<head>` contains the `<title>` element, which determines the name displayed in the browser tab.

Inside the `<body>`, we used:

* `<h1>` for the main heading.
* `<p>` for the paragraph.

The `<h1>` and `<p>` elements represent content that the browser displays on the webpage.

Most importantly, the page rendered successfully without using React.

---

# DSA

## Problem

You are given the following numbers:

```text
12, 45, 2, 91, 37
```

Your task is:

> **Find the largest number in the list.**

---

# Step 1 — Solve It Yourself

## Question

> Write down your thought process for finding the largest number.

### Answer

I go through the list of numbers and compare them to determine which one is the largest.

By comparing the numbers, I can see that **91** is the largest number.

---

# Step 2 — Answer the Questions

## Question 1

> How did you determine that `91` is the largest number?

### Answer

I compared all the numbers in the list and concluded that **91** is the largest number.

---

## Question 2

> Did you need to look at every number in the list? Explain why.

### Answer

Yes, I looked at every number so that I could compare them and determine which one was the largest.

---

## Question 3

> If the numbers were:

```text
12, 45, 91, 37, 2
```

> Would your approach change? Why or why not?

### Answer

No, my approach would remain the same because I would still need to compare the numbers and determine which one is the largest.

---

## Question 4

> What would happen if the list contained only one number?

For example:

```text
25
```

> Would your approach still work?

### Answer

If the list contains only one number, I would not need to compare it with anything else. I could directly determine that **25** is the largest number.

---

## Question 5

> What would happen if all the numbers were negative?

For example:

```text
-10, -4, -25, -2, -15
```

> What would the largest number be? Explain your reasoning.

### Answer

The largest number would be **-2**.

I would still compare the numbers. Although `-2` is negative, it is greater than `-4`, `-10`, `-15`, and `-25` because it is closer to zero.

---

## Question 6

> What would happen if the list were empty?

```text
[]
```

> Can you still determine the largest number? If not, what do you think should happen?

### Answer

If the list is empty, I cannot determine the largest number because there is no number available to compare.

In that situation, I would say that there is **no largest number**.

---

## Question 7

> What if the list contained duplicate values?

For example:

```text
12, 91, 45, 91, 37
```

> Would your approach still work?

### Answer

Yes, the approach would still work.

In this case, the largest value is **91**, even though it appears twice.

I only need to determine the largest value, so the duplicate occurrence does not change the result.

---

# Step 3 — Think About the Algorithm

**Not completed yet.**

I will complete this after reviewing my reasoning from Steps 1 and 2.

---

# Step 4 — Think About Efficiency

**Not started yet.**

---

# Step 5 — Interview Explanation

**Not started yet.**

---

# Frontend Fundamentals

**Not started yet.**

---

# Production Observation

**Not started yet.**

---

# Interview Exercise

**Not started yet.**

---

# Engineering Thinking

**Not started yet.**
