/**
 * A quick and dirty proof of concept table to DTO ("Data Transfer Object") converter
 *
 * Uses jQuery. Sorry. But it works for a PoC.
 */

var editButtonTemplate = '<button name="edit" class="button positive btn-edit" title="edit"><i class="icon-edit" aria-hidden="true" title="Edit"></i></button>',
    lightboxTemplate = '<div id="compatLightbox" class="content_overlay"><h2>Edit this table</h2><form id="editCompatForm"></form><a href="#" data-trigger="close">Close</a></div><div id="fade" class="black_overlay"></div>';

$(document).one('mouseover', '.bc-table', function(event) {
    var currentTarget = $(event.currentTarget),
        isTransformed = currentTarget.data('transformed') || false;

    if (isTransformed === false) {

        /**
         * Add edit button
         */
        currentTarget.find('.bc-mediums td:first-child').each(function(index, domObj) {
            var  table = $(domObj.parentNode.parentNode.parentNode)
                ,newFoot = $('<tfoot></tfoot>')
                ,newTr = $('<tr class="edit-row"></tr>')
                ,newTd = $('<td></td>').attr('colspan', domObj.parentNode.childNodes.length);
            $(newFoot.append(newTr.append(newTd.append($(editButtonTemplate))))).appendTo(table);
        });

        /**
         * Add metadata to browser colums
         *
         * Each browser column represent a browser, lets create an index map to merge them up
         * later.
         */
        currentTarget.find('thead .bc-browsers th').each(function(browserColIndex, browserHeading) {
            var slug = $(browserHeading).attr('class').replace('bc-browser-', '');
            $(browserHeading)
                .attr('data-browsers', browserColIndex)
                .attr('data-item-slug', escape(slug));
        });

        /**
         * Each row represent a child-feature "supports"
         *
         * Add index mapping of features, each of them will have a list of browser
         * with a matching browser
         */
        currentTarget.find('tbody tr').each(function(featureIndex, featureRowObj) {
            var currFeatureLabel = $(featureRowObj).find('th:first-child');
            if (!!currFeatureLabel[0]) {
                var featureLabel = $(currFeatureLabel[0]);
                $(featureRowObj)
                    .attr('data-feature', featureIndex)
                    .attr('data-feature-label', escape(featureLabel.text()));
            }
            $(featureRowObj).find('td').each(function(supportEntryIndex, supportEntryObj) {
                var supportValueObj = $(supportEntryObj).clone(),
                    labelString = supportValueObj.find('abbr').text().trim(),
                    supportDto = {
                        supports: {
                            label: labelString
                        },
                        browser: {}
                    }
                    // Below is because DOMTokenList is not an array. Go figure.
                    ,
                    supportFlags = supportValueObj[0].className.split(' ');

                var tmp = supportValueObj.find('abbr').remove();
                supportDto.browser.version = supportValueObj.text().trim();

                supportFlags.forEach(function(itemString, itemIndex) {
                    var w = itemString.replace('bc-', '')
                    kv = w.replace('bc-', '').split('-');
                    if (/^supports|browser$/.test(kv[0]) && supportDto.hasOwnProperty(kv[0])) {
                        supportDto[kv[0]]['slug'] = kv[1];
                    }
                });
                $(supportEntryObj)
                    .attr('data-browsers', supportEntryIndex)
                    .attr('data-browsers-support-value', JSON.stringify(supportDto));
            });

        });

        currentTarget.data('transformed', true);
    }
});

$(document).on('click', '#compatLightbox a[data-trigger=close]', function(event) {
    event.preventDefault();
    var newTable = $('#editCompatForm > table'),
        moveTo = $('#tableRestSpace');
    $('#compatLightbox').css('display', 'none');
    $('#fade').css('display', 'none');
    newTable.remove();
    moveTo.html(newTable);
});

/*
 * TODO
 *
 * make the table move along with attached DTO.
 * currently we lose table data objects during .html(movedTable)
 *
$(document).one('click', 'button[name=dto]', function(event) {
    event.preventDefault();
    var  button = $(event.currentTarget)
        ,table = $(event.currentTarget.parentNode.parentNode.parentNode.parentNode);
    button.remove();
    console.log(table);
    var  preBlock = $('<pre class="language-js"></pre>').text(JSON.stringify(table.data('dto'), null, ' '))
        ,codeBlock = $('<div><h1>CompatTable deserialized</h1></div>').append(preBlock);
    codeBlock.insertAfter(table);
});
*/

$(document).on('click', 'button[name=edit]', function(event) {
    event.preventDefault();
    var tableObj = $(event.currentTarget.parentNode.parentNode.parentNode.parentNode),
        outcomeObj = [];

    if (!tableObj.data('is-form')) {
        tableObj.wrap('<div id="tableRestSpace"></div>');
        $('body').prepend(lightboxTemplate);
        $('#compatLightbox').css('display', 'block');
        $('#fade').css('display', 'block');
        tableObj.find('[data-browsers-support-value]').each(function(eachIndex, obj) {
            var pack = $(obj).data('browsers-support-value'),
                featureLabel = $(obj.parentNode).data('feature-label'),
                browserIndex = $(obj).data('browsers'),
                supportsIndex = $(obj.parentNode).data('feature');

            pack.supports.label = featureLabel;
            pack.supports.index = supportsIndex;
            pack.browser.index = browserIndex;

            //console.log('packing', pack);
            outcomeObj.push(pack);

            var input = $('<input type=text value="" name="" class="ui-widget-content" style="width:30px;" />');
            var fieldValueText = (pack.browser.version === "") ? "?" : pack.browser.version;
            input
                .attr('value', fieldValueText)
                .attr('name', "supports[" + supportsIndex + "][" + browserIndex + "]");

            $(obj).html(input);
        });
        //tableObj.data('dto', outcomeObj); // Figure out how to move dto and table contents
        console.log('serialized into DTO', outcomeObj);
        tableObj.data('is-form', true);
        //tableObj.find('button[title=edit]').remove();
        $('#editCompatForm').html(tableObj);
    } else {
        console.log('Table is already transformed as form');
    }
});
