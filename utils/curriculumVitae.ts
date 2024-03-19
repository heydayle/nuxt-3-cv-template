export interface Personal {
  fullName: string
  position: string
  dateOfBirth?: string
  age?: string
  email?: string
  phoneNumber?: string
}
export interface Summary {
  about?: string
  summary: string[]
}
export interface Company {
  position: string
  companyName: string
  startDate: string
  endDate?: string
  description: string[] | string
  projects: string[] | string
  technologies: string[] | string
}
export interface WorkExperience {
  companies?: Company[] | null
}
export interface Education {
  title: string
  school?: string
  scholastic?: string
}
export interface Project {
  name: string
  startDate: string
  endDate?: string
  partner?: string | 'Product'
  description?: string
  teamSize?: string | number
  position: string
  developmentMethodologies?: string[] | string
  tools?: string[] | string
  technologies: string[] | string
  responsibilities?: string[]
  achievement?: string[]
  release: string[] | string
}
