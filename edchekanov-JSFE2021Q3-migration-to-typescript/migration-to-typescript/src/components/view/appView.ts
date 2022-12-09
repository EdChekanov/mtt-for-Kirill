import News from './news/news';
import Sources from './sources/sources';
import IdataFormatForDraw from '../models/IdataFormatForDraw';
import IdataFormatForNews from '../models/IdataFormatForNews';
import IdataFormatForSources from '../models/IdataFormatForSources';

export class AppView {
    public news: News;
    public sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IdataFormatForDraw) {
        const values: Array<IdataFormatForNews> = data.articles 
                                                     ? data.articles 
                                                     : [];
        this.news.draw(values);
    }

    drawSources(data: IdataFormatForDraw) {
        const values: Array<IdataFormatForSources> = data.sources 
                                                        ? data.sources 
                                                        : [];
        this.sources.draw(values);
    }
}

export default AppView;
