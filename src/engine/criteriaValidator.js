const contentTypeDict = Object.freeze(
    { json: /(~~~json)?([\w\W])*(?=~~~)/ }
)


const criteriaValidator = (page, regex, contentType) => {
    if(!page?.body) return false

    var body = page.body

    if(contentType)
    {
        const match = contentTypeDict[contentType].exec(body);
        if(!!match) body = match[0]
    }
    const result = regex.test(body);
    
    console.log("Body : " + body + "\r\nRegex : " + regex + "\r\nResult : " + result)
    return result
}

export default criteriaValidator