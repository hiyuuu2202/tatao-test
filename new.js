
// Lấy headers từ request hiện tại
let modifiedHeaders = $request.headers;

/**
 * Ghi đè hoặc tạo mới một header
 * @param {Object} headers - Object chứa headers
 * @param {String} key - Tên header
 * @param {String} value - Giá trị mới
 */
function setHeaderValue(headers, key, value) {
  const lowerKey = key.toLowerCase();

  if (lowerKey in headers) {
    headers[lowerKey] = value;
  } else {
    headers[key] = value;
  }
}

// Xóa (ghi rỗng) header X-RevenueCat-ETag
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

// Trả lại request đã chỉnh sửa
$done({
  headers: modifiedHeaders
});
