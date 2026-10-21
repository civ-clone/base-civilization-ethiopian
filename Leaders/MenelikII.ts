import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Ethiopian from '../Ethiopian';

export class MenelikII extends Leader {
  static civilization(): typeof Civilization {
    return Ethiopian;
  }

  name(): string {
    return 'Menelik II';
  }
}

export default MenelikII;
