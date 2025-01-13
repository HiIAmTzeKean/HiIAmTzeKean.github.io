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
  <h2 class="text-3xl font-semibold mb-6 text-gray-800">Major Achievements</h2>
  <div class="timeline">
    ${groupedAchievements
      .map(
        ([year, achievements]) => `
      <div class="timeline-year">
        <div class="year-label">${year}</div>
        <div class="achievements-group">
          ${achievements
            .map(
              (achievement) => `
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">${achievement.title}</h3>
              <p class="timeline-awarder">${achievement.awarder}</p>
            </div>
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