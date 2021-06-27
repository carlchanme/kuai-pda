const contentTypeDict = {json:/(?<=~~~json)([\w\W])*(?=~~~)/}
const criteriaValidator = (page, regex, contentType) => {
    console.log({page, regex, contentType});

    if(!page?.body) return false

    var body = page.body

    if(contentType)
    {
        var match = contentTypeDict[contentType].exec(body);
        //console.log({contentType,body,page,match});
        if(!!match) body = match[0]
    }
    //console.log(body);
    var result = regex.test(body);
    
    console.log("Body : " + body + "\r\nRegex : " + regex + "\r\nResult : " + result)
    return result
}

export default criteriaValidator