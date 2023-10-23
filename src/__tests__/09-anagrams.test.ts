import { isItAnAnagram } from '../09-anagrams';

describe('anagram function', () => {
  it('check if second string is an anagram of the first string', () => {
      const isItValid1 = isItAnAnagram('earth', 'heart');
      const isItValid2 = isItAnAnagram('azaa', 'zaaa');
      const isItValid3 = isItAnAnagram('pillow', 'willow');

      expect(isItValid1).toBeTruthy();
      expect(isItValid2).toBeTruthy();
      expect(isItValid3).toBeFalsy();
  });
});

