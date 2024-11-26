import { browser } from '@wdio/globals';
import DataGenerator from '../utils/DataGenerator';
import TIMEOUTS from '../utils/timeoutConstant';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    constructor() {
        this.TIMEOUTS = TIMEOUTS;
    }
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    async open(path) {
        return await browser.url(path);
    }
}
