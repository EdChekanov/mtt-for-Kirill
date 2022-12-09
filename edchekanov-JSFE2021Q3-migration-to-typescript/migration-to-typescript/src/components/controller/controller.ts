import AppLoader from './appLoader';
import IdataFormatForDraw from '../models/IdataFormatForDraw';

const isHtmlElement = (v: EventTarget | null): v is HTMLElement => v instanceof HTMLElement;
enum endpoints {
  'sources'
}

class AppController extends AppLoader {
    getSources(callback: (data: IdataFormatForDraw) => void) {
        super.getResp(
            {endpoint: endpoints[0]},
            callback
        );
    }

    getNews(e: Event, callback: (data: IdataFormatForDraw) => void) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (target !== newsContainer) {
          if(isHtmlElement(target) && isHtmlElement(newsContainer)) {
            if (target.classList.contains('source__item')) {
              const sourceId = target.getAttribute('data-source-id');
              if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
                  newsContainer.setAttribute('data-source', sourceId);
                  super.getResp(
                      {
                          endpoint: 'everything',
                          options: {
                              sources: sourceId,
                          },
                      },
                      callback
                  );
              }
              return;
            }
          }
          if (isHtmlElement(target)) {
            target = target.parentNode;
          }
        }
    }
}

export default AppController;
