// data.js – דוגמה גנרית לגמרי
const data = {
  id: "root",
  type: "step",
  name: "מערכת דוגמה",
  url: "https://example.com/root",
  children: [
    {
      id: "projects",
      type: "folder",
      name: "פרויקטים",
      children: [
        {
          id: "proj-alpha",
          type: "step",
          name: "פרויקט אלפא",
          short: "אלפא",
          long: "פרויקט ניסוי בתחום AI",
          url: "https://example.com/projects/alpha",
          children: [
            {
              id: "alpha-doc",
              type: "doc",
              name: "מסמך אפיון",
              url: "https://example.com/docs/alpha-spec"
            },
            {
              id: "alpha-reports",
              type: "folder",
              name: "דוחות",
              children: [
                {
                  id: "alpha-report-1",
                  type: "doc",
                  name: "דו״ח יומי",
                  long: "תיעוד פעילויות יומי בפרויקט אלפא",
                  url: "https://example.com/reports/alpha-daily",
                  highlight: true
                }
              ]
            }
          ]
        },
        {
          id: "proj-beta",
          type: "step",
          name: "פרויקט בטא",
          faded: true
        }
      ]
    },
    {
      id: "knowledge-base",
      type: "folder",
      name: "מאגר ידע",
      children: [
        {
          id: "guidelines",
          type: "doc",
          name: "הנחיות עבודה",
          short: "מסמך",
          url: "https://example.com/docs/guidelines"
        },
        {
          id: "tutorials",
          type: "folder",
          name: "מדריכים",
          children: [
            {
              id: "tutorial-1",
              type: "doc",
              name: "מדריך התקנה",
              url: "https://example.com/tutorials/install"
            }
          ]
        }
      ]
    }
  ]
};

// שימוש לדוגמה
console.log("שורש:", data.name);
console.log("כמה ילדים יש?", data.children.length);
