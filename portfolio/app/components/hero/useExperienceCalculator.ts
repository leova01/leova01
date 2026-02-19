export function useExperienceCalculator(startDate: Date) {
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDifference = currentDate.getMonth() - startDate.getMonth();

  const yearsOfExperience = monthsDifference < 0 ? yearsDifference - 1 : yearsDifference;

  return { yearsOfExperience };
}
