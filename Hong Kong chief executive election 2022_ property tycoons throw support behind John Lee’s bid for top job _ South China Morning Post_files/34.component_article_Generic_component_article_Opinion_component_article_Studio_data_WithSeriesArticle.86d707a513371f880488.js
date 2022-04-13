(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{s3JE:function(e,i){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getSeriesArticlesByEntityUuId"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"seriesReferencedArticleIds"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"articles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"seriesReferencedArticleIds"},value:{kind:"Variable",name:{kind:"Name",value:"seriesReferencedArticleIds"}}}]}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"orderBy"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"field"},value:{kind:"EnumValue",value:"publishedDate"}},{kind:"ObjectField",name:{kind:"Name",value:"direction"},value:{kind:"EnumValue",value:"DESC"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publishedDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialHeadline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"urlAlias"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"series"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Article"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"entityUuid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialHeadline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subHeadline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"size_1200x800"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"1200x800",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"size_768x768"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"768x768",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"size_460x323"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"460x323",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"urlAlias"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Podcast"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"entityId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"entityUuid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"socialHeadline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subHeadline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"images"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",alias:{kind:"Name",value:"size_1200x800"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"1200x800",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"size_768x768"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"768x768",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",alias:{kind:"Name",value:"size_460x323"},name:{kind:"Name",value:"style"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"style"},value:{kind:"StringValue",value:"460x323",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"urlAlias"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1318}};n.loc.source={body:'\nquery getSeriesArticlesByEntityUuId ($seriesReferencedArticleIds: [String]){\n  articles (filter:{seriesReferencedArticleIds: $seriesReferencedArticleIds}, limit: 1, offset:0 orderBy:{field:publishedDate, direction:DESC}) {\n    entityId\n    publishedDate\n    headline\n    socialHeadline\n    urlAlias\n    series {\n      __typename\n      ...on Article {\n        entityId\n        entityUuid\n        updatedDate\n        headline\n        socialHeadline\n        summary\n        subHeadline\n        images {\n          title\n          size_1200x800: style(filter: {style: "1200x800"}) {\n            url\n          }\n          size_768x768: style(filter: {style: "768x768"}) {\n            url\n          }\n          size_460x323: style(filter: {style: "460x323"}) {\n            url\n          }\n        }\n        urlAlias\n      }\n      ...on Podcast {\n        entityId\n        entityUuid\n        updatedDate\n        headline\n        socialHeadline\n        summary\n        subHeadline\n        images {\n          title\n          size_1200x800: style(filter: {style: "1200x800"}) {\n            url\n          }\n          size_768x768: style(filter: {style: "768x768"}) {\n            url\n          }\n          size_460x323: style(filter: {style: "460x323"}) {\n            url\n          }\n        }\n        urlAlias\n      }\n    }\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,i)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,i)})),e.definitions&&e.definitions.forEach((function(e){a(e,i)}))}var d={};function l(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}n.definitions.forEach((function(e){if(e.name){var i=new Set;a(e,i),d[e.name.value]=i}})),e.exports=n,e.exports.getSeriesArticlesByEntityUuId=function(e,i){var n={kind:e.kind,definitions:[l(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=d[i]||new Set,t=new Set,s=new Set;for(a.forEach((function(e){s.add(e)}));s.size>0;){var u=s;s=new Set,u.forEach((function(e){t.has(e)||(t.add(e),(d[e]||new Set).forEach((function(e){s.add(e)})))}))}return t.forEach((function(i){var a=l(e,i);a&&n.definitions.push(a)})),n}(n,"getSeriesArticlesByEntityUuId")}}]);