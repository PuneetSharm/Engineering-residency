# Day 1 – Understanding the Browser

---

# Learning Outcomes

By the end of today's lesson, you should be able to:

- Explain what a browser actually is beyond "an application used to open websites."
- Describe, at a high level, what happens after a user enters a URL and presses **Enter**.
- Explain why the browser is the environment in which every frontend framework operates.
- Explain why React is dependent on the browser rather than replacing it.
- Explain why understanding browser fundamentals is essential before learning React.
- Describe today's concepts in your own words without referring to notes.

---

# Engineering Vocabulary

Throughout this residency, every chapter introduces important engineering terminology.

Today's vocabulary:

| Term | Meaning |
|------|---------|
| Browser | A software platform responsible for requesting, interpreting, executing, and rendering web applications. |
| Rendering | The process of converting HTML, CSS, and JavaScript into pixels displayed on the screen. |
| Runtime | The environment where JavaScript executes. In this residency, we begin with the browser runtime. |
| Rendering Engine | The browser component responsible for parsing HTML, CSS, and displaying the final page. |
| Web Page | A document that the browser receives, interprets, and renders for the user. |
| Framework | A structured set of tools and conventions that helps developers build applications. React is a library, not a framework, but the term is commonly encountered in frontend discussions. |

These terms will appear repeatedly throughout future chapters.

Do not attempt to memorise them.

Instead, focus on understanding them through practical examples.

---

## Part A – Engineering Handbook

---

## Chapter Information

| Item | Details |
|------|---------|
| Volume | Volume 1 – Foundations |
| Day | Day 1 |
| Part | A – Engineering Handbook |
| Estimated Reading Time | 60–90 Minutes |
| Practical Work | No (Part B) |
| Journal | No (Part C) |
| Assignment | No (Part B) |

---

# Today's Theme

> **Understanding the Browser Before Understanding React**

This may seem like an unusual place to begin.

Many React courses start by asking you to write this:

```jsx
function App() {
    return <h1>Hello World</h1>;
}
```

Within a few minutes, they explain JSX, components, and props.

Although this approach allows you to build something quickly, it often skips one of the most important questions in frontend engineering.

**Who is actually reading this code?**

When you write:

```jsx
<h1>Hello World</h1>
```

does React understand it?

Does JavaScript understand it?

Does the browser understand it?

Or is there another process happening that most developers never see?

Before we study React, we must first understand the environment in which React lives.

That environment is the **browser**.

React is only a guest inside it.

The browser is the real host.

If you understand the browser, understanding React becomes much easier.

---

# Why Are We Starting Here?

I want you to think about something.

Imagine you are learning to drive a car.

Would it make sense to begin by learning how to use cruise control before understanding the steering wheel, accelerator, and brakes?

Probably not.

Cruise control is useful.

But it only makes sense after you understand the basics of driving.

React is similar.

React solves many problems.

However, if we study React before understanding the browser, HTML, JavaScript, and the DOM, React becomes something to memorise rather than something to understand.

Throughout this residency, we will avoid that.

We will always learn:

1. The environment.
2. The problem.
3. The solution.
4. The implementation.

That sequence will remain consistent.

---

# What Actually Happens When You Open a Website?

Let's forget React completely.

Imagine you open your browser.

You type:

```
https://example.com
```

and press **Enter**.

Within a few seconds, a web page appears.

This feels simple because we have done it thousands of times.

But from an engineering perspective, an extraordinary number of things have just happened.

Before we learn any framework, we need to appreciate that loading a webpage is not one action.

It is a sequence of coordinated systems working together.

As engineers, we should always ask:

> **What actually happened between pressing Enter and seeing the page?**

This question is far more important than it appears.

Because every frontend application—React, Angular, Vue, Svelte, or plain HTML—ultimately depends on this process.

---

# The User Sees One Action

From the user's perspective:

1. Type a URL.
2. Press Enter.
3. Website appears.

Simple.

---

# The Engineer Sees a System

An engineer sees something completely different.

Instead of one action, they see multiple systems collaborating.

Very broadly, the browser needs to:

1. Understand the URL.
2. Find the server.
3. Request the webpage.
4. Receive the response.
5. Read the HTML.
6. Build an internal representation of the page.
7. Download additional resources such as CSS, JavaScript, images, fonts, and videos.
8. Apply styles.
9. Execute JavaScript.
10. Render the final page on the screen.

At the moment, you do **not** need to understand every step.

The important thing is to realise that a browser is not simply "displaying HTML."

It is coordinating many different responsibilities.

Over the next several days, we will study each responsibility in detail.

---

# The Browser Is More Than a Window

Many people think of Chrome, Edge, Firefox, or Safari as applications that open websites.

That description is technically true.

But it is incomplete.

A browser is a sophisticated software platform.

It provides capabilities such as:

- Rendering HTML.
- Applying CSS.
- Executing JavaScript.
- Managing tabs.
- Networking.
- Storage.
- Security.
- Permissions.
- Accessibility.
- Developer Tools.
- Media playback.
- Communication with operating system APIs.

React does not replace any of these.

React uses them.

Understanding this relationship is extremely important.

---

# React Is a Guest

This is one of the most important ideas you will learn in the entire residency.

React is **not** the operating system.

React is **not** the browser.

React is **not** JavaScript.

React is a JavaScript library that runs **inside** the browser.

This means React depends on the browser for everything it does.

If the browser did not exist, React could not display anything.

Whenever React wants to update the UI, it eventually asks the browser to update what the user sees.

This explains why experienced frontend engineers invest so much time understanding browser behaviour.

They are not learning browser concepts instead of React.

They are learning the foundation upon which React is built.

---

---

# Engineering Judgement

Understanding facts is useful.

Engineering judgement is the ability to decide **why**, **when**, and **how** to apply those facts.

Today's judgement is:

### A beginner thinks:

> "React creates the webpage."

### An engineer thinks:

> "The browser creates the webpage. React only helps manage and update parts of it."

This distinction may seem small, but it changes how you think about frontend development.

If something does not render correctly, an engineer does not immediately blame React.

Instead, they ask:

- Is this an HTML issue?
- Is this a CSS issue?
- Is JavaScript executing?
- Is React producing the expected output?
- Is the browser rendering what React generated?

By separating responsibilities, engineers debug more effectively.

---

# Common Misconceptions

## Misconception 1

**"React understands JSX."**

Reality:

React does not directly execute JSX.

JSX is transformed into JavaScript before the browser executes it.

You will study this transformation in detail later.

---

## Misconception 2

**"The browser understands React."**

Reality:

The browser does not understand React components.

Ultimately, the browser works with HTML, CSS, and JavaScript.

React acts as an intermediary that generates instructions for the browser.

---

## Misconception 3

**"Learning React means I don't need to learn HTML."**

Reality:

Every React application ultimately produces HTML elements.

A weak understanding of HTML usually leads to weak React code.

---

# Knowledge Check

After completing today's lesson, honestly assess your understanding.

| Level | Description | Status |
|------|-------------|--------|
| Level 1 | I have heard about these concepts. | □ |
| Level 2 | I understand these concepts when someone explains them. | □ |
| Level 3 | I can explain these concepts in my own words. | □ |
| Level 4 | I can apply these concepts while building software. | □ |
| Level 5 | I can debug problems related to these concepts. | □ |
| Level 6 | I can confidently teach these concepts to someone else. | □ |

Remember:

Reaching Level 6 is not today's objective.

Today's objective is to move from Level 1 towards Level 2 and Level 3.

That is enough.

---

# Connecting the Dots

Yesterday, in Day 0, we learned that engineering begins by understanding the problem before learning the solution.

Today, we are applying that principle.

Instead of starting with React because it is popular, we are starting with the browser because it is the environment in which every frontend framework operates.

Over the next few days, we will gradually answer questions such as:

- How does a browser understand HTML?
- What exactly is the DOM?
- Where does JavaScript execute?
- Why do CSS and JavaScript affect rendering differently?
- Why does React need a Virtual DOM?

By the time we finally write our first React component, you will understand **why** React exists instead of simply knowing **how** to use it.

That is the difference between learning a framework and understanding the engineering behind it.

---

## End of Part A