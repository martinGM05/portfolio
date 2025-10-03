export const createTechData = (techs: Array<{name: string, icon: string, description: string}>) => 
  techs.map(tech => ({ ...tech }));

export const createBackendTechData = (techs: Array<{
  name: string;
  icon: string;
  category: string;
  description: string;
  color: string;
}>) => techs.map(tech => ({ ...tech }));

export const createTimelineData = (t: any, items: Array<{
  yearKey: string;
  companyKey: string;
  roleKey: string;
  descriptionKey: string;
  achievementKey: string;
  color: string;
  technologies: string[];
}>) => 
  items.map(item => ({
    year: t(item.yearKey),
    company: t(item.companyKey),
    role: t(item.roleKey),
    description: t(item.descriptionKey),
    achievement: t(item.achievementKey),
    color: item.color,
    technologies: item.technologies
  }));

export const createSpecialtiesData = (t: any, specialties: Array<{
  titleKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
}>) => 
  specialties.map(specialty => ({
    title: t(specialty.titleKey),
    description: t(specialty.descriptionKey),
    icon: specialty.icon,
    color: specialty.color
  }));

export const createStatsData = (t: any, stats: Array<{
  number: string;
  labelKey: string;
  icon: string;
}>) => 
  stats.map(stat => ({
    number: stat.number,
    label: t(stat.labelKey),
    icon: stat.icon
  }));
