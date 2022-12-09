import IdataFormatForNews from '../models/IdataFormatForNews';
import IdataFormatForSources from '../models/IdataFormatForSources';

export default interface IdataFormatForDraw {
  articles?: Array<IdataFormatForNews>;
  status: string;
  totalResults?: number;
  sources?: Array<IdataFormatForSources>;
}
