## Classes

<dl>
<dt><a href="#Clarizen">Clarizen</a></dt>
<dd></dd>
<dt><a href="#ClarizenUser">ClarizenUser</a></dt>
<dd></dd>
<dt><a href="#ClarizenCreateAndReceive">ClarizenCreateAndReceive</a></dt>
<dd></dd>
<dt><a href="#ClarizenForm">ClarizenForm</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#ClarizenConstants">ClarizenConstants</a> : <code>object</code></dt>
<dd><p>Clarizen constants used in the Clarizen library.</p>
</dd>
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

<a name="Clarizen"></a>
## Clarizen
**Kind**: global class  
**Todo**

- [ ] add all comments for JSDoc-To-MD conversion


* [Clarizen](#Clarizen)
    * [new Clarizen(userName, password, applicationId, [optionalServerLocation], [optionalBaseUrl])](#new_Clarizen_new)
    * [.isLoggedIn()](#Clarizen+isLoggedIn) ⇒ <code>Boolean</code>
    * [.convertToObject(json, fireEvent)](#Clarizen+convertToObject) ⇒ <code>Object</code>
    * [.validateMethod(method)](#Clarizen+validateMethod) ⇒ <code>Boolean</code>
    * [.request(options)](#Clarizen+request) ⇒ <code>Object</code>
    * [.getPickList(response)](#Clarizen+getPickList)
    * [.getSessionId(response)](#Clarizen+getSessionId)
    * [.getServerLocation(response)](#Clarizen+getServerLocation)
    * [.getAllEntities(callback)](#Clarizen+getAllEntities) ⇒ <code>string</code>
    * [.login()](#Clarizen+login)
    * [.htmlAttachToPickList(params)](#Clarizen+htmlAttachToPickList)

<a name="new_Clarizen_new"></a>
### new Clarizen(userName, password, applicationId, [optionalServerLocation], [optionalBaseUrl])
Clarizen REST library itself. Currently this supports version2 only of the REST API.


| Param | Type | Description |
| --- | --- | --- |
| userName | <code>string</code> | username to log into the Clarizen API. |
| password | <code>string</code> | password to log into the Clarizen API. |
| applicationId | <code>string</code> | identification that is logged with Clarizen when using the API. |
| [optionalServerLocation] | <code>string</code> | If you know the location URL of the server to chat to. |
| [optionalBaseUrl] | <code>string</code> | Override the {@linkcode ClarizenConstants.Urls~baseURL} |

<a name="Clarizen+isLoggedIn"></a>
### clarizen.isLoggedIn() ⇒ <code>Boolean</code>
This method will validate if the Clarizen client has managed to loginusing the credentials provided and obtained the sessionId key, that is tobe used in all future requests (during the objects lifetime)

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: <code>Boolean</code> - true if the session is logged in, false if the session is not logged in.  
<a name="Clarizen+convertToObject"></a>
### clarizen.convertToObject(json, fireEvent) ⇒ <code>Object</code>
This internal method will convert the json response to a json object.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: <code>Object</code> - JSON is converted to an Object.  
**Emits**: <code>event:jsonResponseConverted</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>string</code> | JSON string. |
| fireEvent | <code>Boolean</code> | true: fire event 'jsonResponseConverted' |

<a name="Clarizen+validateMethod"></a>
### clarizen.validateMethod(method) ⇒ <code>Boolean</code>
This internal method will validate the HTTP method, to make sure we only send for method types Clarizen supports.Currently the methods supported are:-GET-POST-HEAD

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: <code>Boolean</code> - - true: supported, false: not supported.  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | HTTP method name |

<a name="Clarizen+request"></a>
### clarizen.request(options) ⇒ <code>Object</code>
The most important internal method of the library. This method creates the HTTP request that is sent to Clarizen. This method hanldes CORSas well for Cross-Domain security issues.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: <code>Object</code> - -  response from HTTP request  
**Throws**:

- <code>Error</code> -  url parameter is missing.
- <code>Error</code> -  callback is defined but is not a function.
- <code>Error</code> -  method passed has failed validation


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | This parameter should have a collection of properties. |
| options.url | <code>Url</code> | The url of the Clarizen API to talk to. |
| [options.callback] | <code>function</code> | The function to call when the response has been received. Defaults to [clarizen.convertToObject](clarizen.convertToObject) |
| [options.method] | <code>String</code> | The method to use when creating the request. Defaults to GET. |
| [options.body] | <code>Object</code> &#124; <code>JSON</code> | If the Clarizen API requires a JSON payload, then this is the parameter to pass it to. |

<a name="Clarizen+getPickList"></a>
### clarizen.getPickList(response)
An internal method that gets the Pick List data for <select> tags and publishes the relevantevent and passes the data to the relevant method to be used.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Emits**: <code>dataForElement&lt;entityDescription&gt; - the entityDescription will be the Clarizen Field name,event: which should be included as the &lt;select&gt; tags ID value.</code>  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | JSON object returned from [clarizen.request](clarizen.request) |

<a name="Clarizen+getSessionId"></a>
### clarizen.getSessionId(response)
Internal method which checks that the response returned from [clarizen.login](clarizen.login) contains the sessionIdneeded for any other request.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Throws**:

- <code>Error</code> -   No API sessionId returned.

**Emits**: <code>event:loggedIn          -   When a sessionId is successfully received.</code>  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | JSON object returned from [clarizen.request](clarizen.request) |

<a name="Clarizen+getServerLocation"></a>
### clarizen.getServerLocation(response)
Internal method used as part of the login process. This method is called to get the Server Location, which is then used to obtain the sessionId.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | JSON object returned from [clarizen.request](clarizen.request) |

<a name="Clarizen+getAllEntities"></a>
### clarizen.getAllEntities(callback) ⇒ <code>string</code>
Returns the list of available Entities for the users instance of Clarizen.

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: <code>string</code> - JSON string response back of available entities if a callback isnt given. Will need to be converted to zn object.  
**Throws**:

- <code>Error</code> if callback parameter is empty or not a defined function or not logged in.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | callback function that is run once the request has been run and received. |

<a name="Clarizen+login"></a>
### clarizen.login()
Logs in to the Clarizen REST API. You can test when the login is succesful by checking the {@linkcode Clarizen.isLoggedIn} method

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Emits**: <code>event:loggedIn</code>  
<a name="Clarizen+htmlAttachToPickList"></a>
### clarizen.htmlAttachToPickList(params)
Callback method that attachs <option> tags from Clarizen data, to registered ID's

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Collection of parameters. |
| params.elementName | <code>string</code> | Element ID. |
| params.values[ | <code>Array.&lt;string&gt;</code> | Collection of values. |

<a name="ClarizenUser"></a>
## ClarizenUser
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userName | <code>string</code> | [Clarizen](#Clarizen) credentials. |
| password | <code>string</code> | [Clarizen](#Clarizen) credentials. |

<a name="new_ClarizenUser_new"></a>
### new ClarizenUser()
Object that represents a ClarizenUser

<a name="ClarizenCreateAndReceive"></a>
## ClarizenCreateAndReceive
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| userName | <code>string</code> | [Clarizen](#Clarizen) credentials. |
| password | <code>string</code> | [Clarizen](#Clarizen) credentials. |

<a name="new_ClarizenCreateAndReceive_new"></a>
### new ClarizenCreateAndReceive()
Object that represents a entity that is sent in the createAndReceive
method in [Clarizen](#Clarizen) library.

<a name="ClarizenForm"></a>
## ClarizenForm
**Kind**: global class  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Clarizen | <code>[Clarizen](#Clarizen)</code> | implementation -   [Clarizen](#Clarizen) object that chats to the REST API provided by Clarizen. |


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
Library that creates Javascript objects and methods to interact with aHTML Form that uses ID's/Classes needed to GET/POST data to the ClarizenREST API. These have extensible methods, designed to be developed for individual needs.

<a name="ClarizenForm+setHtml"></a>
### clarizenForm.setHtml({@link)
Method to setup any HTML elements values - for example Picklist options. It worksby setting up the HTML elements ID's as name of the Clarizen API names. These will besent across using [Clarizen](#Clarizen) library. Any values found can be used.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  

| Param | Description |
| --- | --- |
| {@link | Clarizen} params - Clarizen object. |

<a name="ClarizenForm+submitForm"></a>
### clarizenForm.submitForm()
This method has been designed to be wired into a onClick event on a button on the form. When fired submitForm will iterate throughall the DOM elements linked to ID "clarizen-form" and POST themto the Clarizen API as INSERTs.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+main"></a>
### clarizenForm.main()
This is the main function of the ClarizenForm object. Here you can customizeand subscribe to [Clarizen](#Clarizen) events. In addition logging into the API using [Clarizen.login](Clarizen.login)is a good idea.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+updateClarizen"></a>
### clarizenForm.updateClarizen()
An internal method used to update ClarizenForm's internal [Clarizen](#Clarizen) object frompersisted sessionStorage.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+persistClarizen"></a>
### clarizenForm.persistClarizen()
[Clarizen](#Clarizen) object internal to [ClarizenForm](#ClarizenForm) is persisted in sessionStorage.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
**Todo:**: Need to stop [ClarizenForm](#ClarizenForm) from running its internal [Clarizen](#Clarizen) methods like [Clarizen.login](Clarizen.login)  
<a name="ClarizenForm+storageAvailable"></a>
### clarizenForm.storageAvailable()
Function to check to see if localStorage/sessionStorage is available

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
**Link**: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API  
**Author:** - Mozilla  
<a name="ClarizenConstants"></a>
## ClarizenConstants : <code>object</code>
Clarizen constants used in the Clarizen library.

**Kind**: global namespace  

* [ClarizenConstants](#ClarizenConstants) : <code>object</code>
    * [.Urls](#ClarizenConstants.Urls) : <code>object</code>
    * [.EntityTypes](#ClarizenConstants.EntityTypes) : <code>object</code>

<a name="ClarizenConstants.Urls"></a>
### ClarizenConstants.Urls : <code>object</code>
constant URLs used as the base within {@linkcode Clarizen}

**Kind**: static namespace of <code>[ClarizenConstants](#ClarizenConstants)</code>  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| baseURL | <code>url</code> | baseURL that is used to login and locate the correct server to use. |
| getServerDefinition | <code>string</code> | contains part of the URI used to get the Server Definition. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/authentication/GetServerDefinition) |
| login | <code>string</code> | contains part of the URI used to login to the API. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/authentication/Login) |
| metadataDescribe* | <code>string</code> | There are 3 URIs here, one for Entities and another for Metadata of the Entities. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/#Metadata) |
| createAndRetrieve | <code>string</code> | access to the API method that allows a Entity to be created on Clarizen and fields returned. |

<a name="ClarizenConstants.EntityTypes"></a>
### ClarizenConstants.EntityTypes : <code>object</code>
constant Entity Types for the Super/Sub Classes within {@linkcode Clarizen}.

**Kind**: static namespace of <code>[ClarizenConstants](#ClarizenConstants)</code>  
**Todo:**: Expand to inlcude them all. Only working on Cases at the moment so selfishly only added those.  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Cases | <code>Enum</code> | Case Super Class. |
| Issue | <code>Enum</code> | Issues subclass (of Case). |
| Request | <code>Enum</code> | EnchancementRequest subclass (of Case). |
| Risk | <code>Enum</code> | Risk subclass (of Case). |

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
Pop's out a Lightbox modal dialogue.NOTE TO DEVELOPERS: Please do extend this method to create custom popouts.

**Kind**: static method of <code>[ClarizenFormLightBox](#ClarizenFormLightBox)</code>  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>string</code> | This should be a JSON response that needs converting back to an Object. Usually this will be the data displayed. |

<a name="app"></a>
## app : <code>object</code>
Function that is called during the head element to load the required [ClarizenForm](#ClarizenForm) values onto disk (sessionStorage) and perform the required methods in [ClarizenForm.main](ClarizenForm.main)

**Kind**: global namespace  
<a name="submit"></a>
## submit : <code>object</code>
Function that is called when the submit button on the clarizenForm.html is pressed.

**Kind**: global namespace  
