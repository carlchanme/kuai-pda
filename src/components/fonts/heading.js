const Heading = ({children}) => {
    const style = {
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 'normal'
}

    return (
        <h2 style={style}>{children}</h2>
    )
}

export default Heading



