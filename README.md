
# Guide for Maintaining GenSoul

This guide explains how to maintain and update the portfolio of GenSoul, including adding new solutions, updating existing content, handling keywords, and ensuring the application runs smoothly.


## Run Locally

Clone the project

```bash
  git clone https://github.com/shajjar-emumba/gen-soul.git
```

Go to the project directory

```bash
  cd gensoul
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng serve
```

## Build App

To build the application for production, follow these steps

1. Open Terminal
2. Run the build command
   
```
ng build
```
This command compiles the application into `dist` folder.

## Adding a New Solution

To add a new solution to the portfolio, you will need to update the `SOLUTIONS_DATA` array located in the `src/app/model/dummy-content.ts` file. Each solution entry should have the following structure:

```javascript
{
  id: '<unique-id>',
  title: '<solution-title>',
  short_desc: '<short-description>',
  tags: ['Tag1', 'Tag2'],
  long_desc: '<detailed-description>',
  how_it_works: [
    'Step 1: description...',
    'Step 2: description...',
  ],
  features: ['Feature 1', 'Feature 2'],
  avatar: '<avatar.png>',
  app_ss: ['<screenshot-1.png>', '<screenshot-2.png>'],
  path: '<solution-path>',
  appURL: '<application-url>',
  deployURL: '<deployment-url>',
}
```

* **id**: Unique identifier for the solution.
* **title**: The title of the solution.
* **short_desc**: A short description for cards.
* **tags**: Relevant tags that describe the solution.
* **long_desc**: A detailed description of the solution, outlining what it does.
* **how_it_works**: Steps describing how the solution works.
* **features**: A array of key features provided by the solution.
* **avatar**: A image for solutions profile
* **app_ss**: Array of screenshot filenames that represent the solution (to be stored in the /public folder).
* **path**: Unique path identifier for the solution (used for routing).
* **appURL**: URL where the solution can be accessed.
* **deployURL**: URL for deploying the solution.

Example:

```
{
  id: '7',
  title: 'AI Document Analyzer',
  short_desc: 'Analyze documents and extract key information.',
  tags: ['AI', 'Document Processing'],
  long_desc: 'This solution uses advanced AI techniques to analyze documents and extract meaningful insights...',
  how_it_works: [
    'Step 1: Upload the document.',
    'Step 2: The AI analyzes the content.',
    'Step 3: View extracted insights.',
  ],
  features: ['Document Analysis', 'Real-time Insights'],
  avatar: avatar-image.png,
  app_ss: ['ai-doc-analyzer-1.png', 'ai-doc-analyzer-2.png'],
  path: 'ai-document-analyzer',
  appURL: 'https://ai-doc-analyzer.example.com',
  deployURL: 'https://deploy-url.example.com',
}

```
Once you add the new solution entry, it will automatically be displayed on the portfolio



## Handling Tags and Keywords

The `KEYWORDS` array is used for filtering solutions by their tags. This array is also located in the `dummy-content.ts` file. If you add a solution with a tag that is not present in the KEYWORDS array, you must also add the new tag to this array. This ensures that the tag will be available in the filtering.

```
export const KEYWORDS = [
  'Chatbot',
  'Knowledge Search',
  'Marketing',
  'Sales',
  'Document Processing',
  'Travel',
  'Retail',
  'Hospitality',
  'AI', // Add new tags here
];

```
If you forget to add a tag to the KEYWORDS array, the new solution’s tag will not be filterable in the UI.


## Managing Solution App Screenshots

Each solution in the `SOLUTIONS_DATA` object can display one or more screenshots of the application. Screenshots can either be hosted images (external links) or images stored locally within the `/public` folder of the project. Follow the instructions below to manage the screenshots correctly.

### Local Screenshots

For locally stored screenshots:

1. Save the image files in the `/public` folder.
2. Ensure the filenames match those in the app_ss array.

Example:

```
app_ss: ['ai-doc-analyzer-1.png', 'ai-doc-analyzer-2.png']
```

### Hosted Screenshots

For screenshots hosted on external platforms:

1. Simply add the full URL to the app_ss array in the SOLUTIONS_DATA object.
2. Ensure the URLs are correct and accessible to the users.


Example:

```
app_ss: ['https://example.com/images/ai-doc-analyzer-1.png', 'https://example.com/images/ai-doc-analyzer-2.png']
```


**Note:**

After making any changes to the `SOLUTIONS_DATA`, you can` hit Cmd + S (or Ctrl + S on Windows)` to save your changes. Your application will automatically update if running in development mode.

Once saved, visit your application at `http://localhost:4200` (or the port where your application is running) to verify that the screenshots display correctly.

Additionally, if you commit these changes to the repository, they will automatically be deployed to [gen-soul on Vercel](https://gen-soul.vercel.app/) via Vercel's continuous deployment. This ensures that the latest updates are live without any manual deployment steps


