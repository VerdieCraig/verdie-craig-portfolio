# Verdie Craig - Software Developer Portfolio

## Overview

This is a personal portfolio website for Verdie Craig, a Full-Stack Software Developer. The application is built as a single-page application (SPA) using React with TypeScript, featuring a modern design system powered by shadcn/ui components and Tailwind CSS. The portfolio showcases professional experience, technical skills, projects, and contact information in a clean, responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- **January 15, 2025**: Successfully completed portfolio development with the following customizations:
  - Integrated user's professional headshot photo
  - Updated hero section with cleaner single-color text styling
  - Enhanced About section with better text/image balance (2:1 layout)
  - Added user's passion for lifelong learning and multilingual abilities
  - Incorporated historic 1795 world map with proper Library of Congress citation
  - Updated stats to reflect 4 languages (English, Spanish, Portuguese, French)
  - Portfolio ready for deployment with all user preferences implemented

## System Architecture

The application follows a full-stack monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, utilizing shadcn/ui components and Tailwind CSS
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used in current implementation)
- **Build System**: Vite for development and production builds
- **Deployment**: ESBuild for server bundling, standard static file serving

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components providing a consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **UI Features**: Toast notifications, tooltips, responsive navigation

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL support
- **Session Management**: Configured for connect-pg-simple (not actively used)
- **Development Tools**: Hot reload with Vite integration
- **Error Handling**: Centralized error middleware

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **ORM**: Drizzle with type-safe queries and migrations
- **Validation**: Zod schemas for runtime type checking

## Data Flow

1. **Static Portfolio Content**: All portfolio content is hardcoded in React components
2. **User Storage**: In-memory storage implementation for user data (MemStorage class)
3. **API Routes**: Currently minimal, designed for future expansion
4. **Client-Server Communication**: React Query handles API calls and caching

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript
- Express.js for server
- Drizzle ORM with PostgreSQL dialect
- Vite for build tooling

### UI/UX Dependencies
- shadcn/ui component library
- Radix UI primitives
- Tailwind CSS for styling
- Lucide React for icons

### Development Dependencies
- ESBuild for server bundling
- TypeScript for type safety
- PostCSS for CSS processing
- Various Replit-specific development tools

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with hot reload
- TSX for running TypeScript server with auto-restart
- Middleware integration for seamless full-stack development

### Production Build
- Frontend: Vite builds optimized static assets
- Backend: ESBuild bundles server code into single distribution file
- Static file serving through Express for SPA routing support

### Environment Configuration
- Database connection via DATABASE_URL environment variable
- Development vs production mode detection
- Replit-specific integrations for cloud development

The application is designed as a portfolio showcase with the infrastructure in place to expand into a full-featured web application with user authentication, dynamic content management, and database-driven features.