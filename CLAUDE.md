# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Information

**GitHub Repository**: https://github.com/psotoc/clinicaUR  
**Project Type**: Medical institution website development  
**Current Status**: Active development - converting Figma designs to HTML markup

## Project Overview

This is the institutional website for **Clínica Chinita**. The main goal of this project is to generate initial HTML markup and content based on the Figma designs located in the `Pablo/source/` folder. The project involves converting design mockups into responsive HTML/CSS code.

## Architecture

### File Structure
- `Pablo/` - Main website directory containing all HTML files
- `Pablo/source/` - Contains original Figma design files (PDFs) used as reference for HTML implementation
- `Pablo/recursos/` - Media assets directory (currently contains header logo, will expand with more media as markup improvements progress)

### Design-to-Code Workflow
The development process follows this pattern:
1. Reference Figma designs in `Pablo/source/` folder
2. Convert designs to responsive HTML markup using Tailwind CSS
3. Add media assets to `Pablo/recursos/` as needed during development
4. Iterate on markup improvements based on design fidelity

### Current Implementation Status
- Basic HTML structure implemented for all main pages
- Header navigation with clickable logo completed
- Custom Tailwind CSS color scheme established matching brand colors:
  - `teal`: #00B4C5 (primary brand color)
  - `teal-dark`: #009AAB
  - `navy`: #2C5F7C
  - `green-card`: #7FBF3F
  - `yellow-card`: #F5B842

### Pages Structure
- `index.html` - Homepage
- `quienes-somos.html` - About us page
- `servicios.html` - Services page
- `contactanos.html` - Contact page
- `noticias.html` - News listing page
- `noticia-detalle.html` - News detail page
- `servicio-urgencias.html` - Emergency services page

## Development Notes

### External Dependencies
- Tailwind CSS via CDN (`https://cdn.tailwindcss.com`)
- Font Awesome 6.4.0 via CDN for icons
- Google Maps embedded iframe for location display

### No Build Process
This is a static HTML website with no build process. Files can be opened directly in a browser for testing during development.

### Brand Name
The correct clinic name is **Clínica Chinita** (some HTML files may still contain outdated "Clínica Capurri" references that need updating).

### Asset Management
Media assets should be placed in `Pablo/recursos/` directory. As markup improvements progress, this folder will contain images, icons, and other media files needed for the website.

## News Management System (Admin Panel)

### Overview
The website includes a complete news management system powered by **Supabase** that allows administrators to dynamically create, edit, and delete news articles without modifying code.

### Backend Configuration

**Supabase Project:**
- **Project URL**: `https://jwbhcbeasopnnovqodmu.supabase.co`
- **Database Table**: `news` (PostgreSQL)
- **Storage Bucket**: `news-images` (for article images)

**Database Schema:**
```sql
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  author TEXT DEFAULT 'Comunicaciones',
  read_time TEXT DEFAULT '5 min',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Row Level Security Policies:**
- Public users can read all news articles
- Only authenticated users can create, update, and delete news
- Storage bucket allows public read access, authenticated users can upload/modify images

### Admin Panel Files

**Configuration:**
- `supabase-config.js` - Supabase client initialization with project credentials

**Admin Pages:**
- `admin-login.html` - Authentication page for administrators
- `admin-panel.html` - Full CRUD interface for managing news articles

**Public Pages (Dynamic):**
- `noticias.html` - Displays all news articles loaded from Supabase
- `noticia-detalle.html` - Shows individual article based on URL parameter `?id=<uuid>`

### Admin Panel Features

**Authentication:**
- Secure login using Supabase Auth
- Session-based authentication
- Automatic redirect if not authenticated
- Admin users are created via Supabase Dashboard

**News Management:**
- Create new articles with rich text editor (Quill.js)
- Upload images to Supabase Storage
- Edit existing articles
- Delete articles
- Mark articles as "featured" (displayed prominently on news page)
- Table view showing all articles with metadata

**Rich Text Editor:**
- Uses Quill.js for formatted content
- Supports headers, bold, italic, underline, strike-through
- Lists (ordered/unordered), blockquotes, code blocks
- Text color and background color
- Links

### Accessing Admin Panel

**For Administrators:**
1. Navigate to footer of any main page (index.html, noticias.html)
2. Click discrete "Admin" link (lock icon + text) at bottom of footer
3. Login with Supabase admin credentials
4. Manage news from admin panel

**Admin Link Location:**
- Added to footer of: `index.html`, `noticias.html`, `noticia-detalle.html`
- Styled as semi-transparent link that brightens on hover
- Format: `<i class="fas fa-lock"></i> Admin`

### How Dynamic News Loading Works

**News Listing Page (noticias.html):**
- Fetches all news articles from Supabase on page load
- Displays first "featured" article (or latest) in large format
- Shows remaining articles in responsive grid (3 columns on desktop)
- Clicking "Leer más" navigates to detail page with article ID

**News Detail Page (noticia-detalle.html):**
- Reads `id` parameter from URL query string
- Fetches single article from Supabase by UUID
- Dynamically updates page title and breadcrumb
- Displays full article content with formatting
- Shows "Back to News" link

### Important Notes

- Admin credentials are managed in Supabase Dashboard under Authentication > Users
- Images are stored in Supabase Storage and referenced by public URL
- The system uses Supabase JS SDK v2 loaded via CDN
- No build process required - all changes are live when saved to database
- Server recommended for local testing: `python3 -m http.server 8000` from `Pablo/` directory