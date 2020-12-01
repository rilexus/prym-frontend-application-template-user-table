# Prym Application Template (User Table)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

## Requirements
* Application MUST include HTML Table with max. 10 rows of user information at the time.
* Users information MUST be fetched from: [randomuser.me](https://randomuser.me/)
* Each row MUST contain the following user information: First Name, Last Name, Gender, Nick Name, Date of Registration.
* The fetching process MUST be indicated to the user.
* Fetched user information MUST be preserved in the redux store. 
* "Next" button MUST be present.
* Click on the "Next" button MUST fetch next 10 users. (Pagination)
* "Previous" button MUST be present.
* Click on the "Previous" button MUST displays 10 previous users.
* Current table page number MUST be shown.
* Changing the page SHOULD update the URL with the current page number.
* If the URL contains a page number you SHOULD fetch this page from the endpoint.
* Application MUST be extendable.
* Application SHOULD be tested.
* You MAY implement you own design.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
"OPTIONAL" in this document are to be interpreted as described in
[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).