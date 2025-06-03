// Imports
import express from 'express';
import salesRoutes from './modules/sales/routes.js';
import operationsRoutes from './modules/operations/routes.js';
import analyticsRoutes from './modules/analytics/routes.js';

// Variables
const PORT = process.env.PORT || 8000;

const app = express();

// Middlewares

// Routes
app.use('/api/v1/sales', salesRoutes);          // New sales domain
app.use('/api/v1/operations', operationsRoutes); // New operations
app.use('/api/v1/analytics', analyticsRoutes);   // New analytics

// Start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
