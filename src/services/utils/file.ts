export const getFileUrl = (file: File) => URL.createObjectURL(file);
export const checkLimitSize = (file: File, mbLimit: number) =>
  file.size / (1024 * 1024) >= mbLimit;

export function formatUploadFile(filename: string, file: File) {
  const data = new FormData();

  data.append(filename, file);

  return data;
}

export function formatUploadFileObject(data: Record<string, any>) {
  const form = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    form.append(key, value);
  });

  return form;
}
