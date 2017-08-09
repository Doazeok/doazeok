m_site = {
}
// $(document).ready(function() {
    pager.extendWithPage(m_site);
    ko.applyBindings(m_site);
    pager.start();

    // if (window.location.pathname == '/' && window.location.hash == '') {
    //     pager.goTo('main');
    // }
// });
