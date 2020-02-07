// nav__menu--item jQuery적용

var menu = $('.mypage__menu');
var items = $('.mypage__menu-item');

items.on('click keyup focus', function(e){
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        items.removeClass('mypage__menu-act');
        $(this).addClass('mypage__menu-act');
    }
});

var category = $('.mileage__category');
var categoryItems = $('.mileage__category-item');

categoryItems.on('click keyup focus', function(e){
    if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13) || e.type === 'focus') {
        categoryItems.removeClass('mileage__category-item--active');
        $(this).addClass('mileage__category-item--active');
    }
});