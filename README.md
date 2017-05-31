Lingviny mobile application

Tech stack:
    React Native, MobX, Flow.
    
Prepare to start:

    $ git clone git@gitlab.com:s-pro/Lingviny/mobile-app.git
    $ cd mobile-app

Development:

    $ yarn install
    $ npm start

Project rules

Flag code:

```
//@ TODO: { programmer }:{ comment }.

//@ NOTE: { programmer }:{ comment }.
```

ESLinter:

ESLint run to check before push origin:

    $ node_modules/.bin/eslint {folder/file to check}.

ESlint ignore line:
```
// eslint-disable-line
```

ESLint ignore block:

```
/* eslint-disable */
{ code }
/* eslint-enable */
```

Branches:
```
Name: { type }/{ jira-task-number }/{ jura-task-description }.

Commit: { jira-task-number }/{ commit-description }.
```