describe("FizzBuzz Testing", ()=>{

	it("FizzBuzz must be defined", ()=>{
		expect(fizzBuzz()).toBeDefined();
	});

	it("Should be a string 1 for passing 1.", ()=>{
		var typeOf = typeof(fizzBuzz(1));
		expect(typeOf).toBe('number');
	});

	it("Should be a string 2 for passing 2.", ()=>{
		expect(fizzBuzz(2)).toBe(2);
	});

	it("Should be a string Fizz for passing 3.", ()=>{
		expect(fizzBuzz(3)).toBe('Fizz');
	});

	it("Should be a string 4 for passing 4.", ()=>{
		expect(fizzBuzz(4)).toBe(4);
	});

	it("Should be a string Buzz for passing 5.", ()=>{
		expect(fizzBuzz(5)).toBe('Buzz');
	});

	it("Should be a string Fizz for passing 6.", ()=>{
		expect(fizzBuzz(6)).toBe('Fizz');
	});

	it("Should be a string Buzz for passing 10.", ()=>{
		expect(fizzBuzz(10)).toBe('Buzz');
	});

	it("Should be a string FizzBuzz for passing 15.", ()=>{
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});

	var random = Math.floor(Math.random() * 10) * 15;
	it("Should be string FizzBuzz for passing "+ random, ()=>{
		expect(fizzBuzz(random)).toBe('FizzBuzz');
	});
});