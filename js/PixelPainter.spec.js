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
      expect(createGrid.bind(null)).to.throw();
      expect(createGrid.bind(null,{})).to.throw();
      expect(createGrid.bind(null,-1)).to.throw();
      expect(createGrid.bind(null,1)).to.not.throw();
    });

    it('Should return an HTMLElement', function () {
      expect(createGrid(1)).to.be.an.instanceof(HTMLElement);
    });

    it('Should return the same number of rows as provided', function () {
      expect(createGrid(1).childElementCount).to.equal(1);
      expect(createGrid(10).childElementCount).to.equal(10);
    });

  });

  describe('Columns', function () {

    it('If no column value is provided, columns should equal the number of rows', function () {
      expect(createGrid(1).children[0].childElementCount).to.equal(1);
      expect(createGrid(10).children[0].childElementCount).to.equal(10);
    });

    it('If a column value is provided, that should be the number of columns returned', function () {
      expect(createGrid(1,10).children[0].childElementCount).to.equal(10);
      expect(createGrid(10,5).children[0].childElementCount).to.equal(5);
    });

  });

  describe('Attributes', function () {

    it('If no column value is provided, all attributes should get applied to each grid element', function () {
      expect(createGrid(1,{}).children[0].firstChild.attributes.length).to.equal(1);
      expect(createGrid(10,{class:'grid'}).children[0].firstChild.attributes.length).to.equal(1);
      expect(createGrid(10,{class: 'grid', style: 'background-color: black'}).children[0].firstChild.attributes.length).to.equal(2);
    });

    it('If a column value is provided, that should be the number of columns returned, along with the attributes applied', function () {
      expect(createGrid(10,5,{class: 'grid'}).children[0].firstChild.attributes.length).to.equal(1);
      expect(createGrid(10,5,{class: 'grid'}).children[0].childElementCount).to.equal(5);
    });

  });

});