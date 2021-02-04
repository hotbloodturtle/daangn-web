import HotArticles from "../component/HotArticles.js";
import { hotArticlesAction } from "../redux/actions/articles.actions.js";

class ConHotArticles {
  constructor() {
    hotArticlesAction();
  }
  render() {
    const hotArticles = new HotArticles().render();
    return hotArticles;
  }
}

export default ConHotArticles;
