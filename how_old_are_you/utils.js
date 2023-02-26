export function sanitize(string) {
    return DOMPurify.sanitize(string)
  }