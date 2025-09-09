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