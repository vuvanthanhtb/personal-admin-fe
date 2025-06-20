export const getSession = <T = any>(key: string): T | string | null => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;

    const trimmed = raw.trim();

    // Cố gắng parse nếu có thể (nếu là JSON object, array, boolean, number)
    if (
      (trimmed.startsWith("{") && trimmed.endsWith("}")) || // Object
      (trimmed.startsWith("[") && trimmed.endsWith("]")) || // Array
      trimmed === "true" ||
      trimmed === "false" || // Boolean
      !isNaN(Number(trimmed)) // Number
    ) {
      return JSON.parse(trimmed) as T;
    }

    // Nếu là chuỗi thuần (string không parse được), trả lại nguyên bản
    return trimmed;
  } catch (error) {
    console.warn(`Lỗi khi đọc session key="${key}":`, error);
    return null;
  }
};

export const setSession = (key: string, value: any): void => {
  try {
    const data = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {
    console.error(`Lỗi khi lưu session với key "${key}":`, error);
  }
};

export const removeSession = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Lỗi khi xóa session với key "${key}":`, error);
  }
};

export const clearAllSession = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Lỗi khi xóa toàn bộ session:", error);
  }
};
