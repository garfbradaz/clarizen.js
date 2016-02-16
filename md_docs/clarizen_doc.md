## Classes

<dl>
<dt><a href="#Clarizen">Clarizen</a></dt>
<dd></dd>
<dt><a href="#ClarizenForm">ClarizenForm</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#ClarizenConstants">ClarizenConstants</a> : <code>object</code></dt>
<dd><p>Clarizen constants used in the Clarizen library.</p>
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
    * [.getAllEntities(callback)](#Clarizen+getAllEntities) ⇒ <code>string</code>
    * [.login()](#Clarizen+login)

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
<a name="ClarizenForm"></a>
## ClarizenForm
**Kind**: global class  
**Author:** Gareth Bradley [zimzum17_1998@hotmail.com]  
**Properties**

| Name | Description |
| --- | --- |
| {@linkcode | Clarizen}   Clarizen implementation -   Clarizen object that chats to the REST API provided by Clarizen. |


* [ClarizenForm](#ClarizenForm)
    * [new ClarizenForm()](#new_ClarizenForm_new)
    * [.submitForm()](#ClarizenForm+submitForm)
    * [.main()](#ClarizenForm+main)
    * [.storageAvailable()](#ClarizenForm+storageAvailable)

<a name="new_ClarizenForm_new"></a>
### new ClarizenForm()
Library that creates Javascript objects and methods to interact with aHTML Form that uses ID's/Classes needed to GET/POST data to the ClarizenREST API.

<a name="ClarizenForm+submitForm"></a>
### clarizenForm.submitForm()
This method has been designed to be wired into a onClick event on a button on the form. When fired submitForm will iterate throughall the DOM elements linked to ID "clarizen-form" and POST themto the Clarizen API as INSERTs.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
<a name="ClarizenForm+main"></a>
### clarizenForm.main()
This is the main function of the ClarizenForm object. Here you can customizeand subscribe to [Clarizen](#Clarizen) events. In addition logging into the API using [Clarizen.login](Clarizen.login)is a good idea.

**Kind**: instance method of <code>[ClarizenForm](#ClarizenForm)</code>  
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

