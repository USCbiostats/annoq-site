export class AnnoqUtils {

    public static filterArrayByString(mainArr, searchText) {
        if (searchText === '') {
            return mainArr;
        }

        searchText = searchText.toLowerCase();

        return mainArr.filter(itemObj => {
            return this.searchInObj(itemObj, searchText);
        });
    }

    public static searchInObj(itemObj, searchText) {
        for (const prop in itemObj) {
            if (!itemObj.hasOwnProperty(prop)) {
                continue;
            }

            const value = itemObj[prop];

            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            } else if (Array.isArray(value)) {
                if (this.searchInArray(value, searchText)) {
                    return true;
                }
            }

            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    }

    public static searchInArray(arr, searchText) {
        for (const value of arr) {
            if (typeof value === 'string') {
                if (this.searchInString(value, searchText)) {
                    return true;
                }
            }

            if (typeof value === 'object') {
                if (this.searchInObj(value, searchText)) {
                    return true;
                }
            }
        }
    }

    public static searchInString(value, searchText) {
        return value.toLowerCase().includes(searchText);
    }

    public static generateGUID() {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return S4() + S4();
    }

    public static toggleInArray(item, array) {
        if (array.indexOf(item) === -1) {
            array.push(item);
        } else {
            array.splice(array.indexOf(item), 1);
        }
    }

    public static handleize(text) {
        return text.toString().toLowerCase()
            .replace(new RegExp("/\s+/g"), '-')           // Replace spaces with -
            .replace(new RegExp("/[^\w\-]+/g"), '')       // Remove all non-word chars
            .replace(new RegExp("/\-\-+/g"), '-')         // Replace multiple - with single -
            .replace(new RegExp("/^-+/"), '')             // Trim - from start of text
            .replace(new RegExp("/-+$/"), '');            // Trim - from end of text
    }
}
