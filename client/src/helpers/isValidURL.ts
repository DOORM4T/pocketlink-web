export default function isValidURL(url: string) {
  if (url.length === 0) {
    throw new Error("Custom URL ID must be longer than 0 characters");
    return;
  }
  if (url.length > 35) {
    throw new Error("Custom URL ID cannot be longer than 35 characters");
    return;
  }
}
