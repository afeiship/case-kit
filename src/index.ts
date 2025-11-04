class CaseKit {
  /**
   * 将字符串转换为 camelCase
   * 示例: "change_format_to_this" -> "changeFormatToThis"
   */
  static camelCase(input: string): string {
    return CaseKit.toCamel(input);
  }

  /**
   * 将字符串转换为 snake_case
   * 示例: "changeFormatToThis" -> "change_format_to_this"
   */
  static snakeCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toLowerCase())
      .join('_');
  }

  /**
   * 将字符串转换为 kebab-case (dash-case)
   * 示例: "ChangeFormatToThis" -> "change-format-to-this"
   */
  static kebabCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toLowerCase())
      .join('-');
  }

  /**
   * 将字符串转换为 dot.case
   * 示例: "changeFormatToThis" -> "change.format.to.this"
   */
  static dotCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toLowerCase())
      .join('.');
  }

  /**
   * 将字符串转换为 path/case
   * 示例: "changeFormatToThis" -> "change/format/to/this"
   */
  static pathCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toLowerCase())
      .join('/');
  }

  /**
   * 将字符串转换为 PascalCase (ProperCase)
   * 示例: "change_format_to_this" -> "ChangeFormatToThis"
   */
  static pascalCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }

  /**
   * 将字符串转换为纯小写空格分隔
   * 示例: "ChangeFormatToThis" -> "change format to this"
   */
  static lowerCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toLowerCase())
      .join(' ');
  }

  /**
   * 将字符串转换为 sentence case（首字母大写，其余小写）
   * 示例: "CHANGE_FORMAT_TO_THIS" -> "Change format to this"
   */
  static sentenceCase(input: string): string {
    const words = CaseKit.normalize(input).map(w => w.toLowerCase());
    if (words.length === 0) return '';
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(' ');
  }

  /**
   * 将字符串转换为 CONSTANT_CASE
   * 示例: "changeFormatToThis" -> "CHANGE_FORMAT_TO_THIS"
   */
  static constantCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.toUpperCase())
      .join('_');
  }

  /**
   * 将字符串转换为 Title Case
   * 示例: "change_format_to_this" -> "Change Format To This"
   */
  static titleCase(input: string): string {
    return CaseKit.normalize(input)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  // --- 内部辅助方法 ---

  /**
   * 将任意格式的字符串拆分为单词数组
   */
  private static normalize(input: string): string[] {
    if (!input) return [];

    // 处理连续大写字母缩写（如 XMLParser -> ['XML', 'Parser']）
    // 先插入分隔符在大小写边界处
    let result = input
      .replace(/([a-z\d])([A-Z])/g, '$1 $2') // lowercase followed by uppercase
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // uppercase followed by uppercase+lowercase
      .replace(/[_\-\.\/\s]+/g, ' ') // replace known separators with space
      .trim();

    // 拆分为单词，并过滤空字符串
    return result.split(/\s+/).filter(Boolean);
  }

  /**
   * 内部 camelCase 转换（首单词小写）
   */
  private static toCamel(input: string): string {
    const words = CaseKit.normalize(input);
    if (words.length === 0) return '';
    return words[0].toLowerCase() +
      words.slice(1)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
  }
}

export default CaseKit;
