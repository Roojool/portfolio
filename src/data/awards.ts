export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

export const awards: AwardItem[] = [];
