import Ethiopian from './Ethiopian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
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
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Ethiopian, i === 0))
);
