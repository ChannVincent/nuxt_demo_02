export const state = () => {
  return {
    posts: [
      {
        id: "1",
        title: "Title A",
        subtitle: "Subititle A",
        content: "Content A",
        createdAt: new Date(),
        isRead: true
      },
      {
        id: "2",
        title: "Title B",
        subtitle: "Subititle B",
        content: "Content B",
        createdAt: new Date(),
        isRead: false
      }
    ]
  }
}