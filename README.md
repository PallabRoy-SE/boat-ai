# Boat AI [Demo](https://boat-ai.vercel.app/)

An application where the user can chat with an AI like model. Beyond
this, the user should be able to give some feedback at each stage of the conversation.

# Features

- User can like/dislike the AI model's answer using the up/down thumbs buttons. These buttons are hidden and float when the mouse
  hovers over the AI model's response.
- User can give a rating out of 5 at the end of the conversation.
- User can give subjective feedback at the end of the conversation.
- User can have multiple such conversations.
- Once user is done having that conversation, the chat gets saved. This chat can be
  revisited from a panel on the side/top bar. While viewing a past conversation, User
  can see the feedback provided.
- User can see all feedback points across conversations and filter them based on rating.

# Project Setup

## Available Scripts

In the project root directory, you can run:

### `npm install`

Install necessary dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This project was deployed in vercel [Take a look](https://boat-ai.vercel.app/)

### Choices

- I chose this UI similar to ChatGPT, to make it more user friendly. As we all use ChatGPT, so it will be easy to interact with.
- For now I am using a JSON file to reply on questions apart from an AI model, because I have to learn ML/AI first to integrate this UI with an AI model.
- In future, I will integrate an AI model to this UI for make it more realistic.
