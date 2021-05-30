
class myLocators {
    tab2 = 'nav > ul > li:nth-child(2) > button';
    individualSolutions = '.main-nav__dropdown--visible .nav-dropdown__categories-item:nth-child(2) > .nav-dropdown__categories-link';
    dataCenter = '.nav-dropdown__body-wrapper--active:nth-child(2) .menu-link:nth-child(5) .menu-link__title-text';

    newsSubscribe = 'div.footer__info-contacts.footer-contacts > a';
    form = 'div > form';
    inputMail = '//input[@placeholder= "Ваш email"]';
    checkbox = 'span.ant-checkbox > input';
    sendForm = 'form > button';
    successText = 'div > div.s-section__content > div > div';

    tab1 = 'nav > ul > li:nth-child(1) > button';
    kuber = '.main-nav__list-item:nth-child(1) .nav-dropdown__body-wrapper:nth-child(1) .menu-link:nth-child(4) .menu-link__title-text:nth-child(1)';
    API = 'div.ant-tabs-bar.ant-tabs-left-bar > div > div > div > div > div:nth-child(1) > div:nth-child(2)';
    APIKubernetes = 'div.ant-tabs-tabpane.ant-tabs-tabpane-active > a';

    dCenters = 'div.footer__menu.footer-menu > div:nth-child(1) > div:nth-child(1) > ul > li:nth-child(3) > a';
    section2 = 'div.ant-tabs-bar.ant-tabs-left-bar > div > div > div > div > div:nth-child(1) > div:nth-child(2)';
    h3 = 'div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.content-widget__block > div > div > h3';
    location = 'div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-large-bar > div > div > div > div > div:nth-child(1) > div:nth-child(3)';
    CV2 = 'div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.container > div > div.col-xl-3 > h3';

    en = 'ul.header__manage-list > li:nth-child(1) > a';
    h2 = 'section:nth-child(4) > div > div.row > div > div > h2';
    DBaaS = '.main-nav__list-item:nth-child(1) .nav-dropdown__body-wrapper:nth-child(1) .menu-link:nth-child(6) .menu-link__title-text:nth-child(1)';
    hDBaaS = 'div.col-lg-7.teaser__container > div > h1';
    cloudServers = 'a.products__item.nuxt-link-active';
    hCP = 'div.col-lg-7.teaser__container > div > h1';
}
module.exports = myLocators;