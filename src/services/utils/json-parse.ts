export function parseJson<T = any>(data: string): T | undefined {
  try {
    return JSON.parse(data) as T;
  } catch (error) {
    console.error('Parsing JSON got error! Got dat => ', data);
    console.error(error);
    return undefined;
  }
}
