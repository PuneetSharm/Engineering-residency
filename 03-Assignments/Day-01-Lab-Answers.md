# Day 1 – Lab Answers

## Experiment 1 – Observe a Webpage

> Observe what the browser does before any JavaScript framework is involved.

### Question 1

> Write observation and answer for **Experiment 1**

### Answer/Observation

If you do a google search, it opens the results which has similar results based on what you have searched. The URL has ```text /search? ``` followed by other search params : 

```text
**Observed Example**
https://www.google.com/search?q=lovable&rlz=1C1YTUH_enIN1202IN1202&oq=lovable&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyBggBEEUYPDITCAIQLhiDARjHARixAxjRAxiABDIKCAMQABixAxiABDIKCAQQABixAxiABDINCAUQABiDARixAxiABDIKCAYQABixAxiABDIKCAcQABixAxiABNIBCTEzMDUxajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8
```
This gives a list of results. If I directly go to the website link it renders the page, and then the CSS but doesn't look like it is loading in that way as it loads the background in a few seconds. Observed this change in lovable website as there is a Header, search and before search we have few Headings. I see a few placholders in the search having animation. 
...

---

## Experiment 2 – Chrome DevTools

> Become familiar with the browser's developer tools.

### Question 1

> Write your observation and answer for **Experiment 2**


### Answer/Observation

I went through the google inspect, when I opened it, I saw tabs like : 
- Select an Element
- Toggle device tool
- Elements
> It has html shown in it and Selected Element is highlighted in this tab
- Console
> It has all logs, error which the developer wants to see and check for debugging
- Source
> Shows your source files, used to debug using debugger
- Network
> Shows api's used to fetch data
- Performance
> Shows local metrics (LCP, CLS and NP)
- Memory
> I am not sure, but you can take the entire snapshot from it
- Application 
> Has Application and Storage which has sub-options provided by browser : local,session, shared, Extention storage, Indexed DB, Cache, Cookies etc
- Security
> Shows Security related details
- Lighthouse
> Generates a Lighthouse Report which contains Mode, Device and Categories along with analyze page load button
- Recorder
> Not sure why is it present
- Redux
> Shows Redux related DevTools
- Components
> Haven't used much, but can be seen if the website is built on React. It is used to get React related information
- Profiler
> Same, can be seen if the website is built on React. It is used to get React related information

---

## Experiment 3 – Observe HTML

> Observe how the browser represents an HTML document

### Question 1

> Write your observations and answers for **Experiment 3**.

### Answer/Observation

When you inspect the Elements tab, it starts with <!DOCTYPE html> followed by <html><head></head><body></body></html>
!DOCTYPE html tag tells the document type to the browser. html tag is used to wrap the entire document content providing additional information by using attributes like lang, class, style etc. The head tag takes in meta tag, script and link tags related to the website, meta is useful for SEO purpose. The head tag generally has all the website related information present inside it, you can have the title tag inside the head. body tag contains entire content of the website represented in a beautiful way by applying CSS. All the tags are written in lowerCase but it is not case sensitive. Recommended to use lowerCase.

---

## Experiment 4 – First HTML Page

> Observe that the browser can render HTML without React.

### Question

> Write your observations and answers for **Experiment 4**.

### Answer/Observation

The HTML starts with !DOCTYPE, followed by html tag which wraps the entire html. We used head inside head the title tag used to gives the tab name. h1 is for the Main Heading, goes till h6. p is used for showing the paragraph. h1 and p are inside body tag, that represents the website content. 
---

# DSA

...

---

# Frontend Fundamentals

...

---

# Production Observation

...

---

# Interview Exercise

...

---

# Engineering Thinking

...