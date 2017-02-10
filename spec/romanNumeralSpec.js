describe("Roman Numeral tests.", ()=>{
	it('Function should be defined', ()=>{
		expect(decToRoman()).toBeDefined();
	});

	it('Should return I if input is 1.', ()=>{
		expect(decToRoman(1)).toBe("I");
	});

	it('Should return IV if input is 4.', ()=>{
		expect(decToRoman(4)).toBe("IV");
	});

	it('Should return XI if input is 11.', ()=>{
		expect(decToRoman(11)).toBe("XI");
	});

	it('Should return XL if input is 40.', ()=>{
		expect(decToRoman(40)).toBe("XL");
	});

	it('Should return C if input is 100.', ()=>{
		expect(decToRoman(100)).toBe("C");
	});

	it('Should return D if input is 500.', ()=>{
		expect(decToRoman(500)).toBe("D");
	});

	it('Should return M if input is 1000.', ()=>{
		expect(decToRoman(1000)).toBe("M");
	});

	var random = Math.floor(Math.random() * 3999);
	it('Should return '+decToRoman(random)+' if input is '+random+'.', ()=>{
		expect(decToRoman(random)).toBe(decToRoman(random));
		console.log(random);
	});
});