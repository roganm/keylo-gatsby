import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export function getReactComponents(stringToDecode, tokensToReplace, options) {

    let stringAfterReplace = stringToDecode

    for (let token in tokensToReplace) 
    {
        let re = new RegExp(token, "g")
        stringAfterReplace = stringAfterReplace.replace(re, tokensToReplace[token])
    }

    stringAfterReplace = JSON.parse(stringAfterReplace)
  
    // remove the heading from the object and use it to create a new object in order
    // to process the rich text of the two sections seperately so that more customization
    // can be performed such as using variables in onClick events and wrapping the entire
    // content (non-heading) section in a div
    let heading = stringAfterReplace.content[0]
    
    // do a deep copy so as to get the full structure of the rich text object
    // before replacing all content in the new object with the heading content from the
    // main rich text object
    let headingContent = Object.assign({}, stringAfterReplace)
    headingContent.content = [ heading ]

    // remove the heading portion from the main rich text object
    stringAfterReplace.content.splice(0, 1)

    // generate the react components for the heading and content components
    const headingComponent = documentToReactComponents(headingContent, options)
    const contentComponent = documentToReactComponents(stringAfterReplace, options)

    return [ headingComponent, contentComponent ]
}
