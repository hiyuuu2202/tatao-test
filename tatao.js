let obj = JSON.parse($response.body);

if (
  obj &&
  obj.data &&
  Array.isArray(obj.data.info) &&
  obj.data.info.length > 0
) {
  obj.data.info[0].level = 10;
}

$done({
  body: JSON.stringify(obj)
});
