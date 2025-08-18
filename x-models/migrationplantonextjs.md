x-models Migration Plan
Create lib/types.ts: Define a TypeScript interface for our Model data structure. This will ensure type safety when we pass model data between components and, later, when we interact with the database.

Modify lib/data.ts: Import the new Model type and apply it to our static models array and data-fetching functions (getModelsForGrid, getModelById) to enforce type safety at the data level.

Create components/site-header.tsx: Extract the <header> element from the main page into a dedicated, reusable component for consistent branding and navigation across the site.

Create components/site-footer.tsx: Extract the <footer> element into its own component to keep our page layouts clean and maintainable.

Create components/model-card.tsx: Translate the repeating model card <div> from the bento grid into a ModelCard component. This component will accept a single model object as a prop and will be used on the homepage.

Modify app/page.tsx: Refactor the main homepage component. It will now use the SiteHeader and SiteFooter for the layout and will map over our data to render a list of ModelCard components, cleaning up the JSX significantly.

Create app/model/[modelId]/page.tsx: Create the dynamic route for individual model profiles. This page will use the modelId from the URL to fetch the corresponding model's data using our getModelById function.

Create components/icons.tsx: Create a centralized file for SVG icons used in the application, like the MapPinIcon and RulerIcon from the prototype, to make them easily reusable.

Create components/stat-card.tsx: Recreate the StatCard from the prototype's app.js as a proper React component to display model statistics on the profile page.

Modify app/model/[modelId]/page.tsx (Continued): Build out the UI for the model profile page by translating the HTML structure from the prototype's renderModelProfilePage function into JSX, using the new StatCard and icons components.

Create prisma/schema.prisma: Define the database schema for the Model, PortfolioImage, and Stats tables. This file will serve as the single source of truth for our database structure, preparing us for the next phase of development.

This plan will effectively translate the entire prototype into a well-structured, component-based Next.js application, setting a solid foundation for adding the database and animations.
