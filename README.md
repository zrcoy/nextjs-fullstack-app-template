<!-- TOC ignore:true -->

# Setup Next project with TS, ES-lint, Engine-locking, Commit-lint, Storybook, Husky, Prettier, Component Template, Layouts

<!-- TOC ignore:true -->

## Table of contents

<!-- TOC -->

- [Setup Next project with TS, ES-lint, Engine-locking, Commit-lint, Storybook, Husky, Prettier, Component Template, Layouts](#setup-next-project-with-ts-es-lint-engine-locking-commit-lint-storybook-husky-prettier-component-template-layouts)
  - [Table of contents](#table-of-contents)
    - [Clone:](#clone)
    - [Install NVM](#install-nvm)
    - [Node](#node)
    - [Engine Locking](#engine-locking)
    - [Dependencies](#dependencies)
    - [Commit-Lint](#commit-lint)
    - [Husky](#husky)
    - [Storybook](#storybook)
    - [Component Template](#component-template)
    - [Prettier, VSCode Settings](#prettier-vscode-settings)
    - [ESLint](#eslint)
    - [Layouts](#layouts)
    - [Commands](#commands)
    - [Deployment](#deployment)

<!-- TOC -->

### Clone:

- Clone the template project: `git clone <git repo url>` .

<br /><br />

### Install NVM

1. Run the nvm installer via the terminal: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`.

2. Add the following to ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc, depending what is your preferred terminal.

- The following will provide.

- nvm auto load when you open a terminal.

- node auto switch to a specific version if .nvmrc is present inside a directory you currently in.

```bash



### load nvm



function  load-nvm {



export NVM_DIR="$HOME/.nvm"



[ -s "$NVM_DIR/nvm.sh" ] && \.  "$NVM_DIR/nvm.sh"  # This loads nvm



[ -s "$NVM_DIR/bash_completion" ] && \.  "$NVM_DIR/bash_completion"  # This loads nvm bash_completion



}





#nvm



load-nvm





#



# Run 'nvm use' automatically every time there's



# a .nvmrc file in the directory. Also, revert to default



# version when entering a directory without .nvmrc



#





enter_directory() {



if [[ $PWD == $PREV_PWD ]]; then



return



fi





PREV_PWD=$PWD



if [[ -f ".nvmrc" ]]; then



local nvmrc_node_version=$(nvm version "$(cat .nvmrc)")



if [ "$nvmrc_node_version"  = "N/A" ]; then



nvm install



elif [ "$nvmrc_node_version"  != "$(nvm version)" ]; then



nvm use



fi



NVM_DIRTY=true



elif [[ $NVM_DIRTY =  true ]]; then



nvm use  default



NVM_DIRTY=false



fi



}





export PROMPT_COMMAND=enter_directory



```

3. Reload the terminal.

4. cd into the project directory and run `nvm use` in your terminal.

- If you getting the following error:

```



N/A: version "18.14.0 -> N/A" is not yet installed.





You need to run "nvm install 18.14.0" to install it before using it.



```

please run `nvm install 18.14.0` and confirm with `node --version` that the correct node version was loaded.

<br /><br />

### Node

- Check current used node version in **"/.nvmrc"** file and install the node with the version showed on the file: `nvm install <version number>`.

<br /><br />

### Engine Locking

- Engine is set to be strict in this template project, check **"package.json"** file's **"engines"** property for more details.

For example: `"engines": { "node": ">=18.0.0", "yarn": ">=1.22.0", "npm": "please-use-yarn" }` means we are strictly use yarn not npm through the whole project and node version need to larger than or equal to 18.0.0, yarn version must larger than or equal to 1.22.0.

<br /><br />

### Dependencies

- Make sure meeting prerequisites(node, yarn, etc...) and type command in terminal to install dependencies: `yarn install`.

<br /><br />

### Commit-Lint

- The template was setup with some rules with **commit-lint** when we are committing, only valid committed message would be committed successfully.

- To begin a commit, type command in terminal: `yarn commit`.

- Some command line hints will show up.

- First input **type** of commit, which holds information about the goal of a change. **Required**. Available type could be found within the comments at the top of **commitlint.config.js** file, which is based on Angular's official docs recommendation.

  - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
  - **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  - **docs**: Documentation only changes
  - **feat**: A new feature
  - **fix**: A bug fix
  - **perf**: A code change that improves performance
  - **refactor**: A code change that neither fixes a bug nor adds a feature
  - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  - **test**: Adding missing tests or correcting existing tests to be deleted: test for commit lint

- Then input **scope**, which marks which sub-component of the project is affected. **Optional**.

- Then input **subject**, which is short, high-level description of the change. **Required**.

- Then input **body**, which holds additional information about the change. **Optional**.

- Lastly input **footer**, which hods further meta data, such as breaking changes and issue ids. **Optional**.

<br /><br />

### Husky

- Before committing, husky will automatically validate `next lint`. Settings could be edited at **.husky/pre-commit**

- Before pushing, husky will automatically validate `next build`. Settings could be edited at **.husky/pre-push**

<br /><br />

### Storybook

- This template is setup by ready-to-use configuration for storybook using **webpack5**. Take a look at the references from **src/stories** or go through their official site [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction).

- To use it, simply paste and replace the neccessary variables in the base component **src/components/base**, which contains **BaseTemplate.stories.tsx**.

- Host port: **localhost:6006**

<br /><br />

### Component Template

- Component template resides in **src/templates/base**. Please paste and edit the whole base folder to create new component.

- Component template folder structure:

  - **BaseTemplate.mocks.ts**: mock data for stories.
  - **BaseTemplate.module.css**: css module for this component.
  - **BaseTemplate.stories.tsx**: storybook for this component.
  - **BaseTemplate.tsx:** the component self.

- Take a look at an example CatCard component which generated from the BaseTemplate component. CatCard component resides in **src/components/cards/cat**.

<br /><br />

### Prettier, VSCode Settings

- To maintain the consistency, the template has some settings for prettier which could be found at **.prettierrc** and some settings for vscode editor **.vscode**.

<br /><br />

### ESLint

- Settings resides in **.eslintrc.json** file.

- Note currently have one rule for not throwing warnings if there's an unused variable prefix with `_`. It's useful when the developer is sure the variable is for future use.

- There's no need for `import React from 'react'` any more.

<br /><br />

### Layouts

- Layout provides some benefits not only be better for maintenance but also no need to re-render the layout when switching between the page.

- To create a component using layout:

- Derived from `NextPageWithLayout`.

- Utilize the layout look by overwriting `getLayout()` function.

- Example page cound be found at _about_ page: **src/pages/about.tsx** or _home_ page: **src/pages/index.tsx**.

<br /><br />

### Commands

- "**yarn dev**": "cross-env NODE_OPTIONS='--inspect' next dev",
- "**yarn build**": "next build",
- "**yarn start**": "next start",
- "**yarn lint**": "next lint",
- "**yarn prettier**": "prettier --write .",
- "**yarn prepare**": "husky install",
- "**yarn commit**": "commit",
- "**yarn storybook**": "start-storybook -p 6006",
- "**yarn build-storybook**": "build-storybook"

<br /><br />

### Deployment

- The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<br /><br />
