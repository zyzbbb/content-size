type size = {width:number,height:number}

export function getStyle(el: HTMLElement, pseudoElt: string | null = null): (name: string) => string {
    if (!document.defaultView) {
        throw new Error("ERROR:no view found");
    }
    const style = document.defaultView.getComputedStyle(el, pseudoElt);
    return function (name: string): string {
        name = name.replace(/-(\w)/g, function (mch, letter) {
            return letter.toUpperCase();
        });
        return style.getPropertyValue(name);
    }
}

export function getContentSize(el:HTMLElement):size {
    const style = getStyle(el);
    const width = parseInt(style("width"));
    const height = parseInt(style("height"));
    const padding = parseInt(style("padding"));
    const paddingLeft = parseInt(style("padding-left"));
    const paddingRight = parseInt(style("padding-right"));
    const paddingTop = parseInt(style("padding-top"));
    const paddingBottom = parseInt(style("padding-bottom"));
    const borderWidth = parseInt(style("border-width"));
    const borderLeftWidth = parseInt(style("border-left-width"));
    const borderRightWidth = parseInt(style("border-right-width"));
    const borderTopWidth = parseInt(style("border-top-width"));
    const borderBottomWidth = parseInt(style("border-bottom-width"));
    return {
        width: width
            - (isNaN(paddingLeft) ? padding : paddingLeft)
            - (isNaN(paddingRight) ? padding : paddingRight)
            - (isNaN(borderLeftWidth) ? (isNaN(borderWidth) ? 0 : borderWidth / 2) : borderLeftWidth)
            - (isNaN(borderRightWidth) ? (isNaN(borderWidth) ? 0 : borderWidth / 2) : borderRightWidth),
        height: height
            - (isNaN(paddingTop) ? padding : paddingTop)
            - (isNaN(paddingBottom) ? padding : paddingBottom)
            - (isNaN(borderBottomWidth) ? (isNaN(borderWidth) ? 0 : borderWidth / 2) : borderBottomWidth)
            - (isNaN(borderTopWidth) ? (isNaN(borderWidth) ? 0 : borderTopWidth / 2) : borderTopWidth)
    }

}