import IdataFormatForDraw from '../models/IdataFormatForDraw';

import optionsInterface from '../models/Ioptions';

enum ErrorTitles {
  'No callback for GET response'
}

class Loader {

    constructor(
      public baseLink: string,
      public options: object
      ) {}

    getResp(
        { endpoint, options = {} }: {endpoint: string, 
                                     options?: object},
        fallback = (data: IdataFormatForDraw): void => {
            console.error(ErrorTitles[0]);
        }
    ) {
        this.load('GET', 
                  endpoint, 
                  fallback, 
                  options);
    }

    errorHandler(res: { ok: boolean; 
                        status: number; 
                        statusText: string | undefined; 
                        json(): Promise<string> }) {      
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options :optionsInterface, endpoint :string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, 
         endpoint: string, 
         callback: Function, 
         options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err: string): void => console.error(err));
    }
}

export default Loader;
