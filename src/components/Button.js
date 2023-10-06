function Button() {
    return (
        <div>
            <div className="emojis">
                <center>
                <div className="images">
                    <img width={67} height={58.9} className="picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rMelfG2Ajx3aslxGcitynqrI0_I8gmVyZR91YepDWzz5_v0GSzhOsIWh23RqbXwzDDU&usqp=CAU" />
                    <img width={59} height={58.9} className="picture" src="https://hips.hearstapps.com/hmg-prod/images/red-heart-64308e503e5fe.jpg" />
                    <img width={100} height={58.9} className="picture" src="https://www.refinery29.com/images/10315174.jpg?crop=40%3A21" />
                    <img width={69} height={58.9} className="picture" src="https://impeccablenestdesign.com/wp-content/uploads/2023/05/smiling-face-with-3-hearts-emoji-meaning-from-a-guy.jpg" />
                    <img width={59} height={58.9} className="picture" src="https://static.vecteezy.com/system/resources/previews/006/416/635/original/yellow-faced-smiley-emoji-with-tears-in-its-sockets-free-vector.jpg" />
                    </div>
                    </center>
                <button style={{ backgroundColor: 'Black', color: 'White', margin: 20 }}>Like</button>
            </div>
                <button style={{ backgroundColor: 'Black', color: 'White', margin: 20 }}>Comment</button>
                <button style={{ backgroundColor: 'Black', color: 'White', margin: 20 }}>Share</button>
        </div>
    )
}

export default Button