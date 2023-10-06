function Facebook(props){
    const { title, username, profilePic } = props

    return(
        <div style={{paddingRight: 550}}>
            <h4><img width={100} src={profilePic}/> {username}</h4>
            <h4 style={{paddingLeft: 55}}>{title}</h4>
        </div>

    )
}

export default Facebook