"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ethiopian_1 = require("./Ethiopian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
[
    'Addis Ababa',
    'Aksum',
    'Gondar',
    'Lalibela',
    'Harar',
    'Adwa',
    'Mekele',
    'Bahir Dar',
    'Dessie',
    'Debre Markos',
    'Dire Dawa',
    'Jimma',
    'Yeha',
    'Adulis',
    'Debre Berhan',
    'Ankober',
    'Magdala',
    'Entoto',
    'Gorgora',
    'Debre Tabor',
    'Hawassa',
    'Arba Minch',
    'Nekemte',
    'Adigrat',
    'Shire',
    'Woldia',
    'Gambela',
    'Jijiga',
    'Ziway',
    'Bonga',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Ethiopian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map