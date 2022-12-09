import './news.css';
import IdataFormatForNews from '../../models/IdataFormatForNews';

class News {
    draw(data: Array<IdataFormatForNews>) {
        const borderNumber: number = 10;
        const news = data.length >= borderNumber 
                        ? data.filter((item, idx) => idx < borderNumber) 
                        : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IdataFormatForNews, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const newsItem = newsClone.querySelector('.news__item') as HTMLElement;

            if (idx % 2) newsItem.classList.add('alt');

            const metaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement
            metaPhoto.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const metaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement
            metaAuthor.textContent = item.author || item.source.name;
            const metaDate = newsClone.querySelector('.news__meta-date') as HTMLElement
            metaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            const descriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const descriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            const descriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const readMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            descriptionTitle.textContent = item.title;
            descriptionSource.textContent = item.source.name;
            descriptionContent.textContent = item.description;
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
          }
            );
        const newsContainer = document.querySelector('.news') as HTMLElement
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
