## Classes

<dl>
<dt><a href="#Clarizen">Clarizen</a></dt>
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

* [Clarizen](#Clarizen)
    * [new Clarizen(userName, password, applicationId, [optionalServerLocation], [optionalBaseUrl])](#new_Clarizen_new)
    * [.isLoggedIn()](#Clarizen+isLoggedIn) ⇒

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
### clarizen.isLoggedIn() ⇒
This method will validate if the Clarizen client has managed to loginusing the credentials provided and obtained the sessionId key, that is tobe used in all future requests (during the objects lifetime)

**Kind**: instance method of <code>[Clarizen](#Clarizen)</code>  
**Returns**: - true if the session is logged in, false if the session is not logged in.  
<a name="ClarizenConstants"></a>
## ClarizenConstants : <code>object</code>
Clarizen constants used in the Clarizen library.

**Kind**: global namespace  
<a name="ClarizenConstants.Urls"></a>
### ClarizenConstants.Urls : <code>object</code>
constant URLs used as the base within {@linkcode Clarizen}

**Kind**: static namespace of <code>[ClarizenConstants](#ClarizenConstants)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| baseURL | <code>url</code> | baseURL that is used to login and locate the correct server to use. |
| getServerDefinition | <code>string</code> | contains part of the URI used to get the Server Definition. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/authentication/GetServerDefinition) |
| login | <code>string</code> | contains part of the URI used to login to the API. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/authentication/Login) |
| metadataDescribe* | <code>string</code> | There are two URIs here, one for Entities and another for Metadata of the Entities. [Clarizen API Documentation](https://api.clarizen.com/V2.0/services/#Metadata) |

