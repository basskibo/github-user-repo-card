describe('Testing sum', () => {
    function sum(a, b) {
        return a + b;
    }

    it('should equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    })

    test('also should equal 4', () => {
        expect(sum(2, 2)).toBe(4);
    })
});