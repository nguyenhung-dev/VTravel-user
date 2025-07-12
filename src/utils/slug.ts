export function createSlug(str: string) {
  if (!str) return "";

  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // loại ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-"); // thay space thành dấu -
}
