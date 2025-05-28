---
title: 'CSS Grid vs Flexbox: When to Use Which'
date: '2023-12-28'
excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for each layout method.'
tags: ['CSS', 'Layout', 'Grid', 'Flexbox']
readTime: '4 min read'
published: true
---

CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each will make you a more effective developer.

## The Fundamental Difference

The key difference between Grid and Flexbox is dimensional:

- **Flexbox**: One-dimensional layout (row OR column)
- **CSS Grid**: Two-dimensional layout (rows AND columns)

## Flexbox: One-Dimensional Layouts

Flexbox excels at distributing space and aligning items along a single axis.

### Perfect Use Cases for Flexbox

#### Navigation Bars

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

#### Centering Content

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

#### Button Groups

```css
.button-group {
  display: flex;
  gap: 0.5rem;
}

.button-group button {
  flex: 1; /* Equal width buttons */
}
```

#### Card Content Layout

```css
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  flex: 1; /* Takes remaining space */
}

.card-actions {
  margin-top: auto; /* Pushes to bottom */
}
```

### Flexbox Properties

#### Container Properties

```css
.flex-container {
  display: flex;
  flex-direction: row | column;
  justify-content: flex-start | center | space-between | space-around;
  align-items: stretch | center | flex-start | flex-end;
  flex-wrap: nowrap | wrap;
  gap: 1rem;
}
```

#### Item Properties

```css
.flex-item {
  flex: 1; /* Shorthand for flex-grow, flex-shrink, flex-basis */
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: auto;
  align-self: auto | center | flex-start | flex-end;
}
```

## CSS Grid: Two-Dimensional Layouts

CSS Grid is designed for complex layouts that need both rows and columns.

### Perfect Use Cases for CSS Grid

#### Page Layouts

```css
.page {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

#### Card Grids

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

#### Complex Forms

```css
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form .full-width {
  grid-column: 1 / -1; /* Span all columns */
}
```

#### Image Galleries

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  gap: 1rem;
}

.gallery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Grid Properties

#### Container Properties

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header header header";
  gap: 1rem;
  justify-items: stretch | center | start | end;
  align-items: stretch | center | start | end;
}
```

#### Item Properties

```css
.grid-item {
  grid-column: 1 / 3; /* Start at line 1, end at line 3 */
  grid-row: 2 / 4;
  justify-self: stretch | center | start | end;
  align-self: stretch | center | start | end;
}
```

## Practical Examples

### Example 1: Navigation with Flexbox

```html
<nav class="navbar">
  <div class="logo">Brand</div>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div class="nav-actions">
    <button>Login</button>
  </div>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### Example 2: Dashboard Layout with Grid

```html
<div class="dashboard">
  <header class="header">Dashboard</header>
  <nav class="sidebar">Navigation</nav>
  <main class="main">Content</main>
  <aside class="widgets">Widgets</aside>
  <footer class="footer">Footer</footer>
</div>
```

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main widgets"
    "footer footer footer";
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: 60px 1fr 40px;
  height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.widgets { grid-area: widgets; }
.footer { grid-area: footer; }
```

## When to Use Which?

### Use Flexbox When:

- ✅ Laying out items in a single direction
- ✅ Distributing space between items
- ✅ Centering content
- ✅ Creating flexible component layouts
- ✅ Aligning items within a container

### Use CSS Grid When:

- ✅ Creating complex two-dimensional layouts
- ✅ Defining explicit grid structures
- ✅ Overlapping elements
- ✅ Creating responsive layouts without media queries
- ✅ Aligning items to a grid system

## Can They Work Together?

Absolutely! Grid and Flexbox complement each other perfectly:

```css
/* Grid for overall page layout */
.page {
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: auto 1fr auto;
}

/* Flexbox for header content */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid for main content area */
.main {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

/* Flexbox for card content */
.card {
  display: flex;
  flex-direction: column;
}
```

## Responsive Design

### Flexbox Responsive Patterns

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item {
  flex: 1 1 300px; /* Grow, shrink, basis */
}
```

### Grid Responsive Patterns

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
```

## Browser Support

Both Grid and Flexbox have excellent modern browser support:

- **Flexbox**: Supported in all modern browsers
- **CSS Grid**: Supported in all modern browsers (IE 11 with `-ms-` prefix)

## Conclusion

The choice between Grid and Flexbox isn't either/or—it's about using the right tool for the job:

- **Use Flexbox** for one-dimensional layouts and component-level design
- **Use CSS Grid** for two-dimensional layouts and page-level design
- **Use both together** for maximum flexibility and power

Understanding both layout methods will make you a more versatile developer and help you create better, more maintainable layouts.

Start with the layout's requirements: if you need to control both rows and columns, reach for Grid. If you're working with a single dimension, Flexbox is your friend. 