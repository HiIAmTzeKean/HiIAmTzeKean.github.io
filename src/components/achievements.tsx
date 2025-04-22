export const renderAchievements = (
  achievements: { title: string; awarder: string; date: string }[]
): string => {
  // Sort achievements in descending order by date
  const sortedAchievements = achievements.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group achievements by year in descending order
  const groupedAchievements = Object.entries(
    sortedAchievements.reduce((groups, achievement) => {
      const year = new Date(achievement.date).getFullYear().toString();
      if (!groups[year]) groups[year] = [];
      groups[year].push(achievement);
      return groups;
    }, {} as Record<string, { title: string; awarder: string; date: string }[]>)
  ).sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA)); // Ensure descending order of years

  return `
<section id="achievements" class="max-w-7xl mx-auto px-4 py-8 bg-white">
  <h2 class="text-2xl font-semibold mb-6 text-gray-800">Major Achievements</h2>
  <div class="space-y-6"> <!-- Reduced space between year groups -->
    ${groupedAchievements
      .map(
        ([year, achievements]) => `
      <div>
        <h3 class="text-xl font-bold text-blue-600 mb-3">${year}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Compact grid layout -->
          ${achievements
            .map(
              (achievement) => `
          <div class="bg-gray-50 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200">
            <h4 class="text-lg font-medium text-gray-800">${achievement.title}</h4>
            <p class="text-sm text-gray-500"><strong>Awarded by:</strong> ${achievement.awarder}</p>
            <p class="text-sm text-gray-500"><strong>Year:</strong> ${new Date(
              achievement.date
            ).getFullYear()}</p>
          </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
      )
      .join("")}
  </div>
</section>
`;
};