export interface JobsObject {
  title: string;
  company: Company;
  location: string;
  industry: string;
  duration: string;
  remuneration: string;
  tags: string[];
}
export interface Company {
  name: string;
  image: string;
}
