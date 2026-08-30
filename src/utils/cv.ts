const PASSWORD_HASH = "f38673f35230cf7911b61e6b84a6605cb5f241b0c36add384dc087b9783105c4";

const hashText = async (value: string): Promise<string> => {
  const data = new TextEncoder().encode(value);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

export const verifyPassword = async (input: string): Promise<boolean> => {
  return (await hashText(input)) === PASSWORD_HASH;
};

export const downloadCV = async (): Promise<void> => {
  const { CV26_BASE64 } = await import('./cvBase64');

  const bytes = atob(CV26_BASE64);
  const array = new Uint8Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  const blob = new Blob([array], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CV26.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};