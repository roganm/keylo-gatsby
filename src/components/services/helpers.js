import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const options = {
    renderNode: {
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
        [BLOCKS.HR]: (node, children) => <div className="line" />,
    },
}

export function getReactComponents(stringToDecode, tokensToReplace) {

    let stringAfterReplace = stringToDecode

    for (let token in tokensToReplace) 
    {
        let re = new RegExp(token, "g")
        stringAfterReplace = stringAfterReplace.replace(re, tokensToReplace[token])
    }

    stringAfterReplace = JSON.parse(stringAfterReplace)

    return documentToReactComponents(stringAfterReplace, options)
}
