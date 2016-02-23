/* global notes, expect */
/* global pending */

describe('notes module', () => {
	
	beforeEach( () => {
  	notes.clear();
  	notes.add('first note');
  	notes.add('second note');
  	notes.add('third note');
  	notes.add('fourth note');
  	notes.add('fifth note');
  });
  
  it("should be able to add a new note", () => {
    expect(notes.add('sixth note')).toBe(true);
    expect(notes.count()).toBe(6);
	});

	it("should ignore blank notes", () => {
    expect(notes.add('')).toBe(false);
    expect(notes.count()).toBe(5);
	});


//   it("should be able to add a new note");
// 	xit("should ignore blank notes");
  it('should ignore notes containing only whitespace', ()=>{
    expect(notes.add('   ')).toBe(false);
    expect(notes.count()).toBe(5);
    pending();
  });
  xit('should require a string parameter', ()=>{
    expect(notes.add()).toBe(false);
    expect(notes.count()).toBe(5);
  });
});
