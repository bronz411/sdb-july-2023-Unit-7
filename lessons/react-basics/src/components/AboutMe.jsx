const AboutMe = () => {
    let homeCity = "Friendswood"
    let homeState = "Texas"
    let favoriteRestraunte = ["Oregano's", "Kujira", "Jim's Wings"]
    let styles = {
        title:{
            color: "red"
        },
        restaurantList: {
            listStyleType: "none",
            textAlign: "left",
        },
    }
    return ( <>
    <h1 style={styles.title}>Brent Brown</h1>
    <p>The city I grew up in was {homeCity}, {homeState}</p>
    <ul style={styles.restaurantList}>
        {favoriteRestraunte.map((restaurant, index) => (<li key={index}>{restaurant}</li>))}
    </ul>
    </> 
    );
}
 
export default AboutMe;

/* 
h1 tag with full name
p tag with city and state you grew up in
make the city and state variables
unordered list of 3 of your favorite restaurants
*/