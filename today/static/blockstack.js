document.getElementById("signin-button").addEventListener("click", function () {
  if (!blockstack.isUserSignedIn()) {
  blockstack.redirectToSignIn();
}
else {
      blockstack.signUserOut(window.location.origin);
}
})
document.getElementById("logout").addEventListener("click", function () {
  blockstack.signUserOut("/");
});
document
  .getElementById("signout-button")
  .addEventListener("click", function () {
    blockstack.signUserOut(window.location.origin);
  });

function processSignIn() {
  if (blockstack.isSignInPending()) {
    blockstack.handlePendingSignIn();
  } else {
    blockstack.redirectToSignIn();
  }
}

function saveCountries(countrytext) {
  var usersession = new blockstack.UserSession();
  let countries = usersession.state.countries;
  let country = {text: countrytext.trim()};
  countries.unshift(country);
  usersession.putFile('countries.json', JSON.stringify(countries), {encrypt: false})
  .then(() => {
       usersession.setState({
         countries: countries
       })
     })
 }
