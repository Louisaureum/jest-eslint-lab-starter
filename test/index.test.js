const { capitalizeWords, filterActiveUsers, logAction } = require('../index');


describe('Utility Library Tests', () => {
  
  describe('capitalizeWords()', () => {
    test('should capitalize the first letter of each word', () => {
      expect(capitalizeWords("hello world")).toBe("Hello World");
    });

    test('should return an empty string when input is empty', () => {
      expect(capitalizeWords("")).toBe("");
    });

    test('should handle strings with special characters', () => {
      expect(capitalizeWords("hello-world")).toBe("Hello-world");
    });

    test('should capitalize a single word', () => {
      expect(capitalizeWords("jest")).toBe("Jest");
    });
  });

  describe('filterActiveUsers()', () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
      { name: "Charlie", isActive: true }
    ];

    test('should filter active users correctly', () => {
      const active = filterActiveUsers(users);
      expect(active).toHaveLength(2);
      expect(active[0].name).toBe("Alice");
    });

    test('should return an empty array if all users are inactive', () => {
      const inactiveUsers = [{ name: "Bob", isActive: false }];
      expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('should return an empty array if input is empty', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  describe('logAction()', () => {
    test('should log action with correct format', () => {
      const result = logAction("login", "Alice");
      expect(result).toMatch(/User Alice performed login at/);
    });

    test('should handle empty strings or missing inputs', () => {
      const result = logAction("", "");
      expect(result).toMatch(/User  performed  at/);
    });
  });

});
