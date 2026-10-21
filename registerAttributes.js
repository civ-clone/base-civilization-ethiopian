"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ethiopian_1 = require("./Ethiopian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Ethiopian',
    nation: 'Ethiopia',
    colors: ['#8E6CD8', '#FCDD09'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Ethiopian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map