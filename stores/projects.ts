import { defineStore } from 'pinia'

interface ProjectButton {
  text: string
  link: string
  type: 'primary' | 'secondary'
}

interface Project {
  id: number | string
  title: string
  desc: string
  image: string
  stack: string[]
  buttons: ProjectButton[]
}

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    // 🔹 پروژه‌های اصلی
    projects: [
      {
        id: 1,
        title: "وب‌سایت شخصی (Portfolio Website)",
        desc: "پورتفولیوی شخصی من با استفاده از Nuxt 4، Tailwind CSS و Nuxt UI طراحی و توسعه داده شده است.",
        image: "/images/projects/portfolio.png",
        stack: ["Nuxt 4", "Tailwind CSS", "TypeScript"],
        buttons: [
          {
            text: "نمایش آنلاین",
            link: "https://omidreza.Website",
            type: "primary",
          },
          {
            text: "کد منبع",
            link: "https://github.com/itzOmidReza",
            type: "secondary",
          },
        ],
      },
      {
        id: 2,
        title: "تشخیص خرابی فلنج‌ها با هوش مصنوعی",
        desc: "مدل یادگیری عمیق برای شناسایی خرابی‌های فلنج‌های صنعتی با استفاده از شبکه‌های CNN و YOLOv8.",
        image: `https://picsum.photos/seed/${Math.random()}/600/400`,
        stack: ["Python", "YOLOv8", "TensorFlow"],
        buttons: [
          { text: "مطالعه مقاله", link: "#", type: "primary" },
          { text: "مشاهده داده‌ها", link: "#", type: "secondary" },
        ],
      },
      {
        id: 3,
        title: "پنل مدیریت محتوای شخصی",
        desc: "یک پنل مدیریتی سبک و سریع برای مدیریت پروژه‌ها و نوشته‌ها، با Nuxt Content و Supabase.",
        image: `https://picsum.photos/seed/${Math.random()}/600/400`,
        stack: ["Nuxt Content", "Supabase", "Tailwind CSS"],
        buttons: [{ text: "به‌زودی", link: "#", type: "primary" }],
      },
      {
        id: 4,
        title: "سیستم آموزشی آنلاین (E-Learning)",
        desc: "پلتفرمی برای برگزاری دوره‌ها و تمرین‌ها با داشبورد دانشجو و مربی، طراحی‌شده با Nuxt و Firebase.",
        image: `https://picsum.photos/seed/${Math.random()}/600/400`,
        stack: ["Nuxt 4", "Firebase", "Tailwind CSS"],
        buttons: [
          { text: "دمو", link: "#", type: "primary" },
          { text: "کد منبع", link: "#", type: "secondary" },
        ],
      },
      {
        id: 5,
        title: "وب‌اپ تور هوشمند (Smart Tourism)",
        desc: "نمونه‌کار پژوهشی برای جذب سرمایه‌گذاری در گردشگری هوشمند با ترکیب داده‌های مکانی و هوش مصنوعی.",
        image: `https://picsum.photos/seed/${Math.random()}/600/400`,
        stack: ["Vue", "Mapbox", "AI APIs"],
        buttons: [
          { text: "معرفی پروژه", link: "#", type: "primary" },
          { text: "کد منبع", link: "#", type: "secondary" },
        ],
      },
    ] as Project[],

    // 🔹 پروژه‌های کوچک
    miniProjects: [
      {
        id: 1,
        title: "تبدیل واحد دما",
        desc: "ابزار ساده برای تبدیل دما بین سلسیوس، فارنهایت و کلوین.",
        image: "",
        stack: ["Vue 3", "JavaScript"],
        buttons: [
          { text: "مشاهده", link: "#", type: "primary" },
          { text: "کد", link: "#", type: "secondary" },
        ],
      },
      {
        id: 2,
        title: "محاسبه‌گر BMI",
        desc: "برنامه‌ای برای محاسبه شاخص توده بدنی با رابط کاربری ساده.",
        stack: ["HTML", "CSS", "JavaScript"],
        buttons: [
          { text: "مشاهده آنلاین", link: "#", type: "primary" },
          { text: "GitHub", link: "#", type: "secondary" },
        ],
      },
      {
        id: 3,
        title: "Todo List با LocalStorage",
        desc: "لیست کارهای روزانه با ذخیره‌سازی در مرورگر کاربر.",
        stack: ["Vue 3", "Pinia", "Tailwind CSS"],
        buttons: [
          { text: "دمو", link: "#", type: "primary" },
          { text: "کد", link: "#", type: "secondary" },
        ],
      },
      {
        id: 4,
        title: "مولد رمز عبور قوی",
        desc: "ابزار تولید رمزهای قوی با تنظیمات طول و نوع کاراکتر.",
        stack: ["JavaScript", "Tailwind CSS"],
        buttons: [
          { text: "مشاهده", link: "#", type: "primary" },
        ],
      },
    ] as Project[],
  }),

  getters: {
    getAll: (state) => state.projects,
    getById: (state) => (id: number | string) => state.projects.find((p) => p.id === id),
    getMini: (state) => state.miniProjects,
  },
})
