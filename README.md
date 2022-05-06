# content-size

## get avaliable width and height of html element

## What's it?

We have many ways to get width and height for one element.

Usually we use clientWidth,clientHeight get the full size of element.

But cause of css box model,the element's size contains

borderWidth,paddding and content size.


```
clientWidth = borderLeftWidth + borderRightWidth + paddingLeft + paddingRight + contentWidth
````
Actually,we just care about the contentWidth.

So that is this cute tools what to do.

## API

### getContentSize
```
const el = document.getElementById('app');
const rect = getContentSize(el);
console.log(rect);

// output
// {width:100,height:300}
```

### getStyle
```
const el = document.getElementById('app');
const style = getStyle(el);

// css width
const width = style('width');

// css background-color
const backgroundColor = style('background-color');

// pseudo element
const pseudoStyle = getStyle(el,':after');

// width
const width = pseudoStyle('width');
```