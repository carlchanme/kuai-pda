---

# metadata

title:- Patient Decision Aid Express 
health-condition:- What health condition is this PDA target towards?
learning-objective:- Objectives of creating this patient decision aid. 
author:- Content Author's name 
developer:- Developers name 
type-of-decision-aid:- How will this PDA help patient 
updated-date:- 04 Dec 2020 
created-date:- 04 Dec 2020 
audience:- Who are the target audience for this PDA. 
options-included:- State all the options that are available.
language:- Language used to create the PDA

format:- Web where-was-it-developed:- Company or organization that developed it how-is-this-pda-funded:- Self sponsored
footer:- Copyright and legal notes goes here.

---

# Welcome to PDA-x

Patient Decision Aid Express(PDA-x) is simpler way to create you Patient Decision aid with little knowledge of PDA and
programming

![PDA sample](https://www.heartrhythmalliance.org/files/images/afa/for-patients/atrial-fibrillation/decision-making-aid.jpg)

---

# What is PDA-x?

PDA-x stands for Patient Decision Aid Express. It iss a PDA maker and presenter designed for technical and non-technical
individuals that would like to create a PDA. PDA-x consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 👨‍💼 **Non-technical Friendly** - you don't need to learn Programming of and framework.
- 🤹 **Interactive** - embedding React components to enhance your expressions
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

<!--
You can have `style` tag in markdown to override the style for the current page.
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
}
</style>

---

# List and Tables

You can add tables or list to you PDA

<div class="container">
<div class="row">
<div class="col-sm">

### table:

| Header |  Header   |
| --- | --- |
| asldkfjasf| label |
| title| label |
| title| label |
| title| label |

</div>
<div class="col-sm">

### Lists

* [ ] todo1
* [ ] todo2
* [ ] todo3
* [ ] todo4
* [ ] todo5
* [x] done

</div>

---

# Options

# Options
benefits
~~~json
{
  "type": "optionsTable",
  "title": "Compare your options",
  "heading": [
    "Questions",
    "Take Insulin",
    "Don't take Insulin"
  ],
  "body": [
    [
      "What is usually involved?",
      "You give yourself insulin 1 to 4 times a day. Most people do this by giving themselves an injection, or shot.",
      "You check your blood sugar to make sure that your levels are in your target range."
    ],    [
      "benefits?",
      "You give yourself insulin 1 to 4 times a day. Most people do this by giving themselves an injection, or shot.",
      "You check your blood sugar to make sure that your levels are in your target range."
    ],    [
      "side effects?",
      "You give yourself insulin 1 to 4 times a day. Most people do this by giving themselves an injection, or shot.",
      "You check your blood sugar to make sure that your levels are in your target range."
    ],    [
      "risk?",
      "You give yourself insulin 1 to 4 times a day. Most people do this by giving themselves an injection, or shot.",
      "You check your blood sugar to make sure that your levels are in your target range."
    ]
  ]
}
~~~

---

# Display videos or images

Add videos or images to your PDA

<div class="container">
<div class="row">
<div class="col-sm">

~~~player 
./videos/panel1.mp4
~~~

</div>
<div class="col-sm">

![React Icon](./logo512.png)

</div>
</div>

---

# Code

Use code snippets and get the highlighting directly!

~~~js
interface
User
{
    id: number
    firstName: string
    lastName: string
    role: string
}

function updateUser(id: number, update: User) {
    const user = getUser(id)
    const newUser = {...user, ...update}
    saveUser(id, newUser)
}
~~~

---

# Code 2

Use code snippets and get the highlighting directly!

~~~js
interface
User
{
    id: number
    firstName: string
    lastName: string
    role: string
}

function updateUser(id: number, update: User) {
    const user = getUser(id)
    const newUser = {...user, ...update}
    saveUser(id, newUser)
}
~~~

---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br />

Inline $\sqrt{3x-1}+(1+x)^2$

Block $$ \begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & =
\frac{4\pi}{c}\vec{\mathbf{j}} \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array} $$

<br>

[Learn more](https://github.com/remarkjs/remark-math/tree/main#readme)

---

# Learn More

[Documentations](https://myum.um.edu.my) / [GitHub Repo](https://myum.um.edu.my)


---

# Summary page

[Documentations](https://myum.um.edu.my) / [GitHub Repo](https://myum.um.edu.my)

