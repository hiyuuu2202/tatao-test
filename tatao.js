
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

// =========   Phần cố định  ========= //

var ua =
  $request.headers["User-Agent"] ||
  $request.headers["user-agent"];

var obj = JSON.parse($response.body);

// Thêm thông báo
obj.Attention =
  "Hello, my name is Hiếu =)))";

// Dữ liệu subscription giả
var hiyucute = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-02-22T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var hieu2202 = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.hiyucute.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

// Kiểm tra User-Agent
const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let [e, s] = mapping[match];

  if (s) {
    hieu2202.product_identifier = s;
    obj.subscriber.subscriptions[s] = hiyucute;
  } else {
    obj.subscriber.subscriptions["com.hiyucute.premium.yearly"] = hiyucute;
  }

  obj.subscriber.entitlements[e] = hieu2202;

} else {

  obj.subscriber.subscriptions["com.hiyucute.premium.yearly"] = hiyucute;
  obj.subscriber.entitlements.pro = hieu2202;

}

// Trả dữ liệu đã chỉnh sửa
$done({
  body: JSON.stringify(obj)
});
