import { FilterConfigInterFace } from '../interfaces/filterConfig.interfaces';
export declare class FilterConfig implements FilterConfigInterFace {
    key: string;
    name: string;
    placeholder?: string;
    restrictToSuggestedValues?: boolean;
    suggestedValues?: string[];
    allowMultiple?: boolean;
    constructor();
}
