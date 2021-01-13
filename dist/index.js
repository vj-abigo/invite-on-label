module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 372:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(305);
const github = __nccwpck_require__(346);

const main = async () => {
    try {
        const { ACCESS_TOKEN } = process.env
        if (!ACCESS_TOKEN)
            return core.setFailed('ENV required and not supplied: ACCESS_TOKEN')

        const octokit = github.getOctokit(ACCESS_TOKEN)

        const payload = github.context.payload
        const invitee_id = payload.issue.user.id
        const currentLabel = payload.label.name

        const org = core.getInput('organization', { required: true })
        const label = core.getInput('label', { required: true })

        if (currentLabel === label) {
            try {
                await octokit.orgs.checkMembership({
                    org: org,
                    username: payload.issue.user.login
                })

            } catch (error) {
                await octokit.orgs.createInvitation({
                    org,
                    invitee_id
                })
            }

            console.log("Successfully sent invitation")
        }

    } catch (error) {
        core.setFailed(error.message);
    }
}
main()


/***/ }),

/***/ 305:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 346:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(372);
/******/ })()
;