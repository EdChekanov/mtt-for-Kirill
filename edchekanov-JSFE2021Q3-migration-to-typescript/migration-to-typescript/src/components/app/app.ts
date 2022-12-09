import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import IdataFormatForDraw from '../models/IdataFormatForDraw';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLElement;
        const showNewsContent = (e: MouseEvent) => {
          this.controller.getNews(e, (data: IdataFormatForDraw) => this.view.drawNews(data));
        }
        sources.addEventListener('click', showNewsContent);
        this.controller.getSources((data: IdataFormatForDraw) => this.view.drawSources(data));
    }
}

export default App;
