
class mySelectors {
    input = '#js-search-input';
    searchIcon = '#js-search-icon';
    searchResults = '#js-advanced-search-results';
    articleBalance = '#js-search-advanced-results >> text=Пополнение баланса';
    articleTransfer = '.aside-menu >> text=Переводы между балансами';

    API = 'li:nth-child(4) > a';
    DBaasS = '#API > div.book-page.book-page--home > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > a > h4';
    dataStore = '#TableOfContents > ul > li > ul > li:nth-child(6) > a';
    dRequest = '#operations-Хранилища_данных-delete_datastore';

    servers = '#KB > div.book-page.book-page--home > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a > h4';
    startWork = '#js-book-page > main > article > ul > li:nth-child(5) > h3 > a';
    fix = '#js-book-page > main > article > ul > li:nth-child(1) > h3 > a';
    afterOrder = '#TableOfContents > ul > li > ul > li:nth-child(4) > a';
    payment = '#js-book-page > article > div.content > p:nth-child(23) > a';
    h1 = '#оплата-и-биллинг';

    accaunt = '#KB > div.book-page.book-page--home > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a > h4';
    articleReferralProgram = '#js-search-advanced-results > li:nth-child(1) > a > span.search__result-text';
}
module.exports = mySelectors;