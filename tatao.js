let obj = JSON.parse($response.body);

if (
  obj &&
  obj.data &&
  Array.isArray(obj.data.info) &&
  obj.data.info.length > 0
) {
  obj.data.info[0].user_nickname = "Trần Đức Hiếu";
}

$done({
  body: JSON.stringify(obj)
});
