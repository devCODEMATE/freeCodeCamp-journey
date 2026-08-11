const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const postsContainer = document.getElementById("posts-container");

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastActivity = new Date(time);

  const timeDifference = currentTime - lastActivity;
  const minutesAgo = Math.floor(timeDifference / 60000);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

const viewCount = (views) => {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
};

const forumCategory = (id) => {
  const selectedCategory = allCategories[id] || {
    category: "General",
    className: "general",
  };

  const { category, className } = selectedCategory;

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
};
const avatars = (posters, users) => {
  return posters
    .map(({ user_id }) => {
      const user = users.find(({ id }) => id === user_id);

      if (!user) {
        return "";
      }

      const { name, avatar_template } = user;
      const avatar = avatar_template.replace("{size}", "30");
      const avatarSrc = avatar.startsWith("/")
        ? `${avatarUrl}${avatar}`
        : avatar;

      return `<img src="${avatarSrc}" alt="${name}">`;
    })
    .join("");
};

const showLatestPosts = ({ users, topic_list }) => {
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map(
      ({
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      }) => `
        <tr>
          <td>
            <a
              class="post-title"
              href="${forumTopicUrl}${slug}/${id}"
            >
              ${title}
            </a>
            ${forumCategory(category_id)}
          </td>

          <td>
            <div class="avatar-container">
              ${avatars(posters, users)}
            </div>
          </td>

          <td>${posts_count - 1}</td>
          <td>${viewCount(views)}</td>
          <td>${timeAgo(bumped_at)}</td>
        </tr>
      `
    )
    .join("");
};

const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();

    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();