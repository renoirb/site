__NUXT_JSONP__("/blog/2013/03/creating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{},{},{},{canonical:s,content:{locale:n,title:"Creating and using Javascript events while combining events on two separates behaviors",canonical:s,status:"publish",revising:o,caption:j,caracteresBizzares:j,gallery:j,migrateCode:o,migrateImages:j,migrateLinks:o,created:"2013-03-29",updated:"2013-04-01",categories:[t],tags:["integration","javascript","techniques"],description:"Creating and using Javascript events while combining events",excerpt:"This is an article I wrote on my new project \"HTML and CSS The Right way\". I wrote it when I discovered something that chocked me: Did you know that the ‘click’ event is only a string and you can create any event name you may want? Here is an experimentation example.",toc:[],body:{type:p,children:[{type:b,tag:e,props:{},children:[{type:a,value:"I discovered something that chocked me: Did you know that the ‘click’ event is only a string and you can create any event name you may want? Here is an experimentation example."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"During web development, it often happens you want to attach events handler on something in your page. A common usage could be you want to flip a plus sign to a minus sign when you click on a button."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Later in a script you may be compelled to do something similar to the following (assuming you are using jQuery):"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"$(document).ready(function(){\n\u002F\u002F Rest of the document in document.ready\n\u002F\u002F DO NOT USE AS-IS, SEE LAST EXAMPLE\n\n    $('.flip-icon.).click(function(event){\n        event.preventDefault();\n        var clicked = $(this);\n        var flipElement = clicked.find('i');\n        if (flipElement.hasClass('icon-plus')) {\n            flipElement.removeClass('icon-plus').addClass('icon-minus');\n        } else {\n            flipElement.removeClass('icon-minus').addClass('icon-plus');\n        }\n    });\n});"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"But what happens if you want to add other events such as, for example, "},{type:b,tag:q,props:{},children:[{type:a,value:"activating an accordion"}]},{type:a,value:". You may end up with duplicating events and get some collisions."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"Did you know that the ‘click’ event is only a string and you can create any event name you may want?"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"To describe what I am refering to, I have a add an other behavior that will also, in part, require the previous example."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Imagine we have an accordion managed already grabbing the element’s "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" click event handler."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"$(document).ready(function(){\n\u002F\u002F Rest of the document in document.ready\n\u002F\u002F DO NOT USE AS-IS, SEE LAST EXAMPLE\n\n    $('a[data-target]').click(function(event){\n        \u002F\u002F do the accordion stuff\n    });\n});"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"But, what if for some reason, our page has to reload some sections and our event handler managing the "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" click gets lost"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Instead, of creating a click specific event handler (what if we want to change) and be potentially lost with the element to attach event onto."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You can use "},{type:b,tag:h,props:{href:v},children:[{type:a,value:"jQuery’s "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:m}]},{type:a,value:" and attach an event to the "},{type:b,tag:d,props:{},children:[{type:a,value:"\u003Cbody\u003E"}]},{type:a,value:", a safe element that every document has."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Things to note about the "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" method:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"First parameter is an event name, can be ANYTHING (yes, you read it), space separated"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Second element is on what to listen, can be null"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"a "},{type:b,tag:d,props:{},children:[{type:a,value:"Function"}]},{type:a,value:" object to handle the event"}]},{type:a,value:c}]},{type:a,value:"\nAlso, there is nice thing about bubbling.\n"},{type:b,tag:e,props:{},children:[{type:a,value:"When an event happens, the event crawls the DOM up to the body (called ‘catch’) then gets back to the triggerer element (called ‘bubbling’) and firing in that order all event handlers."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Knowing all of this now, instead of attaching a single event type handler to a specific element, let’s take advantage of our new knowledge."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"'use strict';\n$(document).ready(function(){\n\u002F\u002F Rest of your document\n\n    \u002F\u002F Look at the 'flip-my-icon-event', we just made-up that one. See below.\n    $('body').on('click flip-my-icon-event', '.flip-icon', function(){\n\u002F* Look here     *************************                                       *\u002F\n        \u002F\u002F Let's put it also in a self-executing anonymous, to isolate scope\n        (function(triggered){\n\n            \u002F\u002F Same as earlier.\n            var clicked = $(this);\n            var flipElement = clicked.find('i');\n            if (flipElement.hasClass('icon-plus')) {\n                flipElement.removeClass('icon-plus').addClass('icon-minus');\n            } else {\n                flipElement.removeClass('icon-minus').addClass('icon-plus');\n            }\n            \u002F\u002F End same as earlier\n\n        })($(this)); \u002F\u002F this fires the self-executing.\n    });\n\n    $('body').on('click', 'a[data-target]', function(event){\n        event.preventDefault();\n\n        \u002F\u002F do the accordion stuff\n        var collapsible = $($(this).attr('data-target'));\n        if (typeof collapsible.attr('data-collapsible') === 'undefined')  {\n            collapsible\n                .collapse()\n                .attr('data-collapsible', 'applied')\n                .on('show', function(){\n                    jQuery(this).parent().removeClass('is-hidden');\n                })\n                .on('hide', function(){\n                    jQuery(this).parent().addClass('is-hidden');\n                });\n        \u002F\u002F End do the accordion stuff\n\n        jQuery(this).trigger('click').trigger('flip-my-icon-event');\n\u002F* Look here                         *******************************        *\u002F\n        }\n    });\n});"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The following works, because of the following trigger html pattern, as from the begining:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"And of the following:"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"We have an icon for "},{type:b,tag:d,props:{},children:[{type:a,value:".icon-plus"}]},{type:a,value:w},{type:b,tag:d,props:{},children:[{type:a,value:".icon-minus"}]},{type:a,value:" class names"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" attribute has ALSO a "},{type:b,tag:d,props:{},children:[{type:a,value:".flip-icon"}]},{type:a,value:" class name"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:x},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" triggers our made-up "},{type:b,tag:d,props:{},children:[{type:a,value:"flip-my-icon-event"}]},{type:a,value:" event to an element that also matches (see the two ‘look here’ comments)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:"References"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fwebplatform.github.io\u002Fdocs\u002Ftutorials\u002Fevents_in_javascript"},children:[{type:b,tag:y,props:{},children:[{type:a,value:"WPD"}]},{type:a,value:" Events in Javascript (WebPlatform.org)"}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fjquery\u002Fjquery\u002Fblob\u002Fmaster\u002Fsrc\u002Fevent.js#L206"},children:[{type:a,value:z},{type:b,tag:d,props:{},children:[{type:a,value:"trigger"}]},{type:a,value:m}]},{type:a,value:A}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fgithub.com\u002Fjquery\u002Fjquery\u002Fblob\u002Fmaster\u002Fsrc\u002Fevent.js#L715"},children:[{type:a,value:z},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:m}]},{type:a,value:A}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:v},children:[{type:a,value:"jQuery documentation "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:m}]},{type:a,value:" * "},{type:b,tag:y,props:{},children:[{type:a,value:"Note"}]},{type:a,value:" direct events handlers such as "},{type:b,tag:d,props:{},children:[{type:a,value:"live"}]},{type:a,value:", or "},{type:b,tag:d,props:{},children:[{type:a,value:"delegate"}]},{type:a,value:" are considered deprecated (as of jQuery 1.7) "},{type:b,tag:h,props:{href:"http:\u002F\u002Fapi.jquery.com\u002Fdelegate\u002F"},children:[{type:a,value:"see delegate API"}]},{type:a,value:w},{type:b,tag:h,props:{href:"http:\u002F\u002Fapi.jquery.com\u002Flive\u002F"},children:[{type:a,value:"live API"}]},{type:a,value:" notes."}]},{type:a,value:c}]}]},text:"---\nlocale: en-CA\ntitle: \u003E-\n  Creating and using Javascript events while combining events on two separates\n  behaviors\ncanonical: \u003E-\n  https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F03\u002Fcreating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors\u002F\nstatus: publish\nrevising: true\ncaption: false\ncaracteresBizzares: false\ngallery: false\nmigrateCode: true\nmigrateImages: false\nmigrateLinks: true\ncreated: '2013-03-29'\nupdated: '2013-04-01'\ncategories:\n  - programmation\ntags:\n  - integration\n  - javascript\n  - techniques\ndescription: Creating and using Javascript events while combining events\nexcerpt: \u003E-\n  This is an article I wrote on my new project \"HTML and CSS The Right way\". I\n  wrote it when I discovered something that chocked me: Did you know that the\n  ‘click’ event is only a string and you can create any event name you may want?\n  Here is an experimentation example.\n---\n\nI discovered something that chocked me: Did you know that the ‘click’ event is only a string and you can create any event name you may want? Here is an experimentation example.\n\nDuring web development, it often happens you want to attach events handler on something in your page. A common usage could be you want to flip a plus sign to a minus sign when you click on a button.\n\u003Cpre\u003E\u003Ccode\u003E&lt;a href=\"\u002Fsome\u002Furl\u002F324\" class=\"flip-icon\" data-target=\"#generated-324\"&gt;&lt;i class=\"icon-plus\"&gt;&lt;\u002Fi&gt;&lt;\u002Fa&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\nLater in a script you may be compelled to do something similar to the following (assuming you are using jQuery):\n\u003Cpre\u003E$(document).ready(function(){\n\u002F\u002F Rest of the document in document.ready\n\u002F\u002F DO NOT USE AS-IS, SEE LAST EXAMPLE\n\n    $('.flip-icon.).click(function(event){\n        event.preventDefault();\n        var clicked = $(this);\n        var flipElement = clicked.find('i');\n        if (flipElement.hasClass('icon-plus')) {\n            flipElement.removeClass('icon-plus').addClass('icon-minus');\n        } else {\n            flipElement.removeClass('icon-minus').addClass('icon-plus');\n        }\n    });\n});\u003C\u002Fpre\u003E\nBut what happens if you want to add other events such as, for example, \u003Cem\u003Eactivating an accordion\u003C\u002Fem\u003E. You may end up with duplicating events and get some collisions.\n\n\u003Cem\u003EDid you know that the ‘click’ event is only a string and you can create any event name you may want?\u003C\u002Fem\u003E\n\nTo describe what I am refering to, I have a add an other behavior that will also, in part, require the previous example.\n\nImagine we have an accordion managed already grabbing the element’s \u003Ccode\u003Ea[data-target]\u003C\u002Fcode\u003E click event handler.\n\u003Cpre\u003E$(document).ready(function(){\n\u002F\u002F Rest of the document in document.ready\n\u002F\u002F DO NOT USE AS-IS, SEE LAST EXAMPLE\n\n    $('a[data-target]').click(function(event){\n        \u002F\u002F do the accordion stuff\n    });\n});\u003C\u002Fpre\u003E\nBut, what if for some reason, our page has to reload some sections and our event handler managing the \u003Ccode\u003Ea[data-target]\u003C\u002Fcode\u003E click gets lost\n\nInstead, of creating a click specific event handler (what if we want to change) and be potentially lost with the element to attach event onto.\n\nYou can use \u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002Fon\u002F\"\u003EjQuery’s \u003Ccode\u003Eon\u003C\u002Fcode\u003E method\u003C\u002Fa\u003E and attach an event to the \u003Ccode\u003E&lt;body&gt;\u003C\u002Fcode\u003E, a safe element that every document has.\n\nThings to note about the \u003Ccode\u003Eon\u003C\u002Fcode\u003E method:\n\u003Cul\u003E\n\t\u003Cli\u003EFirst parameter is an event name, can be ANYTHING (yes, you read it), space separated\u003C\u002Fli\u003E\n\t\u003Cli\u003ESecond element is on what to listen, can be null\u003C\u002Fli\u003E\n\t\u003Cli\u003Ea \u003Ccode\u003EFunction\u003C\u002Fcode\u003E object to handle the event\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\nAlso, there is nice thing about bubbling.\n\nWhen an event happens, the event crawls the DOM up to the body (called ‘catch’) then gets back to the triggerer element (called ‘bubbling’) and firing in that order all event handlers.\n\nKnowing all of this now, instead of attaching a single event type handler to a specific element, let’s take advantage of our new knowledge.\n\u003Cpre\u003E'use strict';\n$(document).ready(function(){\n\u002F\u002F Rest of your document\n\n    \u002F\u002F Look at the 'flip-my-icon-event', we just made-up that one. See below.\n    $('body').on('click flip-my-icon-event', '.flip-icon', function(){\n\u002F* Look here     *************************                                       *\u002F\n        \u002F\u002F Let's put it also in a self-executing anonymous, to isolate scope\n        (function(triggered){\n\n            \u002F\u002F Same as earlier.\n            var clicked = $(this);\n            var flipElement = clicked.find('i');\n            if (flipElement.hasClass('icon-plus')) {\n                flipElement.removeClass('icon-plus').addClass('icon-minus');\n            } else {\n                flipElement.removeClass('icon-minus').addClass('icon-plus');\n            }\n            \u002F\u002F End same as earlier\n\n        })($(this)); \u002F\u002F this fires the self-executing.\n    });\n\n    $('body').on('click', 'a[data-target]', function(event){\n        event.preventDefault();\n\n        \u002F\u002F do the accordion stuff\n        var collapsible = $($(this).attr('data-target'));\n        if (typeof collapsible.attr('data-collapsible') === 'undefined')  {\n            collapsible\n                .collapse()\n                .attr('data-collapsible', 'applied')\n                .on('show', function(){\n                    jQuery(this).parent().removeClass('is-hidden');\n                })\n                .on('hide', function(){\n                    jQuery(this).parent().addClass('is-hidden');\n                });\n        \u002F\u002F End do the accordion stuff\n\n        jQuery(this).trigger('click').trigger('flip-my-icon-event');\n\u002F* Look here                         *******************************        *\u002F\n        }\n    });\n});\u003C\u002Fpre\u003E\nThe following works, because of the following trigger html pattern, as from the begining:\n\u003Cpre\u003E\u003Ccode\u003E&lt;a href=\"\u002Fsome\u002Furl\u002F324\" class=\"flip-icon\" data-target=\"#generated-324\"&gt;&lt;i class=\"icon-plus\"&gt;&lt;\u002Fi&gt;&lt;\u002Fa&gt;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\nAnd of the following:\n\u003Cul\u003E\n\t\u003Cli\u003EWe have an icon for \u003Ccode\u003E.icon-plus\u003C\u002Fcode\u003E and \u003Ccode\u003E.icon-minus\u003C\u002Fcode\u003E class names\u003C\u002Fli\u003E\n\t\u003Cli\u003EThe \u003Ccode\u003Ea[data-target]\u003C\u002Fcode\u003E attribute has ALSO a \u003Ccode\u003E.flip-icon\u003C\u002Fcode\u003E class name\u003C\u002Fli\u003E\n\t\u003Cli\u003EThe \u003Ccode\u003Ea[data-target]\u003C\u002Fcode\u003E triggers our made-up \u003Ccode\u003Eflip-my-icon-event\u003C\u002Fcode\u003E event to an element that also matches (see the two ‘look here’ comments)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cem\u003EReferences\u003C\u002Fem\u003E\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwebplatform.github.io\u002Fdocs\u002Ftutorials\u002Fevents_in_javascript\"\u003E\u003Cstrong\u003EWPD\u003C\u002Fstrong\u003E Events in Javascript (WebPlatform.org)\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\t\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjquery\u002Fjquery\u002Fblob\u002Fmaster\u002Fsrc\u002Fevent.js#L206\"\u003EjQuery \u003Ccode\u003Etrigger\u003C\u002Fcode\u003E method\u003C\u002Fa\u003E from the jQuery source\u003C\u002Fli\u003E\n\t\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fjquery\u002Fjquery\u002Fblob\u002Fmaster\u002Fsrc\u002Fevent.js#L715\"\u003EjQuery \u003Ccode\u003Eon\u003C\u002Fcode\u003E method\u003C\u002Fa\u003E from the jQuery source\u003C\u002Fli\u003E\n\t\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002Fon\u002F\"\u003EjQuery documentation \u003Ccode\u003Eon\u003C\u002Fcode\u003E method\u003C\u002Fa\u003E * \u003Cstrong\u003ENote\u003C\u002Fstrong\u003E direct events handlers such as \u003Ccode\u003Elive\u003C\u002Fcode\u003E, or \u003Ccode\u003Edelegate\u003C\u002Fcode\u003E are considered deprecated (as of jQuery 1.7) \u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002Fdelegate\u002F\"\u003Esee delegate API\u003C\u002Fa\u003E and \u003Ca href=\"http:\u002F\u002Fapi.jquery.com\u002Flive\u002F\"\u003Elive API\u003C\u002Fa\u003E notes.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",dir:"\u002Fblog\u002F2013\u002F03",path:"\u002Fblog\u002F2013\u002F03\u002Fcreating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors",extension:".md",slug:B,createdAt:C,updatedAt:C,category:t},coverImage:{toc:[],body:{type:p,children:[]},text:D},month:"03",next:{locale:n,title:"Encapsulate a LDAP DN string using Arrays in PHP",path:"\u002Fblog\u002F2013\u002F04\u002Fencapsulate-a-ldap-dn-string-using-an-array-in-php",slug:"encapsulate-a-ldap-dn-string-using-an-array-in-php"},preamble:{toc:[],body:{type:p,children:[]},text:D},prettyfiedTemporalDate:{prettified:"Friday, March 29, 2013",temporalDate:"2013-03-29"},prev:{locale:n,title:"Introduction to the Hypermedia",path:"\u002Fblog\u002F2012\u002F10\u002Fmy-first-introduction-to-the-hypermedia",slug:"my-first-introduction-to-the-hypermedia"},slug:B,year:"2013"}],fetch:[],mutations:void 0}}("text","element","\n","code","p","\n\t","li","a","pre",false,"a[data-target]","on"," method","en-CA",true,"root","em","ul","https:\u002F\u002Frenoirboulanger.com\u002Fblog\u002F2013\u002F03\u002Fcreating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors\u002F","programmation","\u003Ca href=\"\u002Fsome\u002Furl\u002F324\" class=\"flip-icon\" data-target=\"#generated-324\"\u003E\u003Ci class=\"icon-plus\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E","http:\u002F\u002Fapi.jquery.com\u002Fon\u002F"," and ","The ","strong","jQuery "," from the jQuery source","creating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors","2024-10-24T19:43:51.716Z","")));