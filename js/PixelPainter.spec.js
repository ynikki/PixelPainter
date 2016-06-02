var expect = chai.expect;

describe('Specs',function () {

  describe('createGrid', function () {

    it('Should be a function called createGrid', function (){
      expect(createGrid).to.be.a('function'); //typeof
      expect(createGrid).to.be.an.instanceof(Function);
    });
  });

  describe('Rows', function () {

    it('Should only accept a non-negative number', function () {
      expect(expectGrid()).to.throw();
      expect(expectGrid({})).to.throw();
      expect(expectGrid(-1)).to.not.throw();
      expect(expectGrid(1)).to.not.throw();
    });

    it('Should return an HTMLElement', function () {
      expect(createGrid(1)).to.be.an.instanceof(Function);
    });

    it('Should return the same number of rows as provided', function () {
      expect(createGrid(10)).to.be.an.instanceof(Function);
    });

  });

  describe('Columns', function () {

  });

  describe('Attributes', function () {

  });

});