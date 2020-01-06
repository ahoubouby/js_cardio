const {flatArray} = require('../main');
const tab = [[12,34,3], [1] , 1, 3,4];
describe('test case of flatten array', () => {
   it('case with multi dem array',() => {
       expect(flatArray(tab)).toEqual([12, 34, 3, 1, 1, 3, 4]);
   })

});
