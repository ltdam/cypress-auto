# Cypress Demo Project

![Alt text](img/pyramid.png?raw=true 'Cypress automation testing pyramid')

The project is created for real world Web UI Automation Test and shows many common practices on automation field. The project covers onboarding flow using Github website with couple of different types of tests.

This demo project is also playing with Cypress dashboard and potentially using Cypress cloud with project ID and record ID. The tests are atomic, which means that each test tests only one part of the application in time and has ability to be run in parallel with data separation. They are short, readable and easy maintable. Hence it helps to prevent flackieness.

## Scenarios and test coverage 

**_GIVEN_** I am opening Github website

**_WHEN_** I click sign in button

**_AND_** I input wrong credentials

**_THEN_** Verify error message is displayed

## Installation

Use the npm to install all dependencies

```bash
npm i
```

## Run tests locally

```python
npm run debug:local or npx cypress open # to build and run local app with Cypress dashboard

npm run run:ci # to run tests in Chrome with in headless mode and result is uploaded to Cypress Cloud
```
