# DoTEC

Welcome to the DoTEC web application! This is a company web application built using Next.js and connected to the Contentful CMS.

## Table of Contents

- [DoTEC](#dotec)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [Usage](#usage)
    - [Deployment](#deployment)
    - [Contributing](#contributing)

## Features

- **Contentful CMS Integration:** The application is connected to the Contentful CMS, allowing easy content management and updates.
- **Next.js Framework:** Built using the Next.js framework, providing server-side rendering, static site generation, and an optimized development experience.
- **Responsive Design:** The application is designed to work seamlessly across different devices and screen sizes.
- **SEO-friendly:** Includes essential meta tags and customizable SEO settings for improved search engine visibility.
- **Modular Architecture:** The codebase follows a modular architecture, making it easier to maintain and extend.

## Getting Started

Follow the instructions below to set up the DoTEC web application locally.

### Prerequisites

To run this application, you need to have the following installed:

- Node.js (version >= 12)
- npm or Yarn package manager

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/dotec-korea/dotec-website.git
   ```

2. Change into the project directory:

   ```shell
   cd dotec-website
   ```

3. Install the dependencies:

   ```shell
   yarn
   ```

### Configuration

Before running the application, you need to configure the environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

```plaintext
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your-contentful-space-id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your-contentful-access-token
```

Make sure to replace `your-contentful-space-id` and `your-contentful-access-token` with your actual Contentful Space ID and access token.

### Usage

To start the application, run the following command:

```shell
yarn dev
```

This will start the development server, and you can access the application at `http://localhost:3000` in your browser.

### Deployment

To deploy the DoTEC web application, you can follow the deployment instructions specific to the hosting provider you choose. Here are a few common options:

- **Vercel:** Deploy with Vercel by connecting your repository. Vercel will automatically build and deploy the application based on your configuration.

- **Netlify:** Deploy with Netlify by connecting your repository. Configure the build settings and publish directory based on your Next.js project setup.

- **Custom Server:** If you prefer deploying on your custom server, build the application using the following command:

  ```shell
  npm run build
  ```

  This will generate a production-ready build in the `out` directory. You can then configure your server to serve the static files from this directory.

### Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```shell
   git checkout -b feature/your-feature-name
   ```
3. Make the necessary changes and commit them:
   ```shell
   git commit -m "Add your commit message"
   ```
