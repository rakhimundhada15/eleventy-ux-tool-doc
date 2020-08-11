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