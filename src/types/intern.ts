export interface Intern {
  id: string;
  name: string;
  company: string;
  startDate: string;
  mentor: string;
  location: string;
  status: 'active' | 'pending' | 'completed';
  lastReport: string;
  nextReportDue: string;
}