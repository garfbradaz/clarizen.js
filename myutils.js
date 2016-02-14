function Bradaz() { };
Bradaz.prototype.createXHR = function (url, method, asyncy, username, password) {

    if (typeof username !== "undefined" && typeof password !== "undefined") {
        var withcred = (username.length > 0 && password.length > 0) ? true : false;
    }

    if (typeof asyncy !== "boolean")
    { asyncy = false; }

    if (url === null || url.length <= 0)
    { throw new Error("url is missing"); }
    if (method === null || method.length <= 0)
    { throw new Error("method is missing"); }

    var xhr = new XMLHttpRequest();
    //check to see if running in IE
    if ("withCredentials" in xhr) {
        if (withcred) {
            xhr.open(method, url, asyncy, username, password);
        }
        else {
            xhr.open(method, url, asyncy);
        }

    }
    else if (typeof XDomainRequest != "undefined") {
        // IE8 & IE9
        xhr = new XDomainRequest();
        xhr.open(method, url);
    }
    else {
        //CORS not supported
        xhr = null;
    }
    return xhr;
};

/**
 * This code was taken from the book JAVASCRIPT PATTERNS
 * by Stoyan Stefanov:
 * http://www.jspatterns.com/book/7/observer.html
 * 
 */
Bradaz.prototype.publisher = {
    subscribers: {
        any: [] // event type: subscribers
    },
    subscribe: function (fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === "undefined") {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    unsubscribe: function (fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },
    publish: function (publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    visitSubscribers: function (action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;
            
        for (i = 0; i < max; i += 1) {
            if (action === 'publish') {
                subscribers[i](arg);
            } else {
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

Bradaz.prototype.makePublisher = function(o) {
    var i;
    for (i in this.publisher) {
        if (this.publisher.hasOwnProperty(i) && typeof this.publisher[i] === "function") {
            o[i] = this.publisher[i];
        }
    }
    o.subscribers = {any: []};
}

