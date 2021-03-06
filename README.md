# Single Page Applications Sprint Challenge

## Introduction

### 
In this challenge you will be working from the `Lambda Eats` homepage to create a functional `Pizza?` button that leads to a build your own pizza custom form.

You may use the following wireframes (also in a folder above) as guidance as you design your site but it is not required that you do so.

[Form](https://tk-assets.lambdaschool.com/d43783ef-e6a8-4154-ba68-430e2275fddc_Form.png)

[Home Page](https://tk-assets.lambdaschool.com/ed737cf5-723e-428d-9b25-192143c8b71f_HomePage.png)

[Confirmation](https://tk-assets.lambdaschool.com/a0f43a34-9fab-4d2b-89f7-e23b22d32964_Pizza.gif)


## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
1. How would you explain form validation to someone who has never programmed before?
1. In 1-2 sentences, define end to end testing.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: `git push origin <firstName-lastName>`

### Task 2: Project Requirements

####
Your finished project must include all of the following requirements:

- [x] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [x] A order form that has a "/pizza" route and shows the form
- [x] A form with an id of "pizza-form"
- [x] A name text input field with an id of "name-input"
- [x] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass)
- [x] A dropdown for pizza size with an id of "size-dropdown"
- [x] A checklist for toppings - at least 4 (hint: name each separately!)
- [x] Text input for special instructions with an id of "special-text"
- [x] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [x] test that you can add text to the box
- [x] test that you can select multiple toppings
- [x] test that you can submit the form


### Task 3: Stretch Goals

- [ ] Toggle form component for gluten free crust
- [ ] Turn form element sections into nested routes
- [ ] Test more of the application with Cypress
- [ ] Build UI for the eventuality of a network error when POSTing the order
- [ ] Add functionality to your order button that it leads to a Congrats! Pizza is on it's way! page **and** returns a database record of the whole order

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) with `axios`
3. Log data in console
4. The URL you should use is `https://reqres.in/api/orders`. The tests are based on this URL.

## Submission format

Follow these steps for completing your project.

Set up your fork on Github to [submit via Codegrade](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374), pushing commits to your `<firstName-lastName>` branch.
- [ ] Your code will be reviewed over the next few days. Read [these instructions](https://www.notion.so/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a) to learn how to view feedback in CodeGrade.