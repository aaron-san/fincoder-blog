# Next Markdown Blog

Simple static blog using markdown and Next.js

[DEMO](https://next-markdown-blog-drab.vercel.app/)

## Usage

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for prod and export static website
npm run build
```

`npm install gh-pages`

In package.json, add:

"homepage": "https://aaron-san.github.io/<repository>"
"name": ...

"scripts": {
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
}

git checkout --orphan gh-pages
git reset
git commit --allow-empty -m "Initial commit"
git push --set-upstream origin gh-pages

---

`git add .`
`git commit -m "deploy website"`
`git push`

`npm run deploy`

<!-- git remote add origin https://github.com/aaron-san/fincoder-blog.git
git branch -M main
git push -u origin main -->

npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh-pages
