const isValid = (v: unknown) => v === null || v === undefined || v === '';

export const nn = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const result = strings.reduce((acc, curr, i) => {
    return acc + curr + (!isValid(values[i]) ? String(values[i]) : '');
  }, '');

  const hasNullValue = values.some(isValid);
  return !hasNullValue ? result : '';
};
