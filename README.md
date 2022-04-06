# content-size

> get available width and height of html element

## What's it?

We have many ways to get width and height for one element.

Usually we use clientWidth,clientHeight get the full size of element.

But cause of css box model,the element's size contains

borderWidth,paddding and content size.

for example,

clientWidth = borderLeftWidth + borderRightWidth + paddingLeft + paddingRight + contentWidth

Actually,we just care about the contentWidth.

So that is this cute tools what to do.

### getContentSize(el: HTMLElement):{width:number,height:number}

### getStyle(el: HTMLElement, pseudoElt: string | null = null): (name: string) => string