var CookieUtil = {
    get: function (name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            // 从cookieStart处开始搜索';'字串，返回';'第一次出现的位置，如果要检索的字符串值没有出现，则该方法返回 -1。
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                // 说明cookieName是cookie字符串中的最后一个键值对
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + '=' +
            encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },

    unset: function (name, path, domain, secure) {
        this.set(name, '', new Date(0), path, domain, secure);
    }
};