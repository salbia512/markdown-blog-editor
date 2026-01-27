# Online Markdown Blog Editor

A web-based markdown editor that allows users to write, preview, and manage blog posts with real-time rendering. The editor supports multiple posts, autosave using localStorage, export options, and a clean UI built with React and Bootstrap 5 CDN.

## Features

- Live Markdown editor with real-time preview
- Multiple post management (create, delete, switch)
- Editable post titles
- Autosave drafts using browser localStorage
- Export posts as HTML and PDF
- Word and character count
- Light and dark theme support
- Responsive UI using Bootstrap 5 CDN

## Tech Stack

- React (Vite)
- Bootstrap 5 (CDN)
- react-markdown
- LocalStorage API
- jsPDF
- HTML export utilities

## Project Structure

src/
├── components/
│ ├── Editor.jsx
│ ├── Preview.jsx
│ ├── PostList.jsx
│ ├── PostTitle.jsx
│ ├── EditorToolbar.jsx
├── utils/
│ ├── exportHtml.js
│ ├── exportPdf.js
│ └── textStats.js
├── App.jsx
├── main.jsx
├── index.css


## How It Works

- Each post is stored as an object containing `id`, `title`, `content`, and `updatedAt`
- Posts are persisted in localStorage and restored on page reload
- Markdown input updates preview in real time
- Export features convert markdown to HTML or PDF files
- Bootstrap CDN is used for layout and responsiveness without build-time dependencies

## Setup & Run

1. Clone the repository
2. Install dependencies   
   
   npm install
3. Start Development Server
     
   npm run dev

## Screenshots

Screenshots of the editor interface are available below.

![Editor View](sc1.jpg)

![Editor View](sc2.jpg)

![Editor View](sc3.jpg)

## Future Improvements

- Authentication and cloud sync

- Version history per post

- Folder-based organization

- Publish to blog platforms

- Keyboard shortcuts for markdown

### License

This project is for learning and portfolio purposes.

   
