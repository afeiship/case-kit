/// <reference types="jest" />

import CaseKit from '../src';

describe('CaseKit test cases', () => {
  // 测试 camelCase 方法
  describe('camelCase', () => {
    it('should convert snake_case to camelCase', () => {
      expect(CaseKit.camelCase('change_format_to_this')).toBe('changeFormatToThis');
    });

    it('should convert kebab-case to camelCase', () => {
      expect(CaseKit.camelCase('change-format-to-this')).toBe('changeFormatToThis');
    });

    it('should convert space separated to camelCase', () => {
      expect(CaseKit.camelCase('change format to this')).toBe('changeFormatToThis');
    });

    it('should convert PascalCase to camelCase', () => {
      expect(CaseKit.camelCase('ChangeFormatToThis')).toBe('changeFormatToThis');
    });

    it('should handle acronyms correctly', () => {
      expect(CaseKit.camelCase('XMLParser')).toBe('xmlParser');
    });

    it('should handle empty string', () => {
      expect(CaseKit.camelCase('')).toBe('');
    });
  });

  // 测试 snake_case 方法
  describe('snakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(CaseKit.snakeCase('changeFormatToThis')).toBe('change_format_to_this');
    });

    it('should convert PascalCase to snake_case', () => {
      expect(CaseKit.snakeCase('ChangeFormatToThis')).toBe('change_format_to_this');
    });

    it('should handle acronyms correctly', () => {
      expect(CaseKit.snakeCase('XMLParser')).toBe('xml_parser');
    });
  });

  // 测试 kebabCase 方法
  describe('kebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
      expect(CaseKit.kebabCase('changeFormatToThis')).toBe('change-format-to-this');
    });

    it('should convert PascalCase to kebab-case', () => {
      expect(CaseKit.kebabCase('ChangeFormatToThis')).toBe('change-format-to-this');
    });
  });

  // 测试 dotCase 方法
  describe('dotCase', () => {
    it('should convert camelCase to dot.case', () => {
      expect(CaseKit.dotCase('changeFormatToThis')).toBe('change.format.to.this');
    });
  });

  // 测试 pathCase 方法
  describe('pathCase', () => {
    it('should convert camelCase to path/case', () => {
      expect(CaseKit.pathCase('changeFormatToThis')).toBe('change/format/to/this');
    });
  });

  // 测试 pascalCase 方法
  describe('pascalCase', () => {
    it('should convert snake_case to PascalCase', () => {
      expect(CaseKit.pascalCase('change_format_to_this')).toBe('ChangeFormatToThis');
    });

    it('should convert camelCase to PascalCase', () => {
      expect(CaseKit.pascalCase('changeFormatToThis')).toBe('ChangeFormatToThis');
    });
  });

  // 测试 lowerCase 方法
  describe('lowerCase', () => {
    it('should convert camelCase to lower case', () => {
      expect(CaseKit.lowerCase('ChangeFormatToThis')).toBe('change format to this');
    });
  });

  // 测试 sentenceCase 方法
  describe('sentenceCase', () => {
    it('should convert CONSTANT_CASE to Sentence case', () => {
      expect(CaseKit.sentenceCase('CHANGE_FORMAT_TO_THIS')).toBe('Change format to this');
    });
  });

  // 测试 constantCase 方法
  describe('constantCase', () => {
    it('should convert camelCase to CONSTANT_CASE', () => {
      expect(CaseKit.constantCase('changeFormatToThis')).toBe('CHANGE_FORMAT_TO_THIS');
    });
  });

  // 测试 titleCase 方法
  describe('titleCase', () => {
    it('should convert snake_case to Title Case', () => {
      expect(CaseKit.titleCase('change_format_to_this')).toBe('Change Format To This');
    });
  });
});
