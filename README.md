## Prerequisites
1. Node 8.x.x or higher.

## Getting Started

### 1. Clone this Repository

```
git clone https://github.com/rakhimundhada15/eleventy-ux-tool-doc.git eleventy-ux-tool
```


### 2. Navigate to the directory 

```
cd eleventy-ux-tool
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```


### 4. Run Eleventy

```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

### Implementation Notes

* This example uses three layouts:
  * `_includes/layouts/layout.njk`: the topbar and side left panel HTML structure
  * `_includes/layouts/usage-layout.njk`: the usage page template having top search and tab panel (wrapped into `layout.njk`)

* Content can be any template format. Configure your supported templates in `.eleventy.js` -> `templateFormats`.
	* Because `css` and `png` are listed in `templateFormats` but are not supported template types, any files with these extensions will be copied without modification to the output (while keeping the same directory structure).
*  `JS`,`css` and `images` folder should added under `assests` folder which get directly copied in build folder.

* `_data/usage.json`: The `usage-sample.md` template and `usage-layout.njk` are good example of using a global data files in that it uses _data/usage.json.

* `doc/` : Add all template inside this and add tags in template or json file to add this in collections.


### Configuration to deploy on github pages

* Go to your repository and then go to your project. 
* To begin setting up our site, you have to open the Settings tab
* If you scroll down on the settings page, you’ll see the GitHub Pages section near the bottom. Select the branch from Source dropdown and click the save button.
 * Now you can able to see `your site is ready to publish at "https://yourGitHubName.github.io/theRepoName" `. Website’s files will live in a repository named username.github.io (where “username” is your actual GitHub user name).

1. Go back in your terminal, install the gh-pages package: 
```
npm install gh-pages --save-dev
```
2. add this item to package.json:

```
scripts {
     "deploy":"gh-pages -d dist"
}

"homepage": "https://rakhimundhada15.github.io/eleventy-ux-tool-doc/" -use you own url from github  "https://yourGitHubName.github.io/theRepoName"
```

* This allows us to use the command `npm run deploy` to push to our gh-pages branch from our `dist` directory (which is effectively the build/dist), and, if our account is already mapped to a custom domain, add the repo name to the url so we still land on the correct index.html.

3. Add this to .eleventy.js:
```
return {
    pathPrefix: "/eleventy-ux-tool-doc/" - change as per our project homePage
}
```
* We're aiming to publish to a sub-directory, this enables the use of Eleventy's built-in URL filter to prefix all urls with this path

4. Use url pipe . `| ` is the nunjucks pipe operator (this is also built-in to eleventy) and says to use the `url` filter on the string to the left of the pipe

```
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | url }}">
```

* And finally, run `npm run build` if you haven't already since your last edits (you can add the --serve if you want to see it live) to generate the dist directory, and then run `npm run deploy`. The page is ready to go at "https://yourGitHubName.github.io/theRepoName"