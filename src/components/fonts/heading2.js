const Heading2 = ({children}) => {
    const style = {
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 'normal'
    }

    return (
        <h2 style={style}>{children}</h2>
    )
}

export default Heading2



