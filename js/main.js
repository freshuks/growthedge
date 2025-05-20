document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('posts');

  // Fetch and display posts from the content/posts folder (simulated here)
  // Because we don't have a backend, we'll hardcode post summaries.

  const posts = [
    {
      title: "Top AI marketing tools dominating 2025",
      summary: "Discover the AI tools transforming marketing strategies this year.",
      url: "#"
    },
    {
      title: "10 SEO tactics that are still crushing it",
      summary: "Boost your website traffic with these proven SEO methods.",
      url: "#"
    },
    {
      title: "We tried 7 funnel builders—here's the best",
      summary: "An in-depth review to find the perfect sales funnel tool for you.",
      url: "#"
    },
    {
      title: "Low-cost side hustles you can start this week",
      summary: "Explore practical business ideas with minimal startup costs.",
      url: "#"
    }
  ];

  posts.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <a href="${post.url}" style="color: var(--accent); text-decoration:none;">Read More</a>
    `;
    postsContainer.appendChild(card);
  });
});
