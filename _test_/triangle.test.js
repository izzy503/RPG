import Triangle from '../src/js/triangle.';

describe('Triangle', () => {

    Test(should correctly creat a triangle object with three lengths' , () => {
      const triangle = new Triangle(2,4,5);
      expect(triangle.side1).toEqual(2);

