// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const categoriesRouter = require('./categories.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/events', eventsRouter)

router.use('/categories', categoriesRouter)

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });
// Static routes
// Serve React build files in production
// if (process.env.NODE_ENV === 'production') {
//     const path = require('path');
//     // Serve the frontend's index.html file at the root route
//     router.get('/', (req, res) => {
//       res.cookie('XSRF-TOKEN', req.csrfToken());
//       res.sendFile(
//         path.resolve(__dirname, '../../frontend', 'build', 'index.html')
//       );
//     });

//     // Serve the static assets in the frontend's build folder
//     router.use(express.static(path.resolve("../frontend/build")));

//     // Serve the frontend's index.html file at all other routes NOT starting with /api
//     router.get(/^(?!\/?api).*/, (req, res) => {
//       res.cookie('XSRF-TOKEN', req.csrfToken());
//       res.sendFile(
//         path.resolve(__dirname, '../../frontend', 'build', 'index.html')
//       );
//     });
//   }

//   // Add a XSRF-TOKEN cookie in development
//   if (process.env.NODE_ENV !== 'production') {
//     router.get('/api/csrf/restore', (req, res) => {
//       res.cookie('XSRF-TOKEN', req.csrfToken());
//       res.status(201).json({});
//     });
//   }

module.exports = router;


//*****FOR TESTING PURPOSES */
// // GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
