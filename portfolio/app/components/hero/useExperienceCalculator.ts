export function useExperienceCalculator(graduationDate: Date) {
  const calculateExperience = () => {
    const currentDate = new Date();
    const yearsDifference = currentDate.getFullYear() - graduationDate.getFullYear();
    const monthsDifference = currentDate.getMonth() - graduationDate.getMonth();

    if (monthsDifference < 0) {
      return yearsDifference - 1;
    }
    return yearsDifference;
  };

  const yearsOfExperience = calculateExperience();

  return { yearsOfExperience };
}
