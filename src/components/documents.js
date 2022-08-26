export const documents = {
  type: "container",
  props: {
    orientation: "vertical",
  },
  children: [
    {
      id: "column1",
      type: "container",
      name: "Обязательные для всех",
      title: "Документы, обязательные для всех сотрудников без исключения",
      flags: ["#FF238D", "#FFB800", "#FFB800"],
      full: true,
      show: false,
      props: {
        orientation: "vertical",
        className: "card-container",
      },
      children: [
        {
          id: "11",
          type: "draggable",
          name: "Паспорт",
          title: "Для всех",
          flags: ["#00c2ff"],
          required: true,
        },
        {
          id: "12",
          type: "draggable",
          name: "ИНН",
          title: "Для всех",
          flags: [],
          required: true,
        },
      ],
    },
    {
      id: "column2",
      type: "container",
      name: "Обязательные для трудоустройства",
      title:
        "Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",
      flags: [],
      full: true,
      show: false,
      props: {
        orientation: "vertical",
        className: "card-container",
      },
      children: [],
    },
    {
      id: "column3",
      type: "container",
      name: "Специальные",
      title: "",
      flags: [],
      full: true,
      show: false,
      props: {
        orientation: "vertical",
        className: "card-container",
      },
      children: [],
    },
    {
      id: "column4",
      type: "container",
      name: "",
      title: "",
      flags: [],
      full: false,
      show: true,
      props: {
        orientation: "vertical",
        className: "card-container",
      },
      children: [
        {
          id: "41",
          type: "draggable",
          name: "Тестовое задание кандидата",
          title:
            "Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",
          flags: [],
          required: false,
        },
        {
          id: "42",
          type: "Трудовой договор",
          name: "ИНН",
          title: "",
          flags: ["#0066FF", "#8E9CBB"],
          required: false,
        },
        {
          id: "43",
          type: "draggable",
          name: "Мед. книжка",
          title: "",
          flags: [],
          required: false,
        },
      ],
    },
  ],
};

// type: "container",
//   props: {
//     orientation: "vertical",
//   },
//   children: generateItems(3, (i) => ({
//     id: `column${i}`,
//     type: "container",
//     name: columnNames[i],
//     props: {
//       orientation: "vertical",
//       className: "card-container",
//     },
//     children: generateItems(3, (j) => ({
//       type: "draggable",
//       id: `${i}${j}`,
//       props: {
//         className: "card",
//         style: { backgroundColor: pickColor() },
//         // style: { backgroundColor: "#97CAFC" },
//       },
//       number: Math.floor(Math.random() * 100),
//       data: lorem.slice(0, Math.floor(Math.random() * 150) + 30),
//     })),
//   })),
