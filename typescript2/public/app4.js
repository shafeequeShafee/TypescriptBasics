"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "sfq", age: 24 });
console.log(docOne);
var addUIDGenerics = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docTwo = addUIDGenerics({ name: "sfq", age: 24 });
console.log(docTwo.name);
var docThree = addUIDGenerics('hello');
var addUIDGenericsExten = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var addUIDGenericsExtenspecific = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docFive = addUIDGenericsExtenspecific({ name: "sfq", age: 24 });
var docSix = {
    uid: 1,
    resourceName: "SFQ",
    data: {
        name: "sfq"
    }
};
var docSeven = {
    uid: 1,
    resourceName: "SFQ",
    data: "sfq"
};
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILIM"] = 2] = "FILIM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var docEight = {
    uid: 1,
    resourceName: ResourceType.BOOK,
    data: "sfq"
};
console.log("docEight", docEight);
