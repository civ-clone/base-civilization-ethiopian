import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Ethiopian from '../Ethiopian';

export class HaileSelassie extends Leader {
  static civilization(): typeof Civilization {
    return Ethiopian;
  }

  name(): string {
    return 'Haile Selassie';
  }
}

export default HaileSelassie;
