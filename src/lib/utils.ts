export function slugify(text: string) {
  return text
  .replace(/([A-Z])/g, '-$1') // Insert dash before uppercase
  .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@\[\]^_`{|}~]/g, '')
  .replace(/[\s_]+/g, '-')
  .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes
  .toLowerCase();
}

export function truncate(str: string, length: number) {
  const sanitizedString = str.replace(/(<([^>]+)>)/gi, '');
  if (sanitizedString.length > length) {
      let truncated = sanitizedString.slice(0, length);
      if(sanitizedString.charAt(length) !== ' '){
          truncated = truncated.substring(0, truncated.lastIndexOf(" "));
      }
      return `${truncated.trim()}...`;
  } else return sanitizedString;
}

export default function FormattedDate(date: Date) {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
