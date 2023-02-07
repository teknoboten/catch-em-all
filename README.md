## challenge

create a full-stack application to display Pokemon data.

## client

- Create the client in React >= 18. ✅
- Use only functional components with hooks. Do not use class components and lifecycle methods ✅
- Use some form of CSS-in-JS (Styled Components are preferred but not required). ✅
- Use semantic HTML where possible. ARIA attributes are not required. ✅

## data

Use the data from this repository: [GitHub - fanzeyi/pokemon.json: Pokemon dataset in JSON.](https://github.com/fanzeyi/pokemon.json)✅

## server

- Create the server using Node >= 10 and Express >= 4. ✅

## reqs

1. Host the dataset in your server. ✅
2. Design an appropriate API. REST is preferred but not required. ✅

3. Display a drop-list component for the user to select Pokemon “types”.
   - On initial load, populate the drop-list by querying your server for a list of valid Pokemon types. ✅
   - When the user selects a type from the drop-list, display a list or grid of Pokemon of that type. ✅
   - Populate the list by querying your server. ✅
   - Display the following attributes for each Pokemon:
     1. ID ✅
     2. Name ✅
     3. Types (all) ✅
     4. HP ✅
     5. Attack ✅
     6. Defense ✅
     7. Speed ✅

If you have the time/inclination, include one or more of the following bonus features:

1. Pagination - Display only 10 Pokemon at a time. Include controls to move forward and backward through the dataset. UI details are left to you.
2. Images - Display the thumbnail image for each Pokemon. UI details are left to you.
3. Expanding display - Default to “closed”, showing just the Pokemon ID, name, and ideally the thumbnail. Click to expand to show details and larger image. UI details are left to you.
