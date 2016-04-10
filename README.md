Component Tab
-----------

## Docs

A simple tab component which used to describe the OO practice of JavaScript.

## Usage

The usage of tab-component is very easy,
just `new Tab(config)`, and pass the config object you want to set.

```javascript
var tabs = document.getElementsByClassName('tab');
new Tab({
  root: tabs[0]
});
```

## Config

The available config object is here

name | type | desc
-----|------|------
root | node | the dom node