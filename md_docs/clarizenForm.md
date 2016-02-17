## Classes

<dl>
<dt><a href="#ClarizenForm">ClarizenForm</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#ClarizenFormLightBox">ClarizenFormLightBox</a> : <code>object</code></dt>
<dd><p>ClarizenForm Light box static methods.</p>
</dd>
<dt><a href="#app">app</a> : <code>object</code></dt>
<dd><p>Function that is called during the head element to load the required
 <a href="#ClarizenForm">ClarizenForm</a> values onto disk (sessionStorage) and perform the required
 methods in <a href="ClarizenForm.main">ClarizenForm.main</a></p>
</dd>
<dt><a href="#submit">submit</a> : <code>object</code></dt>
<dd><p>Function that is called when the submit button on the clarizenForm.html
 is pressed.</p>
</dd>
</dl>

<a name="ClarizenForm"></a>
## ClarizenForm
**Kind**: global class  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Clarizen | <code>Clarizen</code> | implementation -   [Clarizen](Clarizen) object that chats to the REST API provided by Clarizen. |


* [ClarizenForm](#ClarizenForm)
    * [new ClarizenForm()](#new_ClarizenForm_new)
    * [.setHtml({@link)](#ClarizenForm+setHtml)
    * [.submitForm()](#ClarizenForm+submitForm)
    * [.main()](#ClarizenForm+main)
    * [.updateClarizen()](#ClarizenForm+updateClarizen)
    * [.persistClarizen()](#ClarizenForm+persistClarizen)
    * [.storageAvailable()](#ClarizenForm+storageAvailable)

<a name="new_ClarizenForm_new"></a>
### new ClarizenForm()
Library that creates Javascript objects and methods to interact with a

<a name="ClarizenForm+setHtml"></a>
### clarizenForm.setHtml({@link)
Method to setup any HTML elements values - for example Picklist options. It works

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  

| Param | Description |
| --- | --- |
| {@link | Clarizen} params - Clarizen object. |

<a name="ClarizenForm+submitForm"></a>
### clarizenForm.submitForm()
This method has been designed to be wired into a onClick event 

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+main"></a>
### clarizenForm.main()
This is the main function of the ClarizenForm object. Here you can customize

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+updateClarizen"></a>
### clarizenForm.updateClarizen()
An internal method used to update ClarizenForm's internal [Clarizen](Clarizen) object from

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+persistClarizen"></a>
### clarizenForm.persistClarizen()
[Clarizen](Clarizen) object internal to [ClarizenForm](#ClarizenForm) is persisted in sessionStorage.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
**Todo:**: Need to stop [ClarizenForm](#ClarizenForm) from running its internal [Clarizen](Clarizen) methods like [Clarizen.login](Clarizen.login)  
<a name="ClarizenForm+storageAvailable"></a>
### clarizenForm.storageAvailable()
Function to check to see if localStorage/sessionStorage is available

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
**Link**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API  
**Author:** - Mozilla  
<a name="ClarizenFormLightBox"></a>
## ClarizenFormLightBox : <code>object</code>
ClarizenForm Light box static methods.

**Kind**: global namespace  

* [ClarizenFormLightBox](#ClarizenFormLightBox) : <code>object</code>
    * [.close()](#ClarizenFormLightBox.close)
    * [.popOut(response)](#ClarizenFormLightBox.popOut)

<a name="ClarizenFormLightBox.close"></a>
### ClarizenFormLightBox.close()
Closes the Lightbox popout with clicked.

**Kind**: static method of <code>[ClarizenFormLightBox](#ClarizenFormLightBox)</code>  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
<a name="ClarizenFormLightBox.popOut"></a>
### ClarizenFormLightBox.popOut(response)
Pop's out a Lightbox modal dialogue.

**Kind**: static method of <code>[ClarizenFormLightBox](#ClarizenFormLightBox)</code>  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>string</code> | This should be a JSON response that needs converting back to an Object. Usually this will be the data displayed. |

<a name="app"></a>
## app : <code>object</code>
Function that is called during the head element to load the required

**Kind**: global namespace  
<a name="submit"></a>
## submit : <code>object</code>
Function that is called when the submit button on the clarizenForm.html

**Kind**: global namespace  