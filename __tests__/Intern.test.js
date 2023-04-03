
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Nav', 90, 'nsgngng@gmail', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Nav', 90, 'nsgngng@gmail', 'SFSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Nav', 90, 'nsgngng@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 