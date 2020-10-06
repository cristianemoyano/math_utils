This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Visit the site here: [Math Utils](https://cristianemoyano.github.io/math_utils/).

[![Build Status](https://travis-ci.com/cristianemoyano/math_utils.svg?branch=main)](https://travis-ci.com/cristianemoyano/math_utils)

## Overview

This is a web application created for academic purposes.

Subject: Programming II
University: Champagnat University
Authors:

- Cristian Moyano
- Franco Navarro
- Jeremias Etura

## Development Process

### Clone repository

```
git clone https://github.com/cristianemoyano/math_utils.git
cd math_utils
```

### How to add a new change

In the project directory, start creating a new branch for your change.

```
git pull
git checkout -b my-change-title
```

Once the changes are ready, commit and push them:

```
git add -p
git commit -m 'Your commit message'
git push origin my-change-title
```

Create a pull request for your changes on GitHub by visiting:

```
https://github.com/cristianemoyano/math_utils/pull/new/<your branch>
```

Wait for code review, and once the review is done, merge the code to the `main` branch.

Delete branch locally

```
git checkout main
git branch -d my-change-title
git pull
```

### Deploy changes

```
yarn predeploy
yarn deploy
```

### Continuous Integration Platform: Travis

```
https://travis-ci.com/github/cristianemoyano/math_utils
```

### Git releases (aka Tags)

List tags:

```
git tag
```

Commit a new tag:

```
git tag -a v1.0 -m "My version 1.0"
```

Push tag created:

```
git push origin v0.0.1

```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn predeploy`

The predeploy command helps to bundle the react app.

### `yarn deploy`

The deploy command fires up the bundled file against the Github Page.

### `yarn lint`

https://eslint.org/docs/user-guide/configuring.html#example-configuration

Check lint with ESLint rules. This lint run automatic the running of eslint before every GIT COMMIT command.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
