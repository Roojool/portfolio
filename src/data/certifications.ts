export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year?: number;
  credentialUrl?: string;
}

export const certifications: CertificationItem[] = [];
