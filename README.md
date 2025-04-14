# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Application Functionality

The application allows a user to:

- Create and remove action lists.
- Create, update and remove action cards within a list.

The action list provides a button at it's bottom to add more cards. These cards, that are contained within a list can be rearranged by simple drag and drop.

An action card within a list provides three functionalies:

- Edit: A card's content can be updated by clicking on it's icon, doing the changes and clicking anywhere out of the text box.
- Remove: A card can be removed by clicking on it's close/remove icon.
- Status: The status of a card can be toggled between complete and untouched.

## My Approach for development

- Folder Structure: The project has three main folders:

1. componenets folder - containing the React components
2. store folder - contains Redux-Toolkit files for slice and store.
3. utils - contains files for TypeScript interfaces, initaial state and utility functions.

I have used Redux-Toolkit for managing the application state.
The application state has two main portions, first the array of lists where every list in turn consists of an array of action cards.

I have handled all the operations mentioned in the assignment by writing it's corresponding state logic in the `applicationSlice.ts` file.

For rearranging cards, I have used the `dnd-kit` packages.
