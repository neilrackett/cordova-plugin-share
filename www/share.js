module.exports = function(text, title, mimeType, success, error)
{
  if (typeof text !== "string") {
    text = "";
  }
  if (typeof title !== "string") {
    title = "Share";
  }
  if (typeof mimeType !== "string") {
    mimeType = "text/plain";
  }
  cordova.exec(success, error, "Share", "share", [text, title, mimeType]);
  return true;
};