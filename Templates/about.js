/* 
* @Author: Marte
* @Date:   2016-12-05 22:45:44
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-09 23:25:20
*/

$(document).ready(function(){
    $('#myList>li').click(function() {
        /* Act on the event */
        $(this).children('a').addClass('lList');
        $(this).siblings().children('a').removeClass('lList');
    });

    $('.art ul li').each(function(i,item) {
         /* iterate through array or object */
         $(item).click(function() {
             /* Act on the event */

            $('.r .art p').css('font-size',12+i+'px')
         });
    });
    $('#myList>li>a').click(function() {
        /* Act on the event */
        $(this).siblings('ul').slideToggle(400);
    });
});