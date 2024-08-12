8.2. Vue CLI

The CLI is now in maintenance mode, and the recommended tool is Vite, that we
present below. As a lot of existing projects use the CLI, we still think it’s worth
introducing, and it can help to grasp the differences with Vite.

The Vue CLI (Command Line Interface) was born to help developers build Vue applications. It can scaffold an application and build it, and offers a large ecosystem of plugins. Each plugin offers some kind of features, like unit testing or linting or TypeScript support. It also offers a graphical user interface!

One of the cool features of the CLI is the ability to develop each component in a dedicated file, with a .vue extension. In this file you can define everything related to this component: its
JavaScript/TypeScript definition, its HTML template, and even its CSS styles. This is called a Single File Component, or SFC.

The CLI is overall super handy to avoid having to learn and configure all the underlying tools
(Node.js, NPM, Webpack, TypeScript, etc…). It is still very flexible, and you can configure most
behaviors. 

But the CLI is now in maintenance mode, and Vite is the recommended alternative. Let’s talk about the underlying reasons.