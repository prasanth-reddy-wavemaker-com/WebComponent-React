# WebComponent-React
Sample WebComponent/CustomElement wrapper for React Components

# Start
* Clone the repository
* Run `npm install` to get the dependencies
* Source code is part of `src` folder.
* The project uses OMDN API to fetch posters. Please get an API key from [OMDB](http://www.omdbapi.com/).
* Update the API key in [`src/react-poster-widget.js`](./src/react-poster-widget.js)

# Preview
* Run `npm run serve` to generate the local url for preview

# Build
* Run `npm run build` to build the babel transpiled output.
* Post build, output files will be generated in the `lib` folder.
* React Component code will be in  `lib/react-poster-widget.min.js`
* WebComponent/Custom Element Wrapper will be in `lib/react-poster-custom-element-wrapper.min.js`.
* Use the above two files in your HTML to consume.

