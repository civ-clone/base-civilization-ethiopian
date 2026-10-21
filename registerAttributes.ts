import Ethiopian from './Ethiopian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Ethiopian',
  nation: 'Ethiopia',
  colors: ['#8E6CD8', '#FCDD09'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Ethiopian, name, value))
);
