export const nav = [
  {
    name: "КФС",
    href: "/kfu",
    active: false,
    doughter: [
      {
        name: "О СОЮЗЕ",
        href: "/kfu/about",
      },
      {
        name: "ВИДЕНИЕ И МИССИЯ СОЮЗА",
        href: "/kfu/futureAndGoals",
      },
      {
        name: "ИСПОЛНИТЕЛЬНЫЙ КОМИТЕТ",
        href: "/kfu/executiveCommit",
      },
      {
        name: "СЕКРЕТАРИАТ КФС",
        href: "/kfu/kfuSecretariat",
      },
      {
        name: "ПАРТНЕРЫ",
        href: "/kfu/partners",
      },
      {
        name: "РЕГИОНЫ",
        href: "/kfu/regions",
      },
      {
        name: "ТРЕНЕРСКОЕ ОБРАЗОВАНИЕ",
        href: "/kfu/coachingEducation",
      },
      {
        name: "ПРОГРАММЫ",
        href: "/kfu/programs",
      },
      {
        name: "ПРЕСС-ЦЕНТР",
        href: "/kfu/pressCenter",
      },
      {
        name: "ДОКУМЕНТЫ",
        href: "/kfu/documentation",
      },
    ],
  },
  {
    name: "ТУРНИРЫ",
    href: "/tournament",
  },
  {
    name: "СБОРНЫЕ",
    href: "/team",
    active: false,
    doughter: [
      {
        name: "ФУТБОЛ",
        href: "/team/football",
      },
      {
        name: "ФУТЗАЛ",
        href: "/team/futsal",
        active: false,
        doughter: [
          {
            name: "Национальная сборная",
            href: "/team/futsal/mainTeam",
          },
          {
            name: "Юношеская сборная",
            href: "/team/futsal/childrenTeam",
          },
        ],
      },
    ],
  },
  {
    name: "ФУТЗАЛ",
    href: "/futsal",
  },
];

export const secondNav = [
  {
    name: "ЛИГИ",
    href: "/leagues",
  },
  {
    name: "ПРОЕКТЫ",
    href: "/projects",
  },
  {
    name: "ДЛЯ БОЛЕЛЬЩИКОВ",
    href: "/forFans",
  },
  {
    name: "ВАКАНСИИ",
    href: "/vacancies",
  },
];
