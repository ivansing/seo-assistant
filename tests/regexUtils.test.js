import { escapeRegExp } from '../scripts/utils/regexUtils.js';

describe('escapeRegExp', () => {
  test('escapes special regex characters', () => {
    expect(escapeRegExp('hello.world')).toBe('hello\\.world');
    expect(escapeRegExp('test*pattern')).toBe('test\\*pattern');
    expect(escapeRegExp('a+b')).toBe('a\\+b');
    expect(escapeRegExp('what?')).toBe('what\\?');
    expect(escapeRegExp('^start')).toBe('\\^start');
    expect(escapeRegExp('end$')).toBe('end\\$');
    expect(escapeRegExp('(group)')).toBe('\\(group\\)');
    expect(escapeRegExp('[bracket]')).toBe('\\[bracket\\]');
    expect(escapeRegExp('{brace}')).toBe('\\{brace\\}');
    expect(escapeRegExp('a|b')).toBe('a\\|b');
    expect(escapeRegExp('back\\slash')).toBe('back\\\\slash');
  });

  test('returns unchanged string when no special characters', () => {
    expect(escapeRegExp('hello')).toBe('hello');
    expect(escapeRegExp('simple text')).toBe('simple text');
    expect(escapeRegExp('123')).toBe('123');
  });

  test('handles empty string', () => {
    expect(escapeRegExp('')).toBe('');
  });

  test('handles multiple special characters', () => {
    expect(escapeRegExp('file.name[1].txt')).toBe('file\\.name\\[1\\]\\.txt');
    expect(escapeRegExp('(a+b)*c?')).toBe('\\(a\\+b\\)\\*c\\?');
  });

  test('escaped string works correctly in RegExp', () => {
    const specialString = 'price: $100.00 (USD)';
    const escaped = escapeRegExp(specialString);
    const regex = new RegExp(escaped);

    expect(regex.test(specialString)).toBe(true);
    expect(regex.test('price: $100X00 (USD)')).toBe(false);
  });
});
