Simple Share plugin for Cordova
===============================

Cordova Plugin to open native "share" popup in Android and iOS for sending simple data to other apps

### Installation

```
cordova plugins add cordova-plugin-simpleshare
```

### Usage

```javascript
navigator.share(text, title, mimeType)
```

* text: Text to share, e.g. "Incredible plugin"
* title: Title of popup, e.g. "Share this quote" (android only, default: "Share")
* mimeType: MIME type, e.g. "image/jpeg" (android only, default: "plain/text")

### More info

* Based on Cordova plugin by [Mark Marijnssen](https://github.com/markmarijnissen/cordova-plugin-share)
* iOS share code from [stack overflow](http://stackoverflow.com/questions/12546574/using-apple-icons-with-ios-6)
* Android share code from [here](http://developer.android.com/training/sharing/send.html); read if you want to understand `mimeType` options

### License

MIT license
