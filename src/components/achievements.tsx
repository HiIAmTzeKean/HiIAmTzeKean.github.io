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
<section id="achievements" class="max-w-7xl mx-auto px-6 py-12 bg-white">
  <h2 class="text-3xl font-semibold mb-8 text-gray-800">Major Achievements</h2>
  <div class="relative">
    <div class="timeline-tree">
      ${groupedAchievements
        .map(
          ([year, achievements]) => `
        <div class="timeline-year mb-6">
          <div class="year-label text-xl font-bold text-blue-600">${year}</div>
          <div class="branch ml-4 border-l-4 border-blue-600 pl-6">
            ${achievements
              .map(
                (achievement) => `
              <div class="achievement mb-4 relative hover:bg-blue-100 transition duration-300">
                <div class="absolute -left-6 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <h3 class="text-lg font-semibold text-blue-600">${achievement.title}</h3>
                <p class="text-xs text-gray-500">${achievement.date}</p>
                <p class="text-sm text-gray-700">${achievement.awarder}</p>
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
  </div>
</section>
`;
};