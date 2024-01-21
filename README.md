# react-tuicss

This project is a reactjs component library based on [TuiCss](https://github.com/vinibiavatti1/TuiCss).

Note: A recent upgrade of vite means only node versions 18 or 20 are currently supported as per [this](https://vitejs.dev/guide/migration.html#node-js-support).

## Getting it

```sh
npm i react-tuicss
```

Then add styles as one of your first imports
```ts
import "react-tuicss/style.css"

// then import components like so...
import { TuiChart } from "react-tuicss" 
```

I've basically written this out of my own interest. Better docs will follow.

There were some additions made for accessibility reasons, to make the focus states a little better, which actually didn't exist for radio and checkbox components. I'm no designer so appreciate feedback on those.

I have many things I want to do with this, I will use this in my own project soon.

If you wish to contribute, that's good. If you have feature requests please raise issues and I will respond as time for hobby projects permits.

I will create a wiki or better docs eventually.

## Release process

- Get changes into master, PR preferred
- Pull latest master to local
- Manual check the commit messages since last release for type of version bump (may automate in future)
- Run command for type of bump, one of:
  - `npm run bump:patch`
  - `npm run bump:minor`
  - `npm run bump:major`
- Run `npm run release` (may automate in future)
- Create release in github UI and release
- See new release [here](https://www.npmjs.com/package/react-tuicss?activeTab=versions)
