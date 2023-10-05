import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "84323dbd063342b99cefe6df766761e3",
  },
});
