const s = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
function u(t, n) {
  const r = String(t);
  return n !== "ar" ? r : r.replace(/\d/g, (o) => s[Number(o)]);
}
function e(t) {
  return t === "ar" ? "ar-EG" : "en-US";
}
function m(t, n = "en") {
  return (typeof t == "string" ? new Date(t) : t).toLocaleDateString(e(n), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
function f(t, n = "en") {
  return (typeof t == "string" ? new Date(t) : t).toLocaleDateString(e(n), {
    month: "short",
    day: "numeric",
  });
}
function g(t, n = "en") {
  return (typeof t == "string" ? new Date(t) : t).toLocaleDateString(e(n), {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
function l(t, n = "en") {
  return (typeof t == "string" ? new Date(t) : t).toLocaleTimeString(e(n), {
    hour: "2-digit",
    minute: "2-digit",
  });
}
function c(t, n) {
  if (!t || !/^\d{1,2}:\d{2}$/.test(t))
    throw new Error(`Invalid ${n} time format: "${t}". Expected "HH:MM".`);
  const [r, o] = t.split(":").map(Number);
  if (r < 0 || r > 23 || o < 0 || o > 59)
    throw new Error(`Invalid ${n} time values: hours=${r}, minutes=${o}`);
  return [r, o];
}
function d(t) {
  const [n, r] = c(t, "local"),
    o = new Date();
  o.setHours(n, r, 0, 0);
  const a = o.getUTCHours(),
    i = o.getUTCMinutes();
  return `${String(a).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
function S(t) {
  const [n, r] = c(t, "UTC"),
    o = new Date();
  o.setUTCHours(n, r, 0, 0);
  const a = o.getHours(),
    i = o.getMinutes();
  return `${String(a).padStart(2, "0")}:${String(i).padStart(2, "0")}`;
}
export { f as a, m as b, l as c, e as d, g as f, d as l, u as t, S as u };
