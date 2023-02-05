### Technical Project
## Description
Our company, ACME Home Rental Insurance, would like to create a landing page for generating leads and providing potential customers with a
quote via email.
## Product Requirements
We want to collect the following data:
  First Name
  Last Name
  Email Address
  Date of Birth
  Residential Address
  Australian addresses only
  Technical Requirements
You have to collect this information and send it to an API endpoint
The API endpoint is https://lezb2koncl.execute-api.us-west-2.amazonaws.com/test/leads
  It accepts the following in the body
  first_name (string)
  last_name (string)
  email (string)
  dob (string)
  Should be in Australian date format, eg. 15/01/1985
  address (string)

## eg:
The back-end process to generate the quote and send emails will be done asynchronously through a batch process
After successfully sending the information to the API endpoint, we would like to show a thankyou page or notification to the user
You can use any programming language, technology, package or framework that you like
The application does not need to be published, this is for demo purposes only and is only required to run locally
Extra points for thinking about deployment and hosting options
Timebox the project to around 1-1.5 hours, however you may spend more time if you like
The most important aspects of the project are functionality, approach to solving the problem and following the requirements
It does not need to look perfect
If you don’t have time to implement something, it is sufficient to provide extra documentation or comments in the code
Extra Resources

Google Maps API Key (for use with Google Places Autocomplete)
AIzaSyCO7mfhPhBu5YV5rIey0U-KQQRqkJ5gl7Q
https://developers.google.com/maps/documentation/places/web-service/autocomplete

## Template
https://github.com/michael-revcapture/acme_home_rental_insurance
This can be used to get started
It is a basic react app, created with create-react-app
Has the following packages
Material UI
UI component library
Not required to use
https://mui.com/
react-google-autocomplete
Simple package for providing Google places autocomplete functionality
Not required to use
https://www.npmjs.com/package/react-google-autocomplete
To run:
Clone repo
npm install
npm start