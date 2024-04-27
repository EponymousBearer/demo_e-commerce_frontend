"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_PIAIC_course_Projects_demo_e_commerce_FrontEnd_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\PIAIC course\\\\Projects\\\\demo_e-commerce\\\\FrontEnd\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_PIAIC_course_Projects_demo_e_commerce_FrontEnd_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDUElBSUMlMjBjb3Vyc2UlNUNQcm9qZWN0cyU1Q2RlbW9fZS1jb21tZXJjZSU1Q0Zyb250RW5kJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUElBSUMlMjBjb3Vyc2UlNUNQcm9qZWN0cyU1Q2RlbW9fZS1jb21tZXJjZSU1Q0Zyb250RW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtb19lY29tbWVyY2UvPzAwMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUElBSUMgY291cnNlXFxcXFByb2plY3RzXFxcXGRlbW9fZS1jb21tZXJjZVxcXFxGcm9udEVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcUElBSUMgY291cnNlXFxcXFByb2plY3RzXFxcXGRlbW9fZS1jb21tZXJjZVxcXFxGcm9udEVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_authOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/authOptions */ \"(rsc)/./src/utils/authOptions.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n// import NextAuth from \"next-auth\";\n// import { Account, User as AuthUser } from \"next-auth\";\n// import GithubProvider from \"next-auth/providers/github\";\n// import CredentialsProvider from \"next-auth/providers/credentials\";\n// import bcrypt from \"bcryptjs\";\n// import User from \"@/lib/models/User\";\n// import connect from \"@/utils/db\";\n// import { Provider } from \"next-auth/providers/index\";\n// export const authOptions: any = {\n//   // Configure one or more authentication providers\n//   providers: [\n//     CredentialsProvider({\n//       id: \"credentials\",\n//       name: \"Credentials\",\n//       credentials: {\n//         email: { label: \"Email\", type: \"text\" },\n//         password: { label: \"Password\", type: \"password\" },\n//       },\n//       async authorize(credentials: any) {\n//         await connect();\n//         try {\n//           const user = await User.findOne({ email: credentials.email });\n//           if (user) {\n//             const isPasswordCorrect = await bcrypt.compare(\n//               credentials.password,\n//               user.password\n//             );\n//             if (isPasswordCorrect) {\n//               return user;\n//             }\n//           }\n//         } catch (err: any) {\n//           throw new Error(err);\n//         }\n//       },\n//     }),\n//     GithubProvider({\n//       clientId: process.env.GITHUB_ID ?? \"\",\n//       clientSecret: process.env.GITHUB_SECRET ?? \"\",\n//     }),\n//     // ...add more providers here\n//   ],\n//   callbacks: {\n//     async signIn({ user, account }: { user: AuthUser; account: Account }) {\n//       if (account?.provider == \"credentials\") {\n//         return true;\n//       }\n//       if (account?.provider == \"github\") {\n//         await connect();\n//         try {\n//           const existingUser = await User.findOne({ email: user.email });\n//           if (!existingUser) {\n//             const newUser = new User({\n//               email: user.email,\n//             });\n//             await newUser.save();\n//             return true;\n//           }\n//           return true;\n//         } catch (err) {\n//           console.log(\"Error saving user\", err);\n//           return false;\n//         }\n//       }\n//     },\n//   },\n// };\n// export const handler = NextAuth(authOptions);\n// export { handler as GET, handler as POST };\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_utils_authOptions__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQyx5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNELHFFQUFxRTtBQUNyRSxpQ0FBaUM7QUFDakMsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQyx3REFBd0Q7QUFFeEQsb0NBQW9DO0FBQ3BDLHNEQUFzRDtBQUN0RCxpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLG1EQUFtRDtBQUNuRCw2REFBNkQ7QUFDN0QsV0FBVztBQUNYLDRDQUE0QztBQUM1QywyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2hCLDJFQUEyRTtBQUMzRSx3QkFBd0I7QUFDeEIsOERBQThEO0FBQzlELHNDQUFzQztBQUN0Qyw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLHVDQUF1QztBQUN2Qyw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCwrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWixXQUFXO0FBQ1gsVUFBVTtBQUNWLHVCQUF1QjtBQUN2QiwrQ0FBK0M7QUFDL0MsdURBQXVEO0FBQ3ZELFVBQVU7QUFDVixvQ0FBb0M7QUFDcEMsT0FBTztBQUNQLGlCQUFpQjtBQUNqQiw4RUFBOEU7QUFDOUUsa0RBQWtEO0FBQ2xELHVCQUF1QjtBQUN2QixVQUFVO0FBQ1YsNkNBQTZDO0FBQzdDLDJCQUEyQjtBQUMzQixnQkFBZ0I7QUFDaEIsNEVBQTRFO0FBQzVFLGlDQUFpQztBQUNqQyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLGtCQUFrQjtBQUVsQixvQ0FBb0M7QUFDcEMsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLG1EQUFtRDtBQUNuRCwwQkFBMEI7QUFDMUIsWUFBWTtBQUNaLFVBQVU7QUFDVixTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFFTCxnREFBZ0Q7QUFDaEQsOENBQThDO0FBRUk7QUFDWjtBQUV0QyxNQUFNRSxVQUFVRCwwREFBUUEsQ0FBQ0QsMkRBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZW1vX2Vjb21tZXJjZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbi8vIGltcG9ydCB7IEFjY291bnQsIFVzZXIgYXMgQXV0aFVzZXIgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbi8vIGltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuLy8gaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuLy8gaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuLy8gaW1wb3J0IFVzZXIgZnJvbSBcIkAvbGliL21vZGVscy9Vc2VyXCI7XHJcbi8vIGltcG9ydCBjb25uZWN0IGZyb20gXCJAL3V0aWxzL2RiXCI7XHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogYW55ID0ge1xyXG4vLyAgIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuLy8gICBwcm92aWRlcnM6IFtcclxuLy8gICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4vLyAgICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4vLyAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbi8vICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbi8vICAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcclxuLy8gICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpIHtcclxuLy8gICAgICAgICBhd2FpdCBjb25uZWN0KCk7XHJcbi8vICAgICAgICAgdHJ5IHtcclxuLy8gICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbi8vICAgICAgICAgICBpZiAodXNlcikge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4vLyAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4vLyAgICAgICAgICAgICAgIHVzZXIucGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgKTtcclxuLy8gICAgICAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XHJcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4vLyAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSksXHJcbi8vICAgICBHaXRodWJQcm92aWRlcih7XHJcbi8vICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgPz8gXCJcIixcclxuLy8gICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCIsXHJcbi8vICAgICB9KSxcclxuLy8gICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbi8vICAgXSxcclxuLy8gICBjYWxsYmFja3M6IHtcclxuLy8gICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfTogeyB1c2VyOiBBdXRoVXNlcjsgYWNjb3VudDogQWNjb3VudCB9KSB7XHJcbi8vICAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlciA9PSBcImNyZWRlbnRpYWxzXCIpIHtcclxuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJnaXRodWJcIikge1xyXG4vLyAgICAgICAgIGF3YWl0IGNvbm5lY3QoKTtcclxuLy8gICAgICAgICB0cnkge1xyXG4vLyAgICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHVzZXIuZW1haWwgfSk7XHJcbi8vICAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xyXG4vLyAgICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xyXG4vLyAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4vLyAgICAgICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgdXNlclwiLCBlcnIpO1xyXG4vLyAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbi8vIGV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuXHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvdXRpbHMvYXV0aE9wdGlvbnNcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTsiXSwibmFtZXMiOlsiYXV0aE9wdGlvbnMiLCJOZXh0QXV0aCIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/models/User.js":
/*!********************************!*\
  !*** ./src/lib/models/User.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstname: {\n        type: String\n    },\n    lastname: {\n        type: String\n    },\n    email: {\n        type: String\n    },\n    password: {\n        type: String\n    },\n    role: {\n        type: String\n    },\n    resetToken: {\n        type: String,\n        required: false\n    },\n    resetTokenExpiry: {\n        type: Date,\n        required: false\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUVwRCxNQUFNRyxhQUFhLElBQUlILHdEQUFlLENBQ3BDO0lBQ0VJLFdBQVc7UUFDVEMsTUFBTUM7SUFDUjtJQUNBQyxVQUFVO1FBQ1JGLE1BQU1DO0lBQ1I7SUFDQUUsT0FBTztRQUNMSCxNQUFNQztJQUNSO0lBQ0FHLFVBQVU7UUFDUkosTUFBTUM7SUFDUjtJQUNBSSxNQUFNO1FBQ0pMLE1BQU1DO0lBQ1I7SUFDQUssWUFBWTtRQUNWTixNQUFNQztRQUNOTSxVQUFVO0lBQ1o7SUFDQUMsa0JBQWtCO1FBQ2hCUixNQUFNUztRQUNORixVQUFVO0lBQ1o7QUFDRixHQUFHO0lBQUVHLFlBQVk7QUFBSztBQUd4QixNQUFNQyxPQUFPZCw0Q0FBTUEsQ0FBQ2MsSUFBSSxJQUFJaEIscURBQWMsQ0FBQyxRQUFRRztBQUNuRCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9fZWNvbW1lcmNlLy4vc3JjL2xpYi9tb2RlbHMvVXNlci5qcz80MWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBsYXN0bmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICByZXNldFRva2VuOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHJlc2V0VG9rZW5FeHBpcnk6IHtcclxuICAgICAgdHlwZTogRGF0ZSxcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG4gIH0sIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJtb2RlbHMiLCJ1c2VyU2NoZW1hIiwiZmlyc3RuYW1lIiwidHlwZSIsIlN0cmluZyIsImxhc3RuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInJvbGUiLCJyZXNldFRva2VuIiwicmVxdWlyZWQiLCJyZXNldFRva2VuRXhwaXJ5IiwiRGF0ZSIsInRpbWVzdGFtcHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/authOptions.ts":
/*!**********************************!*\
  !*** ./src/utils/authOptions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/models/User */ \"(rsc)/./src/lib/models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./src/utils/db.js\");\n\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_utils_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                try {\n                    const user = await _lib_models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (user) {\n                        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                        if (isPasswordCorrect) {\n                            return user;\n                        }\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GITHUB_ID ?? \"\",\n            clientSecret: process.env.GITHUB_SECRET ?? \"\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider == \"credentials\") {\n                return true;\n            }\n            if (account?.provider == \"github\") {\n                await (0,_utils_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                try {\n                    const existingUser = await _lib_models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: user.email\n                    });\n                    if (!existingUser) {\n                        const newUser = new _lib_models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                            email: user.email\n                        });\n                        await newUser.save();\n                        return true;\n                    }\n                    return true;\n                } catch (err) {\n                    console.log(\"Error saving user\", err);\n                    return false;\n                }\n            }\n            return true;\n        }\n    }\n}; // export const handler = NextAuth(authOptions);\n // export { handler as GET, handler as POST };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvYXV0aE9wdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3RDtBQUNVO0FBQ3BDO0FBQ087QUFDSjtBQUcxQixNQUFNSyxjQUErQjtJQUMxQyxpREFBaUQ7SUFDakRDLFdBQVc7UUFDVEwsMkVBQW1CQSxDQUFDO1lBQ2xCTSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBTztnQkFDdENDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFnQjtnQkFDOUIsTUFBTUwscURBQU9BO2dCQUNiLElBQUk7b0JBQ0YsTUFBTVcsT0FBTyxNQUFNWix3REFBSUEsQ0FBQ2EsT0FBTyxDQUFDO3dCQUFFTixPQUFPRCxZQUFZQyxLQUFLO29CQUFDO29CQUMzRCxJQUFJSyxNQUFNO3dCQUNSLE1BQU1FLG9CQUFvQixNQUFNZix1REFBYyxDQUM1Q08sWUFBWUksUUFBUSxFQUNwQkUsS0FBS0YsUUFBUTt3QkFFZixJQUFJSSxtQkFBbUI7NEJBQ3JCLE9BQU9GO3dCQUNUO29CQUNGO2dCQUNGLEVBQUUsT0FBT0ksS0FBVTtvQkFDakIsTUFBTSxJQUFJQyxNQUFNRDtnQkFDbEI7WUFDRjtRQUNGO1FBQ0FuQixzRUFBY0EsQ0FBQztZQUNicUIsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLElBQUk7WUFDbkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYSxJQUFJO1FBQzdDO0tBRUQ7SUFDREMsV0FBVztRQUNULE1BQU1DLFFBQU8sRUFBRWIsSUFBSSxFQUFFYyxPQUFPLEVBQThDO1lBQ3hFLElBQUlBLFNBQVNDLFlBQVksZUFBZTtnQkFDdEMsT0FBTztZQUNUO1lBQ0EsSUFBSUQsU0FBU0MsWUFBWSxVQUFVO2dCQUNqQyxNQUFNMUIscURBQU9BO2dCQUNiLElBQUk7b0JBQ0YsTUFBTTJCLGVBQWUsTUFBTTVCLHdEQUFJQSxDQUFDYSxPQUFPLENBQUM7d0JBQUVOLE9BQU9LLEtBQUtMLEtBQUs7b0JBQUM7b0JBQzVELElBQUksQ0FBQ3FCLGNBQWM7d0JBQ2pCLE1BQU1DLFVBQVUsSUFBSTdCLHdEQUFJQSxDQUFDOzRCQUN2Qk8sT0FBT0ssS0FBS0wsS0FBSzt3QkFDbkI7d0JBRUEsTUFBTXNCLFFBQVFDLElBQUk7d0JBQ2xCLE9BQU87b0JBQ1Q7b0JBQ0EsT0FBTztnQkFDVCxFQUFFLE9BQU9kLEtBQUs7b0JBQ1plLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJoQjtvQkFDakMsT0FBTztnQkFDVDtZQUNGO1lBQ0EsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFLENBRUYsZ0RBQWdEO0NBQ2hELDhDQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9fZWNvbW1lcmNlLy4vc3JjL3V0aWxzL2F1dGhPcHRpb25zLnRzPzQwNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiQC9saWIvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IHsgQWNjb3VudCwgVXNlciBhcyBBdXRoVXNlciB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpIHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBHaXRodWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQgPz8gXCJcIixcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUID8/IFwiXCIsXHJcbiAgICB9KSxcclxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfTogeyB1c2VyOiBBdXRoVXNlcjsgYWNjb3VudDogQWNjb3VudCB8IG51bGx9KSB7XHJcbiAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlciA9PSBcImNyZWRlbnRpYWxzXCIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT0gXCJnaXRodWJcIikge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3QoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHVzZXIuZW1haWwgfSk7XHJcbiAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IG5ld1VzZXIuc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBzYXZpbmcgdXNlclwiLCBlcnIpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4vLyBleHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJHaXRodWJQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJVc2VyIiwiY29ubmVjdCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiaWQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJpc1Bhc3N3b3JkQ29ycmVjdCIsImNvbXBhcmUiLCJlcnIiLCJFcnJvciIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJleGlzdGluZ1VzZXIiLCJuZXdVc2VyIiwic2F2ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB_CONNECTION, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log(\"Mongo Connection successfully established.\");\n    } catch (error) {\n        throw new Error(\"Error connecting to Mongoose\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFVBQVU7SUFDWixJQUFJRCw2REFBb0IsQ0FBQyxFQUFFLENBQUNHLFVBQVUsRUFBRTtJQUV4QyxJQUFJO1FBQ0EsTUFBTUgsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYSxFQUFFO1lBQzlDQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN4QjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0FBQ0o7QUFFQSxpRUFBZVgsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbW9fZWNvbW1lcmNlLy4vc3JjL3V0aWxzL2RiLmpzP2QzODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX0NPTk5FQ1RJT04sIHtcclxuICAgICAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25nbyBDb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZC5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29vc2VcIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJwcm9jZXNzIiwiZW52IiwiREJfQ09OTkVDVElPTiIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CPIAIC%20course%5CProjects%5Cdemo_e-commerce%5CFrontEnd&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();