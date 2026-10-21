import { MenelikII, HaileSelassie } from '../Leaders';
import Ethiopian from '../Ethiopian';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Ethiopian', (): void => {
  it('has a people, a nation and two colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Ethiopian)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Ethiopian');
    expect(attributes.nation).to.equal('Ethiopia');
    expect(attributes.colors).to.have.lengthOf(2);
    attributes.colors.forEach((color: string) =>
      expect(color).to.match(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i)
    );
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Ethiopian);

    expect(cityNames.length).to.be.at.least(30);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Addis Ababa']);
  });

  it('has leaders of the Ethiopians', (): void => {
    (
      [
        [MenelikII, 'Menelik II'],
        [HaileSelassie, 'Haile Selassie'],
      ] as [typeof Leader, string][]
    ).forEach(([LeaderType, name]) => {
      expect(LeaderType.civilization()).to.equal(Ethiopian);
      expect(new LeaderType().name()).to.equal(name);
    });
  });
});
