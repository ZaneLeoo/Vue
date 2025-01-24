import image001 from "../assets/001.jpg";
import image002 from "../assets/002.jpg";

const coach = {
  state: {
    coaches: [
      {
        id: "001",
        image: image001,
        name: "Zane Leo",
        salary: "$60/hour",
        tags: ["ARTIST", "DANCER"],
        introduction: "I am a web developer,but I also art and dance!😎",
      },
      {
        id: "002",
        image: image002,
        name: "Yanzu Peng",
        salary: "$70/hour",
        tags: ["DANCER"],
        introduction: "I am a dancer,dance with me!🕺",
      },
    ],
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    oneCoach: (state) => (id) => {
      return state.coaches.find((coach) => coach.id === id);
    },
  },
  mutations: {
    addCoach(state, newCoach) {
      state.coaches.unshift(newCoach);
    },
  },
  actions: {
    addCoach(context, payload) {
      const tags = payload.tags.split(",");
      const newCoach = {
        id: new Date().toISOString(),
        name: payload.name,
        salary: payload.salary,
        introduction: payload.introduction,
        tags: tags,
        image: image002,
      };
      context.commit("addCoach", newCoach);
    },
  },
};

export default coach;
