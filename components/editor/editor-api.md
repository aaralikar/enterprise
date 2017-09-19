<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Editor](#editor)
    -   [switchToolbars](#switchtoolbars)
    -   [createURLModal](#createurlmodal)
    -   [createImageModal](#createimagemodal)
    -   [disable](#disable)
    -   [enable](#enable)
    -   [readonly](#readonly)
    -   [destroy](#destroy)
    -   [handleEvents](#handleevents)

## Editor

The Editor Component is displays and edits markdown.

**Parameters**

-   `element`  
-   `firstHeader` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Allows you to set if the first header inserted is a h3 or h4 element. You should set this to match the structure of the parent page for accessibility
-   `secondHeader` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**  -  Allows you to set if the second header inserted is a h3 or h4 element. You should set this to match the structure of the parent page for accessibility
-   `productName` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Additional product name information to display
-   `pasteAsPlainText` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  If true, when you paste into the editor the element will be unformatted to plain text.
-   `anchor` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Info object to populate the link dialog defaulting to `{url: 'http://www.example.com', class: 'hyperlink', target: 'New window', isClickable: false, showIsClickable: false},`
-   `image` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  -  Info object to populate the image dialog defaulting to `{url: 'http://lorempixel.com/output/cats-q-c-300-200-3.jpg'}`

### switchToolbars

Switch between source and editing toolbar.

### createURLModal

Function that creates the Url Modal Dialog. This can be customized by making a modal with ID `#editor-modal-url`

### createImageModal

Function that creates the Image Dialog. This can be customized by making a modal with ID `#editor-modal-image`

### disable

Disable the editable area.

### enable

Enable the editable area.

### readonly

Make the editable area readonly.

### destroy

Detach Events and tear back additions.

### handleEvents

This component fires the following events.

**Parameters**

-   `input` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  -  Fires after the value in the input is changed by user interaction.
-   `keydown` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  -  Fires after as keys are pressed.