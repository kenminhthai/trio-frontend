# Trio Frontend

[![Build status](https://badge.buildkite.com/b67fc8b1373e14f69cd7550538e5ae4df56a26a34a49456ac5.svg)](https://buildkite.com/marvellous-mutants/trio-frontend)

This is the React frontend application of https://duolingoclubs.com and serves
as an interface for users to discover and share their Duolingo clubs

The backend application is an Elixir umbrella application which can be [found here](https://github.com/lukerollans/trio)

## Introduction
The first thing to consider is that this application was bootsrapped with 
[Create React App](https://github.com/facebookincubator/create-react-app) and 
therefore retains all functionality provided by Create React App.

## Development
Getting up and running with a development copy is extremely easy, as is also
true for really any standalone React application.

```
# Clone the repository
git clone git@github.com:lukerollans/trio-frontend.git
cd trio-frontend

# Install yarn if you haven't already
npm install -g yarn

# Install dependencies via yarn
yarn

# Start the development server
yarn start
```

That's it! You're up and running. Thanks to Create React App, your browser window
will automatically refresh whenever you make any changes amongst a bunch of
other goodies.

## Testing
It's imperative that you write tests to cover any code you introduce or modify.
If you aren't familiar with [Jest](http://facebook.github.io/jest/) or [Enzyme](http://airbnb.io/enzyme/index.html), 
go and have a read.

To test the application and any of your changes, simply run the below command.
By default, Jest will enter watch mode.
```
yarn test
```

## Production
Production is not yet setup, but will be located at an S3 bucket

## Staging
When new code is pushed or merged in to `develop`, the application is 
automatically staged on Amazon AWS S3 via Buildkite. [You can find it here](http://trio-frontend-staging.s3-website-ap-southeast-2.amazonaws.com)
