# dumi-monorepo

A static site base on [dumi](https://d.umijs.org).

## Development

```bash
# install dependencies
$ pnpm install

# start dev server
$ pnpm start

# build docs
$ pnpm run build
```

## LICENSE

MIT

```
dumi-static
├─ .dumi
│  └─ tmp
│     ├─ core
│     │  ├─ EmptyRoute.tsx
│     │  ├─ defineApp.ts
│     │  ├─ history.ts
│     │  ├─ historyIntelli.ts
│     │  ├─ plugin.ts
│     │  ├─ pluginConfig.d.ts
│     │  ├─ polyfill.ts
│     │  ├─ route.tsx
│     │  └─ terminal.ts
│     ├─ dumi
│     │  ├─ exports.ts
│     │  ├─ locales
│     │  │  ├─ config.ts
│     │  │  └─ runtime.tsx
│     │  ├─ meta
│     │  │  ├─ atoms.ts
│     │  │  ├─ index.ts
│     │  │  ├─ runtime.ts
│     │  │  └─ tabs.ts
│     │  └─ theme
│     │     ├─ ContextWrapper.tsx
│     │     ├─ builtins
│     │     │  ├─ API.ts
│     │     │  ├─ Badge.ts
│     │     │  ├─ Container.ts
│     │     │  ├─ Previewer.ts
│     │     │  ├─ SourceCode.ts
│     │     │  └─ Table.ts
│     │     ├─ layouts
│     │     │  └─ DocLayout.ts
│     │     └─ slots
│     │        ├─ ColorSwitch.ts
│     │        ├─ Content.ts
│     │        ├─ ContentTabs.ts
│     │        ├─ Features.ts
│     │        ├─ Footer.ts
│     │        ├─ HeadeExtra.ts
│     │        ├─ Header.ts
│     │        ├─ Hero.ts
│     │        ├─ HeroTitle.ts
│     │        ├─ LangSwitch.ts
│     │        ├─ Logo.ts
│     │        ├─ Navbar.ts
│     │        ├─ NavbarExtra.ts
│     │        ├─ NotFound.ts
│     │        ├─ PreviewerActions.ts
│     │        ├─ PreviewerActionsExtra.ts
│     │        ├─ RtlSwitch.ts
│     │        ├─ SearchBar.ts
│     │        ├─ SearchResult.ts
│     │        ├─ Sidebar.ts
│     │        ├─ SocialIcon.ts
│     │        └─ Toc.ts
│     ├─ exports.ts
│     ├─ testBrowser.tsx
│     └─ umi.ts
├─ .dumirc.ts
├─ .editorconfig
├─ .gitignore
├─ .husky
│  ├─ commit-msg
│  └─ pre-commit
├─ .prettierignore
├─ .prettierrc.js
├─ LICENSE
├─ README.md
├─ docs
│  ├─ guide.md
│  └─ index.md
├─ package.json
├─ pnpm-lock.yaml
└─ tsconfig.json

```