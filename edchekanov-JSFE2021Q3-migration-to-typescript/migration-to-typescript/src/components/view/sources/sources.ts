import './sources.css';
import IdataFormatForSources from '../../models/IdataFormatForSources';

class Sources {
    draw(data: Array<IdataFormatForSources>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const itemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            const itemContainer = sourceClone.querySelector('.source__item') as HTMLElement;
            itemName.textContent = item.name;
            itemContainer.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources') as HTMLElement;
        sourcesContainer.append(fragment);
    }
}

export default Sources;
