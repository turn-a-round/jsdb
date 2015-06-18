/* 
 * Created by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 * 
 * License Type: MIT License
 */

/* I've taken a lot of inspiration from original jQuery v1.11.3 sorcecode 
 * & modify it to the current requirement
 */

(function (window, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        /* jQuery Comments
        // For CommonJS and CommonJS-like environments where a proper window is present,
        // execute the factory and get jQuery
        // For environments that do not inherently posses a window with a document
        // (such as Node.js), expose a jQuery-making factory as module.exports
        // This accentuates the need for the creation of a real window
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info
        */
        module.exports = window.document ?
                factory(window, true) :
                function (w) {
                    if (!w.document) {
                        throw new Error("jQuery requires a window with a document");
                    }
                    return factory(w);
                };
    } else {
        factory(window);
    }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    var DBError = function (message, thisArg) {
        this.name = 'DBError';
        this.message = message;
        this.obj = thisArg;
        this.toString = function () {
            return this.message;
        };
    };

    var jsDB = function () {
        this.tables = [];
        this.functions = [];
        this.storedProdures = [];
    };

    var DBColumnType = function (name, description) {
        this.name = name;
    };

    DBColumnTypes = [];

    var DataColumn = function (name, type, nullable, isPrimary, isIdentity) {
        if (!!arguments[0]) {
            this.name = name;
        }
        else {
            throw new DBError('Name for the column is not provided', this);
        }
    };

    var DataTable = function (columns, data) {
        this.columns = columns;
        this.data = data;
        this.insert = function (data) {
            this.data = data;
        };
        this.update = function (query) {
            var q = new Query(query);
            this.data = q.execute();
        };
        this.delete = function (query) {
            var q = new Query(query);
            this.data = q.execute();
        };
    };

    var Query = function (query) {
        var th = this;
        if (query && typeof query === "Query") {
            return query;
        }
        this.execute = function () {
            return [];
        };
        this.expression = function () {
            return '';
        };
    };

    var DataView = function () {

    };

});

