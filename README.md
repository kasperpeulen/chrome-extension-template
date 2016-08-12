# chrome-extension-template

This is a template made for myself, but feel free to fork it if you like.

Installation:

```bash
git clone https://github.com/kasperpeulen/chrome-extension-template my-fancy-app
cd my-fancy-app
rm -rf .git
git init
npm install
npm start
  
# Now go to chrome://extensions and click Load unpacked extension
# Load ".../my-fancy-app/build"
```

Features:

* Follows the same conventions as `create-react-app` (this repo is an eject).
* Automatic refreshes webpage where extension is active on save (hot reload with css changes)
* React/Redux boilerplate
* Flow support
* SCSS support
* Uses classes for actions using `redux-support-action-class`
* Redux Devtool support is included

But yeah, this is just to get people started, please fork it and make your own version :)
